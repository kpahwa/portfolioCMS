import React from 'react';
import { AppBar, Typography, Toolbar } from 'material-ui';

const Header = (props) => (
  <AppBar position="static" color="primary">
        <Toolbar> 
          <Typography variant="title" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
  </AppBar> 
);

export default Header;