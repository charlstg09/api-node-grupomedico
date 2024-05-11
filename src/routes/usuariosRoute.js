import { Router } from "express";
import { pool } from "../db.js";
import { deleteUsuarios, getUsuarios, getUsuariosId, postUsuarios, putUsuarios } from "../controllers/usuariosController.js";

const routerUsuarios = Router();


//obtener una lista de usuarios
routerUsuarios.get("/usuarios", getUsuarios )

//obtener un usuario por id
routerUsuarios.get("/usuarios/:id", getUsuariosId)

//crear un usuario
routerUsuarios.post("/usuarios", postUsuarios);

//modificar un usuario por id
routerUsuarios.put("/usuarios/:id", putUsuarios);

//eliminar un usuario por id
routerUsuarios.delete("/usuarios/:id", deleteUsuarios)

export default routerUsuarios
