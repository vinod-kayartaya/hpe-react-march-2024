import React, { useState } from 'react';
import { useLocalState, useSessionState } from './custom-hooks';

const UserForm = () => {
  const [name, setName] = useLocalState('name', '');
  const [city, setCity] = useSessionState('city', '');

  const [country, setCountry] = useState('India');

  //   const [country, setCountry] = useState(() => 'India');
  // const [country, setCountry] = useState(() => {
  //   if (Math.random() > 0.5) {
  //     return 'India';
  //   } else {
  //     return 'Bharat';
  //   }
  // });

  return (
    <>
      <div className='container'>
        <h3>Example of a custom hook</h3>
        <form style={{ width: '500px' }}>
          <div className='mb-3'>
            <label htmlFor='nameInput' className='form-label'>
              Name
            </label>
            <input
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='form-control'
              id='nameInput'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='cityInput' className='form-label'>
              City
            </label>
            <input
              name='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type='text'
              className='form-control'
              id='cityInput'
              aria-describedby='emailHelp'
            />
          </div>

          <button type='submit' className='btn btn-primary mb-5'>
            Submit
          </button>
        </form>

        <div>
          <p>Name: {name}</p>
          <p>City: {city}</p>
          <p>Country: {country}</p>
        </div>
      </div>
    </>
  );
};

export default UserForm;
