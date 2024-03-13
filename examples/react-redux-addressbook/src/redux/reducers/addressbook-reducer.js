import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACT,
} from '../types/action-types';

const initialState = {
  contacts: [
    {
      id: 1,
      firstname: 'Vinod',
      lastname: 'Kumar',
      city: 'Bangalore',
      email: 'vinod@vinod.co',
      phone: '9731424784',
      gender: 'Male',
    },
    {
      id: 2,
      firstname: 'Ramesh',
      lastname: 'Kumar',
      city: 'Chennai',
      email: 'ramesh@xmpl.com',
      phone: '9731424000',
      gender: 'Male',
    },
    {
      id: 3,
      firstname: 'Radha',
      lastname: 'Kumari',
      city: 'Mumbai',
      email: 'radha.kumari@xmpl.com',
      phone: '9731424222',
      gender: 'Female',
    },
  ],
  fetchedContact: null,
};

// each action being dispatched will trigger the call of this function
// redux invokes this (and all) reducer by supplying the current state and the action dispatched
// and the reducer should return the modified state, based on the action.type
function addressbookReducer(state = initialState, action) {
  console.log('addressbookReducer() called');
  console.log('state', state); // current state from store
  console.log('action', action); // dispatched action

  switch (action.type) {
    case ADD_CONTACT: {
      // assumption is that the action.payload is a contact object (without id)
      let contacts = [...state.contacts];
      let id = contacts.length ? Math.max(...contacts.map((c) => c.id)) + 1 : 1;
      let contact = { ...action.payload, id };
      contacts.push(contact);
      return { ...state, contacts };
    }
    case DELETE_CONTACT: {
      // assumption is that the action.payload is the id of the contact to delete
      let contacts = [...state.contacts];
      contacts = contacts.filter((c) => c.id !== action.payload);
      return { ...state, contacts };
    }
    case FETCH_CONTACT: {
      // assumption is that the action.payload is the id of the contact to delete
      // here we are not mutating the state so, we don't have to get a copy of `contacts`
      let { contacts } = state;
      let fetchedContact = contacts.find((c) => c.id === action.payload);
      fetchedContact = fetchedContact || null;

      return { ...state, fetchedContact };
    }
  }

  return { ...state };
}

export default addressbookReducer;
