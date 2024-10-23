import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecobazar",
  description:
    "E-Commerce website project for organic fruits and vegetables shopping",
  keywords: [
    "organic",
    "fruits",
    "vegetables",
    "shopping",
    "ecommerce",
    "healthy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
