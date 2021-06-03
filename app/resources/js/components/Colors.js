import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import ColorCard from './ColorCard';

const colors = [
  {
    id: 1,
    name: 'Black',
    hex: 'AAAAAA'
  },
  {
    id: 2,
    name: 'White',
    hex: 'FFFFFF'
  },
];

const useStyles = makeStyles({
  grid: {
    padding: '20px',    
  }
});

function Colors() {
  const classes = useStyles();
  return (
    <Grid 
      container      
      spacing={5}
      className={classes.grid}
    >
      {colors.map(singleColor => (
        <Grid key={singleColor.id} item >
          <ColorCard key={singleColor.id} colorName={singleColor.name} hex={singleColor.hex} id={singleColor.id} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Colors;