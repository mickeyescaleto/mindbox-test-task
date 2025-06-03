import { TodoCard } from './todo-card';
import type { Todo } from '../types/todo';

type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="text-text/75 pt-2 pb-2.5 text-center text-sm">No todos</p>
    );
  }

  return (
    <div className="flex max-h-96 flex-col gap-0.5 overflow-y-auto">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
