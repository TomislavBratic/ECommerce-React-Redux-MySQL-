import {connection} from "../dbService.js";

    export const getAllData=async(req,res)=>{
        try {
            const products = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM productcomponent;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            
            res.status(200).json(products);
        } catch (error) {
            console.log(error);
        }
    }

    export const getProduct=async(req,res)=>{
        
        const { id } = req.params;
        try {
            const product = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM productcomponent where Id=${id};`;

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }
    }



