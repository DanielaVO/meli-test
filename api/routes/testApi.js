var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.send("Bienvenido a la API de Mercado Libre!");
});

module.exports = router;