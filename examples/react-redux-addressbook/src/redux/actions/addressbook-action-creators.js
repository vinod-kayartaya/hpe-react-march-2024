import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACT,
} from '../types/action-types';

// dispatch(addContact(c))

// these methods are called action creators since they create and return an action object.
// an action object is a simple JS object with generally two keys: `type` and `payload`.
// you are free to use different keys, but it is community standard

export const addContact = (contact) => {
  console.log('in addContact, contact is', contact);
  return { type: ADD_CONTACT, payload: contact };
};

// deleteContact(3)
// { type: DELETE_CONTACT, payload: 3 }

export const deleteContact = (id) => {
  return { type: DELETE_CONTACT, payload: id };
};

export const getContact = (id) => {
  return { type: FETCH_CONTACT, payload: id };
};
