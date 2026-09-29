import { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import JsonLd from "@/components/site/json-ld";
import { site } from "@/data/site";
import { siteGraph } from "@/lib/structured-data";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
  // The headline font is the one that has to be ready. Body faces load with
  // the stylesheet so they do not compete with the hero image.
  preload: false,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
  variable: "--font-barlow-condensed",
  display: "swap",
  preload: false,
});

const barlowCondensedItalic = Barlow_Condensed({
  subsets: ["latin"],
  weight: "800",
  style: "italic",
  variable: "--font-barlow-condensed-italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: `${site.pages[0].title} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "./" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: "./",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Riders on a dusty trail. Off-road motorcycle training near Pune, at ProDirt Adventure and the TVS Drift-R School.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${barlow.variable} ${barlowCondensed.variable} ${barlowCondensedItalic.variable}`}
    >
      <body>
        <JsonLd data={siteGraph} />
        <div className="fixed z-20 w-full">
          <Header />
        </div>
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
