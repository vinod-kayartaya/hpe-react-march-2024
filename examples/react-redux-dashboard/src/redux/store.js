import { combineReducers, legacy_createStore as createStore } from 'redux';
import customerReducer from './reducers/customer-reducer';

const store = createStore(
  combineReducers({
    customerReducer,
  })
);

export default store;
