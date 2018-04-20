import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export function user (state = {id: 10}, { type, id } ) {
  switch (type) {
    case "HEY":
      return { ...state, id};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  router: routerReducer,
  form: formReducer,
});

export default rootReducer;
