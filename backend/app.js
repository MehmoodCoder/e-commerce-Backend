import express from "express";

const app = express();

import ErrorHanderlerMiddleWare from './middlewares/error.js';

import Product from "./routes/productRoute.js";
import User from './routes/userRoute.js'

app.use(express.json());

app.use("/api/v1", Product);
app.use("/api/v1", User);


// Middleware

app.use(ErrorHanderlerMiddleWare)

export default app;
