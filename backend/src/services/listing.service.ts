import { db } from "../config/firebase";
import { FieldValue } from "firebase-admin/firestore";

export interface IListing {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  condition: "new" | "used" | "refurbished";
  images: string[];
  location: {
    city: string;
    state: string;
    country: string;
  };
  sellerId: string;
  status: "active" | "sold" | "inactive";
  isFeatured: boolean;
  isPremium: boolean;
  views: number;
  specifications?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const listingsCollection = db.collection("listings");

export const createListing = async (
  listingData: Partial<IListing>
): Promise<IListing> => {
  const newListing = {
    ...listingData,
    status: "active",
    isFeatured: false,
    isPremium: false,
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const docRef = await listingsCollection.add(newListing);
  const listingDoc = await docRef.get();

  return { id: docRef.id, ...listingDoc.data() } as IListing;
};

export const getListings = async (filters?: {
  categoryId?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
}): Promise<IListing[]> => {
  let query = listingsCollection.where(
    "status",
    "==",
    filters?.status || "active"
  );

  if (filters?.categoryId) {
    query = query.where("categoryId", "==", filters.categoryId);
  }

  if (filters?.condition) {
    query = query.where("condition", "==", filters.condition);
  }

  const snapshot = await query.get();

  let listings = snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as IListing)
  );

  // Filter by price range (Firestore doesn't support multiple range queries)
  if (filters?.minPrice !== undefined) {
    listings = listings.filter((listing) => listing.price >= filters.minPrice!);
  }

  if (filters?.maxPrice !== undefined) {
    listings = listings.filter((listing) => listing.price <= filters.maxPrice!);
  }

  return listings;
};

export const getListingById = async (id: string): Promise<IListing | null> => {
  const doc = await listingsCollection.doc(id).get();

  if (!doc.exists) {
    return null;
  }

  return { id: doc.id, ...doc.data() } as IListing;
};

export const updateListing = async (
  id: string,
  updates: Partial<IListing>
): Promise<IListing | null> => {
  const listingRef = listingsCollection.doc(id);
  await listingRef.update({
    ...updates,
    updatedAt: new Date(),
  });

  const updatedDoc = await listingRef.get();
  return { id: updatedDoc.id, ...updatedDoc.data() } as IListing;
};

export const deleteListing = async (id: string): Promise<void> => {
  await listingsCollection.doc(id).delete();
};

export const incrementViews = async (id: string): Promise<void> => {
  const listingRef = listingsCollection.doc(id);
  await listingRef.update({
    views: FieldValue.increment(1),
  });
};

export const getUserListings = async (
  sellerId: string
): Promise<IListing[]> => {
  const snapshot = await listingsCollection
    .where("sellerId", "==", sellerId)
    .get();

  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as IListing)
  );
};
