import { Component } from 'react';
import Header from './Header';

class HelloWorld extends Component {
  render() {
    return (
      // div>h1{Hello World}+hr+p{react is cool}
      <>
        <Header></Header>
        <h3>Hello, world</h3>
      </>
    );
  }
}

export default HelloWorld;
