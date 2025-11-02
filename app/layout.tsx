import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./tailwind.css";  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hilbert Curve Fractal Generator",
  description:
    "Interactive Hilbert Curve fractal visualization built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}