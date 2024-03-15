import React, { useState, useEffect } from 'react';
import {
  clearSearchResult,
  searchByEmailOrPhone,
} from '../redux/actions/customers-action-creators';
import { useDispatch, useSelector } from 'react-redux';
import CustomerDetailsPage from './CustomerDetailsPage';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchCompleted, setSearchCompleted] = useState(false);
  const dispatch = useDispatch();
  const { searchResult } = useSelector((store) => store.customerReducer);

  useEffect(() => {
    clearSearchResult().then(dispatch);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSearchCompleted(false);
    if (!searchText.trim()) return;

    dispatch(await searchByEmailOrPhone(searchText));
    setSearchCompleted(true);
  };

  return (
    <>
      <h3>Search customer</h3>
      <form onSubmit={submitHandler}>
        <input
          type='search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='enter phone number or email'
          className='form-control'
        />
      </form>
      
      {searchCompleted && searchResult.length > 0 && (
        <CustomerDetailsPage selectedCustomer={searchResult[0]} />
      )}

      {searchCompleted && searchResult.length === 0 && (
        <p className='lead text-warning'>No data found</p>
      )}
    </>
  );
};

export default Search;
