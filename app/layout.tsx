import '@/styles/globals.css';
import type { Metadata } from 'next';
import { fraunces, jost } from './fonts';
import { AppToaster } from '@/components/feedback/AppToaster';

export const metadata: Metadata = {
  title: 'Olive Legal Group',
  description:
    'Personal injury, lemon law and workers’ comp attorneys in California and Nevada.',
  icons: { icon: '/icon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${fraunces.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
