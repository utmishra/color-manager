import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Body from './Body';

const useStyles = makeStyles({
    body: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',    
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      fontSize: '25px',
      padding: '0 2%',
      height: '100vh'
    },
  });

function App() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.body}>
            <Header />
            <Body />
        </Container>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}