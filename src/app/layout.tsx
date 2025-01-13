"use client";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-silver text-blueberry dark:bg-blue-400 dark:text-white">
        <div>{children}</div>
      </body>
    </html>
  );
}
