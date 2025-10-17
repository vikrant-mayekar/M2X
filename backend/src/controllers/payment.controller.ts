import { Response, NextFunction } from "express";
import Payment from "../models/Payment";
import User from "../models/User";
import Listing from "../models/Listing";
import { CustomError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";

export const createPayment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { amount, paymentMethod, type, listingId, metadata } = req.body;

    const paymentData = {
      user: req.user?.id,
      amount,
      paymentMethod,
      type,
      listing: listingId,
      metadata,
    };

    const payment = await Payment.create(paymentData);

    // Simulate payment processing (in production, integrate with payment gateway)
    // For now, automatically mark as completed
    payment.status = "completed";
    payment.transactionId = `txn_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    await payment.save();

    // Update user or listing based on payment type
    if (type === "premium") {
      const user = await User.findById(req.user?.id);
      if (user) {
        user.isPremium = true;
        user.premiumExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
        await user.save();
      }
    } else if (type === "featured" && listingId) {
      const listing = await Listing.findById(listingId);
      if (listing) {
        listing.isFeatured = true;
        await listing.save();
      }
    }

    res.status(201).json({
      success: true,
      payment,
    });
  } catch (error) {
    next(error);
  }
};

export const getPayments = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = req.user?.role === "admin" ? {} : { user: req.user?.id };

    const payments = await Payment.find(query)
      .populate("user", "name email")
      .populate("listing", "title")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: payments.length,
      payments,
    });
  } catch (error) {
    next(error);
  }
};

export const getPayment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("user", "name email")
      .populate("listing", "title");

    if (!payment) {
      throw new CustomError("Payment not found", 404);
    }

    // Check authorization
    if (
      payment.user._id.toString() !== req.user?.id &&
      req.user?.role !== "admin"
    ) {
      throw new CustomError("Not authorized to access this payment", 403);
    }

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePaymentStatus = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { status } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!payment) {
      throw new CustomError("Payment not found", 404);
    }

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    next(error);
  }
};


