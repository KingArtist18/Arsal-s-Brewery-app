// src/Layout.js
import React from "react";
import { AppBar, Toolbar, Typography, Container, Paper } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      {/* Top Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">🍺 BB Brewery App</Typography>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          {children}
        </Paper>
      </Container>

      {/* Footer */}
      <Typography align="center" sx={{ mt: 4, color: "gray" }}>
        © 2025 BB Brewery — Built by Arsal
      </Typography>
    </>
  );
}

export default Layout;