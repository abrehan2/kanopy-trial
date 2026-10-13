import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex h-input-h w-full min-w-0 appearance-none items-center justify-between gap-2 rounded-md border border-input bg-card px-input-x font-jost text-nav text-ink shadow-none outline-none ring-0',
        'focus:outline-none focus-visible:border-pine focus-visible:outline-none focus-visible:ring-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive',
        'data-placeholder:text-dust *:data-[slot=select-value]:min-w-0 *:data-[slot=select-value]:truncate',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 [&_svg:not([class*="text-"])]:text-ink',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 text-ink" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export { Select, SelectGroup, SelectValue, SelectTrigger };
