import { Router } from "express";
import { pool } from "../db.js";
import { deleteHistorial, getHistorial, getHistorialId, postHistorial, putHistorial } from "../controllers/historialMedicoController.js";

const routerHistorial = Router();

// Obtener todos los historiales
routerHistorial.get("/historial", getHistorial);

// Obtener un historial por ID
routerHistorial.get("/historial/:id", getHistorialId);

// Crear un historial médico
routerHistorial.post("/historial", postHistorial);

// Actualizar un historial por ID
routerHistorial.put("/historial/:id", putHistorial);

// Eliminar un historial por ID
routerHistorial.delete("/historial/:id", deleteHistorial);

export default routerHistorial;
