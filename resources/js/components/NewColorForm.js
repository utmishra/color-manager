import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { ColorPicker, createColor } from 'material-ui-color';

function NewColorForm(props) {

  const [name, setName] = React.useState('');
  const [color, setHex] = React.useState(createColor('#000'));

  const handleSubmit = () => {
    props.handleSubmit({
      name: name,
      hex: color.hex
    });
  }

  const handleColorChange = (value) => {
    setHex(value);
  }

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Color</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select a color from the color picker and set a name for the color
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Color name"
            type="text"
            fullWidth
            onChange={e => setName(e.target.value)}
          />
          <InputLabel shrink>Color</InputLabel> 
          <ColorPicker value={color} onChange={handleColorChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default NewColorForm;