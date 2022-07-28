import React, { useEffect } from "react";
import { getProduct } from "../redux/actions/productActions";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { insertCart } from "../redux/actions/cartActions";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';




const ProductDetail=()=>{

    const { productId } = useParams();
    const product = useSelector((state) => (state.product));
    const dispatch=useDispatch();
   
    useEffect(() => {
    dispatch(getProduct(productId));
    }, [dispatch,productId]);

    const Img = styled('img')({
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    });

    
    return (

      !product[0]? <div>Loading</div> : (
      <Paper
        sx={{
          p: 3,
          margin: '10px 50px',
          maxWidth: 750,
          flexGrow: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 200, height: 200 }}>
            <Img src={`data:image/bin;base64,${btoa(String.fromCharCode(...new Uint8Array(product[0].image.data)))}`} alt=""/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {product[0].title}
                </Typography>
                <Typography variant="body2" gutterBottom>
            
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {product[0].category}
                </Typography>
              </Grid>
              <Grid item>
                <Button sx={{ cursor: 'pointer' }} color="inherit" onClick={() => dispatch(insertCart(product[0]))} >
                 Add To Cart
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
              ${product[0].price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
    );


};

export default ProductDetail;