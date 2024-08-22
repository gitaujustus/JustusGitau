import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gitau Justus",
  description: "Justus is an expert in various IT fields including but not limited to Web design and development and Graphics design",
  openGraph: {
    title: "Gitau Justus",
    description: "Justus is an expert in various IT fields including but not limited to Web design and development and Graphics design",
    url: "https://gitaujustus.vercel.app",
    images: [
      {
        url: "https://iamjustus.vercel.app/photos/previewP.png",
        width: 778,
        height: 569,
        alt: "Justus",
      },
    ],
    siteName: "Gitau Justus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Menubar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
