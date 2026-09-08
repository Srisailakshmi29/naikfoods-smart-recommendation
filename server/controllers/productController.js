const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};


// Get single product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};


// Smart Recommendation Engine
const getRecommendations = async (req, res) => {
  try {
    const { taste, purpose, budget } = req.body;

    if (!taste || !purpose || !budget) {
      return res.status(400).json({
        message: "Taste, purpose and budget are required.",
      });
    }

    const products = await Product.find();

    const userBudget = Number(budget);

    const recommendations = products.map((product) => {
      let score = 0;

      const reasons = [];

      // -------------------------
      // Taste Match - 40%
      // -------------------------

      if (
        product.taste &&
        product.taste.includes(taste)
      ) {
        score += 40;

        reasons.push("Taste match");
      }


      // -------------------------
      // Purpose Match - 30%
      // -------------------------

      if (
        product.healthType &&
        product.healthType.includes(purpose)
      ) {
        score += 30;

        reasons.push("Matches your purpose");
      }


      // -------------------------
      // Budget Match - 20%
      // -------------------------

      if (product.price <= userBudget) {
        score += 20;

        reasons.push("Within your budget");
      }


      // -------------------------
      // Rating - 10%
      // -------------------------

      const ratingScore =
        (product.rating / 5) * 10;

      score += ratingScore;


      // -------------------------
      // Final Score
      // -------------------------

      const matchPercentage = Math.round(
        Math.min(score, 100)
      );


      // If no direct matches
      if (reasons.length === 0) {
        reasons.push(
          "Recommended based on product rating"
        );
      }


      return {
        ...product.toObject(),

        recommendationScore: Number(
          score.toFixed(2)
        ),

        matchPercentage,

        recommendationReasons: reasons,
      };
    });


    // Highest match first
    recommendations.sort(
      (a, b) =>
        b.recommendationScore -
        a.recommendationScore
    );


    // Return top 5
    res.status(200).json(
      recommendations.slice(0, 5)
    );

  } catch (error) {
    console.error(
      "Recommendation error:",
      error
    );

    res.status(500).json({
      message: "Recommendation failed",
      error: error.message,
    });
  }
};


module.exports = {
  getProducts,
  getProductById,
  getRecommendations,
};