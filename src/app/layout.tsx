import { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import Header from "@/components/blocks/header";
// import Notice from "@/components/blocks/notice";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/blocks/footer";

export const metadata: Metadata = {
  title: "Off Road Academy",
  description: "Fast track your off-road driving skills",
  openGraph: {
    type: "website",
    url: "https://offroadacademies.com",
    title: "Off Road Academy",
    description: "Fast track your off-road driving skills",
    images: [
      {
        url: "https://offroadacademies.com/images/logos/main-black.png",
        width: 1200,
        height: 630,
        alt: "Off Road Academy",
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
    <html lang="en">
      <body>
        <div className="fixed z-20 w-full">
          <Header />
          {/* <Notice /> */}
        </div>
        <main className="min-h-screen lg:pt-16 pt-[3.8rem]">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
