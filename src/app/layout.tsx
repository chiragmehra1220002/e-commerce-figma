"use client"
import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Home/Navbar";

import BestSellingProduct from "./components/Home/BestSellingProduct";
import Features from "./components/Home/feature";
import Gallery from "./components/Home/gallery";
import type { ReactElement } from 'react';
import Testimonial from './components/Home/Testimonial';
import Footer from './components/Home/Footer';

 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); 

  const isAuthPage = pathname === '/Signup' || pathname === '/Login'; 
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <time dateTime="2016-10-25" suppressHydrationWarning />
         
      
        {!isAuthPage && <Navbar />}
          
 
        {children}
       
        {!isAuthPage && (
          <>
            <BestSellingProduct />
            <Features />
            <Gallery />
            <Testimonial/>
            <Footer/>
          </>
        )}
      
      </body>
    </html>
  );
}
