import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../redux/actions/customers-action-creators';

const initialCustomerValue = {
  firstname: '',
  lastname: '',
  gender: 'Male',
  city: 'Bangalore',
  email: '',
  phone: '',
  avatar: 'https://robohash.org/namestlaboriosam.png?size=150x150&set=set1',
};

const CustomerForm = () => {
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState({ ...initialCustomerValue });
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    // fill the errors object with error messages along with the fields
    // if any validation violation
    if (!customer.firstname.trim()) {
      errors.firstname = 'Firstname is required';
    }

    if (!customer.email.trim()) {
      errors.email = 'Email is required';
    }

    if (!customer.phone.trim()) {
      errors.phone = 'Phone is required';
    }

    return errors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // some validation is to be done before we can submit
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      // no validation error
      // proceed to add
      dispatch(await addCustomer(customer));
      setCustomer({ ...initialCustomerValue });
      setErrors({});
      window.alert('New customer added');
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <h3 class='mb-3'>Customer details</h3>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <input
            value='Male'
            name='gender'
            type='radio'
            className='form-check-input me-2'
            id='genderMaleRadio'
            onChange={changeHandler}
            checked={customer.gender === 'Male'}
          />
          <label htmlFor='genderMaleRadio' className=' me-2'>
            Male
          </label>

          <input
            value='Female'
            name='gender'
            type='radio'
            className='form-check-input me-2'
            id='genderFemaleRadio'
            onChange={changeHandler}
            checked={customer.gender === 'Female'}
          />
          <label htmlFor='genderFemaleRadio' className=' me-2'>
            Female
          </label>
        </div>
        <div className='mb-3'>
          <label htmlFor='firstnameInput' className='form-label'>
            Firstname
          </label>
          <input
            value={customer.firstname}
            name='firstname'
            type='text'
            className='form-control'
            id='firstnameInput'
            onChange={changeHandler}
          />
          {errors.firstname && (
            <small className='text-danger'>{errors.firstname}</small>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='lastnameInput' className='form-label'>
            Lastname
          </label>
          <input
            value={customer.lastname}
            name='lastname'
            type='text'
            className='form-control'
            id='lastnameInput'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='cityInput' className='form-label'>
            City
          </label>
          <input
            value={customer.city}
            name='city'
            type='text'
            className='form-control'
            id='cityInput'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='emailInput' className='form-label'>
            Email address
          </label>
          <input
            value={customer.email}
            name='email'
            type='email'
            className='form-control'
            id='emailInput'
            onChange={changeHandler}
          />
          {errors.email && (
            <small className='text-danger'>{errors.email}</small>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='phoneInput' className='form-label'>
            Phone number
          </label>
          <input
            value={customer.phone}
            name='phone'
            type='tel'
            className='form-control'
            id='phoneInput'
            onChange={changeHandler}
          />
          {errors.phone && (
            <small className='text-danger'>{errors.phone}</small>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='avatarInput' className='form-label'>
            Avatar
          </label>
          <input
            value={customer.avatar}
            name='avatar'
            type='text'
            className='form-control'
            id='avatarInput'
            onChange={changeHandler}
          />
        </div>

        <button className='btn btn-primary'>Submit</button>
      </form>
    </>
  );
};

export default CustomerForm;
