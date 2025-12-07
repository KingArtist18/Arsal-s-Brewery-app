import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Button } from "@mui/material";
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
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              Task 1: Update Product
            </Button>
            <Button color="inherit" component={Link} to="/add">
              Task 2: Add Product
            </Button>
            <Button color="inherit" component={Link} to="/tax">
              Task 3: Tax Calculator
            </Button>
            <Button color="inherit" component={Link} to="/basket">
              Task 4: Basket Status
            </Button>
            <Button color="inherit" component={Link} to="/item">
              Task 5: Add Item
            </Button>
            <Button color="inherit" component={Link} to="/sale">
              Task 6: Sale Status
            </Button>
            <Button color="inherit" component={Link} to="/report">
              Task 7: Reports Menu
            </Button>
          </Toolbar>
        </AppBar>

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
