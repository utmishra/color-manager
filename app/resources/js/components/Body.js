import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Colors from './Colors';

const useStyles = makeStyles({
  body: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: '1rem',
    margin: '20px',
    textAlign: 'center',
    border: '1px solid white',
    borderRadius: '1%',
    height: '500px'
  },
  createButton: {
    color: 'white',
    border: '1px solid white',
    borderRadius: '5%',
    padding: '10px',
    textAlign: 'center',
    margin: '20px'
  }
});

function Body() {
  const classes = useStyles();
  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row-reverse"
          justify="flex-start"
        >
          <Button startIcon={<AddIcon />} className={classes.createButton}>
            New Color
          </Button>
        </Grid>
        <Box className={classes.body}>    
          <Colors />    
        </Box>
      </Container>
      </Grid>
    </Box>
  );
}

export default Body;