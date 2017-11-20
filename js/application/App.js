import React from 'react';
import { Provider } from 'react-redux';
import store from 'js/application/store/store';
import {blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Routes from 'js/application/routes/routes';
import 'styles.scss';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  },
});

export default function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </MuiThemeProvider>
  );
}
