import { Router } from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";
import { protect, authorize } from "../middleware/auth";

const router = Router();

router.get("/", getCategories);
router.get("/:id", getCategory);

router.use(protect, authorize("admin"));

router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;


