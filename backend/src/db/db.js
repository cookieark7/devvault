import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const {Pool} = pg;

const pool = new Pool({
    user:process.env.DBUSER,
    database:process.env.DBDATABASE,
    port:process.env.DBPORT,
    password:process.env.DBPASSWORD,
    host:process.env.DBHOST
})

pool.on('connect',()=>console.log("connected to PostgresSQL"));
pool.on('error',(err)=>console.error("unexpcted error happend"));

export default pool;