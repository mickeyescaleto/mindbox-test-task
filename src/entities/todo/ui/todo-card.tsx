import { CheckCheckIcon, EllipsisIcon } from 'lucide-react';

import { useTodos } from '../hooks/use-todos';
import type { Todo } from '../types/todo';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utilities/cn';

type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  const { completeTodo, uncompleteTodo } = useTodos();

  function handleCompleteTodo() {
    completeTodo(todo.id);
  }

  function handleUncompleteTodo() {
    uncompleteTodo(todo.id);
  }

  return (
    <div className="hover:bg-surface/75 group flex items-center gap-2 rounded-xs px-3 py-2 transition-colors">
      {todo.status === 'completed' ? (
        <div className="flex size-6 items-center justify-center rounded-xs bg-green-800/25 text-green-700">
          <CheckCheckIcon className="size-4" />
        </div>
      ) : (
        <div className="bg-accent flex size-6 items-center justify-center rounded-xs">
          <EllipsisIcon className="size-4" />
        </div>
      )}
      <p
        className={cn('text-sm', {
          'text-text/50': todo.status === 'completed',
        })}
      >
        {todo.title}
      </p>
      <div className="ml-auto -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
        {todo.status === 'completed' ? (
          <Button
            type="button"
            variant="outline"
            size="small"
            className="h-6 text-xs font-medium"
            onClick={handleUncompleteTodo}
          >
            Uncomplete
          </Button>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="small"
            className="hover:text-text h-6 border-green-800 text-xs font-medium text-green-800 hover:bg-green-800"
            onClick={handleCompleteTodo}
          >
            Complete
          </Button>
        )}
      </div>
    </div>
  );
}
