"use client";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const testimonials = [
    {
      initial: "A",
      name: "Parent - Iganga Town",
      role: "NURSERY PARENT",
      text: "Safe transport with matron, van 100k-130k. My child loves the colorful nursery and merry-go-round. Kigulu is near town, 3k boda only.",
    },
    {
      initial: "M",
      name: "Parent - Kigulu",
      role: "PRIMARY BOARDING",
      text: "We embrace Islam - hijab allowed, halal meals. My children eat posho beans meat twice a week, porridge break. Very disciplined.",
    },
    {
      initial: "K",
      name: "Parent - Iganga District",
      role: "P7 PARENT",
      text: "Maroon sweater green uniform, fashion shows grey vests red bow ties, MDD. Basketball court brick paving, good sports.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4000);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => {
      clearInterval(id);
      window.removeEventListener('scroll', onScroll);
    };
  }, [testimonials.length]);

  return (
    <main className="overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-fadeUp { animation: fadeUp 0.8s ease-out both; }
      `}</style>

      {/* ===== 1. HERO - PARALLAX + COOL EFFECT ===== */}
      <section className="relative h-[420px] md:h-[540px] overflow-hidden flex items-center justify-center">
        <div className={`absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center bg-gray-200 transition-transform duration-[2000ms] ${scrolled ? 'scale-110' : 'scale-100'}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fadeUp">
          <p className="text-[11px] md:text-[12px] font-medium tracking-widest opacity-80">HOME <span className="mx-2">›</span> ABOUT MEDAG</p>
          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] font-extrabold mt-3 leading-[1.1] drop-shadow-lg">
            About MEDAG<br/>Infant and Primary
          </h1>
          <p className="text-[12px] md:text-[15px] mt-4 opacity-90 max-w-xl mx-auto bg-white/10 backdrop-blur px-4 py-2 rounded-full inline-block">
            Kigulu, Iganga District - 3k Boda from Iganga Town
          </p>
        </div>
      </section>

      {/* ===== 2. WE ARE MEDAG - FLOATING BOXES ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4 items-start">
              <div className="group bg-[#e8f6fd] border border-[#1eaaf1]/20 rounded-2xl h-[300px] md:h-[380px] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden bg-cover bg-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{backgroundImage: "url('/about1.jpg')"}}>
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#1eaaf1]"></div>
                <div className="bg-white/95 rounded-xl p-4 backdrop-blur shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <div className="flex gap-1.5 justify-center mb-2">
                    <div className="w-5 h-5 rounded bg-[#1eaaf1]"></div>
                    <div className="w-5 h-5 rounded bg-[#8cc63f]"></div>
                    <div className="w-5 h-5 rounded bg-[#ffb400]"></div>
                    <div className="w-5 h-5 rounded bg-[#f55a3c]"></div>
                  </div>
                  <p className="text-[11px] text-[#1e6a8a] font-medium">Nursery colorful buildings<br/>blue / green / yellow / red</p>
                  <p className="text-[8px] text-gray-400 mt-1">/about1.jpg</p>
                </div>
              </div>
              <div className="group bg-[#fef3e2] border border-[#b88a2b]/20 rounded-2xl h-[300px] md:h-[380px] flex flex-col items-center justify-center text-center p-4 mt-8 relative overflow-hidden bg-cover bg-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-float" style={{backgroundImage: "url('/about2.jpg')"}}>
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#b88a2b]"></div>
                <div className="bg-white/95 rounded-xl p-4 backdrop-blur shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <p className="text-[11px] text-[#7a1a1a] font-medium">Primary maroon sweater<br/>green skirt assembly</p>
                  <p className="text-[8px] text-gray-400 mt-1">/about2.jpg</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1]">
              <span className="text-[#5d50c6]">We Are MEDAG</span><br/>
              <span className="text-[#b88a2b]">In Kigulu, Iganga District</span>
            </h2>
            <p className="text-[12px] md:text-[13px] text-gray-500 mt-5 leading-[1.7]">
              <strong className="text-[#111827]">MEDAG Infant and Primary School</strong> was founded to make a difference in education in Eastern Uganda. 
              We are located in <strong className="text-[#111827]">Kigulu, Iganga District</strong> - easily accessible, just <strong className="text-[#111827]">3,000 UGX boda</strong> from Iganga Town, 
              or our school van <strong className="text-[#111827]">100k-130k with matron</strong> for safe daily transport.
            </p>
            <p className="text-[12px] md:text-[13px] text-gray-500 mt-3 leading-[1.7]">
              We are a mixed Day & Boarding school - Nursery to P7. Nursery has colorful buildings (blue, green, yellow, red) 
              with merry-go-round, swings and slide. Primary is in maroon sweaters with green skirts/shorts, grey vests and red bow ties for fashion shows.
              We <strong className="text-[#111827]">embrace Islam as well</strong> - hijab allowed, halal meals served. Porridge for break, lunch is posho, beans, meat twice a week. 
              Christian pupils are also warmly welcome.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="inline-flex justify-center bg-[#ffb400] hover:bg-[#ffaa00] text-black px-7 py-3.5 rounded-full font-medium text-[12px] transition-all hover:scale-105 shadow-sm">Contact Us - MTN 0782198528</a>
              <a href="/programs" className="inline-flex justify-center bg-[#5d50c6] hover:bg-[#4a3fb8] text-white px-7 py-3.5 rounded-full font-medium text-[12px] transition-all hover:scale-105 shadow-sm">Our Programs</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. WHAT WE OFFER ===== */}
      <section className="bg-[#fcfcfc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-[28px] md:text-[40px] font-bold">
              <span className="text-[#5d50c6]">What We Offer</span> <span className="text-[#b88a2b]">at MEDAG</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-2xl mx-auto">Kigulu, Iganga - Safe, Islamic-friendly, excellent education with Day & Boarding.</p>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { color: "bg-[#1eaaf1]", title: "Safety & Transport", desc: "Van 100k-130k with matron, 3k boda from Iganga Town. Safe Kigulu compound with supervised prep." },
              { color: "bg-[#ffb400]", title: "Nursery & Primary", desc: "Nursery colorful play area + Primary P1-P7 Day & Boarding. Maroon & green uniform discipline." },
              { color: "bg-[#5d50c6]", title: "Islam Embraced", desc: "Hijab allowed, halal meals. Porridge break + posho beans meat twice weekly. All faiths welcome." },
              { color: "bg-[#8cc63f]", title: "Sufficient Facilities", desc: "Colorful nursery blocks, primary classrooms, boarding dorms, basketball court with brick paving." },
              { color: "bg-[#f55a3c]", title: "Creative & MDD", desc: "Fashion shows grey vests red bow ties, traditional wear, MDD, talent development." },
              { color: "bg-[#1e6a8a]", title: "Sports Facilities", desc: "Brick-paved basketball court, football, nursery play area merry-go-round swings slide." },
            ].map((item, i) => (
              <div key={i} className="group text-center px-2 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 md:w-[74px] md:h-[74px] ${item.color} rounded-full flex items-center justify-center mx-auto text-white text-[22px] shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}>
                  {i === 0 ? "🛡️" : i === 1 ? "📚" : i === 2 ? "☪️" : i === 3 ? "🏫" : i === 4 ? "🎨" : "🏀"}
                </div>
                <h3 className="font-medium text-[15px] mt-5 text-[#111827]">{item.title}</h3>
                <p className="text-[12px] text-gray-500 mt-2 leading-[1.6] max-w-[260px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. MAKING A DIFFERENCE - STRETCHED ===== */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_difference.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-white">
            <h2 className="text-[26px] md:text-[40px] font-bold leading-[1.1]">Making A Difference<br/>In Kigulu Since Foundation</h2>
            <p className="text-[12px] md:text-[13px] mt-5 opacity-80 leading-[1.7]">
              MEDAG was built to make a difference in Kigulu, Iganga. We provide quality infant and primary education 
              with both Day and Boarding options. Our location is convenient - 3k boda from Iganga Town, van transport available.
            </p>
            <a href="/admissions" className="mt-8 inline-flex bg-[#ffb400] hover:bg-[#ffaa00] text-black px-6 py-3 rounded-full text-[12px] font-medium transition-all hover:scale-105">Join MEDAG - Free Admission 2026</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "500+", label: "PUPILS ENROLLED" },
              { value: "FREE", label: "ADMISSION 2026" },
              { value: "350k", label: "P7 DAY NEXT YEAR" },
              { value: "630k", label: "P7 BOARD NEXT YEAR" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 md:p-7 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <p className="text-[#1e6a8a] text-[28px] md:text-[36px] font-bold">{s.value}</p>
                <p className="text-[10px] md:text-[11px] text-gray-500 mt-1 tracking-widest font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. TESTIMONIALS ===== */}
      <section className="bg-[#fcfcfc] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[28px] md:text-[40px] font-bold">
            <span className="text-[#5d50c6]">What Parents</span> <span className="text-[#b88a2b]">Say About MEDAG</span>
          </h2>
          <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 max-w-xl mx-auto">Real families from Iganga Town and Kigulu share their experience.</p>

          <div className="relative mt-14 md:mt-16 h-[240px] md:h-[200px] overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="flex transition-transform duration-[1000ms] ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full flex justify-center px-4">
                    <div className="flex flex-col md:flex-row items-center gap-6 max-w-2xl">
                      <div className="shrink-0 w-[72px] h-[72px] rounded-full bg-[#5d50c6] flex items-center justify-center text-white font-bold text-[18px] shadow-md">{t.initial}</div>
                      <div className="relative text-left">
                        <div className="absolute -top-6 -left-2 text-[#e8e2f8] select-none pointer-events-none">
                          <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor"><text x="0" y="36" fontSize="50" fontWeight="900">“</text><text x="28" y="36" fontSize="50" fontWeight="900">”</text></svg>
                        </div>
                        <p className="relative text-[13px] md:text-[14px] text-[#111827] leading-[1.6]">"{t.text}"</p>
                        <p className="mt-4 text-[13px] font-medium text-[#111827]">{t.name}</p>
                        <p className="mt-1 text-[10px] tracking-widest text-[#1e6a8a]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-[#fcfcfc] to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-[#fcfcfc] to-transparent"></div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-[#1eaaf1] scale-125" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. GALLERY - BIGGER + COOL EFFECTS ===== */}
      <section className="bg-white py-4">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 p-2 md:p-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group relative h-[180px] sm:h-[200px] md:h-[280px] lg:h-[300px] bg-gray-100 bg-cover bg-center overflow-hidden rounded-xl md:rounded-2xl cursor-pointer" style={{backgroundImage: `url('/gallery${i}.jpg')`}}>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[#5d50c6]/0 group-hover:bg-[#5d50c6]/30 transition-colors duration-500 mix-blend-multiply"></div>
                
                {/* Image zoom on hover */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110" style={{backgroundImage: `url('/gallery${i}.jpg')`}}></div>
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[11px] md:text-[12px] font-medium bg-black/30 backdrop-blur px-3 py-1.5 rounded-full inline-block">MEDAG Gallery {i}</p>
                </div>

                {/* Placeholder for empty */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                  <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] md:text-[11px] text-gray-600 shadow-sm">MEDAG Gallery {i}</span>
                </div>

                {/* Corner color accent */}
                <div className={`absolute top-0 left-0 w-12 h-12 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${i % 4 === 1 ? 'bg-[#1eaaf1]' : i % 4 === 2 ? 'bg-[#ffb400]' : i % 4 === 3 ? 'bg-[#8cc63f]' : 'bg-[#f55a3c]'}`}></div>
              </div>
            ))}
          </div>
          
          <div className="text-center py-6">
            <p className="text-[11px] text-gray-400">Real school photos will replace placeholders — hover to see cool zoom effect</p>
          </div>
        </div>
      </section>
    </main>
  );
}