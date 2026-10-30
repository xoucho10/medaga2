"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const categories = ["All", "Nursery", "Primary", "Islam Embraced", "Fashion Show", "Sports", "Boarding", "Transport", "Events"];

  const gallery = [
    { id: 1, cat: "Nursery", title: "Colorful Buildings", sub: "Blue / Green / Yellow / Red blocks", color: "bg-[#1eaaf1]", img: "/gallery/nursery-building.jpg", desc: "Separate gate, kid-size toilets", h: "md:h-[280px]" },
    { id: 2, cat: "Nursery", title: "Play Area", sub: "Merry-go-round, Swings, Slide, Sand Pit", color: "bg-[#ffb400]", img: "/gallery/play-area.jpg", desc: "Supervised, soft ground", h: "md:h-[320px]" },
    { id: 3, cat: "Nursery", title: "Baby Class Activity", sub: "Phonics & Toilet Training Help", color: "bg-[#8cc63f]", img: "/gallery/baby-class.jpg", desc: "3 Years - Social skills", h: "md:h-[260px]" },
    { id: 4, cat: "Nursery", title: "Top Class Graduation", sub: "Graduation Day Celebration", color: "bg-[#5d50c6]", img: "/gallery/graduation.jpg", desc: "5 Years to P1", h: "md:h-[300px]" },
    { id: 5, cat: "Primary", title: "Smart Pupils Assembly", sub: "Maroon Sweater Green Skirt / Shorts", color: "bg-[#f55a3c]", img: "/gallery/assembly.jpg", desc: "Discipline & Smartness", h: "md:h-[320px]" },
    { id: 6, cat: "Primary", title: "P1-P3 Classroom", sub: "UNEB Competence Based", color: "bg-[#1e6a8a]", img: "/gallery/classroom-p1.jpg", desc: "English Math Science", h: "md:h-[260px]" },
    { id: 7, cat: "Primary", title: "P4-P5 Lessons", sub: "Computer & Agriculture", color: "bg-[#8cc63f]", img: "/gallery/computer.jpg", desc: "Practical learning", h: "md:h-[280px]" },
    { id: 8, cat: "Primary", title: "P7 PLE Candidates", sub: "P7 Day 350k Board 630k Next Year", color: "bg-[#ffb400]", img: "/gallery/p7.jpg", desc: "Special coaching", h: "md:h-[300px]" },
    { id: 9, cat: "Islam Embraced", title: "Hijab Allowed", sub: "White Top Green Skirt Hijab", color: "bg-[#5d50c6]", img: "/gallery/hijab.jpg", desc: "We embrace Islam as well", h: "md:h-[280px]" },
    { id: 10, cat: "Islam Embraced", title: "Halal Meals", sub: "Porridge Break + Posho Beans Meat Twice", color: "bg-[#1e6a8a]", img: "/gallery/halal-meals.jpg", desc: "Muslim & Christian together", h: "md:h-[260px]" },
    { id: 11, cat: "Fashion Show", title: "Grey Vests Red Bow Ties", sub: "Ministers & Confidence", color: "bg-[#f55a3c]", img: "/gallery/fashion-boy.jpg", desc: "Fashion Show Day", h: "md:h-[320px]" },
    { id: 12, cat: "Fashion Show", title: "Traditional Wear", sub: "MDD Music Dance Drama", color: "bg-[#ffb400]", img: "/gallery/mdd.jpg", desc: "Culture & Talent", h: "md:h-[300px]" },
    { id: 13, cat: "Sports", title: "Basketball Brick Court", sub: "Inter-house Sports Day", color: "bg-[#1eaaf1]", img: "/gallery/basketball.jpg", desc: "Brick Paving Court", h: "md:h-[300px]" },
    { id: 14, cat: "Sports", title: "Football & Athletics", sub: "Field & Sports", color: "bg-[#8cc63f]", img: "/gallery/football.jpg", desc: "Sports facilities", h: "md:h-[260px]" },
    { id: 15, cat: "Boarding", title: "Dormitories", sub: "Matron Care - Casual Wear Evening", color: "bg-[#5d50c6]", img: "/gallery/dorm.jpg", desc: "Boys/Girls separate", h: "md:h-[280px]" },
    { id: 16, cat: "Boarding", title: "Prep & Dining", sub: "Supervised Prep - Balanced Diet", color: "bg-[#1e6a8a]", img: "/gallery/dining.jpg", desc: "Safe compound", h: "md:h-[260px]" },
    { id: 17, cat: "Transport", title: "School Van", sub: "100k-130k with Matron", color: "bg-[#1eaaf1]", img: "/gallery/van.jpg", desc: "Safe routes", h: "md:h-[280px]" },
    { id: 18, cat: "Transport", title: "Kigulu Location", sub: "3k Boda from Iganga Town", color: "bg-[#b88a2b]", img: "/gallery/location.jpg", desc: "Kigulu Iganga District", h: "md:h-[260px]" },
    { id: 19, cat: "Events", title: "Parents Day", sub: "Parent Meeting", color: "bg-[#f55a3c]", img: "/gallery/parents-day.jpg", desc: "Community", h: "md:h-[280px]" },
    { id: 20, cat: "Events", title: "Debate & Quiz", sub: "Inter-school", color: "bg-[#5d50c6]", img: "/gallery/debate.jpg", desc: "Academics", h: "md:h-[260px]" },
    { id: 21, cat: "Events", title: "Ramadan & Prayers", sub: "Respect for All Faiths", color: "bg-[#8cc63f]", img: "/gallery/prayer.jpg", desc: "Inclusive", h: "md:h-[300px]" },
    { id: 22, cat: "Events", title: "Admission FREE 2026", sub: "Apply Now MTN 0782198528", color: "bg-[#ffb400]", img: "/gallery/admission.jpg", desc: "Free admission", h: "md:h-[280px]" },
  ];

  const [activeCat, setActiveCat] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = activeCat === "All" ? gallery : gallery.filter((g) => g.cat === activeCat);

  return (
    <main className="bg-[#fcfcfc] min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .animate-fadeUp { animation: fadeUp 0.7s ease-out both; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* BANNER */}
      <section className="relative h-[360px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center transition-transform duration-[2000ms]" style={{ transform: `scale(${1 + scrollY * 0.0002})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5d50c6]/20 to-black/70"></div>
        <div className="relative text-center text-white px-4 z-10 animate-fadeUp">
          <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] bg-white/20 backdrop-blur inline-block px-4 py-2 rounded-full">GALLERY - LIFE AT MEDAG</p>
          <h1 className="text-[34px] md:text-[52px] font-extrabold mt-4 leading-[0.95]">Our Colorful School</h1>
          <p className="text-[11px] md:text-[13px] mt-3 opacity-80 max-w-2xl mx-auto bg-black/20 backdrop-blur px-4 py-2 rounded-full">Nursery colorful buildings to P7 PLE • Kigulu, Iganga District</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white border-b sticky top-0 z-20 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap text-[11px] font-medium px-5 py-2.5 rounded-full border transition-all shrink-0 ${cat === activeCat ? "bg-[#5d50c6] text-white border-[#5d50c6] shadow-md scale-105" : "bg-[#f9fafb] text-gray-600 border-gray-200 hover:border-[#5d50c6] hover:text-[#5d50c6]"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
          <div><p className="text-[22px] font-bold">{filtered.length}</p><p className="text-[9px] font-medium opacity-60 tracking-widest">PHOTOS</p></div>
          <div><p className="text-[22px] font-bold">{categories.length - 1}</p><p className="text-[9px] font-medium opacity-60 tracking-widest">CATEGORIES</p></div>
          <div className="hidden md:block"><p className="text-[22px] font-bold">FREE</p><p className="text-[9px] font-medium opacity-60 tracking-widest">ADMISSION 2026</p></div>
          <div><p className="text-[16px] md:text-[18px] font-bold">MTN 0782198528</p><p className="text-[9px] font-medium opacity-60 tracking-widest">KIGULU IGANGA</p></div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="max-w-7xl mx-auto px-3 md:px-6 py-8 md:py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {filtered.map((g, i) => (
            <div
              key={g.id}
              onClick={() => setLightbox(g)}
              className="group relative break-inside-avoid bg-white rounded-[20px] border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer animate-fadeUp"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className={`relative ${g.h} h-[220px] overflow-hidden bg-[#f9fafb]`}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1000ms] group-hover:scale-110" style={{ backgroundImage: `url('${g.img}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className={`absolute top-0 left-0 right-0 h-1 ${g.color}`}></div>
                <span className="absolute top-3 left-3 text-[9px] font-bold bg-white/90 backdrop-blur px-2.5 py-1 rounded-full">{g.cat}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">+</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-bold text-[13px] leading-tight text-white">{g.title}</h4>
                  <p className="text-[11px] text-white/80 mt-1 leading-tight">{g.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO TOUR - CLEAN */}
      <section className="bg-white border-y py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-[26px] md:text-[36px] font-bold">
                <span className="text-[#5d50c6]">Life at</span> <span className="text-[#b88a2b]">MEDAG Kigulu</span>
              </h2>
              <p className="text-gray-500 text-[12px] mt-2">Nursery to P7 Day & Boarding</p>
            </div>
            <Link href="/contact" className="inline-flex bg-[#111827] text-white px-5 py-2.5 rounded-full text-[11px] font-medium hover:bg-black transition-colors">Visit Us - 3k Boda Iganga Town</Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Nursery Tour - Colorful Buildings & Play Area", img: "/video/nursery-thumb.jpg" },
              { title: "Primary & Basketball Court - Brick Paving", img: "/video/primary-thumb.jpg" },
              { title: "Fashion Show & MDD", img: "/video/fashion-thumb.jpg" },
            ].map((v) => (
              <div key={v.title} className="group relative rounded-[18px] h-[200px] overflow-hidden bg-[#f9fafb] border border-gray-100">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-105" style={{ backgroundImage: `url('${v.img}')` }}></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">▶️</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-[12px] font-medium leading-tight">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative bg-white rounded-[24px] overflow-hidden max-w-3xl w-full max-h-[90vh] animate-fadeUp" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh] md:h-[60vh] bg-[#f9fafb]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${lightbox.img}')` }}></div>
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">✕</button>
              <div className={`absolute top-0 left-0 right-0 h-1 ${lightbox.color}`}></div>
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold bg-[#f9fafb] border px-3 py-1 rounded-full">{lightbox.cat}</span>
              <h3 className="font-bold text-[18px] mt-3">{lightbox.title}</h3>
              <p className="text-[12px] text-[#5d50c6] font-medium mt-1">{lightbox.sub}</p>
              <p className="text-[11px] text-gray-500 mt-2">{lightbox.desc} • Kigulu Iganga • MTN 0782198528</p>
              <div className="mt-5 flex gap-2">
                <button onClick={() => setLightbox(null)} className="bg-[#111827] text-white px-5 py-2.5 rounded-full text-[11px] font-medium">Close</button>
                <Link href="/apply" className="bg-[#ffb400] text-black px-5 py-2.5 rounded-full text-[11px] font-medium">Apply FREE 2026</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#111827]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 text-center">
          <h3 className="font-bold text-[22px] md:text-[28px] text-white">More photos coming soon</h3>
          <p className="text-[11px] text-white/60 mt-2">Kigulu Iganga • Van 100k-130k • 3k Boda Town • Admission FREE 2026</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/apply" className="bg-[#ffb400] text-black px-6 py-3 rounded-full text-[11px] font-medium hover:scale-105 transition-transform">Apply Now</Link>
            <a href="https://wa.me/256782198528" className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-3 rounded-full text-[11px] font-medium hover:bg-white hover:text-black transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}