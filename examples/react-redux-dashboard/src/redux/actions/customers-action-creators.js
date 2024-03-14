import axios from 'axios';
import { FETCH_ALL_CUSTOMERS, ACTION_ERROR } from '../types/action-types';

const baseUrl = 'http://localhost:4000/customers';

export const fetchAllContacts = async () => {
  try {
    const { data } = await axios.get(baseUrl);
  return { type: FETCH_ALL_CUSTOMERS, payload: data };
  }
  catch(err){
    return {type: ACTION_ERROR, payload: err.message}
  }
};
