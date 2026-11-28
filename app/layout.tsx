import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanaie",
  description: "Find your suitable Craftsman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${ubuntu.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background font-body text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
