import express from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route('/products/create').post(createProduct)

export default router;
