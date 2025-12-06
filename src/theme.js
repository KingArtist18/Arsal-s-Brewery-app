// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },   // Brewery blue
    secondary: { main: "#f57c00" }, // Warm amber accent
    background: { default: "#f5f5f5" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
});

export default theme;