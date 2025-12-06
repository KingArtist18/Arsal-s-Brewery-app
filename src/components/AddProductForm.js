import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    if (!productId || !name || !description || !price || !quantity) {
      setMessage("❌ Please fill in all fields.");
      return;
    }

    const newProduct = {
      id: productId,
      name,
      description,
      price,
      quantity,
    };

    setProducts([...products, newProduct]);
    setMessage(`✅ Product "${name}" added successfully.`);

    // Clear form fields
    setProductId("");
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add Product
      </Typography>

      <TextField label="Product ID" fullWidth margin="normal" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Description" fullWidth margin="normal" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField label="Price" fullWidth margin="normal" value={price} onChange={(e) => setPrice(e.target.value)} />
      <TextField label="Quantity" fullWidth margin="normal" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleAdd}>
        Add Product
      </Button>

      {message && (
        <Alert severity={message.startsWith("✅") ? "success" : "error"} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}

      {products.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Product List</Typography>
          <List>
            {products.map((p) => (
              <ListItem key={p.id}>
                <ListItemText
                  primary={`${p.name} (ID: ${p.id})`}
                  secondary={`Description: ${p.description} | Price: $${p.price} | Qty: ${p.quantity}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default AddProductForm;