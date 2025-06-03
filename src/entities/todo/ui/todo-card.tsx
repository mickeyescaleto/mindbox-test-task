import { CompleteBadge } from './complete-badge';
import { ProgressBadge } from './progress-badge';
import { CompleteButton } from './complete-button';
import { UncompleteButton } from './uncomplete-button';
import type { Todo } from '../types/todo';
import { cn } from '@/shared/utilities/cn';

type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  return (
    <div className="hover:bg-surface/75 group flex items-center gap-2 rounded-xs px-3 py-2 transition-colors">
      {todo.status === 'completed' ? <CompleteBadge /> : <ProgressBadge />}
      <p
        className={cn('text-sm', {
          'text-text/50': todo.status === 'completed',
        })}
      >
        {todo.title}
      </p>
      <div className="ml-auto -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
        {todo.status === 'completed' ? (
          <UncompleteButton id={todo.id} />
        ) : (
          <CompleteButton id={todo.id} />
        )}
      </div>
    </div>
  );
}
