import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions/addressbook-action-creators';

const ContactForm = () => {
  const dispatch = useDispatch();

  // variable to represent the contact; values must be associated with the form inputs
  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    gender: 'Male',
    city: 'Bangalore',
    email: '',
    phone: ''
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // some validation is to be done before we can submit

    dispatch(addContact(contact));

    setContact({
      firstname: '',
      lastname: '',
      gender: 'Male',
      city: 'Bangalore',
      email: '',
      phone: '',
    });
  };

  return (
    <>
      <h3>Contact details</h3>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <input
            value='Male'
            name='gender'
            type='radio'
            className='form-check-input me-2'
            id='genderMaleRadio'
            onChange={changeHandler}
            checked={contact.gender === 'Male'}
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
            checked={contact.gender === 'Female'}
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
            value={contact.firstname}
            name='firstname'
            type='text'
            className='form-control'
            id='firstnameInput'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='lastnameInput' className='form-label'>
            Lastname
          </label>
          <input
            value={contact.lastname}
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
            value={contact.city}
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
            value={contact.email}
            name='email'
            type='email'
            className='form-control'
            id='emailInput'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='phoneInput' className='form-label'>
            Phone number
          </label>
          <input
            value={contact.phone}
            name='phone'
            type='tel'
            className='form-control'
            id='phoneInput'
            onChange={changeHandler}
          />
        </div>

        <button className='btn btn-primary'>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
