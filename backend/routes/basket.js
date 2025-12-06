const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Function ck_Basket_SF
router.get('/:id', async (req, res) => {
  const basketId = req.params.id;
  try {
    const conn = await db.getConnection();
    const result = await conn.execute(
      `BEGIN :details := ck_Basket_SF(:id); END;`,
      { id: basketId, details: { dir: db.BIND_OUT, type: db.STRING } }
    );
    res.json({ basketId, details: result.outBinds.details });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching basket details');
  }
});

// ✅ Procedure ck_Basket_SP
router.post('/:id/update', async (req, res) => {
  const basketId = req.params.id;
  try {
    const conn = await db.getConnection();
    await conn.execute(
      `BEGIN ck_Basket_SP(:id); END;`,
      { id: basketId }
    );
    res.json({ message: `Basket ${basketId} updated successfully` });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating basket');
  }
});

module.exports = router;