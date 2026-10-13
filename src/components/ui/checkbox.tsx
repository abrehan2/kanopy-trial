'use client';

import * as React from 'react';
import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      suppressHydrationWarning
      className={cn(
        'peer inline-flex size-check shrink-0 appearance-none items-center justify-center rounded-sm border-check border-solid border-input bg-card shadow-none outline-none ring-0',
        'focus:outline-none focus-visible:border-pine focus-visible:outline-none focus-visible:ring-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive',
        'data-[state=checked]:border-pine data-[state=checked]:bg-pine data-[state=checked]:text-paper data-[state=checked]:border-check',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
