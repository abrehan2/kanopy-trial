import { SiteLogo } from '@/components/layout/SiteLogo';
import { FooterCol } from '@/features/home/components/FooterCol';
import { PHONE_CA, PHONE_NV, type FooterCol as FooterColModel } from '@/features/home/data/home';

type HomeFooterProps = {
  footer: FooterColModel[];
};

const LEGAL =
  'Attorney advertising. Prior results don’t guarantee a similar outcome. Ludmila Kucerkova Romero, Esq., California counsel. Eric L. Marshall, Esq., Nevada counsel. © 2026 Olive Legal Group.';
const LEGAL_SM =
  'Attorney advertising. Prior results don’t guarantee a similar outcome.\n© 2026 Olive Legal Group.  Privacy · Terms · Accessibility';

export function HomeFooter({ footer }: HomeFooterProps) {
  return (
    <footer className="flex min-w-0 flex-col gap-14 overflow-x-clip bg-footer px-page-x pt-24 pb-12 max-compact:gap-6 max-compact:px-page-x-sm max-compact:py-16">
      <div className="flex w-full items-start gap-col-gap max-compact:flex-col max-compact:gap-6">
        <div className="w-footer-logo shrink-0 max-compact:w-footer-logo-sm">
          <SiteLogo variant="stacked" className="max-compact:h-footer-mark max-compact:w-footer-logo-sm" />
        </div>
        <div className="flex flex-1 gap-col-gap max-compact:hidden">
          {footer.map((col) => (
            <FooterCol key={col.title} col={col} />
          ))}
        </div>
        <div className="hidden w-full flex-col gap-6 max-compact:flex">
          <div className="flex flex-col gap-1">
            <p className="font-jost text-hint font-medium text-gold">California</p>
            <p className="font-jost text-label text-paper/85">Irvine · {PHONE_CA}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-jost text-hint font-medium text-gold">Nevada</p>
            <p className="font-jost text-label text-paper/85">Henderson · {PHONE_NV}</p>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-paper/15 max-compact:hidden" />
      <div className="flex w-full items-start gap-10 font-jost text-legal text-paper max-compact:flex-col max-compact:gap-0">
        <p className="min-w-px flex-1 text-paper/60 max-compact:hidden">{LEGAL}</p>
        <p className="hidden min-w-px flex-1 whitespace-pre-wrap text-disc text-paper/60 max-compact:block">
          {LEGAL_SM}
        </p>
        <div className="flex shrink-0 gap-6 whitespace-nowrap text-paper/80 max-compact:hidden">
          <a href="#review-form">Privacy</a>
          <a href="#review-form">Terms</a>
          <a href="#review-form">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
