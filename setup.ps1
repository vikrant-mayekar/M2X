# M2X Classified Ads - Setup Script (PowerShell)
# This script sets up the project for first-time use on Windows

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  M2X Classified Ads - Project Setup" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js $nodeVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js v18 or higher." -ForegroundColor Red
    exit 1
}

# Check if MongoDB is installed
try {
    $mongoVersion = mongod --version
    Write-Host "✅ MongoDB detected" -ForegroundColor Green
} catch {
    Write-Host "⚠️  MongoDB is not detected. Make sure MongoDB is installed and running." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📦 Installing root dependencies..." -ForegroundColor Blue
npm install

Write-Host ""
Write-Host "📦 Installing backend dependencies..." -ForegroundColor Blue
Set-Location backend
npm install
Set-Location ..

Write-Host ""
Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Blue
Set-Location frontend
npm install
Set-Location ..

Write-Host ""
Write-Host "📝 Setting up environment files..." -ForegroundColor Blue

# Backend .env
if (-not (Test-Path "backend\.env")) {
    @"
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/m2x-classified-ads
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
"@ | Out-File -FilePath "backend\.env" -Encoding UTF8
    Write-Host "✅ Created backend\.env" -ForegroundColor Green
} else {
    Write-Host "⚠️  backend\.env already exists, skipping..." -ForegroundColor Yellow
}

# Frontend .env.local
if (-not (Test-Path "frontend\.env.local")) {
    @"
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=M2X Classified Ads
NEXT_PUBLIC_APP_URL=http://localhost:3000
"@ | Out-File -FilePath "frontend\.env.local" -Encoding UTF8
    Write-Host "✅ Created frontend\.env.local" -ForegroundColor Green
} else {
    Write-Host "⚠️  frontend\.env.local already exists, skipping..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  ✨ Setup Complete!" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Make sure MongoDB is running"
Write-Host "2. Update backend\.env with your MongoDB URI and JWT secret"
Write-Host "3. Run 'npm run dev' to start both frontend and backend"
Write-Host ""
Write-Host "Commands:" -ForegroundColor Yellow
Write-Host "  npm run dev           - Start both frontend and backend"
Write-Host "  npm run dev:frontend  - Start only frontend"
Write-Host "  npm run dev:backend   - Start only backend"
Write-Host ""
Write-Host "URLs:" -ForegroundColor Yellow
Write-Host "  Frontend: http://localhost:3000"
Write-Host "  Backend:  http://localhost:5000"
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Green



