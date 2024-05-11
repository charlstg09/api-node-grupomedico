import { pool } from "../db.js";

export const getUsuarios = async (req,res) => {
    const {rows} = await pool.query("SELECT * FROM USUARIOS")
    res.json(rows)
}

export const getUsuariosId = async (req,res) => {
    const {id} = req.params;
    const rows = await pool.query("SELECT * FROM USUARIOS WHERE idUsuario = $1", [id])
    if (rows.rows.length > 0) {
        const userData = rows.rows[0];
        res.json(userData);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
}

export const postUsuarios = async (req, res) => {
    try {
        const { nombre, apellido, correo, numero, estatura, peso, alergias, tipoSangre } = req.body;
        const result = await pool.query("INSERT INTO usuarios (nombre, apellido, correo, numero, estatura, peso, alergias, tipoSangre) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [nombre, apellido, correo, numero, estatura, peso, alergias, tipoSangre]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const putUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, correo, numero, estatura, peso, alergias, tipoSangre } = req.body;
        const result = await pool.query("UPDATE usuarios SET nombre = $1, apellido = $2, correo = $3, numero = $4, estatura = $5, peso = $6, alergias = $7, tipoSangre = $8 WHERE idUsuario = $9 RETURNING *", [nombre, apellido, correo, numero, estatura, peso, alergias, tipoSangre, id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error al modificar usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const deleteUsuarios =  async (req,res) => {
    const {id} = req.params;
    const {rowCount} = await pool.query("DELETE FROM USUARIOS WHERE idUsuario = $1,", [id])
    if(rowCount ===  0) {
        return res.status(404).json({message:"usuario no encontrado"})
    }
    
        return res.json({message: "usuario borrado correctamente"}) 
    
    
}

    