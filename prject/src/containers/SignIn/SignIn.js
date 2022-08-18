import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { signin, signup } from '../../redux/actions/userActions.js';
import { AUTH } from '../../redux/constants/action-types.js';
import Input from './Input.js';
import Icon from './Icon.js';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
     {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"> FakeShop </Link>{' '}
      {new Date().getFullYear()} {'.'}
    </Typography>
  );
}
const theme = createTheme();

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignInSide=()=> {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);


  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup)
     { dispatch(signup(form, history));}
    else 
     { dispatch(signin(form, history));}
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/predmet');
    } catch (error) {console.log(error);}
  };
    
  const handleSubmitPopUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ email: data.get('email'), password: data.get('password'),
    });
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item xs={false} sm={4} md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900], backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{ my: 9, mx: 4, display: 'flex',flexDirection: 'column', alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            { isSignup ? 'Sign Up' : 'Sign In' }
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            { isSignup && (
            <>
              <Input name="firstName" required fullWidth label="First Name" handleChange={handleChange} autoFocus/>
              <Input name="lastName"required fullWidth label="Last Name" handleChange={handleChange} autoFocus />
            </>
            )}

              <Input onChange={handleChange} margin="normal" required fullWidth id="email"label="Email Address" name="email"autoComplete="email" autoFocus/>
              <TextField onChange={handleChange} margin="normal" required fullWidth name="password" label="Password" type="password" id="password"autoComplete="current-password"/>
              { isSignup && <Input required fullWidth name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }

              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>   { isSignup ? 'Sign Up' : 'Sign In' }</Button>
              <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2"> Forgot password? </Link>
                </Grid>
                <Grid item>
                  <Link onClick={switchMode} variant="body2" href="#">
                  { isSignup ? ' Sign in' : "Don't have an account? Sign Up" }
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


export default SignInSide;