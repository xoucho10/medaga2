"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FacilitiesPage() {
  const facilities = [
    { icon: "🏫", title: "Nursery Colorful Buildings", desc: "Blue, green, yellow, red blocks - kid-friendly, bright, separate gate for safety", tag: "Nursery", color: "bg-[#5d50c6]" },
    { icon: "🎠", title: "Play Area - Merry-Go-Round", desc: "Merry-go-round, swings, slide, sand pit - supervised play, soft ground", tag: "Play", color: "bg-[#ffb400]" },
    { icon: "📚", title: "Primary Classrooms", desc: "Spacious P1-P7 classrooms, desks, blackboards, good ventilation, charts", tag: "Primary", color: "bg-[#1eaaf1]" },
    { icon: "🏀", title: "Basketball Court - Brick Paving", desc: "Brick-paved court for basketball, inter-house sports, assembly", tag: "Sports", color: "bg-[#8cc63f]" },
    { icon: "🛏️", title: "Boarding Dormitories", desc: "Separate boys/girls dorms, matron care, casual wear evening, safe Kigulu compound", tag: "Boarding", color: "bg-[#1e6a8a]" },
    { icon: "🍲", title: "Dining & Halal Meals", desc: "Porridge break + lunch posho, beans, meat twice weekly - halal meals on request", tag: "Meals", color: "bg-[#f55a3c]" },
    { icon: "🚌", title: "Transport Van with Matron", desc: "100k-130k per term, matron in van, safe routes, 3k boda from Iganga Town option", tag: "Transport", color: "bg-[#5d50c6]" },
    { icon: "🚻", title: "Kid-Size Toilets & Hand Washing", desc: "Nursery kid-size toilets, hand washing stations, hygiene training, clean", tag: "Hygiene", color: "bg-[#8cc63f]" },
    { icon: "🎨", title: "Fashion Show & MDD Stage", desc: "Grey vests, red bow ties fashion show, MDD music dance drama, traditional wear", tag: "Creative", color: "bg-[#ffb400]" },
    { icon: "📖", title: "Library & Reading Corner", desc: "Story books, early readers, P1-P7 textbooks, reading culture", tag: "Academic", color: "bg-[#1e6a8a]" },
    { icon: "💧", title: "Safe Water & Compound", desc: "Clean water, safe fenced compound, supervised prep, secure gate", tag: "Safety", color: "bg-[#1eaaf1]" },
    { icon: "☪️", title: "Prayer & Islam Friendly", desc: "Hijab allowed white top green skirt, prayer space, Ramadan respect, Muslim teachers", tag: "Inclusive", color: "bg-[#5d50c6]" },
  ];

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-[#fcfcfc] overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-fadeUp { animation: fadeUp 0.7s ease-out both; }
      `}</style>

      {/* BANNER - PARALLAX */}
      <section className="relative h-[340px] md:h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center transition-transform duration-[2000ms]" style={{ transform: `scale(${1 + scrollY * 0.0002})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5d50c6]/20 to-black/70"></div>
        <div className="relative text-center text-white px-4 z-10 animate-fadeUp">
          <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] bg-white/20 backdrop-blur inline-block px-4 py-2 rounded-full">HOME › FACILITIES</p>
          <h1 className="text-[36px] md:text-[52px] font-extrabold mt-4 leading-[0.95]">Our Facilities</h1>
          <p className="text-[11px] md:text-[13px] mt-3 opacity-80 max-w-2xl mx-auto bg-black/20 backdrop-blur px-4 py-2 rounded-full">Kigulu, Iganga - Colorful nursery to boarding, brick basketball court to merry-go-round</p>
        </div>
      </section>

      {/* PILLS */}
      <section className="bg-white border-b sticky top-0 z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-wrap gap-2 text-[10px] md:text-[11px] font-medium">
          <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">📍 Kigulu - 3k Boda Iganga Town</span>
          <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">🚌 Van 100k-130k with Matron</span>
          <span className="bg-[#5d50c6] text-white px-4 py-2 rounded-full">12 Facilities</span>
          <span className="bg-[#ffb400] text-black px-4 py-2 rounded-full">☪️ Halal Meals & Hijab Allowed</span>
        </div>
      </section>

      {/* FACILITIES GRID - DYNAMIC */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[40px] font-bold">
              <span className="text-[#5d50c6]">MEDAG</span> <span className="text-[#b88a2b]">Facilities</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-2 max-w-xl mx-auto">Safe, colorful and Islamic-friendly environment from nursery to P7 boarding</p>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {facilities.map((f, i) => (
              <div key={f.title} className="group bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fadeUp" style={{animationDelay:`${i*0.05}s`}}>
                <div className="p-6 md:p-7 text-center">
                  <div className={`w-16 h-16 ${f.color} rounded-full flex items-center justify-center mx-auto text-[24px] text-white shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float`} style={{animationDelay:`${i*0.15}s`}}>{f.icon}</div>
                  <span className="inline-block mt-4 text-[9px] font-bold bg-[#f9fafb] border text-[#5d50c6] px-2.5 py-1 rounded-full">{f.tag}</span>
                  <h3 className="font-bold text-[13px] md:text-[14px] mt-3 leading-tight text-[#111827] group-hover:text-[#5d50c6] transition-colors">{f.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-2.5 leading-[1.6]">{f.desc}</p>
                </div>
                <div className={`h-1 w-full ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEE OUR COMPOUND - LIMITED + VIEW MORE */}
      <section className="bg-white border-y py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-[28px] md:text-[36px] font-bold">
                <span className="text-[#5d50c6]">See Our</span> <span className="text-[#b88a2b]">Compound</span>
              </h2>
              <p className="text-gray-500 text-[12px] mt-2">Real school photos coming soon — preview of what to expect</p>
            </div>
            <Link href="/gallery" className="inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black px-6 py-3 rounded-full text-[12px] font-medium transition-all hover:scale-105 shadow-sm">
              View More → Gallery
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { name: "Nursery Colorful Buildings", color: "bg-[#1eaaf1]" },
              { name: "Merry-Go-Round Play Area", color: "bg-[#ffb400]" },
              { name: "Primary Maroon Uniform", color: "bg-[#5d50c6]" },
              { name: "Basketball Brick Court", color: "bg-[#8cc63f]" },
            ].map((item, i) => (
              <div key={item.name} className="group relative rounded-[18px] h-[160px] md:h-[220px] overflow-hidden bg-[#f9fafb] border border-gray-100">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110" style={{backgroundImage:`url('/facilities/${i+1}.jpg')`}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className={`absolute top-0 left-0 w-12 h-1.5 ${item.color}`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-white text-[11px] md:text-[12px] font-medium leading-tight">{item.name}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-medium">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - LIKE MANNERS BANNER */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#111827]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <h4 className="font-bold text-[12px] tracking-widest text-[#ffb400]">LOCATION</h4>
            <p className="text-[12px] mt-3 leading-6 opacity-80">Kigulu, Iganga District. 3k boda from Iganga Town. Van 100k-130k with matron. Safe fenced compound.</p>
          </div>
          <div>
            <h4 className="font-bold text-[12px] tracking-widest text-[#ffb400]">BOARDING LIFE</h4>
            <p className="text-[12px] mt-3 leading-6 opacity-80">Casual wear evening, matron care, porridge break, posho beans meat twice, halal meals, hand washing.</p>
          </div>
          <div>
            <h4 className="font-bold text-[12px] tracking-widest text-[#ffb400]">VISIT US</h4>
            <p className="text-[11px] mt-3 opacity-70">See nursery colorful buildings, merry-go-round, basketball brick court.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/apply" className="bg-[#ffb400] text-black px-5 py-2.5 rounded-full text-[11px] font-medium hover:scale-105 transition-transform">Apply FREE 2026</Link>
              <Link href="/contact" className="bg-white/20 backdrop-blur text-white border border-white/20 px-5 py-2.5 rounded-full text-[11px] font-medium hover:bg-white hover:text-black transition-colors">Contact</Link>
            </div>
            <p className="text-[10px] mt-3 opacity-60">📞 MTN 0782198528</p>
          </div>
        </div>
      </section>
    </main>
  );
}