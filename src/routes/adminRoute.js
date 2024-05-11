import { Router } from "express";
import { pool } from "../db.js";
import { getAdmin, getAdminId } from "../controllers/adminController.js";

const routerAdmins = Router();

//consultar un admin
routerAdmins.get("/admin/", getAdmin )



//consultar un admin por Id
routerAdmins.get("/admin/:id", getAdminId)



export default routerAdmins