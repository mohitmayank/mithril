import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';


class PasswordField extends React.Component {
  state = {
    visible: false,
  }

  handleClickShowPassword = () => {
    this.setState((state) => ({ visible: !state.visible }));
  };

  render() {
    return (
      <TextField
        type={this.state.visible ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='Toggle password visibility'
                onClick={this.handleClickShowPassword}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...this.props}
      />
    );
  }
}

export default PasswordField;
