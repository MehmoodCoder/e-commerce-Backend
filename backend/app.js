import express from "express";

const app = express();

import Product from "./routes/product.js";

app.use(express.json())

app.use('/api/v1', Product)

export default app;
