import { useState } from 'react';
import TaskList from './TaskList';
import TaskOps from './TaskOps';
import TaskForm from './TaskForm';

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
  const [taskToEdit, setTaskToEdit] = useState(null);

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

  const addTask = (text) => {
    const id = tasks.length === 0 ? 1 : 1 + Math.max(...tasks.map((t) => t.id));
    setTasks([...tasks, { id, text, finished: false }]);
  };

  const updateTask = (id, text) => {
    let currentTasks = [...tasks];
    let task = currentTasks.find((t) => t.id === id);
    if (!task) return;

    task.text = text;
    setTasks(currentTasks);
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <TaskForm
              addTask={addTask}
              taskToEdit={taskToEdit}
              updateTask={updateTask}
              setTaskToEdit={setTaskToEdit}
            />
          </div>
          <div className='col-6'>
            <TaskList
              setTaskToEdit={setTaskToEdit}
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
        </div>
      </div>
    </>
  );
};

export default TaskApp;
