import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Services | B2B & B2C Digital Product Engineering",
  description:
    "B2B and B2C digital product development: custom web and mobile apps, secure and scalable APIs, and full-stack engineering with Laravel, Node, React, Next.js, and Vue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div
            className={`${geistSans.variable} ${geistMono.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}
          >
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
