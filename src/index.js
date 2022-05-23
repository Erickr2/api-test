const express = require("express");
const app = express();
const port = 3000;

/*
 * Enpoints para trabajar fake crud mediante protocolo HTTP
 *
 * Se trabajara con una base de datos Fake la cual viene dentro de la sig ruta:
 *  "src/db/fakeUsers.db.js
 */

// GET ALL
//Mostrar todos los usuarios
app.get("/users", (req, res) => {
  res.send("Hello Word, this is my first API REST with Node and Express js");
});

// GET ALL USERS BY LANGUAJE
// Se debe recibir por parametro el lenguaje que sera la busqueda para filtrar de nuestra bd
app.get("/users-by-languaje", (req, res) => {
  res.send("Hello Word, this is my first API REST with Node and Express js");
});

// UPDATE USERS
// Se debe enviar el id del usuario que se quiere actualizar y la información para actualizar la bd
app.put("/update-user", (req, res) => {
  res.send("Hello Word, this is my first API REST with Node and Express js");
});

// CREATE USER
// Se debe enviar la información para dar el alta a un nuevo usuario dentro de la bd
app.post("/create-user", (req, res) => {
  res.send("Hello Word, this is my first API REST with Node and Express js");
});

// DELETE USER
// Se debe enviar la información para eliminar un usuario dentro de la bd por nombre o id
app.delete("/create-user", (req, res) => {
  res.send("Hello Word, this is my first API REST with Node and Express js");
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
  console.log(`Example app listening on port ${port}`);
});
