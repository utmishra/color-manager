import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import ColorCard from './ColorCard';
import EmptyState from './EmptyState';

const useStyles = makeStyles({
  grid: {
    padding: '20px'
  }
});

function Colors() {
  const [colorsData, setColors] = useState([]);

  useEffect(async () => {
    const result = await axios(
      '/api/colors',
    );
    console.log(result);
    setColors(result.data.data);
  }, []);

  const classes = useStyles();
  return (
    <Grid 
      container      
      spacing={6}
      direction="row"
      justify="space-between"
      alignItems="center"      
      className={classes.grid}
    >
      {
        colorsData.length > 0 ?
          colorsData.map(singleColor => (
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