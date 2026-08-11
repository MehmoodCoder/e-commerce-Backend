import express from "express";
import {
  forgotPassword,
  getAllUser,
  getUserDetails,
  loginUser,
  logout,
  RegisterUser,
  resetPassword,
  updatePassword,
  updateProfile,
} from "../controllers/userController.js";

import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)


export default router;
