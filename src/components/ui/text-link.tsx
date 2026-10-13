import { cn } from '@/lib/utils';

export function TextLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'font-jost text-nav text-pine underline decoration-solid',
        className,
      )}
      {...props}
    />
  );
}
