import express from "express"
import routerUsuarios from "./routes/usuariosRoute.js";
import routerAdmins from "./routes/adminRoute.js";
import routerCitas from "./routes/citasMedicasRoute.js";
import routerConsultas from "./routes/consultasRoute.js";
import routerHistorial from "./routes/historialMedicoRoute.js";
import routerMedicos from "./routes/medicosRoute.js";
import morgan from "morgan";




const app = express();
app.use(express.json());


app.use(morgan("dev"))
app.use(routerAdmins);
app.use(routerCitas);
app.use(routerConsultas);
app.use(routerHistorial);
app.use(routerAdmins);
app.use(routerMedicos);
app.use(routerUsuarios);


app.listen(3000);
console.log("servidor encendido en el puerto 3000")