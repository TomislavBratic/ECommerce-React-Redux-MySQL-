import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import useStyles from "../Styles/cart&ProductListStyles.js";
import { getProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";




const CartListing=()=>{
    const classes=useStyles();
    const products = useSelector((state) => state.allProducts);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    
    console.log(products.posts)
  
    return (
        !products ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {products.posts.map((product) => (
              <Grid  item xs={12} sm={6} md={6}>
                <ProductComponent product={product} s />
              </Grid>
            ))}
          </Grid>
        )
      );

};

export default CartListing;