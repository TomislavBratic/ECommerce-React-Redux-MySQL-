import mysql from 'mysql';
import dotenv from 'dotenv';
import { application } from 'express';


dotenv.config();

 export const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err)=>{
    if(err)
    {
        console.log(err.message);
    }
    else
    console.log('db '+connection.state);
    
})



