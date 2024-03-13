import { combineReducers } from 'redux';
import addressbookReducer from './addressbook-reducer';
import emailReducer from './email-reducer';

export default combineReducers({
  addressbookReducer,
  emailReducer,
});
