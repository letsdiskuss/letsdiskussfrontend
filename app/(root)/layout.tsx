// app/layout.tsx
import React from "react";

import Header from "@/components/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "LetsDiskuss - Where Ideas Come to Life",
  description:
    "Join thousands of professionals sharing knowledge, solving problems, and building the future together in our vibrant community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${(poppins.variable, inter.className)}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
