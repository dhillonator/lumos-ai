import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Chanan Consulting — AI Consulting for Growing Businesses",
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
    title: "Chanan Consulting — AI Consulting for Growing Businesses",
    description:
      "Vancouver-based AI consulting helping small and medium businesses adopt Claude and AI tools.",
    type: "website",
    images: [{ url: "/logo.png", alt: "Chanan Consulting" }],
  },
  twitter: {
    card: "summary",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
