import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent.js";
import {setProducts} from "../redux/actions/productActions.js";
import axios from "axios";



const ProductListing=()=>{
    
    const dispatch=useDispatch();



    const  fetchProducts=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products')
       .catch((err)=>{
        console.log(err)
       });
       dispatch(setProducts(response.data));
    };

    useEffect(()=>{fetchProducts()}, []);
return(
<div className="ui grid container">
    <h1><ProductComponent/></h1>
</div>

);

};

export default ProductListing;