# 📋 Categories Seed Instructions

## Overview
This document explains how to seed the 19 main categories and their subcategories into your Firebase Firestore database.

## Prerequisites
- Firebase project set up (see `backend/FIREBASE_SETUP.md`)
- Firebase Admin SDK credentials configured
- Backend server running

## Categories Structure

The seed will create **19 parent categories** with **100+ subcategories**:

1. 🏗️ Construction & Building Machinery (10 subcategories)
2. 🚜 Agriculture & Farming Equipment (8 subcategories)
3. 🏭 Industrial Manufacturing Machinery (9 subcategories)
4. 👔 Textile & Garment Machines (5 subcategories)
5. 🥫 Food & Beverage Processing (7 subcategories)
6. 🏠 Wood & Furniture Machines (5 subcategories)
7. 🔌 Electrical & Electronics Production (5 subcategories)
8. ⚗️ Chemical, Pharma & Laboratory (6 subcategories)
9. ♻️ Recycling & Waste Management (6 subcategories)
10. 🧰 Hand Tools & Power Tools (5 subcategories)
11. 🛠️ Automobile Workshop Machines (6 subcategories)
12. 🧊 HVAC & Cooling Systems (4 subcategories)
13. 🔋 Energy & Power Equipment (5 subcategories)
14. 🧱 Construction Material Plants (4 subcategories)
15. 📦 Packaging & Printing Machines (5 subcategories)
16. 🧩 Plastic & Rubber Processing (4 subcategories)
17. ⚓ Marine & Heavy Transport (4 subcategories)
18. 🏢 Office / Commercial Machines (4 subcategories)
19. 🧾 Spare Parts & Components (5 subcategories)

## Method 1: Using the Seed Script

### Step 1: Set up Firebase Credentials

First, ensure you have Firebase credentials configured in your `.env` file:

```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@your-project.iam.gserviceaccount.com
FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
```

Or place your service account JSON file at:
```
backend/m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json
```

### Step 2: Run the Seed Script

```bash
cd backend
npm run seed
```

You should see output like:
```
✅ Successfully seeded all categories!
📊 Total categories: 19
📊 Total subcategories: 112
```

## Method 2: Using Firestore Console

If you prefer to seed manually through the Firebase Console:

1. Go to Firebase Console → Firestore Database
2. Navigate to the `categories` collection
3. Click "Start collection" if it doesn't exist
4. Add each category as a document

### Example Document Structure:

**Parent Category:**
```json
{
  "name": "Construction & Building Machinery",
  "slug": "construction-building-machinery",
  "description": "Equipment for construction and building projects",
  "icon": "🏗️",
  "order": 1,
  "isActive": true,
  "createdAt": "2025-01-24T00:00:00Z",
  "updatedAt": "2025-01-24T00:00:00Z"
}
```

**Subcategory:**
```json
{
  "name": "Excavators",
  "slug": "construction-building-machinery-excavators",
  "description": "Excavators in Construction & Building Machinery",
  "parentId": "parent-document-id",
  "parentSlug": "construction-building-machinery",
  "order": 1,
  "isActive": true,
  "createdAt": "2025-01-24T00:00:00Z",
  "updatedAt": "2025-01-24T00:00:00Z"
}
```

## Method 3: Using the API Endpoint

Create a POST endpoint in your backend to seed categories programmatically:

**Request:**
```
POST /api/categories/seed
```

**Response:**
```json
{
  "success": true,
  "message": "Categories seeded successfully",
  "totalCategories": 19,
  "totalSubcategories": 112
}
```

## Verification

After seeding, verify the categories:

1. Go to Firebase Console → Firestore Database
2. Navigate to the `categories` collection
3. You should see ~131 documents (19 parents + 112 subcategories)

Or use the API:
```bash
curl http://localhost:5000/api/categories
```

## Troubleshooting

### Error: Could not load the default credentials
- Ensure your Firebase credentials are properly configured
- Check that your `.env` file has all required Firebase variables
- Verify the service account JSON file exists and is valid

### Error: Firestore operation failed
- Check your Firebase Firestore is enabled
- Verify your Firebase project is active
- Check your billing is enabled (required for Firestore)

### Categories not appearing
- Check Firestore security rules allow read/write
- Verify the seed script completed without errors
- Check the `categories` collection in Firestore Console

## Notes

- The seed script will **not overwrite** existing categories
- If you run the script multiple times, it will create duplicate categories
- To re-seed, you may need to delete existing categories first
- Parent categories are created first, then subcategories reference them via `parentId`

## Need Help?

For more information, see:
- `backend/FIREBASE_SETUP.md` - Firebase setup guide
- `backend/README.md` - Backend documentation
- Firebase Documentation: https://firebase.google.com/docs


