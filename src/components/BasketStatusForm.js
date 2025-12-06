import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

function BasketStatusForm() {
  const [basketId, setBasketId] = useState("");
  const [date, setDate] = useState("");
  const [shipper, setShipper] = useState("");
  const [tracking, setTracking] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    if (!basketId || !date || !shipper || !tracking) {
      setMessage("❌ Please fill in all fields.");
      return;
    }

    // For now, just simulate success (backend wiring comes later)
    setMessage(`✅ Basket ${basketId} updated successfully.`);

    // Clear fields
    setBasketId("");
    setDate("");
    setShipper("");
    setTracking("");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Update Basket Status
      </Typography>

      <TextField
        label="Basket ID"
        fullWidth
        margin="normal"
        value={basketId}
        onChange={(e) => setBasketId(e.target.value)}
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
      <TextField
        label="Shipper"
        fullWidth
        margin="normal"
        value={shipper}
        onChange={(e) => setShipper(e.target.value)}
      />
      <TextField
        label="Tracking Number"
        fullWidth
        margin="normal"
        value={tracking}
        onChange={(e) => setTracking(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleUpdate}
      >
        Update Status
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

export default BasketStatusForm;