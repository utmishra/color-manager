import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Colors from './Colors';
import NewColorForm from './NewColorForm';

const useStyles = makeStyles({
  body: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: '1rem',
    margin: '50px',
    textAlign: 'center',
    border: '1px solid white',
    borderRadius: '1%',
    minHeight: '500px',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  createButton: {
    color: 'white',
    border: '1px solid white',
    borderRadius: '5%',
    padding: '10px',
    textAlign: 'center',
    margin: '0 50px'
  }
});

function Body() {

  const [open, setOpen] = React.useState(false);
  const [colorsData, setColors] = useState([]);
  const [reloadNeeded, setReloadNeeded] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = async (data) => {
    var config = {
      method: 'post',
      url: '/api/colors',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    const result = await axios(config)
    .catch(function (error) {
      console.log(error);
    });
    setReloadNeeded(true);
    setOpen(false);
  }

  useEffect(async () => {
    if(reloadNeeded) {
      console.log(`Open: ${open}, Reload: ${reloadNeeded}`);  
      const result = await axios(
        '/api/colors',
      );    
      setColors(result.data.data);
      setReloadNeeded(false);
      console.log(`Open: ${open}, Reload: ${reloadNeeded}`);
    }    
  }, [reloadNeeded]);

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
          <Button startIcon={<AddIcon />} className={classes.createButton} onClick={handleClickOpen}>
            New Color
          </Button>
        </Grid>
        <Box className={classes.body}>    
          <Colors colorsData={colorsData} />    
        </Box>
      </Container>
      </Grid>
      <NewColorForm open={open} handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </Box>
  );
}

export default Body;