import { http, toErrorMessage } from '@/lib/http';
import type { ContactDto } from '@/features/example/data/contact';
import type { ContactFormValues } from '@/features/example/schemas/contact';

export async function listContacts(): Promise<ContactDto[]> {
  try {
    const { data } = await http.get<ContactDto[]>('/contacts');
    return data;
  } catch (error) {
    throw new Error(toErrorMessage(error));
  }
}

export async function createContact(input: ContactFormValues): Promise<ContactDto> {
  try {
    const { data } = await http.post<ContactDto>('/contacts', input);
    return data;
  } catch (error) {
    throw new Error(toErrorMessage(error));
  }
}
