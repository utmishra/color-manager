import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function ColorBlock(props) {
  const classes = makeStyles(props.styleCss)();
  return (
    <Box  className={classes.colorBlock} />
  );
}

export default ColorBlock;