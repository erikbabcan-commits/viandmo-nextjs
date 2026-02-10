import React from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Tracking } from "@/components/Tracking";

export const metadata = {
  metadataBase: new URL("https://viandmo.com"),
  title: "viandmo.com – Sťahovanie & Čistenie Bratislava",
  description: "Sťahovanie, upratovanie a tepovanie v Bratislave a okolí. Férové ceny vopred, poistenie, rýchla odpoveď.",
  keywords: ["stahovanie bratislava", "upratovanie bratislava", "tepovanie sedaciek", "stahovacia sluzba"],
  applicationName: "viandmo PWA",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "viandmo" },
  icons: {
    icon: "/icons/icon-192.svg",
    shortcut: "/icons/icon-192.svg",
    apple: "/icons/icon-192.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#20C05C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <Header />
        <Tracking />
        <main>{children}</main>
        <Footer />
        <StickyActions />
        {/* SW registration */}
        <script src="/sw-register.js" defer />
      </body>
    </html>
  );
}
