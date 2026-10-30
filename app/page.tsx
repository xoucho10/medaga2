"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const testimonials = [
    {
      name: "Ken Bosh",
      role: "Father",
      text: "Friendly staff, clean classrooms and a real plan for every child. Settling in took only a few days.",
      img: "/parent_ken.jpg",
    },
    {
      name: "Racky Henderson",
      role: "Father",
      text: "Our son runs to class every morning. Teachers notice every small win and tell us at pick-up.",
      img: "/parent_racky.jpg",
    },
    {
      name: "Grace Namatovu",
      role: "Mother",
      text: "The homework plan worked wonders: our twins read every evening and now bring home a story they can read to us.",
      img: "/parent_grace.jpg",
    },
    {
      name: "John Mukasa",
      role: "Father",
      text: "Safe vans, good food and teachers who really know our daughter by name. Worth every shilling.",
      img: "/parent_john.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <main className="overflow-x-hidden">
      {/* ===== 1. HERO SLIDER ===== */}
      <section className="relative h-[70vh] md:h-[85vh] min-h-[600px] md:min-h-[700px] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-kiddos.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center pt-10 pb-32">
          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] font-extrabold text-white leading-[1.1] drop-shadow-lg">
            Kids Are The Best<br/>Explorers In The World
          </h1>
          <a href="#" className="mt-6 md:mt-8 inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[13px] font-medium px-6 py-2.5 rounded-full transition">
            Read More
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-2 md:grid-cols-4">
          <div className="relative bg-[#1eaaf1] px-4 pt-12 pb-6 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e6a8a" strokeWidth="1.2"><path d="M3 5h18v10H3z"/><path d="M8 15l-2 4h12l-2-4"/></svg>
            </div>
            <h3 className="text-[14px] font-bold text-black">Certified Teachers</h3>
            <p className="text-[11px] leading-[1.4] text-black/80 mt-2">Caring, qualified teachers who know every child by name and plan each day around them.</p>
          </div>
          <div className="relative bg-[#8cc63f] px-4 pt-12 pb-6 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e6a8a" strokeWidth="1.2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
            </div>
            <h3 className="text-[14px] font-bold text-black">Special Education</h3>
            <p className="text-[11px] leading-[1.4] text-black/80 mt-2">Extra support and small groups for children to learn in their own way.</p>
          </div>
          <div className="relative bg-[#5d50c6] px-4 pt-12 pb-6 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e6a8a" strokeWidth="1.2"><path d="M4 19.5A2.5 2.5 0 016.5 17H14"/><path d="M6.5 2H14v11H6.5A2.5 2.5 0 014 15.5v-11A2.5 2.5 0 016.5 2z"/><path d="M10 6h8v11h-8"/></svg>
            </div>
            <h3 className="text-[14px] font-bold text-white">Book & Library</h3>
            <p className="text-[11px] leading-[1.4] text-white/90 mt-2">A cosy library corner with picture books children can borrow and take home.</p>
          </div>
          <div className="relative bg-[#f55a3c] px-4 pt-12 pb-6 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e6a8a" strokeWidth="1.2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
            </div>
            <h3 className="text-[14px] font-bold text-black">Certification</h3>
            <p className="text-[11px] leading-[1.4] text-black/80 mt-2">An accredited curriculum and a progress report for parents every term.</p>
          </div>
        </div>
      </section>

      {/* ===== 2. WHAT WE OFFER - FIXED NO REPETITION + COLORS LIKE REST ===== */}
      <section className="bg-[#fcfcfc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[38px] font-bold">
              <span className="text-[#5d50c6]">What We</span> <span className="text-[#b88a2b]">Offer</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">
              A safe, playful school where every child is known by name and learns at their own pace.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                color: "bg-[#1eaaf1]",
                title: "Safety First",
                desc: "Gated compound, trained matrons, clean water and a nurse on call every school day.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 3L4 7v6c0 4.5 2.5 7.5 8 9 5.5-1.5 8-4.5 8-9V7l-8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
              {
                color: "bg-[#ffb400]",
                title: "Regular Classes",
                desc: "Daily lessons from Baby to P7 with homework support and weekly progress checks.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v15H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                ),
              },
              {
                color: "bg-[#5d50c6]",
                title: "Certified Teachers",
                desc: "Qualified early-years teachers who train each term and plan lessons around each child.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="12" rx="1" />
                    <path d="M8 15v3M12 15v3M5 18h14" />
                  </svg>
                ),
              },
              {
                color: "bg-[#8cc63f]",
                title: "Sufficient Classrooms",
                desc: "Bright, spacious rooms with small groups, low noise and plenty of learning corners.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M3 9l9-4 9 4-9 4-9-4z" />
                    <path d="M3 13l9 4 9-4" />
                    <path d="M3 17l9 4 9-4" />
                  </svg>
                ),
              },
              {
                color: "bg-[#f55a3c]",
                title: "Creative Lessons",
                desc: "Art, music, clay and story time that build confidence, language and fine motor skills.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 3a9 9 0 00-9 9c0 5 4 9 9 9s9-4 9-9a9 9 0 00-9-9z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                color: "bg-[#1e6a8a]",
                title: "Sports Facilities",
                desc: "Large playground, garden games, football and a summer camp for strength and teamwork.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="text-center px-2">
                <div className={`w-16 h-16 md:w-[70px] md:h-[70px] ${item.color} rounded-full flex items-center justify-center mx-auto`}>
                  {item.icon}
                </div>
                <h3 className="font-medium text-[14px] md:text-[15px] mt-5 text-[#111827]">{item.title}</h3>
                <p className="text-[12px] md:text-[12px] text-gray-500 mt-2 leading-[1.6] max-w-[260px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. TEACHING MANNERS - STRETCHED ===== */}
      <section className="relative w-full h-[200px] md:h-[320px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center md:justify-between justify-center gap-4 md:gap-8 text-center md:text-left">
          <div>
            <h2 className="text-white text-[18px] sm:text-[20px] md:text-[26px] font-bold leading-tight">Teaching Your Child Some Good Manners</h2>
            <p className="text-white/80 text-[11px] md:text-[12px] mt-2 max-w-2xl mx-auto md:mx-0">Kindness, sharing and saying thank you are part of every lesson, from circle time to lunch.</p>
          </div>
          <a href="/courses" className="shrink-0 inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[12px] font-medium px-6 py-2.5 rounded-full transition">
            Take a Course
          </a>
        </div>
      </section>

      {/* ===== 4. CERTIFIED TEACHERS ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[38px] font-bold">
              <span className="text-[#5d50c6]">Certified</span> <span className="text-[#b88a2b]">Teachers</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">
              Every teacher is qualified in early-years education and keeps training each term.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { name: "Bianca Wilson", role: "TEACHER", desc: "Leads our toddler group and loves messy art days.", img: "/teacher_bianca.jpg" },
              { name: "Mia Parker", role: "ENGLISH TEACHER", desc: "Teaches music and rhythm, guitar always at hand.", img: "/teacher_mia.jpg" },
              { name: "Stella Smith", role: "ART TEACHER", desc: "Our early reading specialist and story-time host.", img: "/teacher_stella.jpg" },
              { name: "Monica Henderson", role: "SCIENCE TEACHER", desc: "Runs sports, garden games and the summer camp.", img: "/teacher_monica.jpg" },
            ].map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-full h-[300px] md:h-[340px] bg-gray-100 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${t.img}')` }}></div>
                <h4 className="mt-5 text-[15px] md:text-[16px] font-medium text-[#111827]">{t.name}</h4>
                <p className="mt-1 text-[10px] md:text-[11px] tracking-widest text-gray-500 font-medium">{t.role}</p>
                <p className="mt-3 text-[12px] text-gray-500 leading-[1.5] px-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. OUR COURSES ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[38px] font-bold">
              <span className="text-[#5d50c6]">Our</span> <span className="text-[#b88a2b]">Courses</span>
            </h2>
            <p className="text-gray-500 text-[13px] md:text-[14px] mt-3 max-w-2xl mx-auto">
              Small groups and hands-on lessons that follow each child's pace and curiosity.
            </p>
          </div>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Arts Lesson", time: "9:00am - 10am", desc: "Painting, clay and collage help children express ideas and train small hand muscles.", img: "/course_arts.jpg" },
              { title: "Language Lesson", time: "9:00am - 10am", desc: "Stories, rhymes and picture books build vocabulary and a love of reading.", img: "/course_language.jpg" },
              { title: "Music Lesson", time: "9:00am - 10am", desc: "Singing, rhythm games and simple instruments for listening and coordination.", img: "/course_music.jpg" },
              { title: "Sports Lesson", time: "9:00am - 10am", desc: "Running, balance and team games that build strength and fair play.", img: "/course_sports.jpg" },
            ].map((c) => (
              <div key={c.title} className="flex bg-[#f9f9f9] border border-gray-100 overflow-hidden">
                <div className="w-[38%] min-w-[38%] h-[180px] md:h-[200px] bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url('${c.img}')`}}></div>
                <div className="w-[62%] p-4 md:p-6 flex flex-col justify-center">
                  <h4 className="text-[#1e6a8a] font-bold text-[15px] md:text-[18px]">{c.title}</h4>
                  <p className="mt-2 text-[12px] md:text-[13px]"><span className="text-[#b88a2b] font-medium">Class time:</span> <span className="text-gray-800 font-semibold">{c.time}</span></p>
                  <p className="mt-3 text-[12px] md:text-[13px] text-gray-500 leading-[1.6]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. 20 YEARS OF EXPERIENCE ===== */}
      <section className="relative bg-[#fbfbfd] py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[120px] bg-[url('/pencils-top.png')] bg-cover bg-top opacity-30 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[26px] md:text-[34px] font-bold">
            <span className="text-[#6c5ce7]">20 Years of</span> <span className="text-[#111827]">Experience</span>
          </h2>
          <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">
            Two decades of helping children take their first confident steps into learning.
          </p>
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.3"><rect x="3" y="3" width="18" height="12" rx="1"/><path d="M8 15v3"/><path d="M12 15v3"/><path d="M5 18h14"/></svg>
              </div>
              <p className="text-[#1e6a8a] text-[32px] md:text-[36px] font-bold mt-3">18</p>
              <p className="text-gray-600 text-[11px] md:text-[12px] mt-1">Certified Teachers</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.3"><circle cx="12" cy="8" r="6"/><path d="M8 14c-1 1-1 3 0 4"/><path d="M16 14c1 1 1 3 0 4"/><path d="M9 16h6"/><circle cx="9" cy="9" r="1" fill="black"/><circle cx="15" cy="9" r="1" fill="black"/></svg>
              </div>
              <p className="text-[#1e6a8a] text-[32px] md:text-[36px] font-bold mt-3">351</p>
              <p className="text-gray-600 text-[11px] md:text-[12px] mt-1">Successful Kids</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.3"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M12 2v15"/></svg>
              </div>
              <p className="text-[#1e6a8a] text-[32px] md:text-[36px] font-bold mt-3">564</p>
              <p className="text-gray-600 text-[11px] md:text-[12px] mt-1">Happy Parents</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.3"><path d="M6 4h8a2 2 0 012 2v2a2 2 0 01-2 2H6z"/><path d="M6 8v8"/><path d="M8 16h8a2 2 0 002-2v-1"/><path d="M10 16v2a2 2 0 002 2h4a2 2 0 002-2v-2"/></svg>
              </div>
              <p className="text-[#1e6a8a] text-[32px] md:text-[36px] font-bold mt-3">300</p>
              <p className="text-gray-600 text-[11px] md:text-[12px] mt-1">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS ===== */}
      <section className="bg-[#fcfcfc] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[28px] md:text-[38px] font-bold">
            <span className="text-[#5d50c6]">What Parents</span> <span className="text-[#b88a2b]">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">
            What families say after a year with us, in their own words.
          </p>
          <div className="relative mt-14 md:mt-20 h-[220px] md:h-[200px] overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="flex transition-transform duration-[1000ms] ease-in-out will-change-transform" style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full flex justify-center px-4">
                    <div className="flex flex-col md:flex-row items-center gap-6 max-w-2xl">
                      <div className="shrink-0 w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('${t.img}')` }}></div>
                      <div className="relative text-left">
                        <div className="absolute -top-6 -left-2 text-[#e8e2f8] select-none pointer-events-none">
                          <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor"><text x="0" y="36" fontSize="50" fontWeight="900">“</text><text x="28" y="36" fontSize="50" fontWeight="900">”</text></svg>
                        </div>
                        <p className="relative text-[14px] md:text-[15px] text-[#111827] leading-[1.6]">{t.text}</p>
                        <p className="mt-4 text-[13px] font-medium text-[#111827]">{t.name}</p>
                        <p className="mt-1 text-[11px] text-[#1e6a8a]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-r from-[#fcfcfc] to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-l from-[#fcfcfc] to-transparent"></div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition ${i === current ? "bg-[#1eaaf1] scale-125" : "bg-gray-300"}`} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. PRICING ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[34px] font-bold">
              <span className="text-[#5d50c6]">Our</span> <span className="text-[#b88a2b]">Pricing</span>
            </h2>
          </div>
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <div className="bg-[#f9fafb] text-center pb-6 flex flex-col">
              <div className="pt-6 pb-4 px-4">
                <h4 className="text-[#111827] text-[16px] font-medium">Baby Class</h4>
                <p className="mt-3"><span className="text-[#1e6a8a] text-[20px] font-extrabold">UGX 250,000</span><span className="text-gray-500 text-[11px]"> / term - Day</span></p>
                <p className="text-[#111827] text-[12px] font-bold mt-1">UGX 540,000 Boarding</p>
              </div>
              <div className="w-full h-[160px] bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('/pricing_baby.jpg')"}}></div>
              <div className="px-4 pt-4 flex-1 flex flex-col">
                <p className="text-gray-500 text-[12px] leading-[1.5]">Half-day mornings for toddlers, with play, songs and a healthy snack.</p>
                <div className="mt-auto pt-6"><a href="/classes" className="inline-flex items-center justify-center bg-[#1eaaf1] hover:bg-[#1590d0] text-black text-[12px] font-medium px-6 py-3 rounded-full transition">Take A Course</a></div>
              </div>
            </div>
            <div className="bg-[#f9fafb] text-center pb-6 flex flex-col">
              <div className="pt-6 pb-4 px-4">
                <h4 className="text-[#111827] text-[16px] font-medium">Middle / Top</h4>
                <p className="mt-3"><span className="text-[#1e6a8a] text-[20px] font-extrabold">UGX 250,000</span><span className="text-gray-500 text-[11px]"> / term - Day</span></p>
                <p className="text-[#111827] text-[12px] font-bold mt-1">UGX 540,000 Boarding</p>
              </div>
              <div className="w-full h-[160px] bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('/pricing_middle.jpg')"}}></div>
              <div className="px-4 pt-4 flex-1 flex flex-col">
                <p className="text-gray-500 text-[12px] leading-[1.5]">Full school days with lessons, outdoor play, lunch and a rest time.</p>
                <div className="mt-auto pt-6"><a href="/classes" className="inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[12px] font-medium px-6 py-3 rounded-full transition">Take A Course</a></div>
              </div>
            </div>
            <div className="bg-[#f9fafb] text-center pb-6 flex flex-col">
              <div className="pt-6 pb-4 px-4">
                <h4 className="text-[#111827] text-[16px] font-medium">Primary P1-P5</h4>
                <p className="mt-3"><span className="text-[#1e6a8a] text-[18px] font-extrabold">UGX 280k-320k</span><span className="text-gray-500 text-[11px]"> / term - Day</span></p>
                <p className="text-[#111827] text-[12px] font-bold mt-1">UGX 560k-600k Boarding</p>
              </div>
              <div className="w-full h-[160px] bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('/pricing_p1p5.jpg')"}}></div>
              <div className="px-4 pt-4 flex-1 flex flex-col">
                <p className="text-gray-500 text-[12px] leading-[1.5]">Full days plus after-school club, homework support and a monthly progress report.</p>
                <div className="mt-auto pt-6"><a href="/classes" className="inline-flex items-center justify-center bg-[#8cc63f] hover:bg-[#7ab32e] text-black text-[12px] font-medium px-6 py-3 rounded-full transition">Take A Course</a></div>
              </div>
            </div>
            <div className="bg-[#f9fafb] text-center pb-6 flex flex-col">
              <div className="pt-6 pb-4 px-4">
                <h4 className="text-[#111827] text-[16px] font-medium">Primary P6-P7</h4>
                <p className="mt-3"><span className="text-[#1e6a8a] text-[20px] font-extrabold">UGX 350,000</span><span className="text-gray-500 text-[11px]"> / term - Day</span></p>
                <p className="text-[#111827] text-[12px] font-bold mt-1">UGX 630,000 Boarding</p>
              </div>
              <div className="w-full h-[160px] bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('/pricing_p6p7.jpg')"}}></div>
              <div className="px-4 pt-4 flex-1 flex flex-col">
                <p className="text-gray-500 text-[12px] leading-[1.5]">Our complete programme with extended hours, exam prep, and holiday camps.</p>
                <div className="mt-auto pt-6"><a href="/classes" className="inline-flex items-center justify-center bg-[#f55a3c] hover:bg-[#e14a2c] text-black text-[12px] font-medium px-6 py-3 rounded-full transition">Take A Course</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. BLOG ===== */}
      <section className="bg-[#fafafa] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[36px] font-bold">
              <span className="text-[#6c5ce7]">Recent</span> <span className="text-[#b88a2b]">Blog</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">
              Tips, news and ideas for parents from our teachers and classrooms.
            </p>
          </div>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            {[
              { title: "Skills To Develop Your Child's Memory", desc: "Simple games and daily routines that help young children remember more, from songs to picture cards.", img: "/blog_memory.jpg", date: "27", month: "January" },
              { title: "Why Play Is Serious Learning", desc: "Why short, playful lessons work better for four-year-olds than long sessions at a desk.", img: "/blog_play.jpg", date: "27", month: "January" },
              { title: "Rainy Day Activities At Home", desc: "Ideas for rainy days: quiet crafts and counting games you can set up at home in five minutes.", img: "/blog_rainy.jpg", date: "27", month: "January" },
            ].map((b) => (
              <div key={b.title} className="bg-white overflow-hidden flex flex-col">
                <div className="relative w-full h-[220px] md:h-[240px] bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url('${b.img}')`}}>
                  <div className="absolute bottom-0 left-0 bg-[#5d50c6] text-white px-3 py-2 text-center min-w-[50px]">
                    <p className="text-[14px] font-bold leading-none">{b.date}</p>
                    <p className="text-[10px] mt-1">{b.month}</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                  <h4 className="text-[#111827] font-medium text-[14px] md:text-[15px] leading-[1.4]">{b.title}</h4>
                  <p className="text-gray-500 text-[12px] md:text-[12px] mt-3 leading-[1.6]">{b.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <a href="/blog" className="inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[11px] font-medium px-4 py-2 rounded-full transition">Read More →</a>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="text-[#1e6a8a]">Admin</span>
                      <span className="flex items-center gap-1 text-gray-500"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 21l2-5.5A8.5 8.5 0 0121 11.5z"/></svg>3</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}