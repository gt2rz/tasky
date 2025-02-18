import type { Metadata } from "next";

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
      <body>
        {children}
      </body>
    </html>
  );
}
