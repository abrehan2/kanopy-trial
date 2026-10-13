import type { AboutPromise } from '@/features/about/data/about-promises';

type AboutPromiseRowProps = { item: AboutPromise };

export function AboutPromiseRow({ item }: AboutPromiseRowProps) {
  return (
    <div className="flex w-full flex-col gap-2 border-t border-pine py-7 max-compact:gap-0 max-compact:py-4">
      <h3 className="font-heading text-process font-normal text-pine max-compact:hidden">{item.title}</h3>
      <h3 className="hidden font-heading text-sub-sm font-normal text-pine max-compact:block">
        {item.titleSm}
      </h3>
      <p className="font-jost text-form-lead text-stone max-compact:hidden">{item.body}</p>
    </div>
  );
}
