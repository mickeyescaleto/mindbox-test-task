import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xs text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-accent focus-visible:ring-2",
  {
    variants: {
      variant: {
        ghost: 'hover:bg-accent',
        outline: 'border border-accent hover:bg-accent',
        text: 'text-text/75 hover:text-text',
      },
      size: {
        small: 'px-2 py-1',
        medium: 'px-4 py-2',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'medium',
    },
  },
);
