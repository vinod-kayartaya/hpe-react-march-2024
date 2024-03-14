import { Provider } from 'react-redux';
import store from './redux/store';
import CustomerList from './components/CustomerList';
function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>React/Redux Dashboard</h1>
        <CustomerList />
      </div>
    </Provider>
  );
}

export default App;
