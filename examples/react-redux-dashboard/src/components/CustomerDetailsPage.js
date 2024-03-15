import React from 'react';

const CustomerDetailsPage = ({ selectedCustomer }) => {
  return (
    <>
      <h3>
        {selectedCustomer.gender === 'Male' ? 'Mr.' : 'Ms.'}{' '}
        {selectedCustomer.firstname} {selectedCustomer.lastname}
      </h3>
      <div className='row'>
        <div className='col-4'>
          <img
            className='img-thumbnail'
            style={{ width: '250px' }}
            src={selectedCustomer.avatar}
            alt={selectedCustomer.firstname}
          />
        </div>
        <div className='col-8'>
          <table className='table table-striped table-bordered'>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{selectedCustomer.id}</td>
              </tr>
              <tr>
                <td>Firstname</td>
                <td>{selectedCustomer.firstname}</td>
              </tr>
              <tr>
                <td>Lastname</td>
                <td>{selectedCustomer.lastname}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{selectedCustomer.gender}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{selectedCustomer.city}</td>
              </tr>
              <tr>
                <td>Email address</td>
                <td>{selectedCustomer.email}</td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td>{selectedCustomer.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomerDetailsPage;
