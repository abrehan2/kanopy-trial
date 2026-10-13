import type { ReactNode } from 'react';
import { Label } from '@/components/ui/label';

type ContactFieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

export function ContactField({ id, label, error, children }: ContactFieldProps) {
  return (
    <div className="flex flex-col gap-field-gap">
      <Label htmlFor={id} className="font-jost text-label font-medium text-ink">
        {label}
      </Label>
      {children}
      {error ? <p className="font-jost text-micro text-destructive">{error}</p> : null}
    </div>
  );
}
