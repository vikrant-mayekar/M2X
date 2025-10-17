import { Router } from "express";
import {
  createPayment,
  getPayments,
  getPayment,
  updatePaymentStatus,
} from "../controllers/payment.controller";
import { protect, authorize } from "../middleware/auth";

const router = Router();

router.use(protect);

router.post("/", createPayment);
router.get("/", getPayments);
router.get("/:id", getPayment);
router.put("/:id/status", authorize("admin"), updatePaymentStatus);

export default router;


