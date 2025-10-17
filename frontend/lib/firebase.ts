import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0NmuoqtwlPNfvCHhpoWY1QQc4zSiXtrE",
  authDomain: "m2x-project.firebaseapp.com",
  projectId: "m2x-project",
  storageBucket: "m2x-project.firebasestorage.app",
  messagingSenderId: "729755490753",
  appId: "1:729755490753:web:063bac0b3741cb4f59f740",
  measurementId: "G-THR4SFEF3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser)
let analytics: any = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;
