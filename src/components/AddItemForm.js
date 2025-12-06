import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

function AddItemForm() {
  const [productId, setProductId] = useState("");
  const [basketId, setBasketId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [form, setForm] = useState("");
  const [message, setMessage] = useState("");

  const handleAddItem = () => {
    if (!productId || !basketId || !price || !quantity || !size || !form) {
      setMessage("❌ Please fill in all fields.");
      return;
    }

    // Simulate success (backend wiring comes later)
    setMessage(`✅ Item ${productId} added to Basket ${basketId} successfully.`);

    // Clear fields
    setProductId("");
    setBasketId("");
    setPrice("");
    setQuantity("");
    setSize("");
    setForm("");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add Item to Basket
      </Typography>

      <TextField
        label="Product ID"
        fullWidth
        margin="normal"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <TextField
        label="Basket ID"
        fullWidth
        margin="normal"
        value={basketId}
        onChange={(e) => setBasketId(e.target.value)}
      />
      <TextField
        label="Price"
        type="number"
        fullWidth
        margin="normal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        label="Quantity"
        type="number"
        fullWidth
        margin="normal"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <TextField
        label="Size"
        fullWidth
        margin="normal"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <TextField
        label="Form"
        fullWidth
        margin="normal"
        value={form}
        onChange={(e) => setForm(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleAddItem}
      >
        Add Item
      </Button>

      {message && (
        <Alert
          severity={message.startsWith("✅") ? "success" : "error"}
          sx={{ mt: 2 }}
        >
          {message}
        </Alert>
      )}
    </Box>
  );
}

export default AddItemForm;