const express = require("express");
const router = express.Router();

// POST /api/products/updateDescription
router.post("/updateDescription", async (req, res) => {
  const { productId, newDescription } = req.body;

  if (!productId || !newDescription) {
    return res.status(400).json({ error: "Missing productId or newDescription" });
  }

  try {
    // Replace with actual DB update logic later
    console.log(`Updating product ${productId} with new description: ${newDescription}`);

    res.json({
      message: `Product ${productId} description updated successfully.`,
      productId,
      newDescription,
    });
  } catch (err) {
    res.status(500).json({ error: "Database update failed" });
  }
});

module.exports = router;