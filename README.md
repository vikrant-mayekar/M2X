# M2X Classified Ads

A modern, full-stack classified ads platform for industrial equipment and machinery. Built with Next.js, Express, TypeScript, and MongoDB.

## 🚀 Project Overview

M2X Classified Ads is a comprehensive marketplace platform that allows users to buy and sell industrial equipment. The project is structured as a monorepo with clearly separated frontend and backend applications.

## 📁 Project Structure

```
m2x-classified-ads/
├── backend/                 # Express.js REST API
│   ├── src/
│   │   ├── config/         # Database & app configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── server.ts       # Entry point
│   ├── uploads/            # File uploads directory
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # Next.js application
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities & API client
│   ├── public/            # Static assets
│   ├── package.json
│   └── tsconfig.json
├── package.json           # Root package.json (monorepo scripts)
├── .gitignore
└── README.md
```

## ✨ Features

### User Features

- 🔐 User authentication & authorization (JWT)
- 📝 Create, edit, and delete listings
- 🔍 Advanced search with filters
- ⭐ Favorites system
- 💬 Real-time chat between buyers and sellers
- 📊 User dashboard
- 💳 Premium membership and featured ads
- 📱 Fully responsive design
- 🌙 Dark mode support

### Technical Features

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Firebase SDK
- **Backend:** Node.js, Express, TypeScript, Firebase Admin SDK
- **Authentication:** JWT with bcrypt password hashing
- **API:** RESTful API with proper error handling
- **Database:** Firebase Firestore (NoSQL Cloud Database)
- **Storage:** Firebase Cloud Storage for images and files
- **Security:** Helmet, CORS, Firebase Security Rules, input validation
- **UI Components:** Radix UI component library

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Library:** Radix UI
- **Forms:** React Hook Form + Zod
- **HTTP Client:** Axios
- **State:** React Context/Hooks

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** Firebase Firestore
- **Storage:** Firebase Cloud Storage
- **Authentication:** JWT + bcrypt (with optional Firebase Auth)
- **Security:** Helmet, CORS, Firebase Security Rules

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher
- **npm** or **pnpm** v9 or higher
- **Firebase Project** (free tier available)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd m2x-classified-ads
```

### 2. Install Dependencies

Install dependencies for both frontend and backend:

```bash
npm run install:all
# or
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

### 3. Set Up Environment Variables

#### Backend Environment Variables

Create `backend/.env` file:

```env
PORT=5000
NODE_ENV=development

# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=m2x-project
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@m2x-project.iam.gserviceaccount.com
FIREBASE_STORAGE_BUCKET=m2x-project.firebasestorage.app

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
```

> **Note:** Get your Firebase credentials from [Firebase Console](https://console.firebase.google.com/) → Project Settings → Service Accounts. See `backend/FIREBASE_SETUP.md` for detailed instructions.

#### Frontend Environment Variables

Create `frontend/.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=M2X Classified Ads
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set Up Firebase

Follow the detailed guide in `backend/FIREBASE_SETUP.md` to:

- Create a Firebase project
- Enable Firestore Database
- Enable Firebase Storage
- Get Admin SDK credentials
- Configure security rules

### 5. Run the Application

#### Development Mode (Both Frontend & Backend)

```bash
npm run dev
```

This will start:

- Backend API on `http://localhost:5000`
- Frontend app on `http://localhost:3000`

#### Run Frontend Only

```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```

#### Run Backend Only

```bash
npm run dev:backend
# or
cd backend && npm run dev
```

### 6. Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Health Check:** http://localhost:5000/health

### 7. Enable Vercel Analytics

1. **Install the package**

   ```bash
   cd frontend
   npm i @vercel/analytics
   # or
   pnpm add @vercel/analytics
   ```

2. **Add the React component**

   Import and use the `Analytics` component in your app layout:

   ```tsx
   import { Analytics } from "@vercel/analytics/next";

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

3. **Deploy and visit your site**

   Deploy your changes and open the deployment to start collecting page views.  
   If you do not see data after ~30 seconds, verify that analytics are not being blocked and navigate across pages to generate events.

## 📦 Building for Production

### Build Everything

```bash
npm run build
```

### Build Frontend Only

```bash
npm run build:frontend
```

### Build Backend Only

```bash
npm run build:backend
```

### Start Production Servers

```bash
npm start
```

## 📚 Available Scripts

### Root Level Scripts

| Script                   | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `npm run dev`            | Run both frontend and backend in development mode    |
| `npm run dev:frontend`   | Run only frontend in development mode                |
| `npm run dev:backend`    | Run only backend in development mode                 |
| `npm run build`          | Build both frontend and backend                      |
| `npm run build:frontend` | Build only frontend                                  |
| `npm run build:backend`  | Build only backend                                   |
| `npm start`              | Start both frontend and backend in production mode   |
| `npm run start:frontend` | Start only frontend in production mode               |
| `npm run start:backend`  | Start only backend in production mode                |
| `npm run install:all`    | Install dependencies for root, frontend, and backend |
| `npm run clean`          | Remove all node_modules and build folders            |
| `npm run lint`           | Lint both frontend and backend                       |

## 🔧 Development Workflow

1. **Start Development Servers**

   ```bash
   npm run dev
   ```

2. **Make Changes**

   - Frontend code: `frontend/` directory
   - Backend code: `backend/src/` directory

3. **Test Your Changes**

   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

## 📖 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Key Endpoints

#### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

#### Listings

- `GET /api/listings` - Get all listings
- `POST /api/listings` - Create new listing
- `GET /api/listings/:id` - Get listing by ID
- `PUT /api/listings/:id` - Update listing
- `DELETE /api/listings/:id` - Delete listing

#### Categories

- `GET /api/categories` - Get all categories

#### Chat

- `GET /api/chat` - Get all chats
- `POST /api/chat/:id/message` - Send message

For complete API documentation, see [backend/README.md](backend/README.md)

## 🎨 Frontend Pages

- `/` - Homepage with featured listings
- `/listings` - Browse all listings
- `/product/[id]` - Product detail page
- `/auth/login` - Login page
- `/auth/signup` - Registration page
- `/dashboard` - User dashboard (protected)
- `/post-ad` - Create listing (protected)
- `/chat` - Chat interface (protected)
- `/premium` - Premium packages
- `/payment` - Payment page (protected)

For complete frontend documentation, see [frontend/README.md](frontend/README.md)

## 🔒 Security

- JWT authentication for protected routes
- Password hashing with bcrypt
- CORS protection
- Helmet for security headers
- Input validation and sanitization
- XSS protection
- Rate limiting (can be added)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## 🐛 Troubleshooting

### MongoDB Connection Error

- Ensure MongoDB is running
- Check the `MONGODB_URI` in backend `.env` file
- Verify MongoDB is accessible

### Port Already in Use

- Change `PORT` in backend `.env` file
- Kill the process using the port:
  ```bash
  # Find process
  lsof -i :5000
  # Kill process
  kill -9 <PID>
  ```

### Frontend Not Connecting to Backend

- Verify backend is running on `http://localhost:5000`
- Check `NEXT_PUBLIC_API_URL` in frontend `.env.local`
- Check browser console for CORS errors

### Module Not Found Errors

```bash
# Reinstall all dependencies
npm run clean
npm run install:all
```

## 📝 License

ISC

## 👥 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Happy Coding! 🚀**
