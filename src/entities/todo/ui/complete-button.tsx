import { useTodos } from '../hooks/use-todos';
import type { Todo } from '../types/todo';
import { Button } from '@/shared/ui/button';

type CompleteButtonProps = {
  id: Todo['id'];
};

export function CompleteButton({ id }: CompleteButtonProps) {
  const { completeTodo } = useTodos();

  function handleCompleteTodo() {
    completeTodo(id);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="small"
      className="hover:text-text h-6 border-green-800 text-xs font-medium text-green-800 hover:bg-green-800"
      onClick={handleCompleteTodo}
    >
      Complete
    </Button>
  );
}
