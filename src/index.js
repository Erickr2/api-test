const express = require("express");
const app = express.Router();
const port = 3000; 

const mysqlConnection = require('../src/db/fakeUsers.db')

/*
 * Enpoints para trabajar fake crud mediante protocolo HTTP
 *
 * Se trabajara con una base de datos Fake la cual viene dentro de la sig ruta:
 *  "src/db/fakeUsers.db.js
 */

// GET ALL
//Mostrar todos los usuarios
app.get("/", (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if(!err){
      res.json(rows)
    }else{
      console.log(err)
    }
  })
});

// GET ALL USERS BY LANGUAJE
// Se debe recibir por parametro el lenguaje que sera la busqueda para filtrar de nuestra bd
app.get("/:languaje", (req, res) => {
  if(!err){
    res.send({lenguaje: `${req.params.lenguaje}`})
  }else{
    console.log(err)
  }
});

// UPDATE USERS
// Se debe enviar el id del usuario que se quiere actualizar y la información para actualizar la bd
app.put('/:id', (req, res) => {
  const {id, name, skills} = req.body;
  mysqlConnection.query(query, [id, name, skills], (err, rows, fields) => {
      if(!err) {
          res.json({status: 'usuario agregado correctamente'});
      } else {
          console.log(err);
      }
  });
});


// CREATE USER
// Se debe enviar la información para dar el alta a un nuevo usuario dentro de la bd
app.post('/', (req, res ) => {
  const {id, name, skills} = req.body;

  const query = `
  
  CALL users(?, ?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [id, name, skills], (err, rows, fields) => {
      if(!err){
          res.json({status: 'usuario guardado'});
      } else {
          console.log(err);
      }
  });
});

// DELETE USER
// Se debe enviar la información para eliminar un usuario dentro de la bd por nombre o id
app.delete("/:id", (req, res) => {
  const {id} = req.params;
  mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
    if(!err){
      res.json({status: 'usuario eliminado'})
    }else{
      console.log(err)
    }
  })
});

/*
 * P U N T O S  E X T R A S
 *
 * Se puede generar una organizacion del codigo de manera mas ordenada creando las carpetas que considere necesaria.
 *
 * Se requiere manejar la variable del "port" de manera dinamica, para evitar estar haciendo el cambio en código duro.
 *
 * Agregar tipado de datos en variables o funciones.
 *
 * Agregar una documentacion de la API.
 *
 * Utilizar de manera adecuada y limpia commits en el repositorio
 */

app.listen(port, () => {
  console.log(`puerto corriendo en: ${port}`);
});
