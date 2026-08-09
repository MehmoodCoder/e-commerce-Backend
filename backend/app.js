import express from "express";

const app = express();

import ErrorHanderlerMiddleWare from './middlewares/error.js';

import Product from "./routes/productRoute.js";

app.use(express.json());

app.use("/api/v1", Product);

// Middleware

app.use(ErrorHanderlerMiddleWare)

export default app;
