import express from "express";
import {
  forgotPassword,
  loginUser,
  logout,
  RegisterUser,
  resetPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);

export default router;
