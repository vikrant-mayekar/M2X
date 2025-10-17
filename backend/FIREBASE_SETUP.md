# Firebase Setup Guide

## 🔥 Firebase Configuration

This project uses Firebase for:

- **Firestore**: Database for all data storage
- **Firebase Auth**: User authentication (optional)
- **Firebase Storage**: Image and file uploads
- **Firebase Admin SDK**: Backend operations

## 📋 Setup Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: `m2x-project` (or your preferred name)
4. Follow the setup wizard

### 2. Enable Firestore Database

1. In Firebase Console, go to **Build** → **Firestore Database**
2. Click **Create Database**
3. Choose **Start in production mode** (we'll add security rules later)
4. Select your preferred location
5. Click **Enable**

### 3. Enable Firebase Storage

1. Go to **Build** → **Storage**
2. Click **Get Started**
3. Keep default security rules for now
4. Click **Done**

### 4. Get Firebase Admin SDK Credentials

1. Go to **Project Settings** (gear icon) → **Service Accounts**
2. Click **Generate New Private Key**
3. Download the JSON file (keep it secure!)
4. Extract these values from the JSON:
   - `project_id`
   - `private_key`
   - `client_email`

### 5. Configure Backend Environment Variables

Create or update `backend/.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=m2x-project
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@m2x-project.iam.gserviceaccount.com
FIREBASE_STORAGE_BUCKET=m2x-project.firebasestorage.app

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d

# CORS
FRONTEND_URL=http://localhost:3000
```

**Important:**

- Keep your private key secure
- Never commit `.env` files to version control
- Replace `YOUR_PRIVATE_KEY_HERE` with the actual private key from the JSON file
- Keep the `\n` in the private key string

### 6. Frontend Configuration (Already Done)

The frontend is already configured with your Firebase credentials in `frontend/lib/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyD0NmuoqtwlPNfvCHhpoWY1QQc4zSiXtrE",
  authDomain: "m2x-project.firebaseapp.com",
  projectId: "m2x-project",
  storageBucket: "m2x-project.firebasestorage.app",
  messagingSenderId: "729755490753",
  appId: "1:729755490753:web:063bac0b3741cb4f59f740",
  measurementId: "G-THR4SFEF3F",
};
```

### 7. Set Up Firestore Security Rules

In Firebase Console → Firestore Database → Rules, add:

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
      allow update, delete: if request.auth != null &&
        (resource.data.sellerId == request.auth.uid ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }

    // Categories collection
    match /categories/{categoryId} {
      allow read: if true; // Public read
      allow write: if request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Chats collection
    match /chats/{chatId} {
      allow read, write: if request.auth != null &&
        request.auth.uid in resource.data.participants;
    }

    // Payments collection
    match /payments/{paymentId} {
      allow read: if request.auth != null &&
        (resource.data.userId == request.auth.uid ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
      allow create: if request.auth != null;
      allow update: if request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

### 8. Set Up Storage Security Rules

In Firebase Console → Storage → Rules, add:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /listings/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /users/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🗂️ Firestore Collections Structure

### Users Collection (`users`)

```json
{
  "name": "string",
  "email": "string",
  "password": "string (hashed)",
  "phone": "string",
  "avatar": "string (URL)",
  "role": "user | admin",
  "isPremium": "boolean",
  "premiumExpiresAt": "timestamp",
  "favorites": ["listing_id_1", "listing_id_2"],
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Listings Collection (`listings`)

```json
{
  "title": "string",
  "description": "string",
  "price": "number",
  "categoryId": "string",
  "condition": "new | used | refurbished",
  "images": ["url1", "url2"],
  "location": {
    "city": "string",
    "state": "string",
    "country": "string"
  },
  "sellerId": "string",
  "status": "active | sold | inactive",
  "isFeatured": "boolean",
  "isPremium": "boolean",
  "views": "number",
  "specifications": {},
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Categories Collection (`categories`)

```json
{
  "name": "string",
  "slug": "string",
  "description": "string",
  "icon": "string",
  "parentId": "string (optional)",
  "order": "number",
  "isActive": "boolean",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## 🔑 Indexes

Create these indexes in Firestore Console for better query performance:

1. **Listings**:

   - Collection: `listings`
   - Fields: `status` (Ascending), `createdAt` (Descending)

2. **Listings by Category**:

   - Collection: `listings`
   - Fields: `categoryId` (Ascending), `status` (Ascending), `createdAt` (Descending)

3. **User Listings**:
   - Collection: `listings`
   - Fields: `sellerId` (Ascending), `createdAt` (Descending)

## 🚀 Testing the Setup

1. **Install Dependencies**:

```bash
cd backend
npm install
cd ../frontend
npm install
```

2. **Start the Backend**:

```bash
cd backend
npm run dev
```

3. **Start the Frontend**:

```bash
cd frontend
npm run dev
```

4. **Test the Connection**:
   - Backend: http://localhost:5000/health
   - Frontend: http://localhost:3000

## 📝 Migration from MongoDB

If you're migrating from MongoDB:

1. Export your MongoDB data
2. Transform it to match Firestore structure
3. Use Firebase Admin SDK to import data
4. Update all references (ObjectId → document IDs)

## 🔒 Security Best Practices

1. **Never expose private keys** in frontend code
2. **Use environment variables** for sensitive data
3. **Implement proper security rules** in Firestore and Storage
4. **Enable Firebase App Check** for production
5. **Monitor usage** in Firebase Console
6. **Set up billing alerts**

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Security Rules](https://firebase.google.com/docs/rules)

---

**Your Firebase is now configured!** 🎉
