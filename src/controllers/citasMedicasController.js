import {pool} from "../db.js"



export const getCitas = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM citasMedicas");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener citas médicas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const getCitasId = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query("SELECT * FROM citasMedicas WHERE idCita = $1", [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: "Cita médica no encontrada" });
        }
    } catch (error) {
        console.error("Error al obtener cita médica:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}


export const postCitas = async (req, res) => {
    try {
        const { idUsuario, idMedico, fecha, hora } = req.body;
        const result = await pool.query("INSERT INTO citasMedicas (idUsuario, idMedico, fecha, hora) VALUES ($1, $2, $3, $4) RETURNING *", [idUsuario, idMedico, fecha, hora]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error al crear cita médica:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const putCitas =async (req, res) => {
    try {
        const { id } = req.params;
        const { idUsuario, idMedico, fecha, hora } = req.body;
        const result = await pool.query("UPDATE citasMedicas SET idUsuario = $1, idMedico = $2, fecha = $3, hora = $4 WHERE idCita = $5 RETURNING *", [idUsuario, idMedico, fecha, hora, id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Cita médica no encontrada" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error al actualizar cita médica:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteCitas = async (req, res) => {
    try {
        const { id } = req.params;
        const { rowCount } = await pool.query("DELETE FROM citasMedicas WHERE idCita = $1", [id]);
        if (rowCount === 0) {
            return res.status(404).json({ message: "Cita médica no encontrada" });
        }
        res.json({ message: "Cita médica borrada correctamente" });
    } catch (error) {
        console.error("Error al eliminar cita médica:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}