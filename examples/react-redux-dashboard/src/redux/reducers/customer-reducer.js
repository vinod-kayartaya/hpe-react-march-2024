import {
  ACTION_ERROR,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  FETCH_ALL_CUSTOMERS,
  FETCH_ONE_CUSTOMER,
} from '../types/action-types';

const initialState = {
  customers: [],
  selectedCustomer: null,
  error: null,
};

const customerReducer = (state = initialState, action) => {
  if (action.type === FETCH_ALL_CUSTOMERS) {
    // assumption is that the action.payload is the customers list from the REST
    return { ...state, customers: action.payload, error: null };
  }

  if (action.type === FETCH_ONE_CUSTOMER) {
    // action.payload is the one customer (searched/fetched from the REST)
    return { ...state, selectedCustomer: action.payload, error: null };
  }

  if (action.type === ADD_CUSTOMER) {
    // action.payload is the newly added customer (to the REST server)
    let customers = [...state.customers]; // shallow copy to avoid mutation
    customers.unshift(action.payload);
    return { ...state, customers, error: null };
  }

  if (action.type === DELETE_CUSTOMER) {
    // action.payload is the deleted id
    // 1. this is called only after the data in the REST is deleted
    // 2. now we are supposed update the store, so that the component is updated
    let customers = state.customers.filter((c) => c.id !== action.payload);
    return { ...state, customers, error: null };
  }

  if (action.type === ACTION_ERROR) {
    return { ...state, error: action.payload };
  }

  return { ...state };
};

export default customerReducer;
