import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from "../Styles/cart&ProductListStyles.js";
import { getProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";




const CartListing=()=>{
    const classes=useStyles();
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    
  
    return (
        !products.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {products.map((product) => (
              <Grid  item xs={12} sm={6} md={6}>
                <ProductComponent product={product} s />
              </Grid>
            ))}
          </Grid>
        )
      );

};

export default CartListing;