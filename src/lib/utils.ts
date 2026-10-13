import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display',
            'banner',
            'section',
            'form-h',
            'quote',
            'close',
            'legal',
            'result',
            'offer-sm',
            'title',
            'case',
            'process',
            'sub',
            'faq',
            'sign',
            'lead',
            'lead-sm',
            'hero-lead',
            'form-lead',
            'cta',
            'body',
            'step',
            'when',
            'nav',
            'label',
            'nav-cta',
            'micro',
            'error',
            'alert',
            'hint',
            'display-sm',
            'hero-lead-sm',
            'cta-sm',
            'form-h-sm',
            'title-sm',
            'section-sm',
            'sub-sm',
            'result-sm',
            'quote-sm',
            'banner-sm',
            'faq-sm',
            'close-sm',
            'offer-mob',
            'results-h',
            'results-hero',
            'about-hero',
            'about-name',
            'case-sm',
            'bullet',
            'disc',
          ],
        },
      ],
      'font-family': [{ font: ['jost', 'heading'] }],
      'border-w': [{ border: ['check'] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
