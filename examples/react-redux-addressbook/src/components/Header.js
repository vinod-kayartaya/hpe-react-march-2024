import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  // by invoking the `useSelector` you are subscribing to the
  // changes in the store's state
  const { contacts } = useSelector((store) => store.addressbookReducer);

  return (
    // .alert.alert-primary>.container>h1+p.lead
    <div className='alert alert-primary'>
      <div className='container'>
        <h1>Address book app</h1>
        <p className='lead'>You have {contacts.length} contacts</p>
      </div>
    </div>
  );
};

export default Header;
