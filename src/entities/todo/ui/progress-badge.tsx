import { EllipsisIcon } from 'lucide-react';

export function ProgressBadge() {
  return (
    <div className="bg-accent flex size-6 items-center justify-center rounded-xs">
      <EllipsisIcon className="size-4" />
    </div>
  );
}
