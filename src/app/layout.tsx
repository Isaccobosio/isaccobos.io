import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jersey_15, Onest } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey15 = Jersey_15({
  variable: "--font-jersey-15",
  subsets: ["latin"],
  weight: "400",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Isacco Bosio - Frontend Developer",
  description: "A personal portfolio showcasing my work as a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey15.variable} ${onest.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
