import type { Metadata } from "next";
import { Sigmar } from "next/font/google";
import "./globals.css";

const sigmarFont = Sigmar({
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tasky Manager",
  description: "Tasks manager app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sigmarFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
