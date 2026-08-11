import express from "express";
import {
  createProduct,
  getAllProducts,
  UpdateProduct,
  DeleteProduct,
  ProductDetails,
} from "../controllers/productController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/products/create")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), UpdateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), DeleteProduct);

router.route("/products/:id").get(ProductDetails);

export default router;
