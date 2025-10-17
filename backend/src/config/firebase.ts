import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { getStorage } from "firebase-admin/storage";
import * as path from "path";
import * as fs from "fs";

// Firebase Admin configuration
let app;

// Option 1: Use service account JSON file (for development)
const serviceAccountPath = path.join(
  __dirname,
  "../../m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json"
);

if (fs.existsSync(serviceAccountPath)) {
  // Use JSON file if it exists
  const serviceAccount = require(serviceAccountPath);
  app = initializeApp({
    credential: cert(serviceAccount),
    storageBucket: "m2x-project.firebasestorage.app",
  });
  console.log("✅ Firebase initialized with service account JSON file");
} else if (process.env.FIREBASE_PRIVATE_KEY) {
  // Option 2: Use environment variables (for production)
  const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID || "m2x-project",
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
  };

  app = initializeApp({
    credential: cert(serviceAccount),
    storageBucket:
      process.env.FIREBASE_STORAGE_BUCKET || "m2x-project.firebasestorage.app",
  });
  console.log("✅ Firebase initialized with environment variables");
} else {
  throw new Error(
    "Firebase credentials not found! Please provide either:\n" +
      "1. Service account JSON file at backend/m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json\n" +
      "2. Environment variables: FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL"
  );
}

// Get Firestore instance
export const db = getFirestore(app);

// Get Auth instance
export const auth = getAuth(app);

// Get Storage instance
export const storage = getStorage(app);

// Initialize Firestore settings
db.settings({
  ignoreUndefinedProperties: true,
});

export default app;
