import { Router } from "express";
import { pool } from "../db.js";
import { deleteConsulta, getConsulta, getConsultaId, postConsulta, putConsulta } from "../controllers/consultasController.js";

const routerConsultas = Router();

// Obtener todas las consultas
routerConsultas.get("/consulta", getConsulta);

// Obtener una consulta por ID
routerConsultas.get("/consulta/:id", getConsultaId);

// Crear una consulta
routerConsultas.post("/consulta", postConsulta);

// Actualizar una consulta por ID
routerConsultas.put("/consulta/:id", putConsulta);

// Eliminar una consulta por ID
routerConsultas.delete("/consulta/:id", deleteConsulta);

export default routerConsultas;
