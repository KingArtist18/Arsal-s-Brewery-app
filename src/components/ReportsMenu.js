import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ReportsMenu() {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Reports Menu
      </Typography>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => navigate("/report/product")}
      >
        Product Report
      </Button>

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => navigate("/report/basket")}
      >
        Basket Report
      </Button>
    </Box>
  );
}

export default ReportsMenu;