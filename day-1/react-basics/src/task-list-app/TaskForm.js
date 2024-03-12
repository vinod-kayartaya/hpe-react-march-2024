import React, { useEffect, useState, useRef } from 'react';

const TaskForm = ({ addTask, taskToEdit, updateTask, setTaskToEdit }) => {
  const [taskText, setTaskText] = useState('');
  const taskTextRef = useRef();

  useEffect(() => {
    if (!taskToEdit) return;
    setTaskText(taskToEdit.text); // changing the state (taskText) will update the UI (textfield)
  }, [taskToEdit]);

  const changeHandler = (evt) => {
    setTaskText(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (taskText.trim().length === 0) {
      return;
    }

    if (taskToEdit === null) {
      addTask(taskText.trim());
    } else {
      updateTask(taskToEdit.id, taskText);
      setTaskToEdit(null);
    }

    setTaskText(''); // via the state, we are emptying the textfield associated with this state
  };

  return (
    <>
      {taskToEdit ? <h3>Update task text</h3> : <h3>New task</h3>}

      <div>
        <form onSubmit={submitHandler}>
          <input
            autoFocus
            ref={taskTextRef}
            type='text'
            placeholder='enter new task'
            className='form-control'
            value={taskText}
            onChange={changeHandler}
            id='t1'
          />
        </form>

        {/* false/empty-string/0/null/undefined ---> false */}
        {taskToEdit && (
          <button
            onClick={() => {
              setTaskToEdit(null);
              setTaskText('');
              taskTextRef.current.focus();
            }}
            className='btn btn-link mt-2'
          >
            Cancel editing
          </button>
        )}
      </div>
    </>
  );
};

export default TaskForm;
