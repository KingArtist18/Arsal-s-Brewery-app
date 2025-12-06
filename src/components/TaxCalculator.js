// src/components/TaxCalculator.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";

function TaxCalculator() {
  const [state, setState] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [result, setResult] = useState("");

  // Example tax rates (you can expand later)
  const taxRates = {
    ON: 0.13, // Ontario
    QC: 0.14975, // Quebec
    BC: 0.12, // British Columbia
    AB: 0.05, // Alberta
  };

  const handleCalculate = () => {
    if (!state || !subtotal) {
      setResult("❌ Please enter both state and subtotal.");
      return;
    }

    const rate = taxRates[state.toUpperCase()];
    if (!rate) {
      setResult(`❌ No tax rate found for "${state}".`);
      return;
    }

    const subtotalNum = parseFloat(subtotal);
    if (isNaN(subtotalNum)) {
      setResult("❌ Subtotal must be a number.");
      return;
    }

    const tax = subtotalNum * rate;
    const total = subtotalNum + tax;

    setResult(`✅ Tax: $${tax.toFixed(2)} | Total: $${total.toFixed(2)}`);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Calculate Tax
      </Typography>
      <TextField
        label="State (e.g., ON)"
        fullWidth
        margin="normal"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <TextField
        label="Subtotal"
        fullWidth
        margin="normal"
        value={subtotal}
        onChange={(e) => setSubtotal(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleCalculate}>
        Calculate Tax
      </Button>
      {result && (
        <Alert severity={result.startsWith("✅") ? "success" : "error"} sx={{ mt: 2 }}>
          {result}
        </Alert>
      )}
    </Box>
  );
}

export default TaxCalculator;