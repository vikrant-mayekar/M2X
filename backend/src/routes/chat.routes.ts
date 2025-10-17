import { Router } from "express";
import {
  getChats,
  getChat,
  sendMessage,
  markAsRead,
} from "../controllers/chat.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.use(protect);

router.get("/", getChats);
router.get("/:id", getChat);
router.post("/:id/message", sendMessage);
router.put("/:id/read", markAsRead);

export default router;


