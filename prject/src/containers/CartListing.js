import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCart,deleteCart } from "../redux/actions/cartActions";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Cart from "./Cart.js";
import useStyles from "../Styles/cart&ProductListStyles.js";




const CartListing=()=>{
    const classes=useStyles();
    const products = useSelector((state) => state.allProducts);
    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(getCart());
    }, [dispatch]);
    console.log(products);
  
    return (
        !products ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={4}>
            {products.posts.map((product) => (
              <Grid  item xs={12} sm={10} md={10}>
                <Cart product={product} />
              </Grid>
            ))}
          </Grid>
        )
      );

};

export default CartListing;