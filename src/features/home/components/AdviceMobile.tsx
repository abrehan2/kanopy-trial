'use client';

import { useState } from 'react';
import type { AdviceColumn } from '@/features/home/data/home';

type AdviceMobileProps = {
  advice: AdviceColumn[];
};

export function AdviceMobile({ advice }: AdviceMobileProps) {
  const [open, setOpen] = useState(0);

  return (
    <div className="hidden w-full flex-col max-compact:flex">
      {advice.map((column, index) => {
        const expanded = open === index;
        return (
          <div key={column.shortTitle} className="flex flex-col gap-2.5 border-t border-pine py-form-gap">
            <button
              type="button"
              className="flex w-full items-center text-left text-pine"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span className="min-w-px flex-1 font-heading text-sub-sm">{column.shortTitle}</span>
              <span className="font-jost text-sub-sm">{expanded ? '–' : '+'}</span>
            </button>
            {expanded
              ? column.shortItems.map((item) => (
                  <p key={item} className="font-jost text-bullet whitespace-pre-wrap text-ink">
                    {item}
                  </p>
                ))
              : null}
          </div>
        );
      })}
    </div>
  );
}
