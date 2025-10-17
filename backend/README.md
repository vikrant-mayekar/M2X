# M2X Classified Ads - Backend API

Backend REST API for M2X Classified Ads platform built with Node.js, Express, TypeScript, and Firebase Firestore.

## Features

- 🔐 JWT Authentication & Authorization
- 👤 User Management
- 📋 Listings CRUD Operations
- 💬 Real-time Chat System
- 💳 Payment Processing
- 📁 File Upload Support with Firebase Storage
- 🔍 Advanced Search & Filtering
- 🏷️ Category Management
- ⭐ Favorites System
- 🔒 Secure API with Helmet & CORS

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** Firebase Firestore (Cloud NoSQL Database)
- **Storage:** Firebase Cloud Storage
- **Authentication:** JWT (JSON Web Tokens) + Firebase Auth
- **Security:** Helmet, CORS, Firebase Security Rules

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or pnpm
- Firebase Project (already set up: m2x-project)

## Installation

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. **Firebase Setup** (Already configured!)

Your Firebase credentials are already in place:

- Service account file: `m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json`
- Project ID: `m2x-project`
- Storage Bucket: `m2x-project.firebasestorage.app`

The backend will automatically use the service account JSON file.

4. Create `.env` file (or use the one already created):

```env
PORT=5000
NODE_ENV=development
FIREBASE_PROJECT_ID=m2x-project
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@m2x-project.iam.gserviceaccount.com
FIREBASE_STORAGE_BUCKET=m2x-project.firebasestorage.app
JWT_SECRET=m2x-super-secret-jwt-key-2024
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
```

## Running the Application

### Development Mode

```bash
npm run dev
# or
pnpm dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
# or
pnpm start
```

The server will start on `http://localhost:5000`

## Firebase Configuration

### Two Options for Firebase Credentials:

**Option 1: Use Service Account JSON File (Current Setup)**

- The JSON file `m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json` is already in the backend folder
- The app automatically detects and uses this file
- ✅ **This is already set up and ready to use!**

**Option 2: Use Environment Variables (For Production/Deployment)**

- Copy the private key to `.env` file
- Set `FIREBASE_PRIVATE_KEY` environment variable
- Useful when deploying to services that don't support files

### Firestore Collections:

- `users` - User accounts
- `listings` - Product listings
- `categories` - Categories
- `chats` - Chat messages
- `payments` - Payment records

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)
- `PUT /api/auth/password` - Update password (Protected)

### Users

- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin only)

### Listings

- `GET /api/listings` - Get all listings
- `GET /api/listings/:id` - Get listing by ID
- `POST /api/listings` - Create new listing (Protected)
- `PUT /api/listings/:id` - Update listing (Protected)
- `DELETE /api/listings/:id` - Delete listing (Protected)
- `GET /api/listings/user/:userId` - Get user's listings
- `POST /api/listings/:id/favorite` - Toggle favorite (Protected)
- `GET /api/listings/favorites` - Get user's favorites (Protected)

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create category (Admin only)
- `PUT /api/categories/:id` - Update category (Admin only)
- `DELETE /api/categories/:id` - Delete category (Admin only)

### Chat

- `GET /api/chat` - Get all chats (Protected)
- `GET /api/chat/:id` - Get chat by ID (Protected)
- `POST /api/chat/:id/message` - Send message (Protected)
- `PUT /api/chat/:id/read` - Mark messages as read (Protected)

### Payments

- `POST /api/payments` - Create payment (Protected)
- `GET /api/payments` - Get all payments (Protected)
- `GET /api/payments/:id` - Get payment by ID (Protected)
- `PUT /api/payments/:id/status` - Update payment status (Admin only)

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   │   └── firebase.ts  # Firebase initialization
│   ├── controllers/     # Route controllers
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── listing.controller.ts
│   │   ├── category.controller.ts
│   │   ├── chat.controller.ts
│   │   └── payment.controller.ts
│   ├── middleware/      # Custom middleware
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   ├── services/        # Firestore services
│   │   ├── user.service.ts
│   │   └── listing.service.ts
│   ├── routes/          # API routes
│   │   ├── index.ts
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   ├── listing.routes.ts
│   │   ├── category.routes.ts
│   │   ├── chat.routes.ts
│   │   └── payment.routes.ts
│   └── server.ts        # Entry point
├── m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json  # Firebase credentials
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Environment Variables

| Variable                | Description              | Default                                |
| ----------------------- | ------------------------ | -------------------------------------- |
| PORT                    | Server port              | 5000                                   |
| NODE_ENV                | Environment              | development                            |
| FIREBASE_PROJECT_ID     | Firebase project ID      | m2x-project                            |
| FIREBASE_CLIENT_EMAIL   | Firebase service account | firebase-adminsdk-fbsvc@m2x-project... |
| FIREBASE_STORAGE_BUCKET | Firebase storage bucket  | m2x-project.firebasestorage.app        |
| FIREBASE_PRIVATE_KEY    | Firebase private key     | (optional if using JSON file)          |
| JWT_SECRET              | JWT secret key           | -                                      |
| JWT_EXPIRE              | JWT expiration time      | 30d                                    |
| FRONTEND_URL            | Frontend URL for CORS    | http://localhost:3000                  |

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS protection
- Helmet for security headers
- Firebase Security Rules
- Input validation
- Error handling middleware

## Testing

Test the API health:

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

## Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use environment variables instead of JSON file for Firebase credentials
3. Set up proper Firebase Security Rules
4. Enable HTTPS
5. Set up rate limiting
6. Configure proper CORS origins

## License

ISC
