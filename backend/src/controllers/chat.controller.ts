import { Response, NextFunction } from "express";
import Chat from "../models/Chat";
import { CustomError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";

export const getChats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const chats = await Chat.find({
      participants: req.user?.id,
    })
      .populate("listing", "title images price")
      .populate("participants", "name avatar")
      .sort({ lastMessageAt: -1 });

    res.status(200).json({
      success: true,
      count: chats.length,
      chats,
    });
  } catch (error) {
    next(error);
  }
};

export const getChat = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const chat = await Chat.findById(req.params.id)
      .populate("listing", "title images price")
      .populate("participants", "name avatar")
      .populate("messages.sender", "name avatar");

    if (!chat) {
      throw new CustomError("Chat not found", 404);
    }

    // Check if user is a participant
    if (!chat.participants.some((p) => p._id.toString() === req.user?.id)) {
      throw new CustomError("Not authorized to access this chat", 403);
    }

    res.status(200).json({
      success: true,
      chat,
    });
  } catch (error) {
    next(error);
  }
};

export const sendMessage = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { content } = req.body;
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      throw new CustomError("Chat not found", 404);
    }

    // Check if user is a participant
    if (!chat.participants.some((p) => p.toString() === req.user?.id)) {
      throw new CustomError(
        "Not authorized to send messages in this chat",
        403
      );
    }

    chat.messages.push({
      sender: req.user?.id as any,
      content,
      createdAt: new Date(),
      isRead: false,
    });

    chat.lastMessage = content;
    chat.lastMessageAt = new Date();

    await chat.save();

    const updatedChat = await Chat.findById(chat._id).populate(
      "messages.sender",
      "name avatar"
    );

    res.status(200).json({
      success: true,
      chat: updatedChat,
    });
  } catch (error) {
    next(error);
  }
};

export const markAsRead = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      throw new CustomError("Chat not found", 404);
    }

    // Mark all messages from other users as read
    chat.messages.forEach((message) => {
      if (message.sender.toString() !== req.user?.id) {
        message.isRead = true;
      }
    });

    await chat.save();

    res.status(200).json({
      success: true,
      message: "Messages marked as read",
    });
  } catch (error) {
    next(error);
  }
};


