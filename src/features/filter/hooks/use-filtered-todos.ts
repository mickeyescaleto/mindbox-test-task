import { useMemo, useState } from 'react';

import type { Filter } from '../types/filter';
import { useTodos } from '@/entities/todo';

export function useFilteredTodos() {
  const [filter, setFilter] = useState<Filter>('all');

  const { todos } = useTodos();

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === 'all') {
          return true;
        }

        return todo.status === filter;
      }),
    [todos, filter],
  );

  return { filteredTodos, filter, setFilter };
}
