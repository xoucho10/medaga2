import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#08162e] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex gap-3 items-center">
              <img src="/logo.png" className="w-12 h-12 object-contain bg-white rounded-full p-1" alt="logo"/>
              <p className="font-black text-[13px] leading-tight">FAIRWAY NUR. & PRI. SCH.<br/><span className="text-[10px] font-normal text-gray-400 tracking-widest">EMMITTI EMMITTO</span></p>
            </div>
            <p className="text-[12px] text-gray-400 mt-5 leading-relaxed">P.O BOX 102 Iganga, Along Iganga-Jinja Highway. Winners Never Quit. Knowledge is Light.</p>
          </div>
          <div><h4 className="font-black text-[12px] mb-4 text-[#FFCB05] tracking-widest">QUICK LINKS</h4><ul className="text-[13px] text-gray-400 space-y-2.5"><li><Link href="/" className="hover:text-white">Home</Link></li><li><Link href="/about" className="hover:text-white">About Us</Link></li><li><Link href="/academics" className="hover:text-white">Academics</Link></li><li><Link href="/gallery" className="hover:text-white">Gallery</Link></li></ul></div>
          <div><h4 className="font-black text-[12px] mb-4 text-[#FFCB05] tracking-widest">PROGRAMS</h4><ul className="text-[13px] text-gray-400 space-y-2.5"><li>Nursery - Baby to Top</li><li>Primary P.1 - P.7</li><li>Day & Boarding</li><li>UNEB Center</li></ul></div>
          <div><h4 className="font-black text-[12px] mb-4 text-[#FFCB05] tracking-widest">CONTACT US</h4><ul className="text-[13px] text-gray-400 space-y-2.5"><li>📞 0782631761 / 0758735343</li><li>📍 Iganga District</li><li>📧 fairwayiganga@gmail.com</li><li>Reg: PPS/F/95</li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800/80 text-center text-[11px] text-gray-500 tracking-wide">© 2026 Fairway Nursery & Primary School Iganga • Built for Winners</div>
      </footer>
      <a href="https://wa.me/256782631761?text=Hello%20Fairway%20School" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] text-2xl z-[100] hover:scale-110 transition">💬</a>
    </>
  );
}