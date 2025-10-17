# 🚀 Quick Start Guide - M2X Classified Ads

Get your project running in **5 minutes**!

## Step 1: Install Dependencies (2 minutes)

### Option A: Automatic (Recommended)

```bash
# Windows PowerShell
.\setup.ps1

# Linux/Mac
chmod +x setup.sh
./setup.sh
```

### Option B: Manual

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

## Step 2: Start MongoDB (30 seconds)

### Local MongoDB

```bash
# Start MongoDB service
mongod
```

### MongoDB Atlas (Cloud)

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Update `backend/.env` with your connection string

## Step 3: Configure Environment (1 minute)

### Backend: `backend/.env`

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/m2x-classified-ads
JWT_SECRET=my-super-secret-key-12345
FRONTEND_URL=http://localhost:3000
```

### Frontend: `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Step 4: Start the Application (30 seconds)

```bash
npm run dev
```

This starts both:

- ✅ Backend API: http://localhost:5000
- ✅ Frontend App: http://localhost:3000

## Step 5: Test It! (1 minute)

1. Open http://localhost:3000 in your browser
2. Click "Sign Up" to create an account
3. Login and explore!

## 🎯 That's It!

You're now running the full stack application!

---

## Common Commands

```bash
# Start both frontend and backend
npm run dev

# Start only backend
npm run dev:backend

# Start only frontend
npm run dev:frontend

# Build everything
npm run build

# Clean and reinstall
npm run clean
npm run install:all
```

## Need Help?

- 📖 Full documentation: [README.md](README.md)
- 🛠️ Detailed setup: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- 📊 Project overview: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## Troubleshooting

### MongoDB won't start

```bash
# Check if MongoDB is installed
mongod --version

# Start MongoDB manually
mongod --dbpath /path/to/data/db
```

### Port already in use

Change the port in `backend/.env`:

```env
PORT=5001
```

### Can't connect to backend

1. Check if backend is running: http://localhost:5000/health
2. Verify `NEXT_PUBLIC_API_URL` in `frontend/.env.local`
3. Restart both servers: `npm run dev`

---

**Happy Coding! 🎉**
