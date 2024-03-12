// this represents a single Task
// with id, text, finsihed

// rafce (shortcut for snippet)
import React from 'react';

const Task = ({ task, deleteTask, toggleStatus, setTaskToEdit }) => {
  return (
    <>
      <h5
        className='list-group-item'
        style={{ textDecoration: task.finished ? 'line-through' : 'none' }}
      >
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => toggleStatus(task.id)}
        >
          {task.text}
        </span>

        <button
          className='bi bi-trash btn text-danger'
          onClick={() => deleteTask(task.id)}
        ></button>

        <button
          className='bi bi-pencil btn text-primary'
          onClick={() => setTaskToEdit(task)}
        ></button>
      </h5>
    </>
  );
};

export default Task;
