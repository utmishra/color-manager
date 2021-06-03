import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ColorCard from './ColorCard';
import EmptyState from './EmptyState';

const useStyles = makeStyles({
  grid: {
    padding: '20px'
  }
});

function Colors(props) {

  const classes = useStyles();
  return (
    <Grid 
      container      
      spacing={6}
      direction="row"
      justify="center"
      alignItems="center"      
      className={classes.grid}
    >
      {
        props.colorsData.length > 0 ?
          props.colorsData.map(singleColor => (
            <Grid key={singleColor.id} item >
              <ColorCard key={singleColor.id} colorName={singleColor.name} hex={singleColor.hex} id={singleColor.id} />
            </Grid>
          ))
          :
          <EmptyState />
      }
    </Grid>
  );
}

export default Colors;