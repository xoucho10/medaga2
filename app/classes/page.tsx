"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ClassesPage() {
  const classes = [
    {
      badge: "BABY 3Y",
      title: "Baby Class",
      age: "3 Years",
      time: "8:00am - 12:30pm",
      day: "250k",
      board: "540k",
      color: "border-t-[#ffb400]",
      accent: "bg-[#ffb400]",
      emoji: "🧸",
      focus: "Play-based phonics & numbers, toilet training - we help patiently, social skills sharing manners, God-fearing stories",
      curriculum: ["Phonics A-Z", "Numbers 1-20", "Colors & Shapes", "Sharing & Manners", "Hand washing", "Drawing"],
      uniform: "Nursery 130k (2 sets + sweater + socks)",
      facility: "Colorful building blue/green/yellow/red, kid-size toilets, merry-go-round swings slide sand pit, separate gate",
      care: "Hand washing supervised always, matron care, porridge break, safe Kigulu compound",
    },
    {
      badge: "MIDDLE 4Y",
      title: "Middle Class",
      age: "4 Years",
      time: "8:00am - 3:00pm",
      day: "250k",
      board: "540k",
      color: "border-t-[#f55a3c]",
      accent: "bg-[#f55a3c]",
      emoji: "📚",
      focus: "Early reading & writing, counting art music dance, moral stories God-fearing, confidence",
      curriculum: ["Reading 3-letter words", "Writing patterns", "Counting 1-50", "Art & Music", "Moral stories", "MDD intro"],
      uniform: "Nursery 130k - smart, clean, daily check",
      facility: "Nursery Section separate gate, merry-go-round & slide play, reading corner, charts",
      care: "Social skills & confidence building, supervised play, matron",
    },
    {
      badge: "TOP 5Y",
      title: "Top Class",
      age: "5 Years",
      time: "8:00am - 3:30pm",
      day: "250k",
      board: "540k",
      color: "border-t-[#8cc63f]",
      accent: "bg-[#8cc63f]",
      emoji: "🎓",
      focus: "Reading fluency & writing, P1 preparation program, numbers early science, confidence building",
      curriculum: ["Fluent reading", "Sentence writing", "Numbers 1-100", "Addition/Subtraction", "Early Science", "Graduation"],
      uniform: "Nursery 130k + graduation gown - grey vests red bow ties for fashion show",
      facility: "Graduation Day celebration stage, MDD Music Dance Drama, fashion show confidence, primary readiness",
      care: "P1 readiness assessment, parent meeting, interview prep",
    },
    {
      badge: "P1-P3",
      title: "Primary P1-P3",
      age: "6-9 Years",
      time: "7:30am - 4:00pm",
      day: "280k-300k",
      board: "560k-580k",
      color: "border-t-[#1eaaf1]",
      accent: "bg-[#1eaaf1]",
      emoji: "✏️",
      focus: "UNEB competence curriculum - English Math Science SST RE, computer & agriculture intro, smart pupils",
      curriculum: ["English Grammar", "Math (UNEB)", "Science", "SST", "RE (CRE/IRE)", "Computer", "Agriculture", "MDD"],
      uniform: "Primary 150k (2 sets + maroon sweater + socks) - maroon sweater green skirt/shorts",
      facility: "Primary classrooms, library, basketball brick paving court, hand washing, safe compound",
      care: "Supervised prep, porridge break posho beans, Islam embraced hijab allowed white top green skirt, halal meals",
    },
    {
      badge: "P4-P5",
      title: "Primary P4-P5",
      age: "10-11 Years",
      time: "7:30am - 5:00pm",
      day: "300k-320k",
      board: "580k-600k",
      color: "border-t-[#5d50c6]",
      accent: "bg-[#5d50c6]",
      emoji: "📖",
      focus: "UNEB deeper - Math Science SST English, agriculture practical, computer lessons, career awareness",
      curriculum: ["English Comprehension", "Math", "Integrated Science", "SST with Agriculture", "Computer Practical", "Farming plot"],
      uniform: "Primary 150k - smart pupils, casual wear evening for boarders",
      facility: "Library, basketball court brick paving, MDD stage traditional wear, agriculture plot",
      care: "Boarding - casual wear evening, prep supervised, balanced diet posho beans veg meat twice, matron care",
    },
    {
      badge: "P6-P7 PLE",
      title: "Primary P6-P7",
      age: "12-13 Years",
      time: "6:30am - 9:00pm",
      day: "350k",
      board: "630k",
      color: "border-t-[#1e6a8a]",
      accent: "bg-[#1e6a8a]",
      emoji: "🏆",
      highlight: true,
      focus: "PLE intensive - past papers UNEB competence, special coaching, career guidance, discipline",
      curriculum: ["PLE Past Papers", "UNEB Mock Exams", "Special Coaching", "Career Guidance", "Interview Skills", "Fashion Show & MDD"],
      uniform: "Primary 150k + P7 badge - maroon sweater special candidate",
      facility: "PLE special classes, basketball court break, MDD traditional wear, fashion show ministers, safe prep late",
      care: "We embrace Islam as well - hijab allowed halal meals, special meals for candidates, matron care, Islam teachers",
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
      <section className="relative h-[340px] md:h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center transition-transform duration-[2000ms]" style={{ transform: `scale(${1 + scrollY * 0.0002})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5d50c6]/20 to-black/70"></div>
        <div className="relative text-center text-white px-4 z-10 animate-fadeUp">
          <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] bg-white/20 backdrop-blur inline-block px-4 py-2 rounded-full">CLASSES & FEES - BABY TO P7</p>
          <h1 className="text-[34px] md:text-[56px] font-extrabold mt-4 leading-[0.9]">Baby Class to P7</h1>
          <p className="text-[11px] md:text-[13px] mt-3 opacity-80 max-w-2xl mx-auto bg-black/20 backdrop-blur px-4 py-2 rounded-full">Day & Boarding - Fees included - Kigulu Iganga - FREE Admission 2026 - Van 100k-130k</p>
        </div>
      </section>

      {/* PILLS + FEES SUMMARY - STICKY + DYNAMIC */}
      <section className="bg-white border-b sticky top-0 z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-wrap gap-2 text-[10px] md:text-[11px] font-medium">
            <span className="bg-[#5d50c6] text-white px-4 py-2 rounded-full">🎓 Admission FREE 2026</span>
            <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">👕 Uniform Nursery 130k Primary 150k</span>
            <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">🚌 Van 100k-130k with Matron</span>
            <span className="bg-[#ffb400] text-black px-4 py-2 rounded-full">📍 3k Boda Iganga Town</span>
          </div>
          {/* Quick Fees Table - HOVER ROWS */}
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white hidden md:block">
            <table className="w-full text-[11px]">
              <thead className="bg-[#111827] text-white"><tr><th className="p-3.5 text-left font-medium">Class</th><th className="p-3.5 text-center font-medium">Day / Term</th><th className="p-3.5 text-center font-medium">Boarding / Term</th><th className="p-3.5 text-left font-medium">Uniform</th></tr></thead>
              <tbody className="divide-y divide-gray-100">
                {classes.map((c, i) => (
                  <tr key={c.title} className={`transition-colors hover:bg-[#fcfcfc] ${c.highlight ? "bg-[#f9f9fb] font-bold" : ""}`}>
                    <td className="p-3.5 font-medium flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${c.accent}`}></span>{c.title} - {c.age}</td>
                    <td className="p-3.5 text-center font-bold text-[#5d50c6]">{c.day}</td>
                    <td className="p-3.5 text-center font-medium">{c.board}</td>
                    <td className="p-3.5">{c.title.includes('Baby') || c.title.includes('Middle') || c.title.includes('Top') ? '130k' : '150k'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MIDDLE STRETCHED HERO - LIKE MANNERS BANNER */}
      <section className="relative w-full h-[220px] md:h-[320px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/bg_classes_mid.jpg')] bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 via-[#5d50c6]/30 to-black/60"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-white">
            <p className="text-[11px] tracking-[0.2em] text-[#ffb400] font-bold">FROM PLAY TO PLE</p>
            <h2 className="text-[22px] md:text-[32px] font-bold leading-tight mt-2">Every Class Has a Purpose<br/>Baby 3y → P7 PLE</h2>
            <p className="text-white/70 text-[11px] md:text-[12px] mt-2 max-w-xl">Toilet training help → Early reading → Graduation → UNEB competence → PLE intensive past papers</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-white text-black px-4 py-2 rounded-full text-[11px] font-medium">Day 250k-350k</span>
            <span className="bg-[#ffb400] text-black px-4 py-2 rounded-full text-[11px] font-medium">Board 540k-630k</span>
          </div>
        </div>
      </section>

      {/* CLASSES WITH FEES - DYNAMIC CARDS */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[40px] font-bold">
              <span className="text-[#5d50c6]">Full Class Details</span> <span className="text-[#b88a2b]">+ Fees</span>
            </h2>
            <p className="text-gray-500 text-[11px] md:text-[13px] mt-2 max-w-2xl mx-auto">Each card shows focus, curriculum, uniform, facility, care, schedule + fees</p>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {classes.map((c, i) => (
              <div key={c.title} className={`group bg-white rounded-[22px] border border-gray-100 shadow-sm border-t-4 ${c.color} overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fadeUp ${c.highlight ? "lg:col-span-2 ring-2 ring-[#5d50c6]/10" : ""}`} style={{animationDelay:`${i*0.08}s`}}>
                <div className="p-6 md:p-7">
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${c.accent} rounded-full flex items-center justify-center text-white text-[20px] shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float`} style={{animationDelay:`${i*0.2}s`}}>{c.emoji}</div>
                      <div>
                        <span className="text-[9px] font-bold bg-[#f9fafb] border text-[#5d50c6] px-2.5 py-1 rounded-full">{c.badge}</span>
                        <h3 className="font-bold text-[16px] md:text-[18px] leading-tight mt-1 text-[#111827] group-hover:text-[#5d50c6] transition-colors">{c.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-2 justify-end">
                        <span className="bg-[#f9fafb] border text-[#5d50c6] text-[9px] font-bold px-2.5 py-1 rounded-full">DAY {c.day}</span>
                        <span className="bg-[#111827] text-white text-[9px] font-bold px-2.5 py-1 rounded-full">BOARD {c.board}</span>
                      </div>
                      <p className="text-[9px] font-medium text-gray-500 mt-1.5">⏰ {c.time} • {c.age}</p>
                    </div>
                  </div>

                  <p className="text-[11px] md:text-[12px] font-bold text-[#b88a2b] mt-4 leading-[1.5]">{c.age} - {c.focus}</p>

                  <div className="mt-5 grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-[9px] font-bold tracking-widest text-gray-400">CURRICULUM</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">{c.curriculum.map(item => <span key={item} className="text-[9px] bg-[#fcfcfc] border border-gray-100 px-2.5 py-1 rounded-full font-medium group-hover:bg-[#f9f9fb] transition-colors">{item}</span>)}</div>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-widest text-gray-400">UNIFORM</p>
                        <p className="text-[11px] text-gray-600 mt-1.5 leading-[1.5]">{c.uniform}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[9px] font-bold tracking-widest text-gray-400">FACILITY</p>
                        <p className="text-[11px] text-gray-600 mt-1.5 leading-[1.5]">{c.facility}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-widest text-gray-400">CARE & MEALS</p>
                        <p className="text-[11px] text-gray-600 mt-1.5 leading-[1.5]">{c.care}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <div className="bg-[#111827] text-white text-[11px] font-medium px-5 py-2.5 rounded-full">Fees: Day {c.day} / Board {c.board} / term</div>
                    <Link href="/apply" className="bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[11px] font-medium px-5 py-2.5 rounded-full transition-all hover:scale-105">Apply FREE →</Link>
                  </div>
                </div>
                <div className={`h-1 w-full ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          {/* WHAT FEES INCLUDE - COLORFUL */}
          <div className="mt-12 bg-white border border-gray-100 rounded-[20px] p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-[14px] text-[#111827]">What Fees Include + Extra</h3>
            <div className="mt-5 grid md:grid-cols-3 gap-4 text-[11px]">
              {[
                "Tuition: UNEB competence English Math Science SST RE Computer Agriculture",
                "Meals: Porridge break + posho beans greens meat twice - halal on request",
                "Boarding: Dorms matron care casual wear evening supervised prep safe compound",
                "Uniform: Nursery 130k Primary 150k (2 sets + sweater + socks) grey vests red bow ties functions",
                "Transport: Van 100k-130k with matron - 3k boda Iganga Town option",
                "Admission: FREE 2026 - birth certificate + photos only - MTN 0782198528",
              ].map((txt, idx) => (
                <div key={idx} className="flex gap-2 bg-[#fcfcfc] rounded-xl p-3 border border-gray-50 hover:bg-[#f9f9fb] transition-colors">
                  <span className="text-[#5d50c6] font-bold">•</span>
                  <p className="text-gray-600 leading-[1.5]">{txt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - STRETCHED */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#111827]/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 text-center">
          <h3 className="font-bold text-[20px] md:text-[26px] text-white">Ready for Baby to P7?</h3>
          <p className="text-[11px] text-white/60 mt-2">Kigulu Iganga - MTN 0782198528 - 3k Boda Town - Van 100k-130k - Admission FREE 2026</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/apply" className="bg-[#ffb400] text-black px-7 py-3 rounded-full text-[12px] font-medium hover:scale-105 transition-transform">Apply Now FREE</Link>
            <Link href="/contact" className="bg-white/10 backdrop-blur border border-white/20 text-white px-7 py-3 rounded-full text-[12px] font-medium hover:bg-white hover:text-black transition-colors">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}