import React from 'react';
import { Input, InputAdornment, Paper } from 'material-ui';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './login.css';
import Header from '../Header/header';
import FormButton from '../button/button';

const Login = (props) => {
  const { user, onChange } = props;

  return (
    <div>
      <Header title="Login" />
      <Paper className={styles.login_container}>
            <Input 
            className={styles.m_t_b} 
            placeholder="Email"
            fullWidth
            value={user.email}
            onChange={onChange.bind(this, 'email')}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            } />
            <Input
            className={styles.m_t_b} 
            placeholder="Password"
            fullWidth
            type="password"
            value={user.password}
            onChange={onChange.bind(this, 'password')}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            } />
            <FormButton btntext="Submit" icon="send" submit={props.submit}/>
      </Paper>
    </div>
    );
};

export default Login;