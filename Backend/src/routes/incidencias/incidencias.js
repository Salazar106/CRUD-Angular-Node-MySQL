const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");

//? ---------buscamos todos las incidencias---------
router.get("/incidencias", (req, res) => {
  const query = "SELECT i.id, i.cedula , i.fecha,i.descripcion, u.nombre, if(estado=0,'cerrado','abierto') as estado, i.estado as nestado, i.asesor FROM incidencias i join usuarios u on u.id = i.asesor";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//?---------buscar incidencia por id-------------
router.get("/incidencia/:id", (req, res) => {
  const { id } = req.params;
  query = "SELECT i.id, i.cedula , i.fecha,i.descripcion, u.nombre, if(estado=0,'cerrado','abierto') as estado FROM incidencias i join usuarios u on u.id = i.asesor WHERE i.id=?"
  mySqlConnection.query(
    query,
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//?---------buscar incidencia por id-------------
router.get("/estadoAsesor/:id", (req, res) => {
  const { id } = req.params;
  query = "SELECT i.estado,if(estado=0,'cerrado','abierto')as estado1, i.asesor, u.nombre  FROM incidencias i join usuarios u on u.id = i.asesor where i.id=?"
  mySqlConnection.query(
    query,
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? ---------creamos una incidencia nueva---------

router.post("/newIncidencia", (req, res) => {
  const { cedula, fecha, descripcion, asesor } = req.body;
  mySqlConnection.query(
    "INSERT INTO incidencias(cedula,fecha,descripcion,asesor) VALUES(?,?,?,?)",
    [cedula, fecha, descripcion, asesor],
    (err, rows, fields) => {
      if (!err) {
        res.json({
          status: "Incidencia Creada correctamente",
          statusCode: 200,
        });
      } else {
        console.log(err);
      }
    }
  );
});

//? ---------editar incidencias---------

router.put("/editIncidencia/:id", (req, res) => {
  const { cedula, descripcion, asesor, estado } = req.body;
  const {id}=req.params;

  mySqlConnection.query(
    "UPDATE incidencias SET cedula=?, descripcion=?, asesor=?, estado=? WHERE id=?",
    [cedula, descripcion, asesor, estado, id],
    (err,rows,fields)=>{
        if (!err) {
            res.json({ status: "incidencia actualizada" });
          } else {
            console.log(err);
          }
    }
  )
});

//? ---------eliminar una incidencia---------

router.delete("/deleteIncidencia/:id", (req, res) => {
    const { id } = req.params;
    mySqlConnection.query(
      "DELETE FROM incidencias WHERE id = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "incidencia eliminada" });
        } else {
          console.log(err);
        }
      }
    );
  });

  module.exports = router;