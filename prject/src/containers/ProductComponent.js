import React from 'react';
import { Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import makeStyles from '../Styles/cart&ProductStyles.js';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import BasicRating from './Rating.js';




const ProductComponent = ({product}) => {

  const classes=makeStyles();

  
  
    const { id, title, image, price, category } = product;
    return (
      <Grid item xs={12} sm={6} md={6}  alignItems="stretch" spacing={3}>
        
          <Card className={classes.card}>
            
            
              <div className="ui small image">
              <img src={`data:image/bin;base64,${btoa(String.fromCharCode(...new Uint8Array(image.data)))}`} alt=""/>
              </div>
            
              
              <CardContent>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">$ {price}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{category}</Typography>
                <BasicRating>da</BasicRating>
                </CardContent>
             
              <CardActions className={classes.cardActions}>
              <Link to={`/product/${id}`}>  
              <Button size="small" color="primary" variant="contained">
               Details
              </Button> 
              </Link>  
              </CardActions>



          </Card>
          
          </Grid>

    );
    

 
};

export default ProductComponent;
