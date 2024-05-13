import { Router } from "express";
import { pool } from "../db.js";
import { deleteHistorial, getHistorial, getHistorialByMedico, getHistorialByUsuario, getHistorialId, postHistorial, putHistorial } from "../controllers/historialMedicoController.js";

const routerHistorial = Router();

// Obtener todos los historiales
routerHistorial.get("/historial", getHistorial);

// Obtener un historial por ID
routerHistorial.get("/historial/:id", getHistorialId);

// Crear un historial médico
routerHistorial.post("/historial", postHistorial);

//Obtener todos los resultados filtrados por un medico 
routerHistorial.get("/historial/medico/:idMedico", getHistorialByMedico)

//obtener todos los resultados filtrados por un usuario
routerHistorial.get("/historial/usuario/:idUsuario", getHistorialByUsuario)

// Actualizar un historial por ID
routerHistorial.put("/historial/:id", putHistorial);

// Eliminar un historial por ID
routerHistorial.delete("/historial/:id", deleteHistorial);

export default routerHistorial;
