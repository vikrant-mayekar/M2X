# Troubleshooting Guide

## ✅ Issues Fixed

### 1. Backend JWT Compilation Error - FIXED ✅

**Error:**

```
error TS2769: No overload matches this call
```

**Cause:** TypeScript couldn't infer the correct JWT sign function overload.

**Solution:** ✅ Fixed by explicitly declaring the secret variable.

**Status:** Backend should now start successfully!

---

### 2. Frontend Hydration Warning - Browser Extension

**Warning:**

```
Error: A tree hydrated but some attributes of the server rendered HTML didn't match
- crxlauncher=""
```

**Cause:** A Chrome browser extension is modifying the HTML before React loads.

**What This Means:**

- ⚠️ This is a **warning**, not a critical error
- Your app **will still work** normally
- Caused by a browser extension (launcher/productivity tool)

**Solutions:**

#### Option 1: Disable the Extension (Recommended for Development)

1. Open Chrome Extensions: `chrome://extensions/`
2. Look for extensions related to:
   - Launchers
   - Productivity tools
   - Tab managers
   - Page modifiers
3. Disable them one by one to find the culprit
4. Common culprits: OneTab, Tab Manager, Launcher extensions

#### Option 2: Use Incognito Mode for Development

```bash
# Your app will work without extensions
```

1. Open Chrome in Incognito mode
2. Navigate to `http://localhost:3000`
3. Extensions are disabled by default in Incognito

#### Option 3: Ignore It (Safe)

- This warning doesn't break functionality
- It's just React complaining about HTML changes
- Your app works perfectly fine
- Only affects development, not production

#### Option 4: Suppress the Warning (Not Recommended)

Add to `frontend/next.config.mjs`:

```javascript
const nextConfig = {
  // ... existing config
  reactStrictMode: false, // This would suppress it, but not recommended
};
```

**Recommendation:** Just disable the browser extension for development. It's the cleanest solution.

---

## Common Errors & Solutions

### Backend Errors

#### ❌ "Cannot find module dist/server.js"

**Cause:** Trying to run production mode without building

**Solution:**

```bash
npm run dev  # Use this for development!
```

#### ❌ TypeScript Compilation Errors

**Cause:** Type mismatches or missing types

**Solution:**

```bash
cd backend
npm install  # Reinstall dependencies
npm run dev  # TypeScript will show detailed errors
```

#### ❌ "Firebase credentials not found"

**Cause:** Missing service account JSON file or env variables

**Solution:**

1. Check `backend/m2x-project-firebase-adminsdk-fbsvc-5570472ed8.json` exists
2. Or set environment variables in `backend/.env`

#### ❌ "Port 5000 already in use"

**Solution:**

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or just use a different port in backend/.env
PORT=5001
```

---

### Frontend Errors

#### ❌ Hydration Mismatch (Like yours)

**Cause:** Browser extension or SSR/Client mismatch

**Solutions:**

1. Disable browser extensions
2. Use incognito mode
3. Check for `typeof window` checks in code
4. Ensure no `Date.now()` or `Math.random()` in render

#### ❌ "Failed to fetch" or API errors

**Cause:** Backend not running or wrong API URL

**Solution:**

```bash
# 1. Make sure backend is running
cd backend && npm run dev

# 2. Check frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### ❌ "Module not found"

**Solution:**

```bash
cd frontend
npm install
npm run dev
```

#### ❌ Port 3000 already in use

**Solution:**

```bash
# Next.js will automatically try port 3001, 3002, etc.
# Or kill the process using port 3000
```

---

### PowerShell Execution Policy Errors

#### ❌ "Running scripts is disabled on this system"

**Cause:** PowerShell execution policy blocks npm

**Quick Fix:**

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**Permanent Fix (Optional):**

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

**Alternative:** Use Command Prompt (cmd) instead of PowerShell

---

## Quick Checks

### Is Everything Running?

```bash
# Check backend
curl http://localhost:5000/health

# Expected response:
{"status":"OK","message":"Server is running"}

# Check frontend
# Open browser: http://localhost:3000
```

### Are Dependencies Installed?

```bash
# From project root
npm run install:all

# Or manually
cd backend && npm install
cd ../frontend && npm install
```

### Is Firebase Connected?

Check backend console output:

```
✅ Firebase initialized with service account JSON file
```

---

## Debug Mode

### Backend Debug

```bash
cd backend
npm run dev
# Watch console for:
# - ✅ Firebase initialized
# - 🚀 Server is running on port 5000
```

### Frontend Debug

```bash
cd frontend
npm run dev
# Watch console for:
# - ✓ Ready in X.Xs
# - No compilation errors
```

---

## Getting Help

1. Check this troubleshooting guide first
2. Check error message in console
3. Google the exact error message
4. Check:
   - `README.md` - Project documentation
   - `FIREBASE_READY.md` - Firebase setup
   - `NPM_COMMANDS.md` - Available commands

---

## Your Current Status

✅ **Backend:** Fixed JWT error - should start successfully now!
⚠️ **Frontend:** Hydration warning is harmless - disable browser extension or ignore it

**Action Required:**

1. Backend should now work - check the terminal
2. For frontend warning: Disable browser extensions or use incognito mode
3. Otherwise, your app is working fine!

---

## Quick Reset

If everything is broken, try this:

```bash
# Stop all servers (Ctrl+C)

# Clean everything
npm run clean

# Reinstall everything
npm run install:all

# Start fresh
npm run dev
```

---

**Most Common Issue:** Browser extensions messing with React hydration. Just disable them for development! 🎯
