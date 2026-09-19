import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gardak3.id"),
  title: { default: "Garda K3 | Training & Konsultasi Keselamatan Kerja", template: "%s | Garda K3" },
  description: "Training kompetensi K3 resmi bersertifikat dan jasa konsultasi untuk organisasi di seluruh Indonesia.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
