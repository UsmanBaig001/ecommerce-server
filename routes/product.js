const express = require("express");
const router = express.Router();
const Product = require("../models/products");

// Add Product Route
router.post("/add", async (req, res) => {
  const {
    productTitle,
    productDescription,
    metaTitle,
    metaDescription,
    p_price,
  } = req.body;

  try {
    const newProduct = new Product({
      productTitle,
      productDescription,
      metaTitle,
      metaDescription,
      p_price,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding product", error: error.message });
  }
});

module.exports = router;
