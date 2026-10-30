"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TeachersPage() {
  const hierarchy = [
    {
      level: "01 - TOP MANAGEMENT",
      subtitle: "Vision & Overall Leadership - Making A Difference Kigulu",
      color: "bg-[#5d50c6]",
      accent: "bg-[#5d50c6]",
      members: [
        { name: "Director / Founder", role: "Director / Founder", tag: "FOUNDER", desc: "Founder & Vision bearer. Overall school ownership, strategy, Kigulu Iganga development. God-fearing leadership.", subjects: "Leadership • Vision • Community", exp: "Founder", img: "/teachers/director.jpg" },
        { name: "Headteacher", role: "Headteacher", tag: "HEADTEACHER", desc: "Overall administration, UNEB registration, PLE results, discipline maroon sweater green, teachers management, assembly.", subjects: "Admin • UNEB • PLE • Discipline", exp: "15+ Years", img: "/teachers/headteacher.jpg" },
        { name: "Deputy Headteacher", role: "Deputy Headteacher", tag: "DEPUTY", desc: "Deputy administration, timetabling, teachers supervision, assembly, stand-in for Headteacher, parents.", subjects: "Timetable • Supervision • Parents", exp: "10+ Years", img: "/teachers/deputy.jpg" },
      ]
    },
    {
      level: "02 - ADMINISTRATION & ACADEMICS",
      subtitle: "Day to Day Running - Curriculum, Fees, Admission",
      color: "bg-[#1e6a8a]",
      accent: "bg-[#1e6a8a]",
      members: [
        { name: "Director of Studies", role: "Director of Studies (DOS)", tag: "DOS", desc: "UNEB competence based curriculum P1-P7, syllabus coverage, exams, computer & agriculture, mock exams, lesson observation.", subjects: "Curriculum • UNEB • Exams", exp: "DOS", img: "/teachers/dos.jpg" },
        { name: "Bursar / Accounts", role: "Bursar / Accounts", tag: "BURSAR", desc: "Fees: Day 250k-350k Board 540k-630k, van 100k-130k, uniform Nursery 130k Primary 150k, FREE admission 2026 receipts.", subjects: "Fees • Uniform • Van • Accounts", exp: "Accounts", img: "/teachers/bursar.jpg" },
        { name: "Secretary / Registrar", role: "Secretary / Registrar", tag: "REGISTRAR", desc: "Admission office, MTN 0782198528 WhatsApp, birth certificates, parent inquiries, files, communication.", subjects: "Admission • MTN 0782198528", exp: "Office", img: "/teachers/secretary.jpg" },
      ]
    },
    {
      level: "03 - NURSERY SECTION",
      subtitle: "Colorful Buildings Blue/Green/Yellow/Red - Separate Gate - Kid-size toilets",
      color: "bg-[#ffb400] text-black",
      accent: "bg-[#ffb400]",
      textDark: true,
      members: [
        { name: "Nursery Head", role: "Nursery Head - Baby/Middle/Top", tag: "NURSERY HEAD", desc: "Overall nursery - Baby 3y Middle 4y Top 5y, colorful buildings, toilet training help, merry-go-round swings slide sand pit.", subjects: "Baby • Middle • Top • Play", exp: "Nursery Lead", img: "/teachers/nursery-head.jpg" },
        { name: "Baby Class Teacher", role: "Baby Class Teacher - 3 Years", tag: "BABY 3Y", desc: "3 Years - Phonics A-Z numbers 1-20 colors, toilet training patient help, social skills sharing manners, hand washing.", subjects: "Phonics • Numbers • Play", exp: "ECD", img: "/teachers/baby.jpg" },
        { name: "Middle Class Teacher", role: "Middle Class Teacher - 4 Years", tag: "MIDDLE 4Y", desc: "4 Years - Early reading writing counting 1-50, art music dance, moral stories God-fearing, confidence.", subjects: "Reading • Writing • Art", exp: "ECD", img: "/teachers/middle.jpg" },
        { name: "Top Class Teacher", role: "Top Class Teacher - 5 Years", tag: "TOP 5Y", desc: "5 Years - Reading fluency writing, P1 preparation, numbers early science, graduation day, MDD fashion show.", subjects: "P1 Prep • Graduation • MDD", exp: "ECD", img: "/teachers/top.jpg" },
      ]
    },
    {
      level: "04 - PRIMARY LOWER - P1-P3",
      subtitle: "Foundation - Maroon Sweater Green Skirt/Shorts - Smart Pupils",
      color: "bg-[#1eaaf1]",
      accent: "bg-[#1eaaf1]",
      members: [
        { name: "P1 Class Teacher", role: "P1 Class Teacher", tag: "P1", desc: "P1 - Foundation English Math reading fluency, maroon sweater green, assembly discipline, porridge break.", subjects: "English • Math • Reading", exp: "Primary", img: "/teachers/p1.jpg" },
        { name: "P2 Class Teacher", role: "P2 Class Teacher", tag: "P2", desc: "P2 - UNEB competence English Math Science SST RE, computer intro, smart pupils, supervised prep.", subjects: "English • Math • Science", exp: "Primary", img: "/teachers/p2.jpg" },
        { name: "P3 Class Teacher", role: "P3 Class Teacher", tag: "P3", desc: "P3 - UNEB, agriculture intro, English grammar Science SST, handwriting, Islam embraced hijab allowed.", subjects: "SST • Agriculture • RE", exp: "Primary", img: "/teachers/p3.jpg" },
      ]
    },
    {
      level: "05 - PRIMARY UPPER & PLE",
      subtitle: "Intermediate to PLE - Basketball Brick Court - MDD - Fashion Show",
      color: "bg-[#8cc63f]",
      accent: "bg-[#8cc63f]",
      members: [
        { name: "P4 Class Teacher", role: "P4 Class Teacher", tag: "P4", desc: "P4 - Math Science SST English deeper, agriculture practical farming plot, computer lessons.", subjects: "Science • Agriculture • SST", exp: "Upper", img: "/teachers/p4.jpg" },
        { name: "P5 Class Teacher", role: "P5 Class Teacher", tag: "P5", desc: "P5 - Upper primary, pre-PLE concepts, computer practical, basketball brick court inter-house.", subjects: "Math • Science • Computer", exp: "Upper", img: "/teachers/p5.jpg" },
        { name: "P6 Class Teacher", role: "P6 Class Teacher - Pre-PLE", tag: "P6", desc: "P6 - Pre-PLE preparation start, past papers introduction, career awareness, discipline.", subjects: "PLE Prep • Past Papers", exp: "PLE", img: "/teachers/p6.jpg" },
        { name: "P7 Lead Teacher", role: "P7 Lead - PLE Candidate Class", tag: "P7 LEAD - PLE", desc: "P7 Day 350k Board 630k NEXT YEAR - PLE intensive past papers, mock UNEB, special coaching night prep, Islam embraced hijab halal meals.", subjects: "PLE Intensive • Mock • Coaching", exp: "PLE Lead 10y+", img: "/teachers/p7.jpg" },
      ]
    },
    {
      level: "06 - BOARDING, WELFARE & SUPPORT",
      subtitle: "Matron Care - Van 100k-130k with Matron - Halal Meals - Safe Kigulu Compound",
      color: "bg-[#f55a3c]",
      accent: "bg-[#f55a3c]",
      members: [
        { name: "Matron", role: "Matron - Boarding & Transport", tag: "MATRON", desc: "Boarding dorms boys/girls separate, casual wear evening, matron care 24/7, van 100k-130k with matron safe routes, porridge break.", subjects: "Boarding • Van • Care", exp: "Matron", img: "/teachers/matron.jpg" },
        { name: "Patron & Islam Teacher", role: "Patron & Islam Teacher", tag: "PATRON - ISLAM", desc: "We embrace Islam as well - hijab allowed white top green skirt, halal meals, Muslim teachers, Ramadan respect, prayer, all faiths welcome.", subjects: "Islam • CRE • Discipline", exp: "Patron", img: "/teachers/patron.jpg" },
        { name: "Head Cook", role: "Head Cook - Meals", tag: "COOK", desc: "Halal meals separate, porridge break & lunch posho beans greens meat twice weekly, balanced diet, clean kitchen.", subjects: "Meals • Halal • Nutrition", exp: "Cook", img: "/teachers/cook.jpg" },
        { name: "Grounds & Security", role: "Grounds & Security", tag: "SUPPORT", desc: "Safe fenced compound Kigulu, basketball brick court maintenance, colorful buildings, play area merry-go-round security.", subjects: "Security • Maintenance", exp: "Support", img: "/teachers/security.jpg" },
      ]
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

      {/* BANNER */}
      <section className="relative h-[380px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center transition-transform duration-[2000ms]" style={{ transform: `scale(${1 + scrollY * 0.0002})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#5d50c6]/30 to-black/70"></div>
        <div className="relative text-center text-white px-4 z-10 animate-fadeUp">
          <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] bg-white/20 backdrop-blur inline-block px-4 py-2 rounded-full">HOME › OUR TEACHERS</p>
          <h1 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold mt-4 leading-[0.95] drop-shadow-lg">Our Teachers<br/>Full Hierarchy</h1>
          <p className="text-[11px] md:text-[13px] mt-4 opacity-80 max-w-2xl mx-auto bg-black/20 backdrop-blur px-4 py-2 rounded-full">Director → Headteacher → Deputy → DOS → Bursar → Nursery → Primary → P7 PLE → Matron</p>
        </div>
      </section>

      {/* STAT BAR - CLEAN */}
      <section className="bg-white border-b sticky top-0 z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-wrap gap-2 text-[10px] md:text-[11px] font-medium">
          <span className="bg-[#f9fafb] border px-4 py-2 rounded-full">👥 {hierarchy.reduce((a,b)=>a+b.members.length,0)} Staff Members</span>
          <span className="bg-[#5d50c6] text-white px-4 py-2 rounded-full">6 Levels - Top to Support</span>
          <span className="bg-[#ffb400] text-black px-4 py-2 rounded-full">📍 Kigulu Iganga - MTN 0782198528</span>
        </div>
      </section>

      {/* HIERARCHY FLOW - STRETCHED */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#111827]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h3 className="font-bold text-[11px] tracking-[0.2em] text-white/60">SCHOOL HIERARCHY FLOW</h3>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium items-center">
            <span className="bg-[#5d50c6] text-white px-3 py-2 rounded-full">DIRECTOR</span><span className="text-white/50">→</span>
            <span className="bg-white text-black px-3 py-2 rounded-full">HEADTEACHER</span><span className="text-white/50">→</span>
            <span className="bg-white/20 text-white px-3 py-2 rounded-full">DEPUTY</span><span className="text-white/50">→</span>
            <span className="bg-white/20 text-white px-3 py-2 rounded-full">DOS + BURSAR</span><span className="text-white/50">→</span>
            <span className="bg-[#ffb400] text-black px-3 py-2 rounded-full">NURSERY HEAD</span><span className="text-white/50">→</span>
            <span className="bg-[#1eaaf1] text-white px-3 py-2 rounded-full">P1-P3</span><span className="text-white/50">→</span>
            <span className="bg-[#8cc63f] text-black px-3 py-2 rounded-full">P4-P7 PLE</span><span className="text-white/50">→</span>
            <span className="bg-[#f55a3c] text-white px-3 py-2 rounded-full">MATRON & PATRON</span>
          </div>
        </div>
      </section>

      {/* TEACHERS GRID */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {hierarchy.map((group, gi) => (
            <div key={group.level} className="animate-fadeUp" style={{animationDelay:`${gi*0.1}s`}}>
              <div className="flex flex-col md:flex-row md:items-center gap-3 border-b border-gray-200 pb-4">
                <span className={`${group.color} ${group.textDark ? "text-black" : "text-white"} px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest shadow-sm`}>{group.level}</span>
                <span className="text-[11px] text-gray-500 font-medium">{group.subtitle}</span>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {group.members.map((m, mi) => (
                  <div key={m.role} className="group bg-white border border-gray-100 rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-[260px] md:h-[280px] bg-[#f9fafb] overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110" style={{backgroundImage:`url('${m.img}')`}}></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#f9fafb] group-hover:opacity-0 transition-opacity duration-500">
                        <div className={`w-20 h-20 ${group.accent} rounded-full flex items-center justify-center text-[28px] shadow-sm text-white animate-float`} style={{animationDelay:`${mi*0.2}s`}}>👩‍🏫</div>
                        <span className="mt-3 text-[9px] font-bold bg-[#111827] text-white px-2.5 py-1 rounded-full">{m.tag}</span>
                      </div>
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${group.accent}`}></div>
                      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur border text-[9px] font-bold px-2.5 py-1 rounded-full shadow-sm group-hover:scale-110 transition-transform">{m.exp}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-[14px] leading-tight text-[#111827] group-hover:text-[#5d50c6] transition-colors">{m.name}</h4>
                      <p className="text-[#b88a2b] text-[10px] font-bold tracking-widest mt-1.5">{m.role}</p>
                      <p className="text-gray-500 text-[11px] mt-3 leading-[1.6]">{m.desc}</p>
                      <div className="mt-4 bg-[#fcfcfc] border border-gray-100 rounded-xl p-3 group-hover:bg-[#f9f9fb] transition-colors">
                        <p className="text-[8px] font-bold tracking-widest text-gray-400">TEACHES / HANDLES</p>
                        <p className="text-[10px] font-medium mt-1 text-[#111827]">{m.subjects}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 py-12 md:py-16 text-center px-4">
          <h3 className="font-bold text-[20px] md:text-[26px] text-white">Want to join MEDAG teaching staff?</h3>
          <p className="text-[11px] md:text-[12px] text-white/70 mt-2">Kigulu Iganga - Day & Boarding - Baby to P7 - MTN 0782198528 - Admission FREE 2026</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="inline-flex justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black px-8 py-3 rounded-full font-medium text-[12px] transition-all hover:scale-105">Contact Headteacher →</Link>
            <Link href="/apply" className="inline-flex justify-center bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full font-medium text-[12px] transition-all hover:scale-105">Apply for Admission</Link>
          </div>
        </div>
      </section>
    </main>
  );
}