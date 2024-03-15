import { createContext, useState } from 'react';

export const TodosContext = createContext();

const getId = () => `${Math.random()}${Math.random()}${Math.random()}`;

const initialTasks = [
  { id: getId(), text: 'Learn react bascis', finished: true },
  { id: getId(), text: 'Learn react state', finished: true },
  { id: getId(), text: 'Learn react props', finished: false },
  { id: getId(), text: 'Have lunch', finished: false },
  { id: getId(), text: 'Learn events', finished: false },
  { id: getId(), text: 'Trainer introduction', finished: true },
];

const TodoDataProvider = ({ children }) => {
  // this data provider maintains data and functionalities for the data
  // and can make it available to all of its `children` components

  // data to be shared to child components
  const [todos, setTodos] = useState([...initialTasks]);

  // methods (actions) to be shared to the child components
  const addTask = (text) => {
    const id = getId();
    setTodos([...todos, { id, text, finished: false }]);
  };
  const toggleStatus = (id) => {
    let currentTasks = [...todos];
    let task = currentTasks.find((t) => t.id === id);
    if (!task) return;

    task.finished = !task.finished;
    setTodos(currentTasks);
  };

  const deleteTask = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <TodosContext.Provider value={{ todos, addTask, deleteTask, toggleStatus }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoDataProvider;
