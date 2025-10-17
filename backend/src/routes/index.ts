import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import listingRoutes from "./listing.routes";
import categoryRoutes from "./category.routes";
import chatRoutes from "./chat.routes";
import paymentRoutes from "./payment.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/listings", listingRoutes);
router.use("/categories", categoryRoutes);
router.use("/chat", chatRoutes);
router.use("/payments", paymentRoutes);

export default router;


