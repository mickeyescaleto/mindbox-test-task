import { CreateTodo } from '@/features/create-todo';
import { TodosCounter } from '@/features/todos-counter';
import { Filter, useFilteredTodos } from '@/features/filter';
import { ClearCompletedTodos } from '@/features/clear-completed-todos';
import { TodoList } from '@/entities/todo';
import { Separator } from '@/shared/ui/separator';

export function View() {
  const { filteredTodos, filter, setFilter } = useFilteredTodos();

  return (
    <>
      <header className="text-center text-balance">
        <h1 className="text-3xl font-semibold tracking-tight">Todoify</h1>
        <p className="text-text/75 mt-2">
          Simple and user-friendly task management application
        </p>
      </header>

      <section className="bg-surface relative mt-4 rounded-lg p-0.5">
        <div className="bg-overlay rounded-md p-1">
          <CreateTodo />
          <div className="px-1.5">
            <Separator className="my-1" />
          </div>
          <TodoList todos={filteredTodos} />
        </div>
        <div className="mt-0.5 flex items-center justify-between">
          <div className="flex-1">
            <div className="ml-2">
              <TodosCounter />
            </div>
          </div>
          <Filter filter={filter} setFilter={setFilter} />
          <div className="flex flex-1">
            <div className="ml-auto">
              <ClearCompletedTodos />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
