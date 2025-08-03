# BlogHub Backend - MERN Stack Blogging Platform

A Node.js REST API backend for the BlogHub blogging platform built with Express.js, MongoDB, and JWT authentication.

## 📋 Features

- ✅ JWT-based Authentication (Register, Login, Logout)
- ✅ Blog CRUD Operations (Create, Read, Update, Delete)
- ✅ Author-only Edit/Delete Authorization
- ✅ User Profile Management
- ✅ MongoDB with Mongoose ODM
- ✅ CORS Configuration
- ✅ Error Handling & Validation

## 🛠️ Tech Stack

- **Node.js** + **Express.js** - Backend framework
- **MongoDB** + **Mongoose** - Database and ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

## ⚡ Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

### Installation
```bash
git clone https://github.com/Nashid-k/bloghub-backend.git
cd bloghub-backend
npm install
```

### Environment Setup
Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bloghub
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

### Run Development Server
```bash
npm run dev    # with nodemon
npm start      # production mode
```

API runs at: `http://localhost:5000`

## 📱 API Endpoints

### Auth APIs
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Login and get token |
| POST | `/api/auth/logout` | Logout and remove token |

### Blog APIs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | Fetch all blogs |
| GET | `/api/blogs/:id` | Fetch blog by ID |
| POST | `/api/blogs` | Create new blog post |
| PUT | `/api/blogs/:id` | Update blog (author only) |
| DELETE | `/api/blogs/:id` | Delete blog (author only) |

### User APIs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/me` | Get current user profile |

## 📝 Request Examples

### Register User
```bash
POST /api/auth/register
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Blog Post
```bash
POST /api/blogs
Authorization: Bearer <jwt_token>
{
  "title": "My Blog Post",
  "content": "Blog content here...",
  "excerpt": "Short description"
}
```



## 🔐 Authentication

- JWT tokens stored in localStorage (frontend)
- Password hashing with bcryptjs
- Protected routes with auth middleware
- Author-only authorization for blog operations

## 🚀 Deployment

### Heroku
```bash
heroku create bloghub-backend
heroku config:set MONGODB_URI=<your_mongodb_uri>
heroku config:set JWT_SECRET=<your_jwt_secret>
git push heroku main
```

### Railway/Render
1. Connect GitHub repository
2. Set environment variables
3. Deploy with automatic builds

## 📦 Package Scripts

Add to `package.json`:
```json
{
  "scripts": {
    "start": "node server/server.js",
    "dev": "nodemon server/server.js"
  }
}
```

## 👨💻 Author

**Nashid K**  
- GitHub: [@Nashid-k](https://github.com/Nashid-k)
- Email: nashidk1999@gmail.com

## 📧 Project Submission

**Machine Task: MERN Stack Developer**  
**Project:** BlogHub - Simple Blogging Platform Backend  
**Submitted to:** kiran@sinope.co.in, luvraj@sinope.co.in  
**Date:** August 3rd, 2025

## 🔗 Frontend Repository
[BlogHub Frontend](https://github.com/Nashid-k/bloghub-frontend)
