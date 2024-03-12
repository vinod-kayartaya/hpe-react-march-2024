import React, { useState } from 'react';

const TaskForm = ({ addTask, taskToEdit }) => {
  const [taskText, setTaskText] = useState('');

  const changeHandler = (evt) => {
    setTaskText(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (taskText.trim().length === 0) {
      return;
    }

    addTask(taskText.trim());
    setTaskText(''); // via the state, we are emptying the textfield associated with this state
  };

  return (
    <>
      <h3>New task</h3>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='enter new task'
            className='form-control'
            value={taskText}
            onChange={changeHandler}
          />
        </form>

        {JSON.stringify(taskToEdit)}
      </div>
    </>
  );
};

export default TaskForm;
