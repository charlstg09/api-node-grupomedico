import { Router } from "express";
import { pool } from "../db.js";
import { deleteMedico, getMedico, getMedicoId, postMedico, putMedico } from "../controllers/medicosController.js";

const routerMedicos = Router();

//obtener la lista de los medicos
routerMedicos.get("/medicos", getMedico)

//obtener a un medico por id
routerMedicos.get("/medicos/:id", getMedicoId)
//Crear un medico
routerMedicos.post("/medicos", postMedico)

//actualizar un medico por id
routerMedicos.put("/medicos/:id", putMedico)

//borrar un medico por id
routerMedicos.delete("/medicos/:id", deleteMedico)



export default routerMedicos