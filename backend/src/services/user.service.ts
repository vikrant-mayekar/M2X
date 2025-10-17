import { db } from "../config/firebase";
import bcrypt from "bcryptjs";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  avatar?: string;
  role: "user" | "admin";
  isPremium: boolean;
  premiumExpiresAt?: Date;
  favorites: string[];
  createdAt: Date;
  updatedAt: Date;
}

const usersCollection = db.collection("users");

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const { password, ...rest } = userData;

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = password
    ? await bcrypt.hash(password, salt)
    : undefined;

  const newUser = {
    ...rest,
    password: hashedPassword,
    role: userData.role || "user",
    isPremium: false,
    favorites: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const docRef = await usersCollection.add(newUser);
  const userDoc = await docRef.get();

  return { id: docRef.id, ...userDoc.data() } as IUser;
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const snapshot = await usersCollection
    .where("email", "==", email)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as IUser;
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  const doc = await usersCollection.doc(id).get();

  if (!doc.exists) {
    return null;
  }

  return { id: doc.id, ...doc.data() } as IUser;
};

export const updateUser = async (
  id: string,
  updates: Partial<IUser>
): Promise<IUser | null> => {
  const userRef = usersCollection.doc(id);
  await userRef.update({
    ...updates,
    updatedAt: new Date(),
  });

  const updatedDoc = await userRef.get();
  return { id: updatedDoc.id, ...updatedDoc.data() } as IUser;
};

export const deleteUser = async (id: string): Promise<void> => {
  await usersCollection.doc(id).delete();
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
