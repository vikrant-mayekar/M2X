# 🚀 Quick Start: Setting Up Categories

## Prerequisites

✅ **Firebase Project** created at https://console.firebase.google.com  
✅ **Firestore Database** enabled  
✅ **Firebase Admin SDK** credentials configured  
✅ **Backend server** can run in development mode

## Step-by-Step Setup

### 1. Configure Firebase Credentials

You have two options:

#### Option A: Using Environment Variables (Recommended)

Create or update `backend/.env`:

```env
FIREBASE_PROJECT_ID=m2x-project
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@m2x-project.iam.gserviceaccount.com
FIREBASE_STORAGE_BUCKET=m2x-project.firebasestorage.app
```

#### Option B: Using Service Account File

1. Download your service account JSON from Firebase Console
2. Save it as `backend/m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json`

### 2. Seed the Categories

Once your Firebase credentials are configured, run:

```bash
cd backend
npm run seed
```

You should see:

```
✅ Firebase initialized with service account JSON file (or environment variables)
🌱 Starting to seed categories...
✅ Successfully seeded all categories!
📊 Total categories: 19
📊 Total subcategories: 112
```

### 3. Verify Categories

Check your Firebase Console:
1. Go to https://console.firebase.google.com
2. Select your project
3. Go to Firestore Database
4. Click on the `categories` collection
5. You should see ~131 documents

Or test via API (if server is running):
```bash
curl http://localhost:5000/api/categories
```

## Troubleshooting

### ❌ Error: Could not load the default credentials

**Solution**: Ensure Firebase credentials are properly configured in `.env` or service account file exists

### ❌ Error: Firestore operation failed

**Solution**: 
- Verify Firestore is enabled in Firebase Console
- Check your Firebase project is active
- Ensure billing is enabled (required for Firestore)

### ❌ No categories appearing

**Solution**:
- Check Firestore security rules
- Verify seed script completed without errors
- Look for errors in the console output

## What's Included

Your database will have:
- **19 Parent Categories** covering all major machinery types
- **112 Subcategories** for specific equipment
- Proper hierarchy with parent-child relationships
- Active status flags for easy filtering
- Display order for organized presentation

## Need More Details?

See `CATEGORIES_SEED.md` for detailed information about each category and advanced options.
















