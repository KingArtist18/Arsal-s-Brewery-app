const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Function ck_Sale_SF
router.get('/:id/status', async (req, res) => {
  const orderId = req.params.id;
  try {
    const conn = await db.getConnection();
    const result = await conn.execute(
      `BEGIN :status := ck_Sale_SF(:id); END;`,
      { id: orderId, status: { dir: db.BIND_OUT, type: db.STRING } }
    );
    res.json({ orderId, status: result.outBinds.status });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error checking order status');
  }
});

// ✅ Procedure ck_Sale_SP
router.post('/:id/update', async (req, res) => {
  const orderId = req.params.id;
  try {
    const conn = await db.getConnection();
    await conn.execute(
      `BEGIN ck_Sale_SP(:id); END;`,
      { id: orderId }
    );
    res.json({ message: `Order ${orderId} updated successfully` });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating order');
  }
});

module.exports = router; 