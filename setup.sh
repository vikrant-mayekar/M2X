#!/bin/bash

# M2X Classified Ads - Setup Script
# This script sets up the project for first-time use

echo "================================================"
echo "  M2X Classified Ads - Project Setup"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check if MongoDB is installed
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB is not detected. Make sure MongoDB is installed and running."
else
    echo "✅ MongoDB detected"
fi

echo ""
echo "📦 Installing root dependencies..."
npm install

echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "📝 Setting up environment files..."

# Backend .env
if [ ! -f backend/.env ]; then
    cat > backend/.env << EOF
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/m2x-classified-ads
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
EOF
    echo "✅ Created backend/.env"
else
    echo "⚠️  backend/.env already exists, skipping..."
fi

# Frontend .env.local
if [ ! -f frontend/.env.local ]; then
    cat > frontend/.env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=M2X Classified Ads
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
    echo "✅ Created frontend/.env.local"
else
    echo "⚠️  frontend/.env.local already exists, skipping..."
fi

echo ""
echo "================================================"
echo "  ✨ Setup Complete!"
echo "================================================"
echo ""
echo "Next steps:"
echo "1. Make sure MongoDB is running"
echo "2. Update backend/.env with your MongoDB URI and JWT secret"
echo "3. Run 'npm run dev' to start both frontend and backend"
echo ""
echo "Commands:"
echo "  npm run dev           - Start both frontend and backend"
echo "  npm run dev:frontend  - Start only frontend"
echo "  npm run dev:backend   - Start only backend"
echo ""
echo "URLs:"
echo "  Frontend: http://localhost:3000"
echo "  Backend:  http://localhost:5000"
echo ""
echo "Happy coding! 🚀"



