"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProgramsPage() {
  const programs = [
    {
      badge: "Baby 3y",
      title: "Baby Class",
      age: "3 Years - Toilet Training Help",
      fee: "Day 250k / Board 540k",
      color: "border-t-[#ffb400]",
      accent: "bg-[#ffb400]",
      img: "/programs/baby.jpg",
      points: ["Play-based phonics & numbers", "Toilet training - we help patiently", "Social skills, sharing, manners", "Colorful building, kid-size toilets", "Play Area: merry-go-round, swings, sand pit", "Hand washing, supervised always"],
    },
    {
      badge: "Middle 4y",
      title: "Middle Class",
      age: "4 Years",
      fee: "Day 250k / Board 540k",
      color: "border-t-[#f55a3c]",
      accent: "bg-[#f55a3c]",
      img: "/programs/middle.jpg",
      points: ["Early reading & writing", "Counting, art, music, dance", "Moral stories, God-fearing", "Social skills & confidence", "Nursery Section separate gate", "Merry-go-round & slide play"],
    },
    {
      badge: "Top 5y",
      title: "Top Class",
      age: "5 Years - Graduation",
      fee: "Day 250k / Board 540k",
      color: "border-t-[#8cc63f]",
      accent: "bg-[#8cc63f]",
      img: "/programs/top.jpg",
      points: ["Reading fluency & writing", "P1 preparation program", "Graduation Day celebration", "Numbers & early science", "MDD - Music Dance Drama", "Fashion Show confidence building"],
    },
    {
      badge: "P1-P7",
      title: "Primary Section",
      age: "6-13 Years - UNEB",
      fee: "Day 280k-350k / Board 560k-630k",
      color: "border-t-[#5d50c6]",
      accent: "bg-[#5d50c6]",
      highlight: true,
      img: "/programs/primary.jpg",
      points: ["UNEB competence-based curriculum", "English, Math, Science, SST, RE", "Computer & Agriculture lessons", "Smart Pupils maroon sweater green skirt", "Basketball court brick paving inter-house", "PLE special - P7 Day 350k Board 630k NEXT YEAR", "We embrace Islam as well - hijab allowed, halal meals"],
    },
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
      <section className="relative h-[340px] md:h-[460px] bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center transition-transform duration-[2000ms]" style={{ transform: `scale(${1 + scrollY * 0.0002})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5d50c6]/20 to-black/70"></div>
        <div className="relative text-center text-white px-4 z-10 animate-fadeUp">
          <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] bg-white/20 backdrop-blur inline-block px-4 py-2 rounded-full">HOME › PROGRAMS</p>
          <h1 className="text-[36px] md:text-[52px] font-extrabold mt-4 leading-[0.9]">Baby Class to P7</h1>
          <p className="text-[11px] md:text-[13px] mt-3 opacity-80 max-w-xl mx-auto bg-black/20 backdrop-blur px-4 py-2 rounded-full">Nursery colorful buildings blue/green/yellow/red + Primary maroon sweater green skirt • Kigulu Iganga • Day & Boarding</p>
        </div>
      </section>

      {/* TOP INFO PILLS - STICKY */}
      <section className="bg-white border-b sticky top-0 z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-wrap gap-2 text-[10px] md:text-[11px] font-medium">
          <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">📍 Kigulu, Iganga - 3k Boda Town</span>
          <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">🚌 Van 100k-130k with Matron</span>
          <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">👕 Uniform Nursery 130k Primary 150k</span>
          <span className="bg-[#5d50c6] text-white px-4 py-2 rounded-full">🎓 Admission FREE 2026</span>
          <span className="bg-[#ffb400] text-black px-4 py-2 rounded-full">☪️ Islam Embraced - Halal Meals</span>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="bg-[#fcfcfc] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[40px] font-bold">
              <span className="text-[#5d50c6]">Our</span> <span className="text-[#b88a2b]">Programs</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-2">Baby to P7 - Play to UNEB excellence in Kigulu</p>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {programs.map((p, i) => (
              <div key={p.title} className={`group bg-white rounded-[20px] shadow-sm border border-gray-100 border-t-4 ${p.color} overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeUp ${p.highlight ? "ring-2 ring-[#5d50c6]/10 lg:scale-[1.02]" : ""}`} style={{animationDelay:`${i*0.1}s`}}>
                <div className="relative h-[170px] md:h-[180px] bg-[#f9fafb] border-b overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110" style={{backgroundImage:`url('${p.img}')`}}></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-[#f9fafb] group-hover:opacity-0 transition-opacity duration-500">
                    <span className="text-[11px] font-medium text-gray-400">{p.title}</span>
                  </div>
                  <div className={`absolute top-0 left-0 right-0 h-1 ${p.accent}`}></div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold bg-[#f9fafb] border text-[#5d50c6] px-3 py-1 rounded-full">{p.badge}</span>
                    {p.highlight && <span className="text-[9px] font-bold bg-[#5d50c6] text-white px-2.5 py-1 rounded-full animate-float">POPULAR</span>}
                  </div>
                  <h3 className="font-bold text-[16px] md:text-[18px] mt-3 text-[#111827] group-hover:text-[#5d50c6] transition-colors">{p.title}</h3>
                  <p className="text-[10px] font-medium text-gray-500 mt-1">{p.age}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-[11px] text-gray-600 leading-[1.4]"><span className="text-[#b88a2b] font-bold">•</span>{pt}</li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <div className="bg-[#111827] text-white text-[11px] font-bold px-4 py-2.5 rounded-full text-center">{p.fee}/term</div>
                    <Link href="/apply" className="mt-3 block bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[11px] font-medium px-4 py-2.5 rounded-full text-center transition-all hover:scale-105">Apply FREE 2026 →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND HERO - STRETCHED MIDDLE - LIKE MANNERS BANNER */}
      <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/bg_programs_mid.jpg')] bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#5d50c6]/30 to-black/50"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="text-white max-w-xl">
            <p className="text-[11px] tracking-[0.2em] text-[#ffb400] font-bold">PLAY TO PLE EXCELLENCE</p>
            <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.1] mt-3">From Merry-Go-Round<br/>to PLE Success</h2>
            <p className="text-[12px] md:text-[13px] mt-3 opacity-80 leading-[1.6]">Baby 3y toilet training help → Middle 4y early reading → Top 5y graduation → P1-P7 UNEB competence with computer & agriculture, basketball brick court, fashion show grey vests red bow ties.</p>
          </div>
          <div className="shrink-0 flex flex-col gap-3">
            <div className="bg-white/90 backdrop-blur rounded-2xl px-5 py-3 text-left">
              <p className="text-[10px] font-bold text-[#5d50c6]">NURSERY</p>
              <p className="text-[11px] text-[#111827] font-medium">Colorful blocks • Play area • Kid toilets</p>
            </div>
            <div className="bg-[#ffb400] rounded-2xl px-5 py-3 text-left">
              <p className="text-[10px] font-bold text-black">PRIMARY</p>
              <p className="text-[11px] text-black font-medium">UNEB • P7 350k/630k • Islam embraced</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY HIGHLIGHT - DYNAMIC */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="group bg-white p-2 rounded-[20px] shadow-lg border border-gray-100 md:rotate-1 hover:rotate-0 transition-transform duration-500 order-2 md:order-1">
            <div className="relative bg-gray-100 h-[300px] md:h-[380px] rounded-[14px] overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-105" style={{backgroundImage:"url('/primary-life.jpg')"}}></div>
              <div className="absolute inset-0 flex items-center justify-center bg-[#f9fafb] group-hover:opacity-0 transition-opacity">
                <span className="text-[11px] text-gray-400 text-center px-6">Primary maroon sweater, basketball brick court, fashion show grey vests red bow ties</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                <span className="bg-[#5d50c6] text-white text-[9px] font-bold px-3 py-1.5 rounded-full">MAROON SWEATER</span>
                <span className="bg-[#ffb400] text-black text-[9px] font-bold px-3 py-1.5 rounded-full">GREEN SKIRT</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[26px] md:text-[36px] font-bold leading-[0.95]">
              <span className="text-[#5d50c6]">P1-P7 UNEB</span><br/><span className="text-[#b88a2b]">Day & Boarding</span>
            </h2>
            <p className="text-[12px] md:text-[13px] text-gray-600 mt-4 leading-[1.7]">
              UNEB competence-based curriculum - English, Math, Science, SST, RE, Computer & Agriculture. 
              Smart pupils in maroon sweater, green skirts/shorts. Basketball court brick paving for inter-house sports.
              <strong className="text-[#111827]"> P7 Day 350k / Board 630k NEXT YEAR.</strong>
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="group bg-[#fcfcfc] border border-gray-100 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <p className="font-bold text-[#111827]">☪️ Islam Embraced</p><p className="text-gray-500 mt-1 leading-[1.5]">Hijab white top green skirt allowed, halal meals on request</p>
              </div>
              <div className="group bg-[#fcfcfc] border border-gray-100 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <p className="font-bold text-[#111827]">🍲 Boarding Meals</p><p className="text-gray-500 mt-1 leading-[1.5]">Porridge break, posho beans veg meat twice, matron care</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/fees" className="inline-flex justify-center bg-[#111827] hover:bg-black text-white px-6 py-3 rounded-full font-medium text-[11px] transition-all hover:scale-105">View Full Fees</Link>
              <Link href="/apply" className="inline-flex justify-center bg-[#5d50c6] hover:bg-[#4a3fb8] text-white px-6 py-3 rounded-full font-medium text-[11px] transition-all hover:scale-105">Apply FREE 2026</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - STRETCHED */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#111827]/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <p className="font-bold text-[11px] tracking-widest text-[#ffb400]">INCLUSIVE EDUCATION</p>
            <p className="text-[12px] mt-3 opacity-80 leading-6">We embrace Islam as well - hijab allowed, halal meals for boarders on request, Muslim teachers, Ramadan respect. Christian & Muslim together in Kigulu, Iganga.</p>
          </div>
          <div>
            <p className="font-bold text-[11px] tracking-widest text-[#ffb400]">BOARDING LIFE</p>
            <p className="text-[12px] mt-3 opacity-80 leading-6">Casual wear evening, prep supervised, balanced diet posho beans veg meat twice, porridge break, hand washing, matron care. Safe Kigulu compound.</p>
          </div>
          <div>
            <p className="font-bold text-[11px] tracking-widest text-[#ffb400]">NEXT STEP</p>
            <p className="text-[11px] mt-3 opacity-70">Uniform Nursery 130k Primary 150k (2 sets + sweater + socks). Day & Boarding with casual wear.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/fees" className="bg-white text-black px-5 py-2.5 rounded-full text-[11px] font-medium hover:scale-105 transition-transform">View Fees</Link>
              <Link href="/apply" className="bg-[#5d50c6] text-white px-5 py-2.5 rounded-full text-[11px] font-medium hover:scale-105 transition-transform">Apply FREE</Link>
            </div>
            <p className="text-[10px] mt-3 opacity-50">📞 MTN 0782198528 • 3k Boda Iganga Town • Van 100k-130k</p>
          </div>
        </div>
      </section>
    </main>
  );
}