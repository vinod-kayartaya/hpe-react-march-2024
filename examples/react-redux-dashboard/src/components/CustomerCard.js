import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteCustomer,
  fetchAllCustomers,
} from '../redux/actions/customers-action-creators';

const CustomerCard = ({ customer, page }) => {
  const dispatch = useDispatch();

  const deleteHandler = async () => {
    if (!window.confirm('Are you sure to delete this customer?')) return;

    dispatch(await deleteCustomer(customer.id));
    dispatch(await fetchAllCustomers(page));
  };

  return (
    <>
      <div className='card mb-3 col-6'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={customer.avatar}
              className='img-fluid rounded-start'
              alt={customer.firstname}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <button
                onClick={deleteHandler}
                className='btn btn-link bi bi-x-circle-fill text-danger float-end'
              ></button>
              <h5 className='card-title'>
                {customer.gender === 'Male' ? 'Mr.' : 'Ms.'}{' '}
                {customer.firstname} {customer.lastname}
              </h5>
              <p className='card-text mt-5'>
                <small className='text-body-secondary'>{customer.city}</small>
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
