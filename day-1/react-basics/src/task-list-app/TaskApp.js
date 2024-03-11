import { useState } from 'react';
import TaskList from './TaskList';
import TaskOps from './TaskOps';

const initialTasks = [
  { id: 1, text: 'Learn react bascis', finished: true },
  { id: 2, text: 'Learn react state', finished: true },
  { id: 3, text: 'Learn react props', finished: false },
  { id: 4, text: 'Have lunch', finished: false },
  { id: 5, text: 'Learn events', finished: false },
  { id: 6, text: 'Trainer introduction', finished: true },
];

const TaskApp = () => {
  const [tasks, setTasks] = useState(initialTasks); // the parameter is used only for the first time.

  const deleteFinishedTasks = () => {
    let filteredTasks = tasks.filter((t) => !t.finished);
    setTasks(filteredTasks); // not only the state maintained by React for this component is updated,
    // but react will re-render this component.
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const toggleTaskStatus = () => {
    const modifiedTasks = tasks.map((t) => ({ ...t, finished: !t.finished }));
    setTasks(modifiedTasks);
  };

  const deleteTask = (id) => {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const toggleStatus = (id) => {
    let currentTasks = [...tasks];
    let task = currentTasks.find((t) => t.id === id);
    if (!task) return;

    task.finished = !task.finished;
    setTasks(currentTasks);
  };

  return (
    <>
      <div className='container'>
        <TaskList
          tasks={tasks}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
        />
        <TaskOps
          deleteFinishedTasks={deleteFinishedTasks}
          deleteAllTasks={deleteAllTasks}
          toggleTaskStatus={toggleTaskStatus}
        />
      </div>
    </>
  );
};

export default TaskApp;
