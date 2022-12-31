const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");


router.get("/usuarios", (req, res) => {
    const query =
      "select * from usuarios";
    mySqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });

module.exports = router;