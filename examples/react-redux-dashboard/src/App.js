import { Provider } from 'react-redux';
import store from './redux/store';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>React/Redux Dashboard</h1>
        <div className='row'>
          <div className='col-4'>
            <CustomerForm />
          </div>
          <div className='col-8'>
            <CustomerList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
