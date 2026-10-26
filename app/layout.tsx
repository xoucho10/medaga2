"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
    <footer className="bg-[#141A33] text-white pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h4 className="font-black text-[13px] md:text-[14px] leading-tight">MEDAG INFANT AND PRIMARY SCHOOL</h4>
          <div className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-[11px] md:text-[12px] opacity-60 leading-5">
            <p>📍 Kigulu, Iganga District - 3k Boda from Iganga Town</p>
            <p>📞 MTN 0782198528</p>
            <p>🚌 Van 100k-130k with Matron</p>
            <p>🎓 Admission FREE 2026</p>
            <p>☪️ Islam Embraced - Halal Meals - Hijab Allowed</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[13px] md:text-[14px]">Programs</h4>
          <div className="mt-4 md:mt-6 flex flex-col gap-2 text-[11px] md:text-[12px] opacity-60">
            <Link href="/programs" className="hover:text-white">Nursery - Colorful Buildings Blue/Green/Yellow/Red</Link>
            <Link href="/programs" className="hover:text-white">Primary Day P1-P7 - Maroon Sweater Green Skirt</Link>
            <Link href="/programs" className="hover:text-white">Primary Boarding - Casual Wear Evening</Link>
            <Link href="/classes" className="hover:text-white">Our Classes - Baby to P7 (Fees Included)</Link>
            <Link href="/facilities" className="hover:text-white">Facilities - Basketball Brick Court</Link>
            <Link href="/teachers" className="hover:text-white">Teachers Hierarchy</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[13px] md:text-[14px]">Admission</h4>
          <div className="mt-4 md:mt-6 flex flex-col gap-2 text-[11px] md:text-[12px] opacity-60">
            <p>Baby/Middle/Top: Day 250k Board 540k</p>
            <p>P1-P5: Day 280k-320k Board 560k-600k</p>
            <p className="text-white font-black">P7 Day 350k Next Year</p>
            <p className="text-white font-black">P7 Board 630k Next Year</p>
            <p>Transport Van 100k-130k + Boda 3k</p>
            <p>Uniform Nursery 130k Primary 150k</p>
            <Link href="/apply" className="text-white font-black mt-3 inline-block bg-[#BF000A] px-5 py-2.5 rounded-full hover:bg-[#8A0006]">Apply FREE 2026 →</Link>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h4 className="font-bold text-[13px] md:text-[14px]">Subscribe</h4>
          <p className="text-[11px] md:text-[12px] opacity-60 mt-4 md:mt-6 leading-5">Get updates - Fashion Show Grey Vests Red Bow Ties, MDD, Sports Day, PLE.</p>
          <div className="mt-4 flex">
            <input placeholder="Enter email" className="bg-white/10 px-4 py-3 rounded-l text-[11px] md:text-[12px] flex-1 outline-none border border-white/10 border-r-0" />
            <button className="bg-[#BF000A] px-5 md:px-6 py-3 rounded-r font-black text-[11px] md:text-[12px] hover:bg-[#8A0006]">Subscribe</button>
          </div>
          <div className="mt-6 flex gap-2">
            <a href="https://wa.me/256782198528" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#BF000A] transition">💬</a>
            <a href="tel:+256782198528" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#BF000A] transition">📞</a>
            <Link href="/gallery" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#BF000A] transition">📸</Link>
          </div>
          <p className="text-[9px] md:text-[10px] opacity-40 mt-4">MDD • Fashion Show • Basketball • Merry-go-round</p>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 md:mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-2 text-center md:text-left text-[10px] md:text-[11px] opacity-40">
          <p>© 2026 MEDAG Infant and Primary School - Kigulu, Iganga - MTN 0782198528 - FREE Admission 2026</p>
          <p>Day & Boarding - Baby to P7 - Van 100k-130k - 3k Boda Iganga Town - Islam Embraced</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;
      const sections = ["home", "about", "programs", "facilities", "classes", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActive("home");
    };

    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      if (pathname === "/") setActive(hash);
    };

    if (pathname === "/") {
      handleHash();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("hashchange", handleHash);
      handleScroll();
    } else {
      const page = pathname.replace("/", "") || "home";
      if (page === "courses") setActive("classes");
      else setActive(page);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  }, [pathname]);

  const linkClass = (id: string) =>
    `pb-1 border-b-2 transition ${active === id ? "text-[#BF000A] border-[#BF000A]" : "text-gray-700 border-transparent hover:text-[#BF000A]"}`;

  const isActivePage = (id: string) => active === id;

  return (
    <html lang="en">
      <body className="bg-[#FFFBFB] text-[#141A33] antialiased overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-[64px] md:h-[72px] flex items-center justify-between">
            <Link href="/" onClick={() => { setActive("home"); setMobileOpen(false); }} className="flex items-center gap-2 md:gap-3">
              <img
                src="/logo.png"
                alt="MEDAG Logo"
                className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white object-contain border-2 border-[#BF000A] shadow-sm"
              />
              <div className="leading-none">
                <p className="font-black text-[10px] md:text-[13px] tracking-tight text-[#BF000A] leading-none">MEDAG INFANT AND PRIMARY</p>
                <p className="text-[7px] md:text-[9px] font-bold tracking-[0.15em] text-gray-500 mt-1 md:mt-1.5 hidden sm:block">MAKING A DIFFERENCE • KIGULU-IGANGA</p>
                <p className="text-[7px] font-bold tracking-[0.15em] text-gray-500 mt-1 sm:hidden">KIGULU-IGANGA</p>
              </div>
            </Link>

            <nav className="hidden lg:flex gap-5 xl:gap-6 text-[12px] xl:text-[13px] font-bold items-center">
              <Link href="/" onClick={() => setActive("home")} className={linkClass("home")}>Home</Link>
              <Link href="/about" onClick={() => setActive("about")} className={linkClass("about")}>About</Link>
              <Link href="/programs" onClick={() => setActive("programs")} className={linkClass("programs")}>Programs</Link>
              <Link href="/facilities" onClick={() => setActive("facilities")} className={linkClass("facilities")}>Facilities</Link>
              <Link href="/classes" onClick={() => setActive("classes")} className={linkClass("classes")}>Classes</Link>
              <Link href="/teachers" onClick={() => setActive("teachers")} className={linkClass("teachers")}>Teachers</Link>
              <Link href="/gallery" onClick={() => setActive("gallery")} className={linkClass("gallery")}>Gallery</Link>
              <Link href="/contact" onClick={() => setActive("contact")} className={linkClass("contact")}>Contact</Link>
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/apply"
                onClick={() => setActive("apply")}
                className={`bg-[#BF000A] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[11px] md:text-[13px] font-black hover:bg-[#8A0006] transition ${isActivePage("apply") ? "ring-2 ring-[#BF000A]/30" : ""}`}
              >
                <span className="hidden sm:inline">Apply Now</span><span className="sm:hidden">Apply</span>
              </Link>
              
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 md:w-10 md:h-10 bg-[#FFFBFB] border rounded-full flex items-center justify-center text-[18px] md:text-[20px]"
                aria-label="Menu"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="lg:hidden bg-white border-t shadow-xl max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-5 flex flex-col gap-1">
                {[
                  { id: "home", href: "/", label: "Home" },
                  { id: "about", href: "/about", label: "About" },
                  { id: "programs", href: "/programs", label: "Programs" },
                  { id: "facilities", href: "/facilities", label: "Facilities" },
                  { id: "classes", href: "/classes", label: "Classes (Fees Inside)" },
                  { id: "teachers", href: "/teachers", label: "Teachers" },
                  { id: "gallery", href: "/gallery", label: "Gallery" },
                  { id: "contact", href: "/contact", label: "Contact" },
                ].map((l) => (
                  <Link
                    key={l.id}
                    href={l.href}
                    onClick={() => { setActive(l.id); setMobileOpen(false); }}
                    className={`px-4 py-3 rounded-full text-[13px] font-black transition ${active === l.id ? "bg-[#BF000A] text-white" : "bg-[#FFFBFB] border text-gray-700"}`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/apply" onClick={() => setMobileOpen(false)} className="mt-3 bg-[#141A33] text-white px-4 py-3 rounded-full text-[13px] font-black text-center">Apply FREE 2026 →</Link>
                <div className="mt-4 bg-[#141A33] text-white rounded-xl p-4 text-[10px] leading-5">
                  <p className="font-black text-[#FFCB05] text-[11px]">KIGULU, IGANGA - MEDAG</p>
                  <p className="mt-2 opacity-80">📍 3k Boda from Town • 🚌 Van 100k-130k with Matron</p>
                  <p className="opacity-80">📞 MTN 0782198528 • 🎓 FREE Admission 2026</p>
                  <p className="opacity-80">☪️ Islam Embraced - Hijab Allowed - Halal Meals</p>
                </div>
              </div>
            </div>
          )}
        </header>

        {children}
        <MapSection />
        <Footer />
      </body>
    </html>
  );
}