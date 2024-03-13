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
        {/* .row>.col*3 */}
        <div className='row'>
          <div className='col-5'>
            <ContactForm />
          </div>
          <div className='col-7'>
            <ContactList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
