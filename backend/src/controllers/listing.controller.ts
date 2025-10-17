import { Request, Response, NextFunction } from "express";
import Listing from "../models/Listing";
import User from "../models/User";
import { CustomError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";

export const getListings = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      category,
      condition,
      minPrice,
      maxPrice,
      search,
      sort,
      page = 1,
      limit = 10,
    } = req.query;

    const query: any = { status: "active" };

    if (category) query.category = category;
    if (condition) query.condition = condition;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) {
      query.$text = { $search: search as string };
    }

    let sortOption: any = { createdAt: -1 };
    if (sort === "price-asc") sortOption = { price: 1 };
    if (sort === "price-desc") sortOption = { price: -1 };
    if (sort === "views") sortOption = { views: -1 };

    const pageNum = Number(page);
    const limitNum = Number(limit);
    const skip = (pageNum - 1) * limitNum;

    const listings = await Listing.find(query)
      .populate("seller", "name avatar")
      .populate("category", "name")
      .sort(sortOption)
      .skip(skip)
      .limit(limitNum);

    const total = await Listing.countDocuments(query);

    res.status(200).json({
      success: true,
      count: listings.length,
      total,
      pages: Math.ceil(total / limitNum),
      currentPage: pageNum,
      listings,
    });
  } catch (error) {
    next(error);
  }
};

export const getListing = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate("seller", "name email phone avatar")
      .populate("category", "name");

    if (!listing) {
      throw new CustomError("Listing not found", 404);
    }

    // Increment views
    listing.views += 1;
    await listing.save();

    res.status(200).json({
      success: true,
      listing,
    });
  } catch (error) {
    next(error);
  }
};

export const createListing = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const listingData = {
      ...req.body,
      seller: req.user?.id,
    };

    const listing = await Listing.create(listingData);

    res.status(201).json({
      success: true,
      listing,
    });
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let listing = await Listing.findById(req.params.id);

    if (!listing) {
      throw new CustomError("Listing not found", 404);
    }

    // Check ownership
    if (
      listing.seller.toString() !== req.user?.id &&
      req.user?.role !== "admin"
    ) {
      throw new CustomError("Not authorized to update this listing", 403);
    }

    listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      listing,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      throw new CustomError("Listing not found", 404);
    }

    // Check ownership
    if (
      listing.seller.toString() !== req.user?.id &&
      req.user?.role !== "admin"
    ) {
      throw new CustomError("Not authorized to delete this listing", 403);
    }

    await listing.deleteOne();

    res.status(200).json({
      success: true,
      message: "Listing deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const listings = await Listing.find({ seller: req.params.userId })
      .populate("category", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: listings.length,
      listings,
    });
  } catch (error) {
    next(error);
  }
};

export const toggleFavorite = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById(req.user?.id);
    const listing = await Listing.findById(req.params.id);

    if (!user || !listing) {
      throw new CustomError("User or listing not found", 404);
    }

    const favoriteIndex = user.favorites.indexOf(listing._id);

    if (favoriteIndex > -1) {
      user.favorites.splice(favoriteIndex, 1);
    } else {
      user.favorites.push(listing._id);
    }

    await user.save();

    res.status(200).json({
      success: true,
      isFavorite: favoriteIndex === -1,
      favorites: user.favorites,
    });
  } catch (error) {
    next(error);
  }
};

export const getFavorites = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById(req.user?.id).populate({
      path: "favorites",
      populate: { path: "category", select: "name" },
    });

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    res.status(200).json({
      success: true,
      count: user.favorites.length,
      favorites: user.favorites,
    });
  } catch (error) {
    next(error);
  }
};


