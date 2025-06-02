import { getText } from '../utilities/get-text';
import { useTodos } from '@/entities/todo';

export function TodosCounter() {
  const { todos } = useTodos();

  return (
    <p className="text-text/75 text-sm">
      {getText(todos.filter((todo) => todo.status === 'in_progress').length)}
    </p>
  );
}
