import { AppImage } from '@/components/media/AppImage';
import { AttorneySign } from '@/features/home/components/AttorneySign';
import { HOME_ASSETS } from '@/features/home/data/home';

export function AttorneysSection() {
  return (
    <section
      id="attorneys"
      className="min-w-0 overflow-x-clip bg-paper px-page-x pt-10 pb-section-lg max-compact:px-page-x-sm max-compact:pt-2 max-compact:pb-section-sm"
    >
      <div className="flex min-w-0 items-start gap-letter-gap max-compact:flex-col max-compact:gap-5">
        <div
          data-testid="attorney-photo"
          className="relative h-photo-h w-photo-w shrink-0 overflow-hidden rounded-sm max-compact:h-photo-h-sm max-compact:w-full max-compact:min-w-0"
        >
          <AppImage
            src={HOME_ASSETS.attorneys}
            alt="Ludmila and Eric in the Irvine office"
            width={1800}
            height={1344}
            sizes="(max-width: 1000px) 100vw, 560px"
            className="size-full object-cover"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col gap-7 pt-6 max-compact:gap-5 max-compact:pt-0">
          <h2 className="font-heading text-section font-normal text-pine max-compact:hidden">
            Before you call
            <br />
            anyone else
          </h2>
          <h2 className="hidden font-heading text-section-sm font-normal text-pine max-compact:block">
            You’ll talk to a lawyer, not a call center.
          </h2>
          <p className="font-jost text-lead text-ink max-compact:hidden">
            If you’re reading this, something has probably gone wrong. A crash, a car that won’t
            stay fixed, an injury at work. You likely have an insurance adjuster calling, bills
            arriving, and no idea what any of it is worth.
          </p>
          <p className="font-jost text-lead text-ink max-compact:hidden">
            Here is what we can promise. When you call, one of us, Ludmila in California or Eric in
            Nevada, will look at your case ourselves. We’ll tell you honestly whether it’s worth
            bringing. If it isn’t, we’ll say so, and point you somewhere that can help.
          </p>
          <p className="font-jost text-lead text-ink max-compact:hidden">
            If it is, we handle the insurance company, the paperwork and the deadlines, and you
            don’t pay us anything unless we win.
          </p>
          <p className="hidden font-jost text-hero-lead-sm text-ink max-compact:block">
            Ludmila or Eric looks at every case and tells you straight if it’s worth bringing.
          </p>
          <div className="flex gap-14 pt-3 max-compact:gap-6 max-compact:pt-0">
            <AttorneySign name="Ludmila Kucerkova Romero" place="California · Irvine" />
            <AttorneySign name="Eric L. Marshall" place="Nevada · Henderson" />
          </div>
        </div>
      </div>
    </section>
  );
}
