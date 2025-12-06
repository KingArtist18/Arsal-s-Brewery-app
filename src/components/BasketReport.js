import React from "react";
import { Typography, Box } from "@mui/material";

function BasketReport() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Basket Report
      </Typography>
      <Typography>
        This is where your basket report will be displayed.
      </Typography>
    </Box>
  );
}

export default BasketReport;