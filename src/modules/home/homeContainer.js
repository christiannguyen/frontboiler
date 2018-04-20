import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import * as homeActionCreators from '../home/actionCreators/homeActionCreators';

class HomeContainer extends Component {
  componentWillMount() {
    this.actionCreators = bindActionCreators(
      {...homeActionCreators},
      this.props.dispatch
    );
    this.props.dispatch(this.actionCreators.changeUser)
    
    axios.get('/users/sign_in')
      .then((response) => {
        console.log('response', response);
        console.log('response', response.data);
      })
          .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <p className="App-intro">
          Hello from home container
        </p>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  user: state.user
});


export default connect(mapStatetoProps)(HomeContainer);
