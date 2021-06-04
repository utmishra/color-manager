import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ColorBlock from './ColorBlock';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    backgroundColor: 'transparent',
    boxShadow: '0px 4px 3px 1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
  },
  title: {
    fontSize: '2.2 rem',
    color: 'white',
    fontWeight: 'bold',    
  }
});

let colorBlockCss = {
  colorBlock: {
    border: '1px solid grey',
    borderRadius: '5%',
    height: '90px',
  }
}

function ColorCard(props) {
  const classes = useStyles();
  colorBlockCss['colorBlock']['background'] = `#${props.hex}`;

  const handleDelete = () => {
    props.handleDelete(props.id);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {props.colorName}
        </Typography>
        <ColorBlock styleCss={colorBlockCss} />  
      </CardContent>
      <CardActions style={{ float: 'right' }}>
        <Button size="small" onClick={handleDelete} >
          <DeleteIcon style={{ color: 'white' }} />
        </Button>
      </CardActions>
    </Card>
  )
}

export default ColorCard;