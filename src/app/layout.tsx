import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Naol Tamrat — Full-Stack Developer & AI Engineer",
  description:
    "Full-Stack Developer and AI Engineer building production systems from Next.js frontends to LLM-powered pipelines with LangChain and LangGraph.",
  openGraph: {
    title: "Naol Tamrat — Full-Stack Developer & AI Engineer",
    description:
      "Full-Stack Developer and AI Engineer building production systems from Next.js frontends to LLM-powered pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
