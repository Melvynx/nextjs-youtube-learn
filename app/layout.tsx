import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PLAN DE LA VIDEO",
  description: "Par Melvynx sur YouTube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          spaceGrotesk.variable,
          "antialiased",
          "h-full"
        )}
      >
        <div className="w-full border-x border-muted h-full flex flex-col mx-auto min-h-full max-w-2xl">
          <Header />
          <div className="flex-1 overflow-auto">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
