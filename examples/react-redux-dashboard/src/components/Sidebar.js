import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className='list-group'>
        <Link to='/new-customer' className='list-group-item'>
          Add customer
        </Link>
        <Link to='/customer-list' className='list-group-item'>
          View customers
        </Link>
        <Link to='/search-customers' className='list-group-item'>
          Search
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
