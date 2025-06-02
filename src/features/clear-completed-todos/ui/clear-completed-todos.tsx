import { useTodos } from '@/entities/todo';
import { Button } from '@/shared/ui/button';

export function ClearCompletedTodos() {
  const { todos, clearCompletedTodos } = useTodos();

  return (
    <Button
      type="button"
      variant="text"
      size="small"
      className="rounded-md"
      onClick={clearCompletedTodos}
      disabled={
        todos.filter((todo) => todo.status === 'completed').length === 0
      }
    >
      Clear completed
    </Button>
  );
}
