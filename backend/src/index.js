import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/db.js';
import createUserTable from './db/createTable.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT   || 3000

app.use(cors());
app.use(express.json());
//Create user table for 1st time
createUserTable();

app.get('/',(req,res)=>{
    res.send('API is running...');   
})

app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`)
})