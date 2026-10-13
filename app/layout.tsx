import '@/styles/globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

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
      <body className={`${GeistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
