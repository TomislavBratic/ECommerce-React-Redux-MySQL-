import React, { useEffect } from "react";
import { selectedProduct } from "../redux/actions/productActions";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../Styles/productDetail.css";


const ProductDetail=()=>{

    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch=useDispatch();
    console.log(productId);

    const fetchProduct=async()=>{
       const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
       .catch((err)=>{
        console.log(err)
       });
    dispatch(selectedProduct(response.data));
    }

   
    useEffect(() => {
      if (productId ) fetchProduct(productId);
    }, [productId]);

return(
    <div className="ui grid container">
      {Object.keys(product).length===0 ?(
        <div>...loading</div>
      ) : (

    
    <div className="ui grid">
      
        <div className="four wide column">
          <div className="ui  bordered small image">
      
         <img x="0" y="0" width="100%" height="100%" src={image} alt={title}></img>

          </div>
        </div>

        <div className="nine wide column">
          <p>
          <div className="titleDetails">{title}</div>
          <div className="meta price">$ {price}</div>
          <div className="meta">{category}</div>
          </p>
        </div>
        <div className="three wide column">
          <p>
          <div class="ui vertical animated button" tabindex="0">
          <div class="hidden content">Cart</div>
          <div class="visible content">
          <i class="shop icon"></i>
          </div>
</div>
          </p>

          </div>     
        


          <form class="ui reply form">
            <div class="field">
              <textarea ></textarea>
           </div>
                <div class="ui primary submit labeled icon button">
                  <i class="icon edit"></i> Add Reply
               </div>
          </form>
        
     </div>
)};
</div>

)

};

export default ProductDetail;