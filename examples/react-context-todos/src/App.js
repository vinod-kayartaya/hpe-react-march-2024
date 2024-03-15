import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoDataProvider from './providers/TodoDataProvider';

function App() {
  return (
    <>
      <TodoDataProvider>
        <div className='alert alert-primary'>
          <div className='container'>
            <h1>React Context API Demo</h1>
            <h3>Todo tasks Manager</h3>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <TodoForm />
            </div>
            <div className='col-4'>
              <TodoList />
            </div>
          </div>
        </div>
      </TodoDataProvider>
    </>
  );
}

export default App;
