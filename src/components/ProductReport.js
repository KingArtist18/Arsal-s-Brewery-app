import React from "react";
import { Typography, Box } from "@mui/material";

function ProductReport() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Product Report
      </Typography>
      <Typography>
        This is where your product report will be displayed.
      </Typography>
    </Box>
  );
}

export default ProductReport;