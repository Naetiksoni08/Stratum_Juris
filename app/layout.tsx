import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stratum Juris | Advocates & Solicitors",
    template: "%s | Stratum Juris",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Stratum Juris is a premier litigation and dispute resolution firm. Specialising in civil litigation, commercial disputes, arbitration, corporate litigation, consumer law, and criminal defence.",
  keywords: [
    "law firm India",
    "litigation lawyers India",
    "dispute resolution Delhi",
    "civil litigation lawyer",
    "commercial dispute lawyer",
    "arbitration India",
    "criminal defence lawyer Delhi",
    "Stratum Juris",
  ],
  authors: [{ name: "Stratum Juris" }],
  creator: "Stratum Juris",
  metadataBase: new URL("https://www.stratumjuris.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.stratumjuris.com",
    siteName: "Stratum Juris",
    title: "Stratum Juris | Advocates & Solicitors",
    description:
      "Strategic legal counsel for complex litigation and dispute resolution. Practising across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stratum Juris - Advocates & Solicitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratum Juris | Advocates & Solicitors",
    description:
      "Strategic legal counsel for complex litigation and dispute resolution.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Stratum Juris",
  description:
    "Premier litigation and dispute resolution firm based in India.",
  url: "https://www.stratumjuris.com",
  telephone: "+91-99999-99999",
  email: "contact@stratumjuris.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chamber No. 412, New Delhi District Court Complex, Patiala House Courts",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6139",
    longitude: "77.2090",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  areaServed: "India",
  knowsAbout: [
    "Civil Litigation",
    "Commercial Disputes",
    "Arbitration",
    "Corporate Litigation",
    "Consumer Law",
    "Criminal Defence",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-primary-text antialiased overflow-x-hidden">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
