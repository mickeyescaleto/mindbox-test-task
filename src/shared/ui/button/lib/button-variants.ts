import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xs text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-2",
  {
    variants: {
      variant: {
        ghost: 'hover:bg-accent',
      },
      size: {
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
