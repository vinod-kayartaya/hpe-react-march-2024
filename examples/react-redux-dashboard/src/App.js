import { Provider } from 'react-redux';
import store from './redux/store';
import CustomerList from './components/CustomerList';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(true);

  return (
    <Provider store={store}>
      <div className='container'>
        <h1>React/Redux Dashboard</h1>

        <button onClick={() => setShow(!show)} className='btn btn-primary'>
          Show/hide customer list
        </button>

        {show && <CustomerList />}
      </div>
    </Provider>
  );
}

export default App;
