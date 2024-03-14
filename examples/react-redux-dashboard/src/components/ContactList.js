import React, { Component } from 'react';
import { withUrl } from '../hoc/custom-hoc';

class ContactList extends Component {
  render() {
    console.log('this.props.data is', this.props.data);

    return (
      <>
        <h3>{this.props.heading}</h3>
        <hr />
        <div>{JSON.stringify(this.props.data)}</div>
      </>
    );
  }
}

export default withUrl( ContactList, 'http://example.com', 'data');
