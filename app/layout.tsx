import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Cognitoo - Enterprise Software Solutions & Developer Community",
  description: "High-performance, customizable software solutions for enterprises and educational resources for developers",
  icons: {
    icon: "/cognitoofavicon.png",
    shortcut: "/cognitoofavicon.png",
    apple: "/cognitoofavicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/cognitoofavicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cognitoofavicon.png" />
      </head>
      <body className={`${plusJakarta.variable} font-plus-jakarta antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
