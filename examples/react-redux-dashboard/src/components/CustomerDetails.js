import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import {
  deleteCustomer,
  fetchOneCustomer,
} from '../redux/actions/customers-action-creators';
import { useDispatch, useSelector } from 'react-redux';
import CustomerDetailsPage from './CustomerDetailsPage';

const CustomerDetails = () => {
  const location = useLocation(); // 'location' in URL
  const queryParams = new URLSearchParams(location.search);
  const customerId = queryParams.get('customerId');
  const dispatch = useDispatch();
  const { selectedCustomer } = useSelector((store) => store.customerReducer);
  const [customerDeleted, setCustomerDeleted] = useState(false);

  const deleteHandler = async () => {
    if (!window.confirm('Are you sure to delete this customer?')) return;

    dispatch(await deleteCustomer(customerId));
    setCustomerDeleted(true);
  };

  useEffect(() => {
    fetchOneCustomer(customerId).then(dispatch);
  }, []);

  if (!selectedCustomer) {
    return null;
  }

  if (customerDeleted) {
    return <Navigate to='/customer-list' />;
  }

  return (
    <>
      <CustomerDetailsPage selectedCustomer={selectedCustomer} />
      <button onClick={deleteHandler} className='btn btn-link text-danger'>
        Delete
      </button>
    </>
  );
};

export default CustomerDetails;
