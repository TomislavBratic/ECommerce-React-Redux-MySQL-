import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


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
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },

}));
