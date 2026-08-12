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

# 📦 MERN Stack: Backend Architecture Setup Guide

## 1. Installing Node.js & NPM
Download and install the LTS version from [Node.js Official Site](https://nodejs.org/).
Verify installation in your terminal:
```bash
node -v
npm -v
```

## 2. Installing MongoDB Community Server & Mongosh
1. Download **MongoDB Community Server** from [MongoDB Download Center](https://www.mongodb.com/try/download/community).
2. Download **MongoDB Shell (`mongosh`)** to run CLI database operations.
3. Start the local server daemon:
```bash
# Verify connection using mongosh CLI
mongosh
```

## 3. Setting Up `package.json` with ES Modules
Initialize your Node project inside any project directory:
```bash
npm init
```

### During the prompt configuration, fill out the selections like this:

package name: (name)

version: (1.0.0) 

description: may add
​
entry point: (app.js)​

test command: just enter​

git repository: (https://github.com/username/repo_name.git)

keywords: may add

author: may add

license: (ISC) may be MIT for open source

type: (commonjs) recommended module

Is this OK? (yes) 

---

### 💻 How to Run the backend of the MERN Project Locally  

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Project_dir

# create node_modules folder by running this command  
npm i

# Start the local development server
npm start  # for deployment 
npm run dev # for development
```

---

To enable modern ES6 `import/export` syntax instead of `require()`, open `package.json` and add `"type": "module"`:
```json
{
  "name": "node",
  "version": "1.0.0",
  "bugs": {
    "url": "https://github.com/username/repo/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/username/repo.git"
  },
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js" // add manually write "nodemon index.js" if installed
  }
}

```

---

## 4. Installing Core Dependencies for MERN Stack Backend
Run this command inside your project directory to install npm pakages in pakages.json file:
```bash
npm i express
npm i mongoose
npm i nodemon
npm i dotenv
npm i jsonwebtoken
npm i nodemailer
npm i bcryptjs
npm i validator
npm i cookie-parser
npm i body-parser
```

**It automatically Create package.json if not exists. Like**

```json
{
  "name": "pakage name",
  "version": "1.0.0",
  "description": "Something",
  "keywords": [
    "keywords"
  ],
  "homepage": "https://github.com/github.com/username#readme",
  "bugs": {
    "url": "https://github.com/github.com/username/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/github.com/username.git"
  },
  "author": "Author",
  "type": "module",
   "main": "backend/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node backend/server.js",
    "dev": "nodemon backend/server.js"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "body-parser": "^2.3.0",
    "cookie-parser": "^1.4.7",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.9.1",
    "nodemailer": "^9.0.5",
    "nodemon": "^3.1.14",
    "validator": "^13.15.35"
  }
}

```

**Note:**  Install packages when needed

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of React and JavaScript

---