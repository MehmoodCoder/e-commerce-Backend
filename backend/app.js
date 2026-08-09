import express from "express";

const app = express();

import Product from "./routes/productRoute.js";

app.use(express.json())

app.use('/api/v1', Product)

export default app;
