import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gitau Justus",
  description: "Justus is an expert in various IT field which includes but not limited to Web design and development and Graphics design",
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
