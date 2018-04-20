import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import LoginPage from 'modules/login/components/loginPage';

class LoginContainer extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  user: state.user
});


export default connect(mapStatetoProps)(LoginContainer);
