const mongoose = require("mongoose");


// ================= PRODUCT VALIDATION =================
function validateProduct(req, res, next) {
  const { name, price, stock } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "Product name is required"
    });
  }

  if (price === undefined || typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      message: "Product price must be a positive number"
    });
  }

  if (stock !== undefined && (typeof stock !== "number" || stock < 0)) {
    return res.status(400).json({
      message: "Stock must be a non-negative number"
    });
  }

  next();
}


// ================= USER VALIDATION =================
function validateUser(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "User name is required"
    });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({
      message: "Valid email is required"
    });
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long"
    });
  }

  next();
}


// ================= CART VALIDATION =================
function validateCart(req, res, next) {
  const { user, items } = req.body;

  if (!user || !mongoose.Types.ObjectId.isValid(user)) {
    return res.status(400).json({
      message: "Valid user ID is required"
    });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: "Cart must contain at least one item"
    });
  }

  for (let item of items) {
    if (!item.product || !mongoose.Types.ObjectId.isValid(item.product)) {
      return res.status(400).json({
        message: "Each cart item must have a valid product ID"
      });
    }

    if (item.quantity === undefined || typeof item.quantity !== "number" || item.quantity <= 0) {
      return res.status(400).json({
        message: "Each cart item must have a valid positive quantity"
      });
    }
  }

  next();
}


// ================= ORDER VALIDATION =================
function validateOrder(req, res, next) {
  const { user, products, totalAmount } = req.body;

  if (!user || !mongoose.Types.ObjectId.isValid(user)) {
    return res.status(400).json({
      message: "Valid user ID is required"
    });
  }

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({
      message: "Order must contain at least one product"
    });
  }

  for (let item of products) {
    if (!item.product || !mongoose.Types.ObjectId.isValid(item.product)) {
      return res.status(400).json({
        message: "Each order item must have a valid product ID"
      });
    }

    if (item.quantity === undefined || typeof item.quantity !== "number" || item.quantity <= 0) {
      return res.status(400).json({
        message: "Each order item must have a valid positive quantity"
      });
    }
  }

  if (totalAmount === undefined || typeof totalAmount !== "number" || totalAmount <= 0) {
    return res.status(400).json({
      message: "Total amount must be a positive number"
    });
  }

  next();
}


module.exports = {
  validateProduct,
  validateUser,
  validateCart,
  validateOrder
};