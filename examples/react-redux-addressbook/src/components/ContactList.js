import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getContact,
} from '../redux/actions/addressbook-action-creators';

const ContactList = () => {
  // via useSelector we have access the redux store, which  maintains various reducers, which in turn
  // maintains the state
  const { contacts } = useSelector((store) => store.addressbookReducer);

  const dispatch = useDispatch();

  return (
    <>
      <h3>Here are your contacts</h3>

      <ul className='list-group'>
        {contacts.map((c) => (
          <li key={c.id} className='list-group-item lead'>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(getContact(c.id))}
            >
              {c.gender === 'Male' ? 'Mr.' : 'Ms.'} {c.firstname} {c.lastname}
            </span>
            <button
              onClick={() => dispatch(deleteContact(c.id))}
              className='btn btn-link bi bi-trash text-danger'
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
