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
import {List, ListItem} from 'material-ui/List';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import Image from 'material-ui-image';
import cvMakerComponent from './cvMakerComponent';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const recentsIcon = <ActionRestore />;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class cvMakerContainer extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedIndex: 0,
      finished: false,
      stepIndex: 0,
      value: 3,
    };
  }

  select(index) {
    this.setState({selectedIndex: index});
  }

  handleChange(event, index, value) { this.setState({value}) }

  handleNext(){
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    const style = {
      height: 842,
      width: 595,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      position: 'relative',
      left: 150,
    };
    const style2 = {
      height: 168,
      width: 119,
      margin: 10,
      display: 'inline-block',
    };
    const style3 = {
      height: '100%',
      width: '100%',
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#fff',
    };
    const styleList = {
      paddingRight: '40px',
      paddingLeft: '40px',
      borderRight: 'solid',
      borderColor: '#f5f5f5',
      height: '885px',
      maxHeight: '885px',
      position: 'absolute',
      overflowY: 'scroll',
    };
    const style5 = {
      position: 'absolute',
      left: 0,
      margin: 'none',
    }
    const editCV =(
      <div className='toolbar'>
        <Toolbar style={{ backgroundColor: '#F5F5F5' }}>
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <ToolbarSeparator />
            <RaisedButton label="Save" primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <List style={styleList}>
          <ListItem>
            <Paper style={style2} zDepth={4}>
            </Paper>
          </ListItem>
          <ListItem>
            <Paper style={style2} zDepth={4}>
            </Paper>
          </ListItem>
          <ListItem>
            <Paper style={style2} zDepth={4}>
            </Paper>
          </ListItem>
          <ListItem>
            <Paper style={style2} zDepth={4}>
            </Paper>
          </ListItem>
          <ListItem>
            <Paper style={style2} zDepth={4}>
            </Paper>
          </ListItem>
          <ListItem>
            <Paper style={style2} zDepth={4}>
            </Paper>
          </ListItem>
          <ListItem>
            <Paper style={style2} zDepth={4}>
            </Paper>
          </ListItem>
        </List>
        <Divider />
        <Paper style={style} zDepth={4}>
          <TextField
            style={style5}
            hintText="Name"
            underlineShow={false}
          /><br />
        </Paper>
      </div>
      );
    switch (stepIndex) {
      case 0:
        return 'Choose CV template';
      case 1:
        return editCV;
      case 2:
        return 'Download PDF';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }


  render() {
    const style2 = {
      height: '100%',
      height: 1156,
      width: '100%',
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#fff',
      maxWidth: 'none',
    };
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    const style4 = {
      left: 0,
      right: 0,
      margin: 'auto',
      maxWidth: '750px',
    };

    return (
      <Paper style={style2}>
        <AppBar
          title="CV Maker"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div style={{width: '100%', maxWidth: 700, margin: 'auto', 'max-width': 'none'}}>
          <Stepper style={style4} activeStep={stepIndex}>
            <Step>
              <StepLabel>Choose CV template</StepLabel>
            </Step>
            <Step>
              <StepLabel>Edit CV</StepLabel>
            </Step>
            <Step>
              <StepLabel>Preview and Save</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                >
                  Click here
                </a> to reset the example.
              </p>
            ) : (
              <div>
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onClick={this.handleNext}
                  />
                </div>
                <p>{this.getStepContent(stepIndex)}</p>
              </div>
            )}
          </div>
        </div>
      </Paper>
    );
  }
}

export default cvMakerContainer;
