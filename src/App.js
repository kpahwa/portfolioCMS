import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme } from 'material-ui/styles';
import LoginContainer from './containers/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InformationFormContainer from './containers/Information';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    }
}});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MuiThemeProvider theme={theme}>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/info" component={InformationFormContainer} />
          </MuiThemeProvider>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
