const express = require("express");
const router = express.Router();

// Middleware para la ruta '/api/signup'
router.get("/", (req, res) => {
  res.send("user");
});

module.exports = router;
