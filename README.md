# e-commerce-Backend

⚡ Dynamic Node.js E-Commerce REST API Engine 🚀 | Express.js ⚡, MongoDB Atlas 🗄️, Mongoose 🍃 & JWT Auth 🔐 | Scalable MVC Architecture 🏛️ | Secured Auth Middleware 🛡️, Product, User & Review CRUD 🛍️👤⭐ & `.env` Protection 🗝️ | High-Performance Scalability 📈💥

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

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of JavaScript
- Basic knowledge of MongoDB

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

## 🚀 E-Commerce REST API - Routing & Setup Guide

A production-ready Node.js & Express RESTful API architecture following the **MVC (Model-View-Controller)** pattern with **JWT Authentication**, **Role-Based Access Control (RBAC)**, and **Mongoose sub-document query handling**.

---

### Installation Steps
```bash
# Clone the repository
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)

# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure Environment Variables (.env)
# Create a .env file in the config/ directory with:
PORT=5000
DB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=YOUR_JWT_SECRET_KEY
JWT_EXPIRE=nd
COOKIE_EXPIRE=n
SMPT_HOST=host
SMPT_PORT=port
SMPT_SERVICE=service
SMPT_MAIL=your_email@gmail.com
SMPT_PASSWORD=your_app_password

```

---

## 🌐 API Route Specifications

Base Route: `protocol://host:port/api/v1`

---

### 1. User & Authentication Routes (`/api/v1`)

| Method | Endpoint | Access Level | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/register` | Public | Register a new user and generate JWT token in HTTP-only cookie |
| `POST` | `/login` | Public | Authenticate existing user credentials |
| `GET` | `/logout` | Public | Clear session cookie and end user session |
| `POST` | `/password/forgot` | Public | Generate password reset token & email recovery link |
| `PUT` | `/password/reset/:token` | Public | Update user password using validated reset token |
| `GET` | `/me` | Authenticated | Fetch current logged-in user profile details |
| `PUT` | `/password/update` | Authenticated | Update account password using current password validation |
| `PUT` | `/me/update` | Authenticated | Update basic profile information (Name, Email) |
| `GET` | `/admin/users` | Admin Only | Fetch list of all registered users in database |
| `GET` | `/admin/user/:id` | Admin Only | Get single user detail by MongoDB ObjectId |
| `PUT` | `/admin/user/:id` | Admin Only | Update user role (admin / user) and details |
| `DELETE` | `/admin/user/:id` | Admin Only | Permanently delete user account from database |

---

### 2. Product & Review Routes (`/api/v1`)

| Method | Endpoint | Access Level | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | Public | Fetch products with Search, Filter, and Pagination features |
| `GET` | `/products/:id` | Public | Get single product detail by ObjectId |
| `POST` | `/admin/products/create` | Admin Only | Create new product catalog item |
| `PUT` | `/admin/products/:id` | Admin Only | Update product details |
| `DELETE` | `/admin/products/:id` | Admin Only | Delete product record from database |
| `PUT` | `/review` | Authenticated | Create or update user review & recalculate average ratings |
| `GET` | `/reviews?id=PRODUCT_ID` | Public | Fetch all reviews belonging to a specific product |
| `DELETE` | `/reviews?productId=P_ID&id=R_ID` | Authenticated | Delete a sub-document review & recalculate overall rating |

---

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com) — *(Official guide for routing, controllers, and Express middleware)*
- [Mongoose Documentation](https://mongoosejs.com/docs/) — *(Guides for MongoDB schema modeling, queries, and aggregation)*
- [JSON Web Token (JWT) Guide](https://jwt.io/introduction) — *(Official docs for token-based authentication and security)*
- [Bcryptjs Repository](https://github.com/dcodeIO/bcrypt.js) — *(Documentation for hashing passwords securely in Node.js)*
- [Nodemailer Documentation](https://nodemailer.com) — *(Official setup guide for sending emails and password resets)*
- [Cookie-Parser Repository](https://github.com/expressjs/cookie-parser) — *(Guide for parsing HTTP request cookies in Express)*
- [Validator.js Documentation](https://github.com/validatorjs/validator.js) — *(Reference for string sanitization and custom schema validation)*
- [Postman Learning Center](https://learning.postman.com/docs/getting-started/overview/) — *(API testing, collection management, and request debugging)*
- [W3Schools Web Tutorials](https://www.w3schools.com) — *(Comprehensive tutorials for JavaScript, Node.js, Express, and databases)*

---

## 💡 Core Concepts Covered

- ✅ **MVC Architecture** – Structuring backend applications using Models, Express Routes, and Controller business logic
- ✅ **Authentication & JWT** – Issuing, signing, and verifying JSON Web Tokens (JWT) for secure user sessions
- ✅ **Password Security & Hashing** – Hashing user credentials securely using `bcryptjs` before database persistence
- ✅ **Cookie Management** – Storing and parsing HTTP-only cookies safely with `cookie-parser` for authentication state
- ✅ **Role-Based Access Control (RBAC)** – Dynamic route protection and administrative privilege checks based on user roles
- ✅ **MongoDB & Mongoose Schema Design** – Managing schemas, data validation, sub-documents (reviews), and modern Mongoose query standards
- ✅ **Sub-Document & Array Operations** – Atomic array updates (`$pull`) and dynamic calculation of ratings and review counts
- ✅ **Express Middleware Pipeline** – Request body parsing (`json`, `urlencoded`), error handling middleware, and protected route guards
- ✅ **Asynchronous Error Handling** – Managing async exceptions cleanly with custom error handlers (`asyncErrorHandler`) and custom error classes
- ✅ **Notification Services** – Integrated email workflows using `Nodemailer` for user notifications and password resets
- ✅ **Environment Vault & Tooling** – Managing secret variables via `dotenv` and developer workflows with `nodemon`

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [https://github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [My Portfolio Link](https://mh56-portfolio.vercel.app)

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the API, add new features, or optimize database queries, please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✨ **Modular REST API Architecture:** Initialized core Node.js & Express.js backend services structured around the MVC pattern.
- 🔐 **Authentication & Authorization:** Implemented JWT-based security, password hashing with `bcryptjs`, and role-based access control middleware.
- ⚙️ **Advanced CRUD Systems & Array Operations:** Engineered complete backend routes for product management, user profiles, and sub-document review handling (`$pull` filters).
- ⚡ **Global Error Handling:** Integrated custom async error handler and global error middleware for robust exception management.
- 🗄️ **Database Persistence:** Configured Mongoose schema designs with strict validation rules and cloud MongoDB Atlas connectivity.
- 🚀 **Production-Ready Baseline:** Configured environment isolation via `dotenv`, cookie-parser session management, and serverless deployment protocols.

---

### ***Happy coding without chai ! ☕***
