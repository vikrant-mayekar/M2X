# 🗺️ Application Routes

## Frontend Routes (Next.js)

### 🌐 Public Routes (No Authentication Required)

| Route           | Page             | Description                      |
| --------------- | ---------------- | -------------------------------- |
| `/`             | Homepage         | Landing page with featured ads   |
| `/listings`     | Browse Listings  | All active listings with filters |
| `/product/[id]` | Product Detail   | Individual product page          |
| `/auth/login`   | Login            | User login page                  |
| `/auth/signup`  | Sign Up          | User registration page           |
| `/login`        | Login Redirect   | ✅ Redirects to `/auth/login`    |
| `/register`     | Signup Redirect  | ✅ Redirects to `/auth/signup`   |
| `/premium`      | Premium Packages | Premium membership plans         |

### 🔒 Protected Routes (Authentication Required)

| Route        | Page               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `/dashboard` | User Dashboard     | User profile and overview    |
| `/post-ad`   | Post Advertisement | Create new listing           |
| `/chat`      | Chat Interface     | Messages with buyers/sellers |
| `/payment`   | Payment            | Payment processing page      |

---

## Backend API Routes (Express)

### Base URL: `http://localhost:5000/api`

### 🔐 Authentication Routes

| Method | Endpoint         | Description       | Auth |
| ------ | ---------------- | ----------------- | ---- |
| POST   | `/auth/register` | Register new user | No   |
| POST   | `/auth/login`    | Login user        | No   |
| GET    | `/auth/me`       | Get current user  | Yes  |
| PUT    | `/auth/password` | Update password   | Yes  |

**Example:**

```bash
# Register
POST http://localhost:5000/api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}

# Login
POST http://localhost:5000/api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### 👤 User Routes

| Method | Endpoint     | Description    | Auth  |
| ------ | ------------ | -------------- | ----- |
| GET    | `/users`     | Get all users  | Admin |
| GET    | `/users/:id` | Get user by ID | Yes   |
| PUT    | `/users/:id` | Update user    | Yes   |
| DELETE | `/users/:id` | Delete user    | Admin |

### 📋 Listing Routes

| Method | Endpoint                 | Description         | Auth |
| ------ | ------------------------ | ------------------- | ---- |
| GET    | `/listings`              | Get all listings    | No   |
| GET    | `/listings/:id`          | Get listing by ID   | No   |
| POST   | `/listings`              | Create listing      | Yes  |
| PUT    | `/listings/:id`          | Update listing      | Yes  |
| DELETE | `/listings/:id`          | Delete listing      | Yes  |
| GET    | `/listings/user/:userId` | Get user's listings | Yes  |
| POST   | `/listings/:id/favorite` | Toggle favorite     | Yes  |
| GET    | `/listings/favorites`    | Get favorites       | Yes  |

**Query Parameters for GET /listings:**

```
?category=categoryId
&condition=new|used|refurbished
&minPrice=1000
&maxPrice=50000
&search=keyword
&sort=price-asc|price-desc|views
&page=1
&limit=10
```

### 🏷️ Category Routes

| Method | Endpoint          | Description        | Auth  |
| ------ | ----------------- | ------------------ | ----- |
| GET    | `/categories`     | Get all categories | No    |
| GET    | `/categories/:id` | Get category by ID | No    |
| POST   | `/categories`     | Create category    | Admin |
| PUT    | `/categories/:id` | Update category    | Admin |
| DELETE | `/categories/:id` | Delete category    | Admin |

### 💬 Chat Routes

| Method | Endpoint            | Description    | Auth |
| ------ | ------------------- | -------------- | ---- |
| GET    | `/chat`             | Get all chats  | Yes  |
| GET    | `/chat/:id`         | Get chat by ID | Yes  |
| POST   | `/chat/:id/message` | Send message   | Yes  |
| PUT    | `/chat/:id/read`    | Mark as read   | Yes  |

### 💳 Payment Routes

| Method | Endpoint               | Description       | Auth  |
| ------ | ---------------------- | ----------------- | ----- |
| POST   | `/payments`            | Create payment    | Yes   |
| GET    | `/payments`            | Get all payments  | Yes   |
| GET    | `/payments/:id`        | Get payment by ID | Yes   |
| PUT    | `/payments/:id/status` | Update status     | Admin |

---

## 🔗 Quick Access URLs

### Frontend Pages

```bash
# Homepage
http://localhost:3000/

# Login (both work!)
http://localhost:3000/login
http://localhost:3000/auth/login

# Sign Up (both work!)
http://localhost:3000/register
http://localhost:3000/auth/signup

# Browse Listings
http://localhost:3000/listings

# User Dashboard (requires login)
http://localhost:3000/dashboard

# Post Ad (requires login)
http://localhost:3000/post-ad

# Chat (requires login)
http://localhost:3000/chat

# Premium Packages
http://localhost:3000/premium
```

### Backend API

```bash
# Health Check
http://localhost:5000/health

# API Base
http://localhost:5000/api

# Register
POST http://localhost:5000/api/auth/register

# Login
POST http://localhost:5000/api/auth/login

# Get Listings
GET http://localhost:5000/api/listings

# Get Categories
GET http://localhost:5000/api/categories
```

---

## 🛠️ Testing Routes

### Using curl (Backend API)

```bash
# Health check
curl http://localhost:5000/health

# Get listings
curl http://localhost:5000/api/listings

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123"}'
```

### Using Browser (Frontend)

Just open these URLs in your browser:

- http://localhost:3000
- http://localhost:3000/login
- http://localhost:3000/register
- http://localhost:3000/listings

---

## 🎯 What Changed

### ✅ New Redirect Pages Created

1. **`/login`** → Redirects to `/auth/login`
2. **`/register`** → Redirects to `/auth/signup`

Now you can use either:

- Short URLs: `/login`, `/register`
- Full URLs: `/auth/login`, `/auth/signup`

Both will work! 🎉

---

## Route Structure

```
frontend/app/
├── page.tsx              → / (Homepage)
├── login/
│   └── page.tsx          → /login (Redirect to /auth/login)
├── register/
│   └── page.tsx          → /register (Redirect to /auth/signup)
├── auth/
│   ├── login/
│   │   └── page.tsx      → /auth/login (Actual login page)
│   └── signup/
│       └── page.tsx      → /auth/signup (Actual signup page)
├── listings/
│   └── page.tsx          → /listings
├── product/
│   └── [id]/
│       └── page.tsx      → /product/123
├── dashboard/
│   └── page.tsx          → /dashboard (Protected)
├── post-ad/
│   └── page.tsx          → /post-ad (Protected)
├── chat/
│   └── page.tsx          → /chat (Protected)
├── payment/
│   └── page.tsx          → /payment (Protected)
└── premium/
    └── page.tsx          → /premium
```

---

## 🚀 Try It Now!

### Login Page

```
http://localhost:3000/login
or
http://localhost:3000/auth/login
```

### Signup Page

```
http://localhost:3000/register
or
http://localhost:3000/auth/signup
```

Both will work now! ✅

---

**Your routes are all set!** The 404 errors should be gone now. Refresh your browser and try the links above! 🎉
