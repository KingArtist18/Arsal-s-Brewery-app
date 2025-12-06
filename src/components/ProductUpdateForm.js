import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import api from "../services/api"; // Axios config

function ProductUpdateForm() {
  const [productId, setProductId] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [updatedProduct, setUpdatedProduct] = useState(null);

  const handleUpdate = async () => {
    setMessage("");
    setError("");
    setUpdatedProduct(null);

    if (!productId || !newDescription) {
      setError("❌ Please fill in both fields.");
      return;
    }

    try {
      const res = await api.post("/products/updateDescription", {
        productId,
        newDescription,
      });
      setMessage("✅ Product description updated successfully.");
      setUpdatedProduct(res.data); // capture backend response
    } catch (err) {
      setError(`❌ Failed to update product description: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Update Product Description
      </Typography>
      <TextField
        label="Product ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <TextField
        label="New Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleUpdate}>
        Update
      </Button>
      {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

      {updatedProduct && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Updated Product Info</Typography>
          <ul>
            <li>ID: {updatedProduct.productId}</li>
            <li>Description: {updatedProduct.newDescription}</li>
          </ul>
        </Box>
      )}
    </Box>
  );
}

export default ProductUpdateForm;