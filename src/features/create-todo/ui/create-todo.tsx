import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { PlusCircleIcon } from 'lucide-react';

import { useTodos } from '@/entities/todo';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export function CreateTodo() {
  const [title, setTitle] = useState('');

  const { createTodo } = useTodos();

  function handleAddTodo() {
    if (title.trim().length < 1) {
      return;
    }

    createTodo(title);

    setTitle('');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <div className="flex gap-1">
      <Input
        type="text"
        placeholder="What needs to be done?"
        className="pr-0"
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleAddTodo}
        disabled={title.trim().length < 1}
      >
        <PlusCircleIcon className="size-5" />
      </Button>
    </div>
  );
}
