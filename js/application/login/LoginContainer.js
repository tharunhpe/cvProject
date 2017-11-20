import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import image4 from 'img/wallpaper2.png';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }

  render() {
    const style = {
      backgroundColor: '#000',
      marginTop: '250px',
      marginLeft: '100px',
      display: 'inline-block',
    };
    const style2 = {
      marginLeft: 10,
      backgroundColor: '#fff',
      paddingLeft: 10,
    };
    const style3 = {
      marginLeft: 10,
      backgroundColor: '#fff',
      marginBottom: '10px',
      paddingLeft: 10,
    };
    const styleSignup = {
      marginLeft: '66px',
      height: 40,
      width: 100,
    };
    const styleLogin = {
      height: 40,
      width: 100,
      marginLeft: 10,
    };
    const styleImage = {
      height: '100%',
      width: '100%',
      position: 'absolute',
    };
    return (
      <Paper>
        <img alt="" src={image4} style={styleImage} />
        <Paper
          zDepth={2}
          style={style}
        >
          <h1 style={{ color: '#fff', position: 'relative' }}>#MAPS</h1>
          <TextField hintText="Email Id" style={style2} underlineShow={false} />
          <Divider style={{ color: '#000' }} />
          <TextField hintText="Password" style={style3} underlineShow={false} />
          <Divider style={{ color: '#000' }} />
          <RaisedButton label="Login" backgroundColor="#616161" style={styleLogin} labelColor="#fff" />
          <RaisedButton label="Signup" style={styleSignup} backgroundColor="#BDBDBD" labelColor="#fff" />
        </Paper>
      </Paper>
    );
  }
}

export default LoginContainer;
