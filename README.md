# e-commerce-Backend

⚡ Dynamic Node.js E-Commerce REST API Engine 🚀 | Express.js ⚡, MongoDB Atlas 🗄️, Mongoose 🍃 &amp; JWT Auth 🔐 | Scalable MVC Architecture 🏛️ | Secured Auth Middleware 🛡️, Product &amp; Order CRUD 🛍️📦, Cart Engine 🛒💳 &amp; `.env` Protection 🗝️ | High-Performance Scalability 📈💥

---

## 🛠️ Key Technologies & Core Concepts

- **Backend Architecture:** Modular RESTful APIs engineered with **Node.js** & **Express.js**, structured using Express Routers, custom middleware error handlers (`asyncErrorHandler`), and controller-based business logic.
- **Database Persistence & Data Modeling:** Scalable document modeling via **MongoDB** & **Mongoose**, featuring schema validations, sub-documents (reviews & user roles), and optimized queries (`findByIdAndUpdate`, `$pull` array updates, `returnDocument` standards).
- **Security & Error Handling:** Robust exception management using global handlers for uncaught exceptions, unhandled promise rejections, and custom error middleware.
- **Environment & Configuration Setup:** Centralized setup using **`dotenv`** for secret and environment management, proper load ordering, and clean project architecture.
- **Software Architecture:** Strictly structured following the **MVC (Model-View-Controller)** pattern—separating Mongoose Data Models, Express Route Handlers, and Controller Business Logic for high maintainability and scalability.

---

## 💡 What's Inside This Repository?

This workspace contains a production-ready, full-stack E-Commerce REST API backend featuring modular architecture and robust data handling:
- 🛒 **E-Commerce REST API:** Complete backend infrastructure for products, orders, user authentication, and system administration.
- ⚙️ **Advanced CRUD & Sub-Document Operations:** Complete lifecycle management for products and reviews, including nested array updates via `$pull` and automatic rating recalculations.
- 🛡️ **Role-Based Access Control:** Secure user management and admin privilege routing for user roles and product modifications.
- ⚡ **Centralized Error Handling:** Global error catching for async controllers, uncaught exceptions, unhandled promise rejections, and custom error middleware.

---

## ✨ Features

- 🏗️ **Modular REST API Architecture** – Scalable Node.js & Express.js backend engineered with RESTful principles and clean route-controller separation.
- 🏛️ **MVC Design Pattern** – Strict separation of concerns organizing data structure in Models, endpoints in Routes, and core application logic in Controllers.
- ⚙️ **Advanced Database CRUD & Array Operations** – Complete lifecycle management for products, users, and reviews, utilizing Mongoose sub-document filtering (`$pull`) and dynamic rating recalculations.
- 🛡️ **Role-Based Access Control (RBAC)** – Multi-role authorization layers restricting sensitive administrative endpoints and user operations.
- 🗄️ **MongoDB & Mongoose Schema Validation** – Persistent document storage featuring custom field validations, schema constraints, and modern Mongoose query standards (`returnDocument`).
- ⚡ **Centralized Global Error Handling** – Production-grade error middleware handling asynchronous route errors (`asyncErrorHandler`), missing resource exceptions, unhandled promise rejections, and uncaught exceptions.
- ⚙️ **Centralized Environment Configuration** – Secure management of sensitive backend credentials, database URIs, and server ports using `dotenv`.

---

## 🛠️ Tech Stack & Dependencies

| Tool / Library | Type | Purpose |
| :--- | :--- | :--- |
| **Node.js** | Runtime | Server-side JavaScript execution environment |
| **Express.js** | Backend Framework | Web framework for handling RESTful API routes & HTTP requests |
| **Mongoose** | Backend ODM | Schema-based data modeling and async queries for MongoDB |
| **Nodemon** | Dev Dependency | Automatically restarts Node app when server-side file changes occur |
| **dotenv** | Utility | Loads environment variables from `.env` file into `process.env` |
| **jsonwebtoken (JWT)** | Dependency | Authentication mechanism using secure JSON Web Tokens |
| **bcryptjs** | Dependency | Password hashing library for secure credential storage |
| **nodemailer** | Dependency | Email sending service for user notifications / password resets |
| **validator** | Dependency | String validation and sanitization (e.g., checking valid email formats) |
| **cookie-parser** | Dependency | Middleware to parse HTTP request cookies for auth session handling |
| **body-parser** | Dependency | Middleware to parse incoming request bodies before handlers |
| **Postman** | API Client | Manual testing tool for REST endpoints (`GET`, `POST`, `PUT`, `DELETE`) |

---

## 📂 Project Directory Structure

**Generated:** 8/12/2026, 10:41:29 AM

**Root Path:** `workspace\e-commerce-Backend`

```
├── 📁 backend
│   ├── 📁 config
│   ├── 📁 controllers
│   │   ├── 📄 productController.js
│   │   └── 📄 userController.js
│   ├── 📁 middlewares
│   │   ├── 📄 asyncErrorHandler.js
│   │   ├── 📄 auth.js
│   │   └── 📄 error.js
│   ├── 📁 models
│   │   ├── 📄 productModel.js
│   │   └── 📄 userModel.js
│   ├── 📁 routes
│   │   ├── 📄 productRoute.js
│   │   └── 📄 userRoute.js
│   ├── 📁 utils
│   │   ├── 📄 ApiFeatures.js
│   │   ├── 📄 Errorhandler.js
│   │   ├── 📄 JWTToken.js
│   │   └── 📄 sendEmail.js
│   ├── 📄 app.js
│   ├── 📄 connectDB.js
│   └── 📄 server.js
├── 📁 frontend
│   └── ⚙️ .gitkeep
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```

---

