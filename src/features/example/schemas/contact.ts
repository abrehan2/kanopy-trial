import { z } from 'zod';

export const CONTACT_COPY = {
  nameRequired: 'Name is required',
  emailInvalid: 'Enter a valid email',
  messageRequired: 'Message is required',
} as const;

export type ContactTKey = keyof typeof CONTACT_COPY;
export type ContactTFn = (key: ContactTKey) => string;

export const contactT: ContactTFn = (key) => CONTACT_COPY[key];

export const makeContactSchema = (t: ContactTFn) =>
  z.object({
    name: z.string().trim().min(1, t('nameRequired')),
    email: z.email(t('emailInvalid')),
    message: z.string().trim().min(1, t('messageRequired')),
  });

export type ContactFormValues = z.infer<ReturnType<typeof makeContactSchema>>;
