import type { ReactNode } from 'react';
import { Label } from '@/components/ui/label';

type CaseReviewFieldProps = {
  id: string;
  label: ReactNode;
  error?: string;
  className?: string;
  children: ReactNode;
};

export function CaseReviewField({ id, label, error, className, children }: CaseReviewFieldProps) {
  return (
    <div className={`flex min-w-px flex-1 flex-col gap-field-gap ${className ?? ''}`}>
      <Label htmlFor={id} className="font-jost text-label font-medium text-ink">
        {label}
      </Label>
      {children}
      {error ? <p className="font-jost text-error text-destructive">{error}</p> : null}
    </div>
  );
}
