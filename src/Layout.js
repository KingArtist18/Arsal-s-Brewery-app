// src/Layout.js
import React from "react";
import { Container, Paper, Typography, Box } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      {/* Header with Mug Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#a1887f", // coffee brown
          padding: "20px",
          borderBottom: "2px solid #6d4c41",
        }}
      >
        <img
          src="/logo.png" // your mug image
          alt="BB Brewery Logo"
          style={{ height: "60px", marginRight: "20px" }}
        />
        <Typography
          variant="h4"
          sx={{ color: "#fff", fontWeight: 600 }}
        >
          BB Brewery App
        </Typography>
      </Box>

      {/* Page Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: "#fff8f0",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          }}
        >
          <Box sx={{ minHeight: "60vh" }}>{children}</Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Typography
        align="center"
        variant="body2"
        sx={{ mt: 4, color: "text.secondary" }}
      >
        © 2025 BB Brewery — Built by Arsal
      </Typography>
    </>
  );
}

export default Layout;