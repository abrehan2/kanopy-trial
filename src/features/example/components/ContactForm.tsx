'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ContactField } from '@/features/example/components/ContactField';
import {
  contactT,
  makeContactSchema,
  type ContactFormValues,
} from '@/features/example/schemas/contact';

type ContactFormProps = {
  onSubmit: (values: ContactFormValues) => Promise<void>;
  saving: boolean;
};

export function ContactForm({ onSubmit, saving }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(makeContactSchema(contactT)),
    defaultValues: { name: '', email: '', message: '' },
  });

  return (
    <form
      className="flex max-w-form-copy flex-col gap-form-gap"
      onSubmit={handleSubmit(async (values) => {
        await onSubmit(values);
        reset();
      })}
    >
      <ContactField id="name" label="Name" error={errors.name?.message}>
        <Input id="name" aria-invalid={!!errors.name} {...register('name')} />
      </ContactField>
      <ContactField id="email" label="Email" error={errors.email?.message}>
        <Input id="email" type="email" aria-invalid={!!errors.email} {...register('email')} />
      </ContactField>
      <ContactField id="message" label="Message" error={errors.message?.message}>
        <Input id="message" aria-invalid={!!errors.message} {...register('message')} />
      </ContactField>
      <Button type="submit" disabled={saving}>
        {saving ? 'Sending…' : 'Send'}
      </Button>
    </form>
  );
}
