import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import makeStyles from '../Styles/cart&ProductStyles.js';
import { deleteCart,getCart } from '../redux/actions/cartActions.js';
import logo from "../additional_files/fakeshop.png";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';




const Cart = ({product}) => {

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  
  const dispatch=useDispatch();
  const classes=makeStyles();
  console.log(product.image)

    const { id, title, image, price, category } = product;


    
    return (

      !product? <div>Loading</div> : (
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
            <ButtonBase sx={{ width: 220, height: 220 }}>
            <img src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
            
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  FakeShop
                </Typography>
              </Grid>
              <Grid item>
              <Button size="small" color="primary" variant="contained"onClick={() => {dispatch(deleteCart(id))}}>
               Delete
              </Button>  
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
              ${price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
    );



 
};

export default Cart;
