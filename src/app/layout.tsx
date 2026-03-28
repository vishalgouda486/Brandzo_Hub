import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://brandzohub.com"),
  title: {
    default: "Brandzo Hub | Websites, Ads, SEO & WhatsApp Growth Systems",
    template: "%s | Brandzo Hub",
  },
  description:
    "Brandzo Hub builds and manages complete online growth systems for businesses — including website development, Google Ads, Meta Ads, WhatsApp automation, Local SEO, content creation, hosting, SSL, and ongoing support.",
  keywords: [
    "website development agency",
    "digital marketing agency",
    "meta ads agency",
    "google ads management",
    "whatsapp automation",
    "bulk whatsapp marketing",
    "local seo agency",
    "google business profile seo",
    "social media management",
    "content creation agency",
    "reels creation",
    "website maintenance services",
    "hosting and domain management",
    "ssl setup",
    "lead tracking and reporting",
    "Brandzo Hub",
    "digital growth agency",
    "website and ads agency",
    "business growth systems",
  ],
  authors: [{ name: "Brandzo Hub" }],
  creator: "Brandzo Hub",
  publisher: "Brandzo Hub",
  openGraph: {
    title: "Brandzo Hub | Websites, Ads, SEO & WhatsApp Growth Systems",
    description:
      "We build and manage complete online growth systems for businesses — from websites and ads to WhatsApp automation, SEO, content, and long-term support.",
    url: "https://brandzohub.com",
    siteName: "Brandzo Hub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandzo Hub | Websites, Ads, SEO & WhatsApp Growth Systems",
    description:
      "Websites, Ads, WhatsApp automation, SEO, content, and long-term growth support for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://brandzohub.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Brandzo Hub",
    url: "https://brandzohub.com",
    email: "brandzohubb@gmail.com",
    telephone: "+91 7624815112",
    areaServed: "India",
    serviceType: [
      "Website Development",
      "Website Maintenance",
      "Google Ads Management",
      "Meta Ads Management",
      "YouTube Ads",
      "WhatsApp Automation",
      "Bulk WhatsApp Messaging",
      "Local SEO",
      "Google Business Profile SEO",
      "Content Creation",
      "Social Media Management",
      "Hosting and Domain Management",
      "SSL Setup",
      "Lead Tracking and Reporting",
    ],
    description:
      "Brandzo Hub builds and manages complete online growth systems for businesses, including websites, ads, SEO, WhatsApp automation, content, and ongoing support.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-cyan-500/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ProgressBar />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}