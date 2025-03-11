import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "./providers/WalletProvider";
import PlausibleProvider from "next-plausible";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TronRent - Tron Energy Rental Service",
  description:
    "Rent Tron energy resources on-demand to save on transaction fees and optimize your DApp performance.",
  keywords: [
    "Tron",
    "TRX",
    "Energy",
    "Rental",
    "Blockchain",
    "DApp",
    "Smart Contract",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Check if TronLink is installed
              window.addEventListener('DOMContentLoaded', () => {
                if (typeof window.tronLink === 'undefined') {
                  console.log('TronLink is not installed');
                } else {
                  console.log('TronLink is installed');
                }
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlausibleProvider domain="tronrent.com">
          <WalletProvider>{children}</WalletProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
