import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#141A33] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-black text-[14px]">MEDAG INFANT AND PRIMARY</h4>
          <div className="mt-6 space-y-3 text-[12px] opacity-60 leading-5">
            <p>📍 Kigulu, Iganga District - 3k Boda from Iganga Town</p>
            <p>📞 MTN 0782198528</p>
            <p>🚌 Van 100k-130k with Matron</p>
            <p>🎓 Admission FREE 2026</p>
            <p>☪️ Islam Embraced - Halal Meals</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[14px]">Programs</h4>
          <div className="mt-6 flex flex-col gap-2 text-[12px] opacity-60">
            <Link href="/programs">Nursery - Colorful Buildings</Link>
            <Link href="/programs">Primary Day P1-P7</Link>
            <Link href="/programs">Primary Boarding</Link>
            <Link href="/courses">Our Classes Baby to P7</Link>
            <Link href="/facilities">Facilities - 12 Items</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[14px]">Admission</h4>
          <div className="mt-6 flex flex-col gap-2 text-[12px] opacity-60">
            <p>P7 Day 350k Next Year</p>
            <p>P7 Board 630k Next Year</p>
            <p>Nursery Day 250k Board 540k</p>
            <p>Transport 100k-130k + Boda 3k</p>
            <p>Uniform Nursery 130k Primary 150k</p>
            <Link href="/apply" className="text-white font-black mt-2 inline-block bg-[#BF000A] px-4 py-2 rounded-full">Apply FREE 2026 →</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[14px]">Subscribe</h4>
          <p className="text-[12px] opacity-60 mt-6 leading-5">Get updates - Fashion Show, MDD, Sports Day, PLE results.</p>
          <div className="mt-4 flex">
            <input placeholder="Enter email" className="bg-white/10 px-4 py-3 rounded-l text-[12px] flex-1 outline-none" />
            <button className="bg-[#BF000A] px-6 py-3 rounded-r font-black text-[12px]">Subscribe</button>
          </div>
          <div className="mt-6 flex gap-2">
            <a href="https://wa.me/256782198528" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">💬</a>
            <a href="tel:+256782198528" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">📞</a>
            <span className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">📘</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-[11px] opacity-40">
          <p>© 2026 MEDAG Infant and Primary School - Kigulu, Iganga - MTN 0782198528 - FREE Admission 2026 - Day & Boarding - Baby to P7 - Van 100k-130k - 3k Boda Town</p>
        </div>
      </div>
    </footer>
  );
}