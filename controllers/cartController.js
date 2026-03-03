const Cart = require("../models/cart");

// CREATE CART
exports.createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL CARTS
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET CART BY ID
exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart)
      return res.status(404).json({ message: "Not found" });

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE CART
exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCart)
      return res.status(404).json({ message: "Not found" });

    res.json(updatedCart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE CART
exports.deleteCart = async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);

    if (!deletedCart)
      return res.status(404).json({ message: "Not found" });

    res.json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};