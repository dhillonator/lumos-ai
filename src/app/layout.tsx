import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumos — AI Consulting for Growing Businesses",
  description:
    "Vancouver-based AI consulting helping small and medium businesses adopt Claude and AI tools. Strategy, implementation, training, and ongoing support.",
  keywords: [
    "AI consulting",
    "Claude consulting",
    "Vancouver AI",
    "SMB AI adoption",
    "AI strategy",
    "AI implementation",
  ],
  openGraph: {
    title: "Lumos — AI Consulting for Growing Businesses",
    description:
      "Vancouver-based AI consulting helping small and medium businesses adopt Claude and AI tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
