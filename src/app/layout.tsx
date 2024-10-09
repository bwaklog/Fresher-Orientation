

import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "HSP Stall",
  description: "Checkout the activites HSP has planned for the Fresher's party!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />

      <body className="scroll-smooth"
      >
        {children}
      </body>


    </html>
  );
}
