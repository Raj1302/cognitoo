import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Cognitoo - Enterprise Software Solutions & Developer Community",
  description: "High-performance, customizable software solutions for enterprises and educational resources for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} font-orbitron antialiased`}>
        {children}
      </body>
    </html>
  );
}
