import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='new-customer' element={<CustomerForm />} />
            <Route path='customer-list' element={<CustomerList />} />
            <Route path='customer-details' element={<CustomerDetails />} />
            <Route
              path='search-customers'
              element={<h3>Search not ready yet</h3>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
