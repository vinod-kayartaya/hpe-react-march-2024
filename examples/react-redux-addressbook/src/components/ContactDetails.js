import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactDetails extends Component {
  render() {
    const contact = this.props.addressbookReducer.fetchedContact;

    if (contact === null) {
      return null;
    }

    return (
      <>
        <h3>Contact details</h3>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{contact.id}</td>
            </tr>
            <tr>
              <td>Firstname</td>
              <td>{contact.firstname}</td>
            </tr>
            <tr>
              <td>Lastname</td>
              <td>{contact.lastname}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{contact.city}</td>
            </tr>
            <tr>
              <td>Email address</td>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <td>Phone number</td>
              <td>{contact.phone}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{contact.gender}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

const stateAsProps = (store) => {
  return {
    addressbookReducer: store.addressbookReducer,
  };
};
const actionsAsProps = {};

// a higher-order-component (or simply called as HOC) is a function that takes a component and returns
// the same or modified version of the same or a totally different component

// const hoc = connect(stateAsProps, actionsAsProps);
// export default hoc(ContactDetails); 

export default connect(stateAsProps, actionsAsProps)(ContactDetails);
