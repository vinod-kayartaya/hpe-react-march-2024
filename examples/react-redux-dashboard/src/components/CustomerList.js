import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCustomers } from '../redux/actions/customers-action-creators';
import CustomerCard from './CustomerCard';

const CustomerList = () => {
  const [page, setPage] = useState(1);
  const { error, customers } = useSelector((store) => store.customerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('CustomerList.useEffect-1 called');
    (async () => {
      const action = await fetchAllCustomers(page);
      dispatch(action);
    })();
  }, [page]);

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {error ? (
        <h3 className='text-danger'>{error}</h3>
      ) : (
        <>
          <h3>Customer list (page {page})</h3>
          <button
            disabled={page === 1}
            onClick={prevPage}
            className='lead btn btn-primary mx-1 bi bi-arrow-left-circle'
          ></button>

          <button
            onClick={nextPage}
            className='lead btn btn-primary bi bi-arrow-right-circle float-end'
          ></button>
          <div className='row'>
            {customers.map((c) => (
              <CustomerCard key={c.id} customer={c} page={page} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CustomerList;
