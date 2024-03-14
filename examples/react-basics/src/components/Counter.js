// rcc
import React, { Component } from 'react';
import Header from './Header';

export default class Counter extends Component {
  state = { count: 123 };

  increment = () => {
    console.log('before increment, count is', this.state.count);
    this.setState({ count: this.state.count + 1 }, ()=>{
      console.log('after increment, count is', this.state.count);
    });
    
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div className='container'>
          <Header />

          <h3>
            <button onClick={this.decrement} className='btn btn-primary'>
              Decrement
            </button>
            <span className='mx-3'>Count is {this.state.count}</span>
            <button onClick={this.increment} className='btn btn-primary'>
              Increment
            </button>
          </h3>
        </div>
      </>
    );
  }
}
