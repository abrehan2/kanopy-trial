'use client';

import { useState } from 'react';
import { FaqItem } from '@/features/home/components/FaqItem';
import type { FaqItem as FaqItemModel } from '@/features/home/data/home';

type FaqSectionProps = {
  faq: FaqItemModel[];
};

export function FaqSection({ faq }: FaqSectionProps) {
  const [open, setOpen] = useState(0);
  const [manual, setManual] = useState(false);

  return (
    <section
      id="faq"
      className="flex min-w-0 items-start gap-col-gap overflow-x-clip bg-paper px-page-x py-section-y max-compact:flex-col max-compact:gap-0 max-compact:px-page-x-sm max-compact:pt-6 max-compact:pb-16"
    >
      <div className="w-faq-aside shrink-0 max-compact:w-full max-compact:pb-5">
        <h2 className="font-heading text-form-h font-normal text-pine max-compact:text-banner-sm">
          Questions people ask us first
        </h2>
      </div>
      <div className="flex min-w-px flex-1 flex-col">
        {faq.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            open={open === index}
            compactOpen={manual && open === index}
            bordered={index === 0 ? 'both' : 'bottom'}
            hiddenOnCompact={index === faq.length - 1}
            onToggle={() => {
              if (!manual) {
                setManual(true);
                setOpen(index);
                return;
              }
              setOpen(open === index ? -1 : index);
            }}
          />
        ))}
      </div>
    </section>
  );
}
