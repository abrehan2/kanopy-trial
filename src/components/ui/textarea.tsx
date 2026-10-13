import * as React from 'react';
import { cn } from '@/lib/utils';

function Textarea({
  className,
  autoComplete = 'off',
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      autoComplete={autoComplete}
      data-slot="textarea"
      data-1p-ignore
      data-lpignore="true"
      data-form-type="other"
      suppressHydrationWarning
      className={cn(
        'h-textarea-h w-full min-w-0 resize-none appearance-none rounded-md border border-input bg-card px-input-x pt-input-x font-jost text-nav text-ink shadow-none outline-none ring-0',
        'placeholder:text-dust focus:outline-none focus-visible:border-pine focus-visible:outline-none focus-visible:ring-0',
        'aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
