
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/';
import createHistory from 'history/createBrowserHistory';
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      middleware
    )
  );
}
