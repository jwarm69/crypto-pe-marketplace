import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AcquiFi | Turn Crypto Into Real-World Cash Flow",
  description: "The crypto-native private equity marketplace. Invest in small business acquisitions, diversify outside of volatility, and back proven searchers building cash-flowing businesses.",
  keywords: "crypto, private equity, small business, investment, cash flow, diversification, searchers, acquisition",
  authors: [{ name: "AcquiFi Team" }],
  openGraph: {
    title: "AcquiFi | Turn Crypto Into Real-World Cash Flow",
    description: "The crypto-native private equity marketplace connecting investors with real-world cash-flowing businesses.",
    type: "website",
    siteName: "AcquiFi",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcquiFi | Turn Crypto Into Real-World Cash Flow",
    description: "The crypto-native private equity marketplace connecting investors with real-world cash-flowing businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
