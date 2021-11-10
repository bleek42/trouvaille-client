import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import Context from '../Context';
import './Register.css';
import Header from './Header/Header';
class Login extends Component {

  state = { error: null };

  static contextType = Context;

  onLoginSubmit(e) {
    // prevent page reload
    e.preventDefault();
    const { username, password } = e.target;
    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        localStorage.setItem("user_id", res.user_id);
      })
      .then(() => {
        if (!this.state.error) {
          this.props.history.push('/dashboard');
        }
      })
      .catch(err => {
        this.setState({ error: true });
      });
    // send user to next page upon successful login

  }

  render() {
    const { error } = this.state;
    return (
      <>
        <Header />
        <div className='register'>
          <h2>Log In</h2>
          <p>Welcome back!</p>
          <form onSubmit={e => this.onLoginSubmit(e)}>
            <div>
              {error && <p>an error occured...</p>}
            </div>
            <label htmlFor="login-username">Username: </label>
            <input className='registration-field' type="text" id="login-username" name='username' placeholder="Username" />
            <label htmlFor="login-password">Password: </label>
            <input className='registration-field' type="password" id="login-password" name='password' placeholder="Password" />
            <button className='sign-up'>Log In</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;