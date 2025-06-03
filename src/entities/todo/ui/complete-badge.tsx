import { CheckCheckIcon } from 'lucide-react';

export function CompleteBadge() {
  return (
    <div className="flex size-6 items-center justify-center rounded-xs bg-green-800/25 text-green-700">
      <CheckCheckIcon className="size-4" />
    </div>
  );
}
