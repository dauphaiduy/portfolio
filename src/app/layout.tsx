import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Khanh Duy | Backend Engineer Portfolio",
  description:
    "Backend software engineer portfolio focused on fintech, banking, distributed systems, and event-driven integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body suppressHydrationWarning className="min-h-full">
        {children}
      </body>
    </html>
  );
}
