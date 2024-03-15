import axios from 'axios';
import {
  FETCH_ALL_CUSTOMERS,
  ACTION_ERROR,
  DELETE_CUSTOMER,
  ADD_CUSTOMER,
  FETCH_ONE_CUSTOMER,
  SEARCH_BY_PHONE_EMAIL,
  CLEAR_SEARCH_RESULT,
} from '../types/action-types';

const baseUrl = 'http://localhost:4000/customers';

export const fetchOneCustomer = async (customerId) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${customerId}`);
    return { type: FETCH_ONE_CUSTOMER, payload: data };
  } catch (err) {
    return { type: ACTION_ERROR, payload: err.message };
  }
};

export const fetchAllCustomers = async (pageNo = 1) => {
  try {
    const { data } = await axios.get(`${baseUrl}/?_page=${pageNo}`);
    return { type: FETCH_ALL_CUSTOMERS, payload: data.data };
  } catch (err) {
    return { type: ACTION_ERROR, payload: err.message };
  }
};

export const deleteCustomer = async (id) => {
  try {
    // await axios.delete(`${baseUrl}/${id}`);
    await fetch(`${baseUrl}/${id}`, { method: 'DELETE' }); // wait until the promise is resolved
    return { type: DELETE_CUSTOMER, payload: id };
  } catch (err) {
    return { type: ACTION_ERROR, payload: err.message };
  }
};

export const addCustomer = async (customer) => {
  try {
    const { data } = await axios.post(baseUrl, customer);
    return { type: ADD_CUSTOMER, payload: data };
  } catch (err) {
    return { type: ACTION_ERROR, payload: err.message };
  }
};

export const searchByEmailOrPhone = async (searchText) => {
  try {
    let urlParams = new URLSearchParams({ email: searchText }).toString();
    let resp = await axios.get(`${baseUrl}?${urlParams}`);

    if (resp.data.length > 0) {
      return { type: SEARCH_BY_PHONE_EMAIL, payload: resp.data };
    }

    urlParams = new URLSearchParams({ phone: searchText }).toString();
    resp = await axios.get(`${baseUrl}?${urlParams}`);
    return { type: SEARCH_BY_PHONE_EMAIL, payload: resp.data };
  } catch (err) {
    return { type: ACTION_ERROR, payload: err.message };
  }
};

// this function does not have to be an async method
// doing it so just for the sake of consistency
export const clearSearchResult = async () => {
  return { type: CLEAR_SEARCH_RESULT };
};
