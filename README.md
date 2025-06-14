# 📝 Blogs — A Medium Clone

A full-stack blogging platform inspired by Medium, built with modern technologies.

---

## 🚀 Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Backend:** Hono (Cloudflare Workers)
- **Database:** PostgreSQL (via Prisma ORM)
- **Connection Pooling:** Prisma Accelerate
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** 
  - Frontend: Vercel
  - Backend: Cloudflare Workers

---

## ✨ Features

- ✅ Sign up & Sign in (JWT Auth)
- ✅ Create and publish new blogs
- ✅ Fetch blogs in bulk (homepage)
- ✅ View individual blogs by ID
- ✅ Fully responsive and modern UI
- ✅ Secure backend API
- ✅ Smooth developer experience with Prisma and Accelerate

---

## 🧩 Available Routes

### Backend Routes:

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `POST` | `/api/v1/user/signup` | User registration |
| `POST` | `/api/v1/user/signin` | User login |
| `POST` | `/api/v1/blog/add` | Publish new blog |
| `GET`  | `/api/v1/blog/bulk` | Fetch all blogs |
| `GET`  | `/api/v1/blog/:id` | Fetch blog by ID |

> Note: All protected routes require JWT Authorization header.

---

## 🔐 Authentication

- After signing in, user receives a JWT token.
- Token is stored in `localStorage` on frontend.
- API calls include `Authorization: Bearer <token>` header.

---

## 🖥 Deployment

- **Frontend:** Deployed on [Vercel](https://blogs-474o.vercel.app/)
- **Backend:** Deployed via Cloudflare Workers using Hono framework.
- **Database:** PostgreSQL hosted on any cloud provider with Prisma ORM & Accelerate for efficient connection pooling.

---
