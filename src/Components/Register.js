import React from 'react';
import AuthApiService from '../services/auth-api-service';
import Header from './Header/Header';
import './Register.scss';

class Register extends React.Component {

  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, email } = e.target;
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      email: email.value
    })
      .then(user => {
        username.value = '';
        password.value = '';
        email.value = '';
        this.props.history.push('/login');
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <Header />
        <div className='register'>
          <h2>Register</h2>
          <p>“I may not have gone where I intended to go,
            but I think I have ended up where I intended to be.”
          </p>
          <p>
            - Douglas Adams
          </p>
          <div className='register'>
            <p>
              Ready to discover new places? Sign up today!
            </p>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div>
              {error && <p>an error occurred</p>}
            </div>
            <label htmlFor="registration-username">Username: </label>
            <input className='registration-field' type="text" id="registration-username" name="username" placeholder='Username' required />
            <label htmlFor="registration-email">Email: </label>
            <input className='registration-field' type="email" id="registration-email" name="email" placeholder='Email' />
            <label htmlFor="registration-password">Password:</label>
            <input className='registration-field' type="password" id="registration-password" name="password" placeholder="Password" required />
            <button className='sign-up' type='submit'>Sign Up</button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;