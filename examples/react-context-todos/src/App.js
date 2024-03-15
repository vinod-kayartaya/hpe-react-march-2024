import Box from './components/Box';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoDataProvider from './providers/TodoDataProvider';

function App() {
  return (
    <>
      <TodoDataProvider>
        <div className='alert alert-primary'>
          <div className='container'>
            <Box color='red'>
              <h1>React Context API Demo</h1>
              <h3>Todo tasks Manager</h3>
            </Box>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <Box>
                <TodoForm />
              </Box>
            </div>
            <div className='col-4'>
              <Box>
                <TodoList />
              </Box>
            </div>
          </div>
        </div>
      </TodoDataProvider>
    </>
  );
}

export default App;
