import type { ComponentProps } from 'react';

import { cn } from '@/shared/utilities/cn';

export function Input({
  type = 'text',
  className,
  ...props
}: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex w-full min-w-0 truncate rounded-xs px-1.5 py-2 text-sm outline-none',
        'selection:bg-accent selection:text-text',
        'focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-2',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
