import { useState, type ReactNode } from 'react';
import { nanoid } from 'nanoid';

import { TodosContext, type Todo } from '@/entities/todo';

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function createTodo(title: Todo['title']) {
    const id = nanoid();

    setTodos((state) => [...state, { id, title, status: 'in_progress' }]);
  }

  function clearCompletedTodos() {
    setTodos((state) => state.filter(({ status }) => status !== 'completed'));
  }

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, createTodo, clearCompletedTodos }}
    >
      {children}
    </TodosContext.Provider>
  );
}
