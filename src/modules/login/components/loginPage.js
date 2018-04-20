import React from 'react'
import LoginForm from './loginForm';
import axios from 'axios';
import Qs from 'qs';


class LoginPage extends React.Component {
  submit = values => {
    // let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
    // axios.defaults.headers.common['X-CSRF-Token'] = token
    // axios.defaults.headers.common['Accept'] = 'application/json'
    // print the form values to the console
    let user = {};
    axios.post('/users', {
      data: {
        "user[email]": values.email,
        "user[password]": values.password,
      }
    })
  .then(function (response) {
    console.log('responser', response);
  })
  .catch(function (error) {
    console.log('error', error);
  });
  }
  render() {
    return <LoginForm onSubmit={this.submit} />
  }
}

export default LoginPage;
