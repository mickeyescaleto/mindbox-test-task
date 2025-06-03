import { useTodos } from '../hooks/use-todos';

import { Button } from '@/shared/ui/button';
import type { Todo } from '../types/todo';

type UncompleteButtonProps = {
  id: Todo['id'];
};

export function UncompleteButton({ id }: UncompleteButtonProps) {
  const { uncompleteTodo } = useTodos();

  function handleUncompleteTodo() {
    uncompleteTodo(id);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="small"
      className="h-6 text-xs font-medium"
      onClick={handleUncompleteTodo}
    >
      Uncomplete
    </Button>
  );
}
