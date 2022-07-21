import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routes/products.js';
import bodyParser from 'body-parser';

const app=express();

dotenv.config();



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/products",productRouter);


//create
//router.post('/insert',(request,response)=>{
 ///       console.log(request.body);
//});

//read


//update

//delete

app.listen(process.env.PORT,()=>console.log("app is running"));





