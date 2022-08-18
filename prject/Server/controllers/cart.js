import {connection} from "../dbService.js";

    export const getAllCart=async(req,res)=>{
        
        try {
            const products = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM `cart`;";

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


    
    export const insertCart=async(req,res)=>{

        try {
            const { title,image,price,category } = req.body;
            const products = await new Promise((resolve, reject) => {
                const query = "INSERT INTO `cart` (`title`,`image`, `price`) VALUES ('"+title+"','"+ image+"','"+ price+"')";

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

    
    export const deleteCart=async(req,res)=>{
        
        const { id } = req.params;
        try {
            const product = await new Promise((resolve, reject) => {
                const query = `DELETE FROM cart where Id=${id};`;

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
