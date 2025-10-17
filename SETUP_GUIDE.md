# M2X Classified Ads - Quick Setup Guide

This guide will help you set up and run the M2X Classified Ads project on your local machine.

## Prerequisites Check

Before starting, ensure you have:

- ✅ Node.js v18+ installed ([Download](https://nodejs.org/))
- ✅ npm or pnpm v9+ installed (comes with Node.js)
- ✅ MongoDB v6+ installed ([Download](https://www.mongodb.com/try/download/community))
- ✅ Git installed ([Download](https://git-scm.com/))

Check your versions:

```bash
node --version    # Should be v18 or higher
npm --version     # Should be v9 or higher
mongod --version  # Should be v6 or higher
```

## Quick Start (5 Minutes)

### Option 1: Automatic Setup (Recommended)

#### For Linux/Mac:

```bash
chmod +x setup.sh
./setup.sh
```

#### For Windows (PowerShell):

```powershell
.\setup.ps1
```

### Option 2: Manual Setup

#### Step 1: Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..
```

#### Step 2: Set Up Environment Variables

**Backend** (`backend/.env`):

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/m2x-classified-ads
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`frontend/.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=M2X Classified Ads
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Step 3: Start MongoDB

**Linux/Mac:**

```bash
mongod
```

**Windows:**

```bash
# If MongoDB is installed as a service
net start MongoDB

# Or run directly
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
```

**Using MongoDB Atlas (Cloud):**

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Update `MONGODB_URI` in `backend/.env` with your connection string

#### Step 4: Start the Application

**Start both frontend and backend:**

```bash
npm run dev
```

**Or start them separately:**

Terminal 1 (Backend):

```bash
npm run dev:backend
```

Terminal 2 (Frontend):

```bash
npm run dev:frontend
```

#### Step 5: Access the Application

- **Frontend:** Open [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **Health Check:** [http://localhost:5000/health](http://localhost:5000/health)

## Project Structure Overview

```
m2x-classified-ads/
├── backend/           # Express.js REST API
│   ├── src/
│   │   ├── controllers/   # Business logic
│   │   ├── models/        # Database models
│   │   ├── routes/        # API endpoints
│   │   └── server.ts      # Entry point
│   ├── .env              # Backend configuration
│   └── package.json
│
├── frontend/         # Next.js application
│   ├── app/          # Pages (App Router)
│   ├── components/   # React components
│   ├── lib/          # API client & utilities
│   ├── .env.local    # Frontend configuration
│   └── package.json
│
└── package.json      # Root scripts
```

## Common Commands

### Development

```bash
npm run dev              # Start both frontend & backend
npm run dev:frontend     # Start only frontend
npm run dev:backend      # Start only backend
```

### Building

```bash
npm run build            # Build both
npm run build:frontend   # Build frontend only
npm run build:backend    # Build backend only
```

### Production

```bash
npm start                # Start both in production
npm run start:frontend   # Start frontend in production
npm run start:backend    # Start backend in production
```

### Maintenance

```bash
npm run install:all      # Install all dependencies
npm run clean            # Clean node_modules and build folders
npm run lint             # Lint both projects
```

## Testing the Setup

### 1. Test Backend API

Open your browser or use curl:

```bash
curl http://localhost:5000/health
```

You should see:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### 2. Test Frontend

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the M2X Classified Ads homepage.

### 3. Test Database Connection

Check the backend terminal. You should see:

```
✅ MongoDB Connected Successfully
🚀 Server is running on port 5000
```

## Troubleshooting

### Problem: MongoDB Connection Failed

**Solution:**

- Make sure MongoDB is running: `mongod` or `net start MongoDB`
- Check if port 27017 is available
- Verify `MONGODB_URI` in `backend/.env`

### Problem: Port Already in Use

**Solution:**

- Change the port in `backend/.env` (e.g., `PORT=5001`)
- Kill the process using the port:

  ```bash
  # Find the process
  lsof -i :5000        # Linux/Mac
  netstat -ano | findstr :5000  # Windows

  # Kill it
  kill -9 <PID>        # Linux/Mac
  pkill -f node        # Kill all node processes
  ```

### Problem: Module Not Found

**Solution:**

```bash
npm run clean
npm run install:all
```

### Problem: Backend Not Responding

**Solution:**

1. Check if backend is running: `http://localhost:5000/health`
2. Check backend terminal for errors
3. Restart backend: `npm run dev:backend`

### Problem: Frontend Can't Connect to Backend

**Solution:**

1. Verify backend is running on port 5000
2. Check `NEXT_PUBLIC_API_URL` in `frontend/.env.local`
3. Check browser console for CORS errors
4. Restart both servers: `npm run dev`

## Next Steps

1. **Create an Account**

   - Go to [http://localhost:3000/auth/signup](http://localhost:3000/auth/signup)
   - Register a new user

2. **Create a Listing**

   - Login and click "Post Ad"
   - Fill in the details and submit

3. **Explore Features**
   - Browse listings
   - Use search and filters
   - Add favorites
   - Try the chat feature

## Development Tips

1. **Hot Reload:** Both frontend and backend support hot reload. Changes will reflect automatically.

2. **API Testing:** Use Postman or Thunder Client to test API endpoints.

3. **Database GUI:** Use MongoDB Compass to view your database visually.

4. **VS Code Extensions:**
   - ESLint
   - Prettier
   - MongoDB for VS Code
   - Thunder Client (API testing)

## Getting Help

- Check the main [README.md](README.md) for detailed documentation
- Check [backend/README.md](backend/README.md) for backend-specific docs
- Check [frontend/README.md](frontend/README.md) for frontend-specific docs

## Environment Variables Reference

### Backend (.env)

| Variable     | Description               | Example                       |
| ------------ | ------------------------- | ----------------------------- |
| PORT         | Backend server port       | 5000                          |
| NODE_ENV     | Environment mode          | development                   |
| MONGODB_URI  | MongoDB connection string | mongodb://localhost:27017/m2x |
| JWT_SECRET   | Secret key for JWT        | your-secret-key               |
| JWT_EXPIRE   | JWT token expiry          | 30d                           |
| FRONTEND_URL | Frontend URL for CORS     | http://localhost:3000         |

### Frontend (.env.local)

| Variable             | Description      | Example                   |
| -------------------- | ---------------- | ------------------------- |
| NEXT_PUBLIC_API_URL  | Backend API URL  | http://localhost:5000/api |
| NEXT_PUBLIC_APP_NAME | Application name | M2X Classified Ads        |
| NEXT_PUBLIC_APP_URL  | Frontend URL     | http://localhost:3000     |

## Ready to Code!

You're all set! The project structure is organized with:

- **Backend** in the `backend/` folder
- **Frontend** in the `frontend/` folder
- **Root scripts** to manage both

Happy coding! 🚀

---

**Need help?** Check the troubleshooting section or open an issue on GitHub.


