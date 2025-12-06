const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Function ck_Report1_SF
router.get('/report1', async (req, res) => {
  try {
    const conn = await db.getConnection();
    const result = await conn.execute(
      `BEGIN :output := ck_Report1_SF; END;`,
      { output: { dir: db.BIND_OUT, type: db.STRING } }
    );
    res.json({ report: result.outBinds.output });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating report 1');
  }
});

// ✅ Function ck_Report2_SF
router.get('/report2', async (req, res) => {
  try {
    const conn = await db.getConnection();
    const result = await conn.execute(
      `BEGIN :output := ck_Report2_SF; END;`,
      { output: { dir: db.BIND_OUT, type: db.STRING } }
    );
    res.json({ report: result.outBinds.output });
    await conn.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating report 2');
  }
});

module.exports = router;