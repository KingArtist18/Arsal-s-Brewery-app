import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

function SaleStatusForm() {
  const [productId, setProductId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleCheckStatus = () => {
    if (!productId || !date) {
      setStatus("❌ Please fill in both fields.");
      return;
    }

    // Simulate sale status logic (backend wiring comes later)
    const isOnSale = productId.startsWith("PROD") && date === "2025-12-04";
    setStatus(
      isOnSale
        ? `✅ Product ${productId} was ON SALE on ${date}.`
        : `ℹ️ Product ${productId} was NOT on sale on ${date}.`
    );

    // Optionally clear fields
    // setProductId("");
    // setDate("");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Check Sale Status
      </Typography>

      <TextField
        label="Product ID"
        fullWidth
        margin="normal"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <TextField
        label="Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleCheckStatus}
      >
        Check Sale Status
      </Button>

      {status && (
        <Alert
          severity={
            status.startsWith("✅")
              ? "success"
              : status.startsWith("❌")
              ? "error"
              : "info"
          }
          sx={{ mt: 2 }}
        >
          {status}
        </Alert>
      )}
    </Box>
  );
}

export default SaleStatusForm;