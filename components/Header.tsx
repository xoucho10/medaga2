"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (p: string) => path === p? "text-[#0D4DA1] border-b-2 border-[#0D4DA1] pb-1" : "hover:text-[#0D4DA1] transition";

  return (
    <>
      <div className="bg-[#E30613] text-white text-[11px] py-2.5 px-4 flex justify-between font-bold tracking-wide">
        <span>P.O BOX 102 Iganga | Reg: PPS/F/95 | UNEB Center</span>
        <span className="hidden md:block">Tel: 0782631761 / 0758735343 | Winners Never Quit</span>
      </div>

      <header className="bg-white/95 backdrop-blur px-6 py-3.5 flex items-center justify-between shadow-[0_2px_20px_rgba(0,0,0,0.05)] sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
          <img src="/logo.png" className="w-11 h-11 md:w-14 md:h-14 object-contain" alt="Fairway" />
          <div className="leading-tight">
            <h1 className="font-black text-[#0D4DA1] text-[13px] md:text-[15px]">FAIRWAY NUR. & PRI. SCH.</h1>
            <p className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.1em]">MIXED DAY & BOARDING • IGANGA</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-8 text-[13.5px] font-bold text-gray-600">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
          <Link href="/academics" className={isActive("/academics")}>Academics</Link>
          <Link href="/admissions" className={isActive("/admissions")}>Admissions</Link>
          <Link href="/gallery" className={isActive("/gallery")}>Gallery</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/apply" className="hidden md:block bg-[#0D4DA1] text-white px-6 py-2.5 rounded-full text-[13px] font-black hover:bg-blue-800 transition shadow-lg">Apply Now</Link>

          {/* HAMBURGER - MOBILE */}
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 bg-[#F6F7F9] rounded-full flex flex-col items-center justify-center gap-1">
            <span className={`w-5 h-0.5 bg-[#0D4DA1] transition ${open? "rotate-45 translate-y-[5px]" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-[#0D4DA1] transition ${open? "opacity-0" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-[#0D4DA1] transition ${open? "-rotate-45 -translate-y-[5px]" : ""}`}></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-white">
          <div className="bg-[#E30613] text-white text-[11px] py-2.5 px-4 flex justify-between font-bold">
            <span>FAIRWAY N&P SCHOOL</span>
            <button onClick={()=>setOpen(false)} className="w-7 h-7 bg-white/20 rounded-full">✕</button>
          </div>
          <nav className="p-6 flex flex-col gap-1 text-[16px] font-black text-gray-700">
            <Link href="/" onClick={()=>setOpen(false)} className={`py-4 border-b flex justify-between ${path==="/"? "text-[#0D4DA1]" : ""}`}><span>Home</span><span>→</span></Link>
            <Link href="/about" onClick={()=>setOpen(false)} className={`py-4 border-b flex justify-between ${path==="/about"? "text-[#0D4DA1]" : ""}`}><span>About</span><span>→</span></Link>
            <Link href="/academics" onClick={()=>setOpen(false)} className={`py-4 border-b flex justify-between ${path==="/academics"? "text-[#0D4DA1]" : ""}`}><span>Academics</span><span>→</span></Link>
            <Link href="/admissions" onClick={()=>setOpen(false)} className={`py-4 border-b flex justify-between ${path==="/admissions"? "text-[#0D4DA1]" : ""}`}><span>Admissions & Fees</span><span>→</span></Link>
            <Link href="/gallery" onClick={()=>setOpen(false)} className={`py-4 border-b flex justify-between ${path==="/gallery"? "text-[#0D4DA1]" : ""}`}><span>Gallery</span><span>→</span></Link>
            <Link href="/contact" onClick={()=>setOpen(false)} className={`py-4 border-b flex justify-between ${path==="/contact"? "text-[#0D4DA1]" : ""}`}><span>Contact</span><span>→</span></Link>

            <div className="mt-8 space-y-3">
              <Link href="/apply" onClick={()=>setOpen(false)} className="block bg-[#0D4DA1] text-white text-center py-4 rounded-full font-black text-[15px]">Apply Now →</Link>
              <a href="tel:0782631761" className="block bg-[#FFCB05] text-[#0D4DA1] text-center py-4 rounded-full font-black text-[15px]">📞 Call: 0782631761</a>
              <a href="https://wa.me/256782631761" target="_blank" className="block bg-[#25D366] text-white text-center py-4 rounded-full font-black text-[15px]">💬 WhatsApp Us</a>
            </div>

            <p className="mt-8 text-[11px] text-gray-400 font-normal text-center">P.O BOX 102 Iganga | Reg PPS/F/95<br/>Winners Never Quit • Emmitti Emmitto</p>
          </nav>
        </div>
      )}
    </>
  );
}