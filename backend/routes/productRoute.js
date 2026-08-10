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

router.route("/products").get(isAuthenticatedUser, getAllProducts);
router.route("/products/create").post(createProduct);
router
  .route("/products/:id")
  .put(UpdateProduct)
  .delete(DeleteProduct)
  .get(ProductDetails);

export default router;
