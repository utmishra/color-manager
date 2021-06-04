import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '3rem',
    paddingTop: '50px',
    textAlign: 'center'
  },
  subtext: {
    fontSize: '1.5rem',
    margin: '20px'    
  }
});


function Header() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Box className={classes.title}>
        Color Manager
        <Box className={classes.subtext}>
          Manage colors in hex code! 🎨
        </Box>
      </Box>
    </Grid>
  );
}

export default Header;