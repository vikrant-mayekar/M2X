# NPM Commands Reference

## 🔧 Development vs Production

### ❌ What Went Wrong

You ran: `npm start` (production mode)

- This command expects **compiled JavaScript** files in the `dist/` folder
- But the TypeScript code hasn't been compiled yet!

### ✅ What To Use Instead

## Development Commands (Use These!)

### Backend Development

```bash
cd backend
npm run dev
```

- ✅ Runs TypeScript directly with `ts-node`
- ✅ Auto-restarts on file changes with `nodemon`
- ✅ No need to compile first
- ✅ Perfect for development

### Frontend Development

```bash
cd frontend
npm run dev
```

- ✅ Runs Next.js in development mode
- ✅ Hot reload enabled
- ✅ Fast refresh on changes

### Both at Once (From Root)

```bash
npm run dev
```

- ✅ Starts both backend and frontend simultaneously
- ✅ Most convenient for development

## Production Commands (For Deployment)

### Build Everything

```bash
# Backend
cd backend
npm run build          # Compiles TypeScript to JavaScript in dist/

# Frontend
cd frontend
npm run build          # Builds Next.js for production

# Or from root
npm run build          # Builds both
```

### Start Production Servers

```bash
# After building, start in production mode
npm start              # Runs compiled JavaScript from dist/
```

## All Available Commands

### Root Level (From project root)

| Command                  | What It Does                                 |
| ------------------------ | -------------------------------------------- |
| `npm run dev`            | 🟢 Start both backend & frontend in dev mode |
| `npm run dev:backend`    | 🟢 Start only backend in dev mode            |
| `npm run dev:frontend`   | 🟢 Start only frontend in dev mode           |
| `npm run build`          | 📦 Build both for production                 |
| `npm run build:backend`  | 📦 Build only backend                        |
| `npm run build:frontend` | 📦 Build only frontend                       |
| `npm start`              | 🚀 Start both in production (after build)    |
| `npm run install:all`    | 📥 Install all dependencies                  |
| `npm run clean`          | 🧹 Clean all node_modules & builds           |
| `npm run lint`           | 🔍 Lint both projects                        |

### Backend (cd backend)

| Command         | What It Does                                   |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | 🟢 Start with ts-node + nodemon (auto-restart) |
| `npm run build` | 📦 Compile TypeScript → JavaScript (to dist/)  |
| `npm start`     | 🚀 Run compiled code from dist/                |
| `npm run lint`  | 🔍 Check code with ESLint                      |

### Frontend (cd frontend)

| Command         | What It Does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | 🟢 Start Next.js dev server        |
| `npm run build` | 📦 Build Next.js for production    |
| `npm start`     | 🚀 Start production Next.js server |
| `npm run lint`  | 🔍 Check code with ESLint          |

## Quick Reference

### For Development (90% of the time)

```bash
# Option 1: Start both at once (easiest!)
npm run dev

# Option 2: Start separately in 2 terminals
# Terminal 1:
cd backend && npm run dev

# Terminal 2:
cd frontend && npm run dev
```

### For Production Deployment

```bash
# Step 1: Build everything
npm run build

# Step 2: Start production servers
npm start
```

## What's Running Now?

✅ **Backend:** http://localhost:5000

- Development mode with auto-restart
- TypeScript running directly
- Firebase connected

✅ **Frontend:** http://localhost:3000

- Next.js dev mode
- Hot reload enabled
- Connected to backend API

## Stopping Servers

Press `Ctrl + C` in the terminal to stop the servers.

## Common Issues

### ❌ "Cannot find module dist/server.js"

**Problem:** Trying to run production mode without building
**Solution:** Use `npm run dev` instead

### ❌ "Port already in use"

**Problem:** Server is already running
**Solution:**

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or just restart your terminal
```

### ❌ "Module not found"

**Problem:** Dependencies not installed
**Solution:**

```bash
npm run install:all
```

## Tips

1. **Always use `npm run dev` during development** ✅
2. Only use `npm start` after building with `npm run build`
3. Use `npm run dev` from root to start everything at once
4. Keep terminals open to see logs and errors
5. Backend auto-restarts on file changes (nodemon)
6. Frontend hot-reloads automatically (Next.js)

---

**Your servers are now running!** 🎉

- Backend: http://localhost:5000/health
- Frontend: http://localhost:3000
