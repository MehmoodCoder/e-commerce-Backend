import Product from "../models/productModel.js";
import ErrorHandler from "../utils/Errorhandler.js";
import catchAsyncErrors from "../middlewares/asyncErrorHandler.js";
import ApiFeatures from "../utils/ApiFeatures.js";

export const createProduct = catchAsyncErrors(async (req, res, next) => {

  req.body.user = req.user.id

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product,
  });
});

export const getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 20;
  const ProductCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find({}), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    data: products,
    count: ProductCount,
  });
});

export const ProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

export const UpdateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    updatedProduct: product,
  });
});

export const DeleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
