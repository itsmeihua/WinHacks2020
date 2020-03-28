import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
        <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Enter Setting" />
            <TextField
              placeholder="Enter Date"
              label="Date"
              onChange={handleChange('date')}
              defaultValue={values.date}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Time"
              label="Time"
              onChange={handleChange('time')}
              defaultValue={values.time}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Location"
              label="Location"
              onChange={handleChange('location')}
              defaultValue={values.location}
              margin="normal"
							fullWidth="true"
            />
            <br />
        
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;