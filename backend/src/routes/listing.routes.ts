import { Router } from "express";
import {
  getListings,
  getListing,
  createListing,
  updateListing,
  deleteListing,
  getUserListings,
  toggleFavorite,
  getFavorites,
} from "../controllers/listing.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/", getListings);
router.get("/user/:userId", protect, getUserListings);
router.get("/favorites", protect, getFavorites);
router.get("/:id", getListing);

router.use(protect);

router.post("/", createListing);
router.put("/:id", updateListing);
router.delete("/:id", deleteListing);
router.post("/:id/favorite", toggleFavorite);

export default router;


