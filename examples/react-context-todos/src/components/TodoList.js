import React from 'react';
import { useTodosContext } from '../hooks/custom-hooks';

const TodoList = () => {
  const { todos, deleteTask, toggleStatus } = useTodosContext();

  return (
    <>
      <ul className='list-group'>
        {todos.map((t) => (
          <li key={t.id} className='list-group-item'>
            <span
              style={{
                cursor: 'pointer',
                textDecoration: t.finished ? 'line-through' : 'none',
              }}
              onClick={() => toggleStatus(t.id)}
            >
              {t.text}
            </span>
            <button
              className='bi bi-trash btn text-danger float-end'
              onClick={() => deleteTask(t.id)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
