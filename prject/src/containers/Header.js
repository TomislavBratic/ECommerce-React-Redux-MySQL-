import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import useStyles from '../Styles/headerStyles.js';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Paper } from '@mui/material';


export const Header=()=> {
    const classes=useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h5" align="center">FakeShop&nbsp;</Typography>
    <Typography component={Link} to="/signin" className={classes.links2}  variant="h6">Sign In</Typography> 
    <Avatar className={classes.links2} >N</Avatar>
    </div>

    <Toolbar className={classes.toolbar}>
      
        <div className={classes.profile}> 
          <Typography component={Link} to="/cart" className={classes.links} variant="h6">Cart</Typography>
          <Typography component={Link} to="/about" className={classes.links} variant="h6">About</Typography> 
        

    <Stack direction="row" spacing={5}>
      
    </Stack>
        </div>   
    </Toolbar>

  

  </AppBar>
  );
}

export default Header;