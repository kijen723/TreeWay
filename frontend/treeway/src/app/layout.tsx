import type { Metadata } from "next";
import localFont from "next/font/local";
import ClientLayout from "../redux/ClientLayout";
import "./globals.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "treeway",
  description: "B107 treeway",
  themeColor: "#333333",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
