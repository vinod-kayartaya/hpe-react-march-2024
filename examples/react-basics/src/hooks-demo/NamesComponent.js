import { useReducer, useState } from 'react';

// action example:
/*
{
    type: 'ADD_NAME',
    payload: 'Vinay'
}

{
    type: 'REMOVE_NAME',
    payload: 3
}
*/

const initialState = {
  names: ['Vinod', 'Shyam', 'John', 'Jane'],
};

// this reducer function is called react whenever a dispatch of an action is done
const reducer = (state, action) => {
  console.log('inside reducer, state is', state, ' and action is', action);
  switch (action.type) {
    case 'DELETE_NAME': {
      let names = [...state.names];
      names.splice(action.payload, 1);
      return { ...state, names };
    }
    case 'ADD_NAME': {
      let names = [...state.names];
      names.push(action.payload);
      return { ...state, names };
    }
    case 'SORT_NAMES': {
      let names = [...state.names];
      names.sort();
      return { ...state, names };
    }
  }
  return { ...state };
};

const NamesComponent = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  window.dispatch = dispatch;
  return (
    <>
      <div className='container'>
        <h3>useReducer hook demo</h3>
        <hr />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!name) return;
            dispatch({ type: 'ADD_NAME', payload: name });
            setName('');
          }}
        >
          <input
            type='text'
            style={{ width: '300px' }}
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>

        <button
          onClick={() => dispatch({ type: 'SORT_NAMES' })}
          className='btn btn-primary'
        >
          Sort names
        </button>
        <ul className='list-group' style={{ width: '300px' }}>
          {state.names.map((name, index) => (
            <li key={index} className='list-group-item'>
              {name}
              <button
                className='bi bi-trash btn text-danger'
                onClick={() =>
                  dispatch({ type: 'DELETE_NAME', payload: index })
                }
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NamesComponent;
