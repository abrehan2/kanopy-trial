import { SiteLogo } from '@/components/layout/SiteLogo';

export function LogoSpinner() {
  return (
    <div
      data-testid="logo-spinner"
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-paper"
    >
      <SiteLogo variant="horizontal" className="w-logo-w-sm animate-spin" />
    </div>
  );
}
