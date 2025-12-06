import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Layout from "./Layout";

// Components
import ProductUpdateForm from "./components/ProductUpdateForm";
import AddProductForm from "./components/AddProductForm";
import TaxCalculator from "./components/TaxCalculator";
import BasketStatusForm from "./components/BasketStatusForm";
import AddItemForm from "./components/AddItemForm";
import SaleStatusForm from "./components/SaleStatusForm";
import ReportsMenu from "./components/ReportsMenu";
import ProductReport from "./components/ProductReport";
import BasketReport from "./components/BasketReport";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Navigation Bar */}
        <nav style={{ padding: "1rem", background: "#1976d2" }}>
          <Link to="/" style={{ marginRight: "1rem", color: "white" }}>
            Task 1: Update Product
          </Link>
          <Link to="/add" style={{ marginRight: "1rem", color: "white" }}>
            Task 2: Add Product
          </Link>
          <Link to="/tax" style={{ marginRight: "1rem", color: "white" }}>
            Task 3: Tax Calculator
          </Link>
          <Link to="/basket" style={{ marginRight: "1rem", color: "white" }}>
            Task 4: Basket Status
          </Link>
          <Link to="/item" style={{ marginRight: "1rem", color: "white" }}>
            Task 5: Add Item
          </Link>
          <Link to="/sale" style={{ marginRight: "1rem", color: "white" }}>
            Task 6: Sale Status
          </Link>
          <Link to="/report" style={{ color: "white" }}>
            Task 7: Reports Menu
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <ProductUpdateForm />
              </Layout>
            }
          />
          <Route
            path="/add"
            element={
              <Layout>
                <AddProductForm />
              </Layout>
            }
          />
          <Route
            path="/tax"
            element={
              <Layout>
                <TaxCalculator />
              </Layout>
            }
          />
          <Route
            path="/basket"
            element={
              <Layout>
                <BasketStatusForm />
              </Layout>
            }
          />
          <Route
            path="/item"
            element={
              <Layout>
                <AddItemForm />
              </Layout>
            }
          />
          <Route
            path="/sale"
            element={
              <Layout>
                <SaleStatusForm />
              </Layout>
            }
          />
          <Route
            path="/report"
            element={
              <Layout>
                <ReportsMenu />
              </Layout>
            }
          />
          <Route
            path="/report/product"
            element={
              <Layout>
                <ProductReport />
              </Layout>
            }
          />
          <Route
            path="/report/basket"
            element={
              <Layout>
                <BasketReport />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
