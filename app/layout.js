import "./globals.css";
import Navbar from "@/components/navbar";
import React from "react";
import { Metadata } from "next";

export const metadata = (Metadata = {
  title: {
    template: "%s | Stock Tracking",
    default: "Stock Tracking",
  },
  description: "The official Stock Tracking",
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
