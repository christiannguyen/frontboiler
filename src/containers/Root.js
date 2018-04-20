import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter as Router, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import HomeContainer from '../modules/home/homeContainer';
import LoginContainer from 'modules/login/containers/loginContainer';

const history = createHistory();

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/hehe' component={LoginContainer} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default Root;
