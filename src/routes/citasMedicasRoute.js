import { Router } from "express";
import { pool } from "../db.js";
import { deleteCitas, getCitas, getCitasId, postCitas, putCitas } from "../controllers/citasMedicasController.js";

const routerCitas = Router();

// Obtener todas las citas médicas
routerCitas.get("/citas",  getCitas);

// Obtener una cita médica por ID
routerCitas.get("/citas/:id", getCitasId );

// Crear una cita médica
routerCitas.post("/citas", postCitas);

// Actualizar una cita médica por ID
routerCitas.put("/citas/:id", putCitas);

// Eliminar una cita médica por ID
routerCitas.delete("/citas/:id", deleteCitas);

export default routerCitas;

