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
            console.log(products);
            res.status(200).json(products);
        } catch (error) {
            console.log(error);
        }
    }



