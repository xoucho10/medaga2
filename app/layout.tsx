"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/facilities", label: "Facilities" },
    { href: "/classes", label: "Classes" },
    { href: "/teachers", label: "Teachers" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between h-[88px] md:h-[104px]">
        {/* LOGO - MUCH BIGGER NOW */}
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <img 
            src="/logo.png" 
            alt="MEDAG Infant and Primary" 
            className="w-[58px] h-[58px] md:w-[76px] md:h-[76px] object-contain"
          />
          <div className="leading-[1.1]">
            <p className="font-black text-[14px] md:text-[18px] tracking-tight text-[#BF000A] leading-none">MEDAG INFANT AND PRIMARY</p>
            <p className="font-bold text-[9px] md:text-[11px] tracking-[0.15em] text-gray-500 mt-1">MAKING A DIFFERENCE • KIGULU-IGANGA</p>
          </div>
        </Link>

        {/* DESKTOP NAV - BIGGER TEXT */}
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-[15px] font-bold tracking-tight transition-all pb-1 border-b-2 ${
                isActive(n.href)
                  ? "text-[#BF000A] border-[#BF000A]"
                  : "text-[#141A33] border-transparent hover:text-[#BF000A] hover:border-[#BF000A]/30"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* APPLY BUTTON - BIGGER */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/apply" className="bg-[#BF000A] hover:bg-[#8A0006] text-white px-8 py-3.5 rounded-full font-black text-[14px] shadow-md hover:scale-105 transition-all">
            Apply Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="lg:hidden w-11 h-11 rounded-full bg-[#FFFBFB] border flex items-center justify-center text-[20px]">☰</button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="lg:hidden border-t bg-white px-4 py-6 space-y-1 shadow-xl">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block py-3 px-4 rounded-full text-[15px] font-bold ${isActive(n.href) ? "bg-[#BF000A] text-white" : "bg-[#FFFBFB] text-[#141A33]"}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/apply" onClick={() => setOpen(false)} className="block mt-4 bg-[#BF000A] text-white text-center py-4 rounded-full font-black text-[15px]">Apply Now</Link>
        </div>
      )}
    </header>
  );
}

function MapSection() {
  return (
    <div className="bg-white border-t">
      <div className="bg-[#FFFBFB] py-3 text-center border-b px-4">
        <p className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-gray-500 leading-4">FIND US - KIGULU, IGANGA DISTRICT - 3K BODA FROM IGANGA TOWN - VAN 100K-130K WITH MATRON</p>
      </div>
      <iframe 
        src="https://www.google.com/maps?q=Kigulu%20Iganga%20Uganda&z=14&output=embed" 
        width="100%" 
        height="320" 
        style={{border:0}} 
        loading="lazy"
        className="h-[280px] md:h-[320px]"
      ></iframe>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#141A33] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-black text-[14px]">MEDAG INFANT AND PRIMARY</h4>
          <p className="text-[12px] opacity-70 mt-3 leading-6">Making a Difference • Kigulu-Iganga<br/>Baby to P7 - Day & Boarding<br/>MTN 0782198528</p>
        </div>
        <div>
          <h4 className="font-black text-[11px] tracking-widest">QUICK LINKS</h4>
          <div className="mt-3 space-y-2 text-[12px] opacity-70">
            <p><Link href="/about">About</Link></p>
            <p><Link href="/programs">Programs</Link></p>
            <p><Link href="/fees">Fees</Link></p>
            <p><Link href="/gallery">Gallery</Link></p>
          </div>
        </div>
        <div>
          <h4 className="font-black text-[11px] tracking-widest">CLASSES</h4>
          <div className="mt-3 space-y-2 text-[12px] opacity-70">
            <p>Baby 3y • Middle 4y • Top 5y</p>
            <p>P1-P3 • P4-P5 • P6-P7 PLE</p>
            <p>Day 250k-350k • Board 540k-630k</p>
          </div>
        </div>
        <div>
          <h4 className="font-black text-[11px] tracking-widest">CONTACT</h4>
          <p className="text-[12px] opacity-70 mt-3 leading-6">Kigulu, Iganga<br/>3k Boda Town<br/>Van 100k-130k with Matron<br/>Admission FREE 2026</p>
          <Link href="/apply" className="inline-block mt-4 bg-[#BF000A] px-5 py-2.5 rounded-full font-black text-[11px]">Apply FREE →</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[10px] opacity-50">
        © 2026 MEDAG Infant and Primary - Kigulu Iganga • MTN 0782198528
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <MapSection />
        <Footer />
      </body>
    </html>
  );
}