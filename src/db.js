import  pg  from "pg";

export const pool = new pg.Pool({
    user: "grupomedico_user",
    host: "dpg-condd221hbls73fh2pa0-a.oregon-postgres.render.com",
    password: "U4gI1OrfyHTlxO4cm7lg0RPpZ07XlJeX",
    database: "grupomedico",
    port: "5432",
    ssl: {
        rejectUnauthorized: false
    }

})




