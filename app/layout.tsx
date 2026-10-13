import '@/styles/globals.css';
import type { Metadata } from 'next';
import { fraunces, jost } from './fonts';
import { AppToaster } from '@/components/feedback/AppToaster';

export const metadata: Metadata = {
  title: 'Kanopy',
  description: 'Kanopy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${fraunces.variable} antialiased`}>
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
