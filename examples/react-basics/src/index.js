import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TaskApp from './task-list-app/TaskApp';
import NamesComponent from './hooks-demo/NamesComponent';
import UserForm from './hooks-demo/UserForm';
import MovieTitles from './hooks-demo/MovieTitles';
import CounterFc from './components/CounterFc';
import Counter from './components/Counter';
import Main from './lifecycle-demo/Main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Main />
  // </React.StrictMode>
);
