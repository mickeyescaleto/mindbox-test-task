import type { Dispatch, SetStateAction } from 'react';

import { FILTERS } from '../constants/filters';
import { getText } from '../utilities/get-text';
import type { Filter } from '../types/filter';
import { cn } from '@/shared/utilities/cn';
import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';

type FilterProps = {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

export function Filter({ filter, setFilter }: FilterProps) {
  function handleFilterChange(label: Filter) {
    setFilter(label);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="text"
          size="small"
          className="aria-[expanded=true]:text-text"
        >
          {getText(filter)}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="w-32 p-0.5">
        <div className="bg-overlay flex flex-col gap-1 rounded-sm p-1">
          {FILTERS.map((label) => (
            <Button
              type="button"
              variant="outline"
              size="small"
              onClick={() => handleFilterChange(label)}
              className={cn({
                'border-transparent': label !== filter,
              })}
            >
              {getText(label)}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
