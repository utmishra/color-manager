import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  empty: {
    color: 'white',
    fontSize: '1.5rem',
    margin: '20px',
    textAlign: 'center'
  }
});

function EmptyState() {
  const classes = useStyles();
  return (
    <Box className={classes.empty}>
      Click on "New Color" to add some colors..
    </Box>
  )
}

export default EmptyState;