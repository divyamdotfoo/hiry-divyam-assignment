import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700", "300", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Hiry assignment",
  description: "Created by divyam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
