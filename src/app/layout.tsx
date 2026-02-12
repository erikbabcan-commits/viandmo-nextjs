import React from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Tracking } from "@/components/Tracking";

export const metadata = {
  metadataBase: new URL("https://viandmo.com"),
  title: "Sťahovanie Bratislava | Lacné & Rýchle Sťahovanie Bytov, Domov a Firiem",
  description: "Hľadáte spoľahlivé sťahovanie v Bratislave? VI&MO ponúka sťahovanie bytov, domov, kancelárií aj ťažkých bremien (klavíre). Férová cena vopred, poistenie, žiadne skryté poplatky. Zavolajte nám!",
  keywords: [
    "sťahovanie Bratislava",
    "sťahovacia služba Bratislava",
    "lacné sťahovanie",
    "sťahovanie firiem Bratislava",
    "vypratávanie bytov Bratislava",
    "sťahovanie klavíra Bratislava",
    "sťahovanie Petržalka",
    "sťahovanie Ružinov",
    "upratovanie po rekonštrukcii",
    "tepovanie sedačiek Bratislava"
  ],
  applicationName: "viandmo Sťahovanie",
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
  alternates: {
    canonical: "https://viandmo.com",
  },
  openGraph: {
    title: "Sťahovanie Bratislava | VI&MO",
    description: "Profesionálne sťahovanie a upratovanie v Bratislave bez skrytých poplatkov.",
    url: "https://viandmo.com",
    siteName: "viandmo.com",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "https://viandmo.com/branding_banner.png",
        width: 1200,
        height: 630,
        alt: "viandmo - Sťahovanie a Upratovanie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sťahovanie Bratislava | VI&MO",
    description: "Profesionálne sťahovanie a upratovanie v Bratislave bez skrytých poplatkov.",
    images: ["https://viandmo.com/branding_banner.png"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VI&MO - Sťahovanie a Upratovanie",
              "image": "https://viandmo.com/branding_banner.png",
              "telephone": "+421911275755",
              "email": "info@viandmo.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bratislava",
                "addressLocality": "Bratislava",
                "postalCode": "82101",
                "addressCountry": "SK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.1486,
                "longitude": 17.1077
              },
              "url": "https://viandmo.com",
              "priceRange": "€€",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "07:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.facebook.com/viandmo",
                "https://www.instagram.com/viandmo"
              ]
            })
          }}
        />
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
