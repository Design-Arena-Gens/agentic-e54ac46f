import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Nexus | Total Financial Automation",
  description:
    "Concept blueprint for Project Nexus, a fully autonomous AI trading platform delivering total financial automation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
