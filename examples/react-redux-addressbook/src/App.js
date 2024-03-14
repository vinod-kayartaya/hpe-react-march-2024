import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <ContactForm />
          </div>
          <div className='col-4'>
            <ContactList />
          </div>
          <div className='col-4'>
            <ContactDetails  />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
