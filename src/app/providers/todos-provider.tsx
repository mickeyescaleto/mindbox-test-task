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

  function completeTodo(id: Todo['id']) {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: 'completed' };
        }

        return todo;
      }),
    );
  }

  function uncompleteTodo(id: Todo['id']) {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: 'in_progress' };
        }

        return todo;
      }),
    );
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        createTodo,
        clearCompletedTodos,
        completeTodo,
        uncompleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
