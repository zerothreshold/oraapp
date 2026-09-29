import { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/blocks/header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/blocks/footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const description =
  "Off-road motorcycle training near Pune. Clinics for beginners to racers at ProDirt Adventure and the TVS Drift-R flat track school.";

export const metadata: Metadata = {
  title: "Offroad Academies",
  description,
  openGraph: {
    type: "website",
    url: "https://offroadacademies.com",
    title: "Offroad Academies",
    description,
    images: [
      {
        url: "https://offroadacademies.com/images/logos/main-black.png",
        width: 1200,
        height: 630,
        alt: "Offroad Academies",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <div className="fixed z-20 w-full">
          <Header />
        </div>
        <main className="min-h-screen pt-16">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
