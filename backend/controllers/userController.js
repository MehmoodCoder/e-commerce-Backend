import ErrorHandler from "../utils/Errorhandler.js";
import asyncErrorHandler from "../middlewares/asyncErrorHandler.js";
import User from "../models/userModel.js";

export const RegisterUser = asyncErrorHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is public id",
      url: "profileImage",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    jwtToken: token,
    data: user,
  });
});
