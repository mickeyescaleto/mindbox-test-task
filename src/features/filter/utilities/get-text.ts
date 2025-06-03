import type { Filter } from '../types/filter';

export function getText(filter: Filter): string {
  const map: Record<Filter, string> = {
    all: 'All',
    in_progress: 'In progress',
    completed: 'Completed',
  };

  return map[filter];
}
