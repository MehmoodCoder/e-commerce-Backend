import ErrorHandler from "../utils/Errorhandler";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.statusCode(err.statusCode).json({
    success: false,
    error: err,
  });
};
