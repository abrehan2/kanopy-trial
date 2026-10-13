'use client';

import { useState } from 'react';
import { createContact } from '@/features/example/data/contact-api';
import type { ContactFormValues } from '@/features/example/schemas/contact';
import { showErrorFrom, showSuccess } from '@/lib/toast';

export function useContactSubmit(onCreated?: () => void) {
  const [saving, setSaving] = useState(false);

  const submit = async (values: ContactFormValues) => {
    setSaving(true);
    try {
      await createContact(values);
      showSuccess('Inquiry sent');
      onCreated?.();
    } catch (error) {
      showErrorFrom(error);
    } finally {
      setSaving(false);
    }
  };

  return { submit, saving };
}
