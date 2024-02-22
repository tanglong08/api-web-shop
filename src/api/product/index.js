const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../../db");
const authenticateToken = require("../../utils/jwt");

const productRouter = express.Router();
productRouter.use(bodyParser.json());

productRouter.get("/list-product", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "products"');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = productRouter;
