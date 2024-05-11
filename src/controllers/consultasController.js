import { pool } from "../db.js";




export const getConsulta = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM consultas");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener consultas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const  getConsultaId = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query("SELECT * FROM consultas WHERE idConsulta = $1", [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: "Consulta no encontrada" });
        }
    } catch (error) {
        console.error("Error al obtener consulta:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const postConsulta = async (req, res) => {
    try {
        const { descripcion, tratamiento, fecha, hora, idUsuario, idMedico } = req.body;
        const result = await pool.query("INSERT INTO consultas (descripcion, tratamiento, fecha, hora, idUsuario, idMedico) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [descripcion, tratamiento, fecha, hora, idUsuario, idMedico]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error al crear consulta:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const putConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion, tratamiento, fecha, hora, idUsuario, idMedico } = req.body;
        const result = await pool.query("UPDATE consultas SET descripcion = $1, tratamiento = $2, fecha = $3, hora = $4, idUsuario = $5, idMedico = $6 WHERE idConsulta = $7 RETURNING *", [descripcion, tratamiento, fecha, hora, idUsuario, idMedico, id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Consulta no encontrada" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error al actualizar consulta:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const { rowCount } = await pool.query("DELETE FROM consultas WHERE idConsulta = $1", [id]);
        if (rowCount === 0) {
            return res.status(404).json({ message: "Consulta no encontrada" });
        }
        res.json({ message: "Consulta borrada correctamente" });
    } catch (error) {
        console.error("Error al eliminar consulta:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}