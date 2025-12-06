const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Root endpoint to confirm backend is running
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// ✅ Import routes
const ordersRoutes = require('./routes/orders');
const productsRoutes = require('./routes/products');
const basketRoutes = require('./routes/basket');
const reportsRoutes = require('./routes/reports');

// ✅ Mount routes
app.use('/orders', ordersRoutes);
app.use('/products', productsRoutes);
app.use('/basket', basketRoutes);
app.use('/reports', reportsRoutes);

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});