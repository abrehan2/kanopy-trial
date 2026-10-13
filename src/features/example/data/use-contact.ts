'use client';

import { useCallback, useEffect, useState } from 'react';
import { listContacts } from '@/features/example/data/contact-api';
import { toContactRows } from '@/features/example/data/contact-map';
import type { ContactRow } from '@/features/example/data/contact';

async function loadContacts() {
  return toContactRows(await listContacts());
}

export function useContacts() {
  const [rows, setRows] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const refetch = useCallback(async () => {
    try {
      setRows(await loadContacts());
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let live = true;
    loadContacts()
      .then((next) => {
        if (!live) return;
        setRows(next);
        setError(false);
      })
      .catch(() => {
        if (live) setError(true);
      })
      .finally(() => {
        if (live) setLoading(false);
      });
    return () => {
      live = false;
    };
  }, []);

  return { rows, loading, error, refetch };
}
