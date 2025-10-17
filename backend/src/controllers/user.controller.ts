import { Response, NextFunction } from "express";
import User from "../models/User";
import { CustomError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";

export const getUsers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, phone, avatar } = req.body;

    // Check if user is updating their own profile or is admin
    if (req.params.id !== req.user?.id && req.user?.role !== "admin") {
      throw new CustomError("Not authorized to update this user", 403);
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, phone, avatar },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};


