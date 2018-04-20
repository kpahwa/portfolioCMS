import React, { Component } from 'react';
import Login from '../components/Login/login'

class LoginContainer extends Component {
  state = {
    user: {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    localStorage.setItem('email', 'kpahwa');
    localStorage.setItem('password', 'test');
  }

  onChange = (key, e) => {
    let { user } = this.state;
    user[key] = e.target.value;
    this.setState({ user });
  }

  onSubmit = () => {
    const { user } = this.state;
    if (localStorage.getItem('email') === user.email && localStorage.getItem('password') === user.password){
      this.props.history.push('/info')
    }
  }
  
  render() {
    return (
      <div>
        <Login 
        submit={this.onSubmit} 
        user={this.state.user} 
        onChange={this.onChange} />
      </div>
    );
  }
}

export default LoginContainer;