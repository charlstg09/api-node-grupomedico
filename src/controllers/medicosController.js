import { pool } from "../db.js";


export const getMedico = async (req, res) => {
    const {rows} = await pool.query("SELECT * FROM MEDICOS")
    res.json(rows)
}

export const getMedicoId = async (req,res) => {
    const {id} = req.params;
    const {rows} = await pool.query("select * from medicos where idMedico = $1", [id])
    res.json(rows)
}


export const postMedico = async (req,res)=> {
    
    try {
        const {nombre,apellido,correo,numero,cedula,especialidad} = req.body;
    const result = await pool.query("INSERT INTO medicos (nombre, apellido, correo, numero,cedula,especialidad) VALUES ($1, $2, $3, $4, $5, $6) ", [nombre,apellido,correo,numero,cedula,especialidad]);
    res.status(201).json(result.rows[0])
    console.log("Medico creado con exito")
    }
    catch (e) {
        console.log("error al crear el medico:" ,e)
        res.status(500).json({message: "error en el servidor"})
    }
}

export const putMedico =  async (req,res) => {
    try {

        const {id} = req.params;
    const {nombre, apellido, correo,numero,cedula,especialidad, } = req.body;
    const result = await pool.query("UPDATE MEDICOS SET  nombre=$1, apellido=$2, correo=$3, numero=$4, cedula=$5, especialidad=$6 where idMedico = $7   RETURNING *", [nombre,apellido,correo,numero,cedula,especialidad, id] )
    if(result.rowCount === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(result.rows[0])
    }
    catch (e) {
        res.status(500).json({message: "Error interno del servidor"})
        console.log("erro al modificar un medico: ", e)
    }


    
}



export const deleteMedico =  async(req,res) => {
    const {id} = req.params;
    const {rowCount} = await pool.query("DELETE FROM MEDICOS WHERE idMedico = $1", [id])
    if(rowCount === 0) {
        console.log("medico no encontrado")
        res.json({message: "Medico borrado correctamente no encontrado"})
    }
    else {
        res.json({message: "Medico borrado correctamente"})
    }
    

}