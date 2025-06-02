import { createContext, type Dispatch, type SetStateAction } from 'react';

import type { Todo } from '../types/todo';

type TodosContextType = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  createTodo: (title: Todo['title']) => void;
  clearCompletedTodos: () => void;
};

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined,
);
