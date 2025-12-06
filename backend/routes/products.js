 const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Function ck_Product_SF
router.get('/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const conn = await db.getConnection();
    const result = await conn.execute(
      `BEGIN :info := ck_Product_SF(:id); END;`,
      { id: productId, info: { dir: db.BIND_OUT, type: db.STRING } }
    );
    res.json({ productId, info: result.outBinds.info });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching product info');
  }
});

// ✅ Procedure ck_Product_SP
router.post('/:id/update', async (req, res) => {
  const productId = req.params.id;
  try {
    const conn = await db.getConnection();
    await conn.execute(
      `BEGIN ck_Product_SP(:id); END;`,
      { id: productId }
    );
    res.json({ message: `Product ${productId} updated successfully` });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product');
  }
});

module.exports = router;