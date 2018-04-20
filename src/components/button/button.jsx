import React from 'react';
import { Button } from 'material-ui';
import Icon from 'material-ui/Icon';

const FormButton = (props) => (
  <Button 
      onClick={props.submit}
      color="primary"
      variant="raised"
      fullWidth>
      {props.btntext}
      <Icon>{props.icon}</Icon>
  </Button>
);

export default FormButton;