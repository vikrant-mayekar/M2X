# 🔥 Firebase Setup Complete!

## ✅ Your Firebase Configuration

Your M2X Classified Ads backend is now fully configured with Firebase!

### Firebase Project Details:

- **Project ID:** `m2x-project`
- **Service Account:** `firebase-adminsdk-fbsvc@m2x-project.iam.gserviceaccount.com`
- **Storage Bucket:** `m2x-project.firebasestorage.app`
- **Credentials File:** `backend/m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json` ✅

## 🚀 Quick Start (2 Minutes!)

### 1. Install Dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
cd ..
```

### 2. Your Backend is Ready!

The backend will automatically use your Firebase service account JSON file. No additional setup needed!

### 3. Enable Firestore in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **m2x-project**
3. Go to **Build** → **Firestore Database**
4. Click **Create Database**
5. Choose **Start in production mode**
6. Select your preferred location
7. Click **Enable**

### 4. Enable Firebase Storage

1. In Firebase Console, go to **Build** → **Storage**
2. Click **Get Started**
3. Use default security rules for now
4. Click **Done**

### 5. Start Your Application

```bash
# From project root
npm run dev
```

This will start:

- ✅ Backend API on http://localhost:5000
- ✅ Frontend App on http://localhost:3000

## 📁 Firestore Collections (Will be auto-created)

When you start using the app, these collections will be automatically created:

- `users` - User accounts
- `listings` - Product listings
- `categories` - Categories
- `chats` - Chat messages
- `payments` - Payment records

## 🔒 Security Rules (Important!)

After enabling Firestore, set up security rules:

1. Go to **Firestore Database** → **Rules** tab
2. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Listings collection
    match /listings/{listingId} {
      allow read: if true; // Public read
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null;
    }

    // Categories collection
    match /categories/{categoryId} {
      allow read: if true; // Public read
      allow write: if true; // For now, allow all writes (change in production!)
    }

    // Chats collection
    match /chats/{chatId} {
      allow read, write: if request.auth != null;
    }

    // Payments collection
    match /payments/{paymentId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

## 🧪 Test Your Setup

### Test Backend:

```bash
curl http://localhost:5000/health
```

Expected response:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Test Frontend:

Open http://localhost:3000 in your browser

## 🎯 How It Works

The backend uses **TWO OPTIONS** for Firebase credentials:

### Option 1: JSON File (Current - ✅ Ready!)

- Location: `backend/m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json`
- The app automatically detects and uses this file
- **Perfect for development!**

### Option 2: Environment Variables (For Production)

- Set in `backend/.env` (already created for you)
- Useful when deploying to Heroku, Vercel, etc.
- More secure for production environments

## 📝 Environment Files Status

✅ **backend/.env** - Created with your credentials
✅ **backend/.gitignore** - Updated to protect your credentials
✅ **Firebase Config** - Ready to use JSON file

## ⚠️ Security Notes

1. **Never commit your JSON file to Git!**
   - Already added to `.gitignore` ✅
2. **For Production:**
   - Use environment variables instead of JSON file
   - Enable Firebase App Check
   - Set up proper security rules
3. **Keep your credentials secure:**
   - Don't share the JSON file
   - Don't expose the private key

## 🎉 You're All Set!

Your Firebase is configured and ready to use!

**Next Steps:**

1. Enable Firestore Database in Firebase Console
2. Enable Firebase Storage
3. Set up Security Rules
4. Run `npm run dev`
5. Start building! 🚀

---

**Need help?** Check:

- `backend/FIREBASE_SETUP.md` - Detailed Firebase guide
- `INSTALLATION_STATUS.md` - Complete setup status
- `README.md` - Project documentation

**Firebase Console:** https://console.firebase.google.com/project/m2x-project
