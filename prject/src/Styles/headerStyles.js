import { makeStyles } from '@mui/styles';


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'left',
    padding: '0px 50px',
  },
  heading: {
    color: 'black',
    textDecoration: 'none',
    whiteSpace:"pre"
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '1000px',
    float:'right',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  links: {
    display: 'inline',
    alignItems: 'space-between',
    color:'black',
  },
  links2: {
    color:'black',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'right',
    padding: '0px 10px',
    margin:'0px 0px 0px 50px',
    
    
  },
  
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    
  },

}));
