import express from "express";
import {
  createProduct,
  getAllProducts,
  UpdateProduct,
  DeleteProduct,
  ProductDetails,
} from "../controllers/productController.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/create").post(isAuthenticatedUser, createProduct);
router
  .route("/products/:id")
  .put(isAuthenticatedUser, UpdateProduct)
  .delete(isAuthenticatedUser, DeleteProduct)
  .get(ProductDetails);

export default router;
