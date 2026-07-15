import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://academy.cipheznexus.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CiphezNexus Academy — Stop Watching AI. Start Building It.",
  description:
    "Learn AI agents, LLMs, and RAG through hands-on bootcamps and hackathons. Walk away with real projects, not just certificates. Small, mentored cohorts.",
  keywords: [
    "AI bootcamp",
    "AI agents",
    "LLM",
    "RAG",
    "AI engineering",
    "CiphezNexus Academy",
    "learn AI",
  ],
  authors: [{ name: "CiphezNexus" }],
  openGraph: {
    title: "CiphezNexus Academy — Stop Watching AI. Start Building It.",
    description:
      "Hands-on AI bootcamps in agents, LLMs and RAG. Build real projects in small, mentored cohorts.",
    url: siteUrl,
    siteName: "CiphezNexus Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CiphezNexus Academy",
    description:
      "Stop watching AI. Start building it. Hands-on AI bootcamps in agents, LLMs and RAG.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080A11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
