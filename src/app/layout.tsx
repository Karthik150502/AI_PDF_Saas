import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { montserrat200, montserrat300, montserrat400 } from "@/fonts/montserrat";
import clsx from "clsx";
export const metadata: Metadata = {
  title: "PDF AI Assistance Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(montserrat300.className, "w-screen min-h-screen overflow-hidden overflow-x-hidden overflow-y-hidden")}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
