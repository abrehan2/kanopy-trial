'use client';

import { useState } from 'react';
import { FaqItem } from '@/features/home/components/FaqItem';
import type { PiFaq } from '@/features/personal-injury/data/personal-injury';

type PiFaqSectionProps = { faq: PiFaq[] };

export function PiFaqSection({ faq }: PiFaqSectionProps) {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="flex min-w-0 items-start gap-letter-gap overflow-x-clip bg-paper px-page-x py-section-y max-compact:flex-col max-compact:gap-0 max-compact:px-page-x-sm max-compact:pt-section-sm max-compact:pb-10"
    >
      <div className="w-faq-aside shrink-0 max-compact:w-full max-compact:pb-3">
        <h2 className="font-heading text-quote font-normal text-pine max-compact:hidden">
          Questions people ask us
        </h2>
        <h2 className="hidden font-heading text-section-sm font-normal text-pine max-compact:block">
          Questions
        </h2>
      </div>
      <div className="flex min-w-px flex-1 flex-col">
        {faq.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            open={open === index}
            compactOpen={open === index}
            bordered={index === 0 ? 'both' : 'bottom'}
            line="pine"
            density="practice"
            onToggle={() => setOpen(open === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}
