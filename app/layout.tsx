import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/nav";
import Footer from "@/components/footer";
import TawkToWidget from '@/components/TawkToWidget'
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gitau Justus",
  description: "Gitau Justus — Software Engineer & ICT Professional specializing in automation, full-stack development, and digital design. Founder of JASTUTE.",
  openGraph: {
    title: "Gitau Justus",
    description: "Gitau Justus — Software Engineer & ICT Professional specializing in automation, full-stack development, and digital design. Founder of JASTUTE.",
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
  twitter: {
    card: "summary_large_image",
    title: "Gitau Justus",
    description: "Gitau Justus — Software Engineer & ICT Professional specializing in automation, full-stack development, and digital design. Founder of JASTUTE.",
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
        <ThemeProvider>
          <TawkToWidget />
          <Menubar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
