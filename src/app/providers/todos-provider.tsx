import { useEffect, useState, type ReactNode } from 'react';
import { nanoid } from 'nanoid';

import { TodosContext, type Todo } from '@/entities/todo';

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function createTodo(title: Todo['title']) {
    const id = nanoid();

    setTodos((state) => [...state, { id, title, status: 'in_progress' }]);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, setTodos, createTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
