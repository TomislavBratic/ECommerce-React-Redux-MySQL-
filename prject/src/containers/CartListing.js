import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCart,deleteCart } from "../redux/actions/cartActions";
import { Grid, CircularProgress } from '@material-ui/core';
import Cart from "./Cart.js";
import useStyles from "../Styles/cart&ProductListStyles.js";




const CartListing=()=>{
    const classes=useStyles();
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const [requestData, setRequestData] = useState(new Date());

    useEffect(() => {
      dispatch(getCart());
    }, [dispatch,requestData]);
    console.log("je")
  
    return (
        !products.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={4}>
            {products.map((product) => (
              <Grid  item xs={12} sm={10} md={10}>
                <Cart product={product} setRequestData={setRequestData} />
              </Grid>
            ))}
          </Grid>
        )
      );

};

export default CartListing;