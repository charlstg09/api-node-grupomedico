import { pool } from "../db.js";

export const getHistorial = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM historialMedico");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener historiales:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}
export const getHistorialByMedico = async (req, res) => {
    try {
        const { idMedico } = req.params;
        const { rows } = await pool.query("SELECT * FROM historialMedico WHERE idMedico = $1", [idMedico]);
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener historiales por médico:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const getHistorialByUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const { rows } = await pool.query("SELECT * FROM historialMedico WHERE idUsuario = $1", [idUsuario]);
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener historiales por usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const getHistorialId = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query("SELECT * FROM historialMedico WHERE idHistorialMedico = $1", [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: "Historial no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener historial:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const postHistorial =  async (req, res) => {
    try {
        const { idConsulta, idMedico, idUsuario } = req.body;
        const result = await pool.query("INSERT INTO historialMedico (idConsulta, idMedico, idUsuario) VALUES ($1, $2, $3) RETURNING *", [idConsulta, idMedico, idUsuario]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error al crear historial:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const  putHistorial = async (req, res) => {
    try {
        const { id } = req.params;
        const { idConsulta, idMedico, idUsuario } = req.body;
        const result = await pool.query("UPDATE historialMedico SET idConsulta = $1, idMedico = $2, idUsuario = $3 WHERE idHistorialMedico = $4 RETURNING *", [idConsulta, idMedico, idUsuario, id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Historial no encontrado" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error al actualizar historial:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteHistorial = async (req, res) => {
    try {
        const { id } = req.params;
        const { rowCount } = await pool.query("DELETE FROM historialMedico WHERE idHistorialMedico = $1", [id]);
        if (rowCount === 0) {
            return res.status(404).json({ message: "Historial no encontrado" });
        }
        res.json({ message: "Historial borrado correctamente" });
    } catch (error) {
        console.error("Error al eliminar historial:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}