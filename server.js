const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // allow frontend to connect

// POST /api/updateDescription
app.post("/api/updateDescription", async (req, res) => {
  const { productId, newDescription } = req.body;

  let connection;
  try {
    connection = await oracledb.getConnection({
    user: "COMP214_F25_ers_65",
    password: "password",
    connectionString: "199.212.26.208:1521/SQLD"   // use SID here
});

    const result = await connection.execute(
      `UPDATE bb_product SET description = :desc WHERE idproduct = :id`,
      { desc: newDescription, id: productId },
      { autoCommit: true }
    );

    if (result.rowsAffected === 0) {
      return res.status(404).json({ status: "error", message: "Product not found." });
    }

    res.json({ status: "success", rowsAffected: result.rowsAffected });
  } catch (err) {
    console.error("Oracle error:", err);
    res.status(500).json({ status: "error", message: err.message });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
});

// Start server
app.listen(5000, () => {
  console.log("✅ Express server running on http://localhost:5000");
});