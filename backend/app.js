import express from "express";
import cookieParser from "cookie-parser";

const app = express();

import ErrorHanderlerMiddleWare from './middlewares/error.js';

import ProductRoutes from "./routes/productRoute.js";
import UserRoutes from './routes/userRoute.js'

app.use(express.json());
app.use(cookieParser())

app.use("/api/v1", ProductRoutes);
app.use("/api/v1", UserRoutes);


// Middleware

app.use(ErrorHanderlerMiddleWare)

export default app;
