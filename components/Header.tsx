"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `pb-1 border-b-2 transition text-[13px] font-bold ${
      isActive ? "text-[#BF000A] border-[#BF000A]" : "text-gray-700 border-transparent hover:text-[#BF000A] hover:border-gray-300"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="MEDAG Logo" 
            className="w-11 h-11 rounded-full bg-white object-contain border-2 border-[#BF000A] shadow-sm" 
          />
          <div className="leading-none">
            <p className="font-black text-[13px] text-[#BF000A] leading-none">MEDAG INFANT AND PRIMARY SCHOOL</p>
            <p className="text-[9px] font-bold tracking-[0.15em] text-gray-500 mt-1.5">MAKING A DIFFERENCE • KIGULU-IGANGA</p>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-7 items-center">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/programs" className={linkClass("/programs")}>Programs</Link>
          <Link href="/facilities" className={linkClass("/facilities")}>Facilities</Link>
          <Link href="/fees" className={linkClass("/fees")}>Fees</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

        <Link href="/admission" className="bg-[#BF000A] text-white px-6 py-2.5 rounded-full text-[13px] font-black hover:bg-[#8A0006] transition">
          Apply Now
        </Link>
      </div>
    </header>
  );
}