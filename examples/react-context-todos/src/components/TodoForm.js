import React, { useState } from 'react';
import { useTodosContext } from '../hooks/custom-hooks';

const TodoForm = () => {
  const [taskText, setTaskText] = useState('');

  const { addTask } = useTodosContext();

  const changeHandler = (evt) => {
    setTaskText(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (taskText.trim().length === 0) {
      return;
    }
    addTask(taskText.trim());
    setTaskText('');
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          autoFocus
          type='text'
          placeholder='enter new task'
          className='form-control'
          value={taskText}
          onChange={changeHandler}
          id='t1'
        />
      </form>
    </>
  );
};

export default TodoForm;
