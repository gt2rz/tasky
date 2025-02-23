import type { Metadata } from "next";
import { Sigmar, Azeret_Mono } from "next/font/google";
import "./globals.css";

const sigmarFont = Sigmar({
  display: "swap",
  weight: ["400"],
});

const azeretMonoFont = Azeret_Mono({
  display: "swap",
  weight: ["100","400", "700", "900"],
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
      <body
        className={`${sigmarFont.className} ${azeretMonoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
