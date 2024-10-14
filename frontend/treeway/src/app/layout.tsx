import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ClientLayout from '../redux/ClientLayout';
import './globals.scss';
import HeaderNav from './common/Header/HeaderNav';
import SideNav from './common/Side/SideNav';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TreeWay',
  description: 'B107 treeway',
  themeColor: '#333333',
  manifest: '/manifest.json',
  icons: {
    icon: '/image/TREEWAY_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}}`}>
        <ClientLayout>
          <HeaderNav />
          <SideNav />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
