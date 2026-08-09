import express from "express";
import { createProduct, getAllProducts, UpdateProduct } from "../controllers/productController.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route('/products/create').post(createProduct)
router.route('/products/:id').put(UpdateProduct)

export default router;
