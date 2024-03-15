import { useContext } from 'react';
import { TodosContext } from '../providers/TodoDataProvider';

export const useTodosContext = () => {
  return useContext(TodosContext);
};
