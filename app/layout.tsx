import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "roamly — Travel eSIM, made simple",
  description: "An original mock storefront for travel eSIM plans.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
