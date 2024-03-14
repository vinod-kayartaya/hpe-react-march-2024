import axios from 'axios';
import {
  FETCH_ALL_CUSTOMERS,
  ACTION_ERROR,
  DELETE_CUSTOMER,
} from '../types/action-types';

const baseUrl = 'http://localhost:4000/customers';

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
