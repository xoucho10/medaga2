"use client";
import { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const testimonials = [
    { name: "Ken Bosh", role: "Father", text: "Friendly staff, clean classrooms and a real plan for every child. Settling in took only a few days.", img: "/parent_ken.jpg" },
    { name: "Racky Henderson", role: "Father", text: "Our son runs to class every morning. Teachers notice every small win and tell us at pick-up.", img: "/parent_racky.jpg" },
    { name: "Grace Namatovu", role: "Mother", text: "The homework plan worked wonders: our twins read every evening and now bring home a story they can read to us.", img: "/parent_grace.jpg" },
    { name: "John Mukasa", role: "Father", text: "Safe vans, good food and teachers who really know our daughter by name. Worth every shilling.", img: "/parent_john.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [countUp, setCountUp] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 4000);
    const onScroll = () => {
      setScrollY(window.scrollY);
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setCountUp(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => { clearInterval(id); window.removeEventListener("scroll", onScroll); };
  }, [testimonials.length]);

  return (
    <main className="overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatSlow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 5s ease-in-out infinite; }
        .animate-fadeUp { animation: fadeUp 0.8s ease-out both; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out both; }
      `}</style>

      {/* ===== 1. HERO - PARALLAX + FADE UP ===== */}
      <section className="relative h-[75vh] md:h-[88vh] min-h-[620px] md:min-h-[740px] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-kiddos.jpg')] bg-cover bg-center transition-transform duration-[2000ms]" style={{ transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.15}px)` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center pt-10 pb-40">
          <h1 className="text-[34px] sm:text-[44px] md:text-[58px] font-extrabold text-white leading-[1.05] drop-shadow-xl animate-fadeUp">
            Kids Are The Best<br/>Explorers In The World
          </h1>
          <a href="#" className="mt-7 md:mt-9 inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[13px] font-medium px-7 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg animate-fadeUp" style={{animationDelay:'0.2s'}}>
            Read More
          </a>
        </div>
        {/* 4 BOXES - STAGGERED SLIDE UP */}
        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-2 md:grid-cols-4">
          {[
            { color: "bg-[#1eaaf1]", title: "Certified Teachers", text: "Caring, qualified teachers who know every child by name and plan each day around them.", delay: "0s" },
            { color: "bg-[#8cc63f]", title: "Special Education", text: "Extra support and small groups for children to learn in their own way.", delay: "0.1s" },
            { color: "bg-[#5d50c6]", title: "Book & Library", text: "A cosy library corner with picture books children can borrow and take home.", delay: "0.2s", white: true },
            { color: "bg-[#f55a3c]", title: "Certification", text: "An accredited curriculum and a progress report for parents every term.", delay: "0.3s" },
          ].map((b: any) => (
            <div key={b.title} className={`relative ${b.color} px-4 pt-14 pb-7 text-center group transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:shadow-xl animate-fadeUp`} style={{animationDelay: b.delay}}>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e6a8a" strokeWidth="1.2"><path d="M3 5h18v10H3z"/><path d="M8 15l-2 4h12l-2-4"/></svg>
              </div>
              <h3 className={`text-[14px] font-bold ${b.white ? 'text-white' : 'text-black'}`}>{b.title}</h3>
              <p className={`text-[11px] leading-[1.4] mt-2 ${b.white ? 'text-white/90' : 'text-black/80'}`}>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 2. WHAT WE OFFER - FLOAT + HOVER POP ===== */}
      <section className="bg-[#fcfcfc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[40px] font-bold">
              <span className="text-[#5d50c6]">What We</span> <span className="text-[#b88a2b]">Offer</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">A safe, playful school where every child is known by name and learns at their own pace.</p>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { color: "bg-[#1eaaf1]", title: "Safety First", desc: "Gated compound, trained matrons, clean water and a nurse on call every school day." },
              { color: "bg-[#ffb400]", title: "Regular Classes", desc: "Daily lessons from Baby to P7 with homework support and weekly progress checks." },
              { color: "bg-[#5d50c6]", title: "Certified Teachers", desc: "Qualified early-years teachers who train each term and plan lessons around each child." },
              { color: "bg-[#8cc63f]", title: "Sufficient Classrooms", desc: "Bright, spacious rooms with small groups, low noise and plenty of learning corners." },
              { color: "bg-[#f55a3c]", title: "Creative Lessons", desc: "Art, music, clay and story time that build confidence, language and fine motor skills." },
              { color: "bg-[#1e6a8a]", title: "Sports Facilities", desc: "Large playground, garden games, football and a summer camp for strength and teamwork." },
            ].map((item: any, i: number) => (
              <div key={i} className="group text-center px-2 transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 md:w-[74px] md:h-[74px] ${item.color} rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${i % 2 === 0 ? 'animate-float' : 'animate-float-slow'}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3 className="font-medium text-[15px] mt-5 text-[#111827] group-hover:text-[#5d50c6] transition-colors">{item.title}</h3>
                <p className="text-[12px] text-gray-500 mt-2 leading-[1.6] max-w-[260px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. TEACHING MANNERS - STRETCHED + PARALLAX ===== */}
      <section className="relative w-full h-[220px] md:h-[360px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center md:justify-between justify-center gap-4 md:gap-8 text-center md:text-left">
          <div className="transition-transform duration-700 group-hover:translate-x-1">
            <h2 className="text-white text-[20px] sm:text-[22px] md:text-[28px] font-bold leading-tight">Teaching Your Child Some Good Manners</h2>
            <p className="text-white/80 text-[11px] md:text-[12px] mt-2 max-w-2xl mx-auto md:mx-0">Kindness, sharing and saying thank you are part of every lesson, from circle time to lunch.</p>
          </div>
          <a href="/courses" className="shrink-0 inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[12px] font-medium px-7 py-3 rounded-full transition-all hover:scale-110 hover:shadow-lg">Take a Course</a>
        </div>
      </section>

      {/* ===== 4. CERTIFIED TEACHERS - ZOOM CARDS ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[40px] font-bold"><span className="text-[#5d50c6]">Certified</span> <span className="text-[#b88a2b]">Teachers</span></h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">Every teacher is qualified in early-years education and keeps training each term.</p>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { name: "Bianca Wilson", role: "TEACHER", desc: "Leads our toddler group and loves messy art days.", img: "/teacher_bianca.jpg" },
              { name: "Mia Parker", role: "ENGLISH TEACHER", desc: "Teaches music and rhythm, guitar always at hand.", img: "/teacher_mia.jpg" },
              { name: "Stella Smith", role: "ART TEACHER", desc: "Our early reading specialist and story-time host.", img: "/teacher_stella.jpg" },
              { name: "Monica Henderson", role: "SCIENCE TEACHER", desc: "Runs sports, garden games and the summer camp.", img: "/teacher_monica.jpg" },
            ].map((t: any) => (
              <div key={t.name} className="group text-center">
                <div className="relative w-full h-[320px] md:h-[360px] bg-gray-100 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110" style={{ backgroundImage: `url('${t.img}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="mt-5 text-[15px] md:text-[16px] font-medium text-[#111827] group-hover:text-[#5d50c6] transition-colors">{t.name}</h4>
                <p className="mt-1 text-[10px] md:text-[11px] tracking-widest text-gray-500 font-medium">{t.role}</p>
                <p className="mt-3 text-[12px] text-gray-500 leading-[1.5] px-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. OUR COURSES - SLIDE + HOVER ===== */}
      <section className="bg-[#f9f9fb] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[40px] font-bold"><span className="text-[#5d50c6]">Our</span> <span className="text-[#b88a2b]">Courses</span></h2>
            <p className="text-gray-500 text-[13px] md:text-[14px] mt-3 max-w-2xl mx-auto">Small groups and hands-on lessons that follow each child's pace and curiosity.</p>
          </div>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Arts Lesson", time: "9:00am - 10am", desc: "Painting, clay and collage help children express ideas and train small hand muscles.", img: "/course_arts.jpg" },
              { title: "Language Lesson", time: "9:00am - 10am", desc: "Stories, rhymes and picture books build vocabulary and a love of reading.", img: "/course_language.jpg" },
              { title: "Music Lesson", time: "9:00am - 10am", desc: "Singing, rhythm games and simple instruments for listening and coordination.", img: "/course_music.jpg" },
              { title: "Sports Lesson", time: "9:00am - 10am", desc: "Running, balance and team games that build strength and fair play.", img: "/course_sports.jpg" },
            ].map((c: any) => (
              <div key={c.title} className="group flex bg-white border border-gray-100 overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="w-[38%] min-w-[38%] h-[180px] md:h-[200px] bg-gray-200 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('${c.img}')`}}></div>
                <div className="w-[62%] p-4 md:p-6 flex flex-col justify-center">
                  <h4 className="text-[#1e6a8a] font-bold text-[15px] md:text-[18px] group-hover:text-[#5d50c6] transition-colors">{c.title}</h4>
                  <p className="mt-2 text-[12px] md:text-[13px]"><span className="text-[#b88a2b] font-medium">Class time:</span> <span className="text-gray-800 font-semibold">{c.time}</span></p>
                  <p className="mt-3 text-[12px] md:text-[13px] text-gray-500 leading-[1.6]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. 20 YEARS - COUNT UP + ICON BOUNCE ===== */}
      <section ref={statsRef} className="relative bg-[#fbfbfd] py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[120px] bg-[url('/pencils-top.png')] bg-cover bg-top opacity-30 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[26px] md:text-[36px] font-bold"><span className="text-[#6c5ce7]">20 Years of</span> <span className="text-[#111827]">Experience</span></h2>
          <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">Two decades of helping children take their first confident steps into learning.</p>
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {[
              { n: 18, label: "Certified Teachers" },
              { n: 351, label: "Successful Kids" },
              { n: 564, label: "Happy Parents" },
              { n: 300, label: "Awards Won" },
            ].map((s: any, i: number) => (
              <div key={s.label} className={`text-center transition-all duration-700 ${countUp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay:`${i*0.15}s`}}>
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.3"><rect x="3" y="3" width="18" height="12" rx="1"/><path d="M8 15v3M12 15v3M5 18h14"/></svg>
                </div>
                <p className="text-[#1e6a8a] text-[32px] md:text-[40px] font-bold mt-3">{countUp ? s.n : 0}</p>
                <p className="text-gray-600 text-[11px] md:text-[12px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS - SHUFFLE + FADE EDGES ===== */}
      <section className="bg-[#fcfcfc] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[28px] md:text-[40px] font-bold"><span className="text-[#5d50c6]">What Parents</span> <span className="text-[#b88a2b]">Say About Us</span></h2>
          <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">What families say after a year with us, in their own words.</p>
          <div className="relative mt-14 md:mt-20 h-[240px] md:h-[200px] overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="flex transition-transform duration-[1000ms] ease-in-out will-change-transform" style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((t: any, i: number) => (
                  <div key={i} className="min-w-full flex justify-center px-4">
                    <div className="flex flex-col md:flex-row items-center gap-6 max-w-2xl">
                      <div className="shrink-0 w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden bg-gray-200 bg-cover bg-center shadow-md transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url('${t.img}')` }}></div>
                      <div className="relative text-left">
                        <div className="absolute -top-6 -left-2 text-[#e8e2f8] select-none pointer-events-none"><svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor"><text x="0" y="36" fontSize="50" fontWeight="900">“</text><text x="28" y="36" fontSize="50" fontWeight="900">”</text></svg></div>
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
            {testimonials.map((_: any, i: number) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-[#1eaaf1] scale-125" : "bg-gray-300 hover:bg-gray-400"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. PRICING - LIFT + SHADOW ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center"><h2 className="text-[28px] md:text-[36px] font-bold"><span className="text-[#5d50c6]">Our</span> <span className="text-[#b88a2b]">Pricing</span></h2></div>
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { name: "Baby Class", day: "UGX 250,000", board: "UGX 540,000 Boarding", img: "/pricing_baby.jpg", btn: "bg-[#1eaaf1] hover:bg-[#1590d0]", desc: "Half-day mornings for toddlers, with play, songs and a healthy snack." },
              { name: "Middle / Top", day: "UGX 250,000", board: "UGX 540,000 Boarding", img: "/pricing_middle.jpg", btn: "bg-[#ffb400] hover:bg-[#ffaa00]", desc: "Full school days with lessons, outdoor play, lunch and a rest time." },
              { name: "Primary P1-P5", day: "UGX 280k-320k", board: "UGX 560k-600k Boarding", img: "/pricing_p1p5.jpg", btn: "bg-[#8cc63f] hover:bg-[#7ab32e]", desc: "Full days plus after-school club, homework support and a monthly progress report." },
              { name: "Primary P6-P7", day: "UGX 350,000", board: "UGX 630,000 Boarding", img: "/pricing_p6p7.jpg", btn: "bg-[#f55a3c] hover:bg-[#e14a2c]", desc: "Our complete programme with extended hours, exam prep, and holiday camps." },
            ].map((p: any) => (
              <div key={p.name} className="group bg-[#f9fafb] text-center pb-6 flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="pt-6 pb-4 px-4">
                  <h4 className="text-[#111827] text-[16px] font-medium group-hover:text-[#5d50c6] transition-colors">{p.name}</h4>
                  <p className="mt-3"><span className="text-[#1e6a8a] text-[20px] font-extrabold">{p.day}</span><span className="text-gray-500 text-[11px]"> / term - Day</span></p>
                  <p className="text-[#111827] text-[12px] font-bold mt-1">{p.board}</p>
                </div>
                <div className="w-full h-[160px] bg-gray-200 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('${p.img}')`}}></div>
                <div className="px-4 pt-4 flex-1 flex flex-col">
                  <p className="text-gray-500 text-[12px] leading-[1.5]">{p.desc}</p>
                  <div className="mt-auto pt-6"><a href="/classes" className={`inline-flex items-center justify-center ${p.btn} text-black text-[12px] font-medium px-6 py-3 rounded-full transition-all hover:scale-105`}>Take A Course</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. BLOG - ZOOM + DATE POP ===== */}
      <section className="bg-[#fafafa] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[30px] md:text-[38px] font-bold"><span className="text-[#6c5ce7]">Recent</span> <span className="text-[#b88a2b]">Blog</span></h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">Tips, news and ideas for parents from our teachers and classrooms.</p>
          </div>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Skills To Develop Your Child's Memory", desc: "Simple games and daily routines that help young children remember more, from songs to picture cards.", img: "/blog_memory.jpg", date: "27", month: "January" },
              { title: "Why Play Is Serious Learning", desc: "Why short, playful lessons work better for four-year-olds than long sessions at a desk.", img: "/blog_play.jpg", date: "27", month: "January" },
              { title: "Rainy Day Activities At Home", desc: "Ideas for rainy days: quiet crafts and counting games you can set up at home in five minutes.", img: "/blog_rainy.jpg", date: "27", month: "January" },
            ].map((b: any) => (
              <div key={b.title} className="group bg-white overflow-hidden flex flex-col rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="relative w-full h-[240px] bg-gray-200 bg-cover bg-center overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110" style={{backgroundImage: `url('${b.img}')`}}></div>
                  <div className="absolute bottom-0 left-0 bg-[#5d50c6] text-white px-3 py-2 text-center min-w-[50px] transition-transform duration-300 group-hover:scale-110">
                    <p className="text-[14px] font-bold leading-none">{b.date}</p>
                    <p className="text-[10px] mt-1">{b.month}</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h4 className="text-[#111827] font-medium text-[14px] md:text-[15px] leading-[1.4] group-hover:text-[#5d50c6] transition-colors">{b.title}</h4>
                  <p className="text-gray-500 text-[12px] mt-3 leading-[1.6]">{b.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <a href="/blog" className="inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black text-[11px] font-medium px-4 py-2 rounded-full transition-all hover:scale-105">Read More →</a>
                    <div className="flex items-center gap-3 text-[11px]"><span className="text-[#1e6a8a]">Admin</span></div>
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