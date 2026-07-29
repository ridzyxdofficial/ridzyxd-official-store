import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  metadataBase: new URL("https://ridzyxd-official-store.vercel.app"),
  title: {
    default: "RidzyXD Official Store",
    template: "%s | RidzyXD Official Store",
  },
  description: "Digital Marketplace Indonesia",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "RidzyXD Official Store",
    description: "Digital Marketplace Indonesia",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}