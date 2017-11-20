import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import TextField from 'material-ui/TextField';
import image2 from 'img/startWallpaper.png';
import image3 from 'img/wallpaper.png';
import image4 from 'img/wallpaper2.png';
import Image from 'material-ui-image';

const recentsIcon = <ActionRestore />;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = {
      selectedIndex: 0,
    };
  }

  select(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    const style = {
      'backgroundColor': '#000',
      marginTop: '250px',
      marginLeft: '100px',
      display: 'inline-block',
    };
    const style2 = {
      marginLeft: 10,
      'backgroundColor': '#fff',
      paddingLeft: 10,
    };
    const style3 = {
      marginLeft: 10,
      'backgroundColor': '#fff',
      'marginBottom': '10px',
      paddingLeft: 10,
    };
    const styleSignup = {
      marginLeft: "66px",
      height: 40,
      width: 100,
    };
    const styleLogin = {
      height: 40,
      width: 100,
      marginLeft: "10px",
    };
    const styleApp = {
      backgroundColor: '#827717',
    };
    return (
      <Paper>
        <img
          src={image4}
          style= {{ height: '100%', width: '100%', position: 'absolute' }}
        />
        <Paper
          zDepth={2}
          style={style}
        >
            <h1 style={{ color: '#fff', position: 'relative' }}>#MAPS</h1>
            <TextField hintText="Email Id" style={style2} underlineShow={false} />
            <Divider style={{ color: '#000' }} />
            <TextField hintText="Password" style={style3} underlineShow={false} />
            <Divider style={{ color: '#000' }} />
            <RaisedButton label="Login" backgroundColor='#616161' style={styleLogin} labelColor="#fff" />
            <RaisedButton label="Signup" style={styleSignup} backgroundColor='#BDBDBD' labelColor="#fff"  />
        </Paper>
      </Paper>
    );
  }
}

export default LoginContainer;