import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "teachyourselfmath",
  description: "teachyourselfmath",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

