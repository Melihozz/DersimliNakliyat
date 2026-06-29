import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { PageTransition } from "@/components/providers/page-transition";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dersimlinakliyat.com"),
  title: {
    default: "Dersimli Nakliyat | Modern Nakliyat Deneyimi",
    template: "%s | Dersimli Nakliyat",
  },
  description:
    "Dersimli Nakliyat; şehir içi, şehirler arası, kurumsal taşımacılık ve depolama hizmetlerinde premium, güvenilir ve modern nakliyat çözümleri sunar.",
  keywords: [
    "Dersimli Nakliyat",
    "şehir içi nakliyat",
    "şehirler arası nakliyat",
    "ev taşıma",
    "ofis taşıma",
    "depolama",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Dersimli Nakliyat | Modern Nakliyat Deneyimi",
    description:
      "Türkiye genelinde premium, güvenilir ve teknolojik nakliyat hizmeti.",
    url: "https://dersimlinakliyat.com",
    siteName: "Dersimli Nakliyat",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1536,
        height: 1024,
        alt: "Dersimli Nakliyat",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "Dersimli Nakliyat",
    url: "https://dersimlinakliyat.com",
    telephone: "+90 531 523 08 71",
    areaServed: "TR",
    serviceType: ["Ev taşıma", "Ofis taşıma", "Şehirler arası nakliyat", "Depolama"],
  };

  return (
    <html lang="tr">
      <body className={`${inter.variable} bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SmoothScroll />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
