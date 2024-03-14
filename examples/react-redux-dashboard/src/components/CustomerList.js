import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from '../redux/actions/customers-action-creators';

const CustomerList = () => {
  const { error, customers } = useSelector((store) => store.customerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // this is an EFFECT executed only once when the component is mounted.
    console.log('component is mounted');

    return () => {
      // this is a function executed when the component is unmounted
      console.log('component is unmounted');
    };

  }, []);

  useEffect(() => {
    // fetchAllContacts().then(dispatch)

    (async () => {
      const action = await fetchAllContacts();
      dispatch(action);
    })();
  }, []);

  return (
    <>
      {error ? (
        <h3 className='text-danger'>{error}</h3>
      ) : (
        <>
          <h3>Customer list</h3>
          <ul className='list-group'>
            {customers.map((c) => (
              <li key={c.id} className='list-group-item'>
                {c.gender === 'Male' ? 'Mr.' : 'Ms.'} {c.firstname} {c.lastname}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CustomerList;
