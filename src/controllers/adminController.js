import { pool } from "../db.js"


export const getAdmin = async (req,res) => {
    const {rows} = await pool.query("SELECT * FROM ADMIN")
    res.json(rows)
    
}

export const getAdminId =  async (req,res) => {
    const {id} = req.params
   const {rows} = await pool.query('SELECT * FROM ADMIN WHERE ID = $1', [id]);
   if(rows.length === 0) {
    res.status(404).json({message: "admin no encontrado"})
   }
   else {
    res.json(rows)
   }

}

