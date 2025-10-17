import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {
  createUser,
  getUserByEmail,
  getUserById,
  comparePassword,
  updateUser,
} from "../services/user.service";
import { CustomError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";

const generateToken = (id: string, email: string, role: string): string => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET || "secret", {
    expiresIn: process.env.JWT_EXPIRE || "30d",
  } as jwt.SignOptions);
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw new CustomError("User already exists with this email", 400);
    }

    // Create user
    const user = await createUser({
      name,
      email,
      password,
      phone,
    });

    const token = generateToken(user.id, user.email, user.role);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        isPremium: user.isPremium,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      throw new CustomError("Please provide email and password", 400);
    }

    // Find user
    const user = await getUserByEmail(email);
    if (!user || !user.password) {
      throw new CustomError("Invalid credentials", 401);
    }

    // Check password
    const isPasswordMatch = await comparePassword(password, user.password);
    if (!isPasswordMatch) {
      throw new CustomError("Invalid credentials", 401);
    }

    const token = generateToken(user.id, user.email, user.role);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        isPremium: user.isPremium,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await getUserById(req.user?.id || "");

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    res.status(200).json({
      success: true,
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePassword = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await getUserById(req.user?.id || "");
    if (!user || !user.password) {
      throw new CustomError("User not found", 404);
    }

    // Check current password
    const isPasswordMatch = await comparePassword(
      currentPassword,
      user.password
    );
    if (!isPasswordMatch) {
      throw new CustomError("Current password is incorrect", 401);
    }

    // Update password - need to re-import bcrypt for hashing
    const bcrypt = require("bcryptjs");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await updateUser(user.id, { password: hashedPassword });

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
