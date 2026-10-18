import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">

      {/* HERO - POLISHED */}
      <section className="bg-[#0D4DA1] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,203,5,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 items-center gap-10 relative">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-[#FFCB05] text-[#0D4DA1] text-[11px] font-black px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="w-2 h-2 bg-[#0D4DA1] rounded-full animate-pulse"></span>
              MIXED DAY & BOARDING | IGANGA | EST. 2005
            </div>
            <h2 className="text-[42px] md:text-[68px] font-black leading-[0.85] mb-6 tracking-[-0.02em]">
              NURTURING<br/>FUTURE<br/><span className="text-[#FFCB05] relative">WINNERS
              <span className="absolute bottom-1 left-0 w-full h-[10px] bg-[#E30613] -z-10"></span></span>
            </h2>
            <p className="text-blue-100/90 text-[15px] md:text-[17px] mb-8 max-w-[44ch] leading-relaxed">
              <b className="text-white">Emmitti Emmitto</b> — Knowledge is Light. Quality Christian-based education for Nursery to P.7 with safe, loving boarding.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/admissions" className="bg-[#E30613] px-8 py-4 rounded-full font-black text-[13px] shadow-xl hover:bg-red-700 transition">Admissions Open 2026 →</Link>
              <Link href="/gallery" className="bg-white text-[#0D4DA1] px-8 py-4 rounded-full font-black text-[13px] hover:bg-gray-100 transition">Virtual Tour</Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute w-[340px] h-[340px] md:w-[520px] md:h-[520px] bg-[#FFCB05]/20 rounded-full blur-3xl"></div>
            <img src="/kids.png" alt="Pupils" className="relative w-[340px] md:w-[580px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-8 md:-mt-10 relative z-20">
        {[
          {k:"800+", v:"Happy Pupils", c:"border-[#0D4DA1]"},
          {k:"20+", v:"Years of Excellence", c:"border-[#E30613]"},
          {k:"98%", v:"PLE Pass Rate 2024", c:"border-[#FFCB05]"},
          {k:"24/7", v:"Safe & Secure", c:"border-[#0D4DA1]"},
        ].map((s,i)=>(
          <div key={i} className={`bg-white p-6 rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border-t-[6px] ${s.c} text-center hover:-translate-y-1 transition`}>
            <h3 className="font-black text-[26px] text-[#0D4DA1]">{s.k}</h3>
            <p className="text-[11px] text-gray-500 font-bold mt-1.5 uppercase">{s.v}</p>
          </div>
        ))}
      </section>

      {/* WELCOME */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#E30613] font-black text-[11px] tracking-[0.2em] mb-4">WELCOME TO XXXXXXXX</p>
          <h3 className="text-[34px] md:text-[44px] font-black text-[#0D4DA1] leading-[0.95] mb-5">Where Winners Are<br/>Made, Not Born</h3>
          <p className="text-gray-600 text-[15.5px] leading-relaxed mb-4">At XXXXX Nursery & Primary School Iganga, we believe every child is a winner. Founded on Christian values and <b>Emmitti Emmitto</b>, we have nurtured thousands of leaders since 2005.</p>
          <p className="text-gray-600 text-[15.5px] leading-relaxed mb-8">Fully registered <b>PPS/F/95</b>, UNEB examination center, offering both Day and Boarding.</p>
          <Link href="/about" className="inline-block bg-[#0D4DA1] text-white px-6 py-3 rounded-full text-[13px] font-black hover:bg-blue-800 transition">Learn More About Us →</Link>
        </div>
        <div className="bg-[#F6F7F9] rounded-[28px] p-6 md:p-8">
          <div className="bg-white rounded-[20px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border-l-[6px] border-[#FFCB05]">
            <p className="text-[15px] italic text-gray-700 leading-relaxed">"Education is the most powerful weapon which you can use to change the world. At XXXXXXX, we light that fire."</p>
            <p className="mt-4 font-black text-[#0D4DA1] text-sm">Headteacher</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <Link href="/academics" className="bg-[#0D4DA1] text-white rounded-2xl p-4 shadow-lg hover:scale-105 transition"><p className="font-black text-sm">P.1-P.7</p><p className="text-[10px] opacity-80">Primary</p></Link>
            <Link href="/academics" className="bg-[#FFCB05] text-[#0D4DA1] rounded-2xl p-4 shadow-lg hover:scale-105 transition"><p className="font-black text-sm">Baby-Top</p><p className="text-[10px] opacity-80">Nursery</p></Link>
            <Link href="/admissions" className="bg-[#E30613] text-white rounded-2xl p-4 shadow-lg hover:scale-105 transition"><p className="font-black text-sm">Day/Board</p><p className="text-[10px] opacity-80">Both</p></Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#0D4DA1] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <h3 className="text-[32px] md:text-[40px] font-black text-white">Why Parents Choose Us</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {t:"Christian Discipline", d:"God-fearing values.", i:"✝️"},
              {t:"Qualified Teachers", d:"Experienced teachers.", i:"👩‍🏫"},
              {t:"Safe Boarding", d:"24/7 security & matrons.", i:"🏠"},
              {t:"UNEB Center", d:"PLE from home.", i:"📝"},
              {t:"Modern Learning", d:"Computer & science lab.", i:"💻"},
              {t:"Affordable Fees", d:"Quality you can afford.", i:"💰"},
            ].map((f,i)=>(
              <div key={i} className="bg-white p-7 rounded-[20px] shadow-xl">
                <div className="text-[22px] mb-3">{f.i}</div>
                <h4 className="font-black text-[#0D4DA1] text-[14px]">{f.t}</h4>
                <p className="text-[12.5px] text-gray-500 mt-2">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLE BANNER */}
      <section className="bg-[#FFCB05] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[#0D4DA1]">
          <div className="flex items-center gap-4">
            <div className="bg-[#0D4DA1] text-white px-4 py-2 rounded-full font-black text-[11px]">PLE 2024</div>
            <p className="font-black text-[15px]">98% Pass • 45 in D1, 78 in D2 • Winners Never Quit!</p>
          </div>
          <Link href="/academics" className="text-[11px] font-black underline">View Results →</Link>
        </div>
      </section>

      {/* ACADEMICS PREVIEW */}
      <section className="bg-[#F8F9FB] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-[34px] font-black text-[#0D4DA1]">Our Academic Programs</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/academics" className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#FFCB05] rounded-xl flex items-center justify-center font-black text-[#0D4DA1] mb-5">N</div>
              <h4 className="font-black text-[#0D4DA1]">Nursery Section</h4>
              <p className="text-[13.5px] text-gray-600 mt-2">Baby, Middle & Top Class.</p>
            </Link>
            <Link href="/academics" className="bg-white p-8 rounded-[20px] shadow-lg border-2 border-[#0D4DA1] block">
              <div className="w-12 h-12 bg-[#0D4DA1] rounded-xl flex items-center justify-center font-black text-white mb-5">P</div>
              <h4 className="font-black text-[#0D4DA1]">Primary P.1-P.7</h4>
              <p className="text-[13.5px] text-gray-600 mt-2">Competence-based curriculum, 98% pass.</p>
            </Link>
            <Link href="/admissions" className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#E30613] rounded-xl flex items-center justify-center font-black text-white mb-5">B</div>
              <h4 className="font-black text-[#0D4DA1]">Boarding Section</h4>
              <p className="text-[13.5px] text-gray-600 mt-2">Mixed boarding with matrons.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h3 className="text-[32px] font-black text-[#0D4DA1]">Life at XXXXX </h3>
          <Link href="/gallery" className="hidden md:block bg-gray-900 text-white px-6 py-2.5 rounded-full text-[13px] font-bold">View Full Gallery →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-[20px] h-44 md:h-56 flex items-center justify-center text-gray-400 font-bold text-xs">Classroom</div>
          <div className="bg-[#0D4DA1] rounded-[20px] h-44 md:h-56 flex items-center justify-center text-white font-bold text-xs">Assembly</div>
          <div className="bg-[#FFCB05] rounded-[20px] h-44 md:h-56 flex items-center justify-center text-[#0D4DA1] font-bold text-xs">Sports</div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <section className="bg-[#0D4DA1] py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
          <div>
            <h3 className="text-[26px] md:text-[30px] font-black text-[#0D4DA1]">Admissions Open for 2026!</h3>
            <p className="text-gray-600 mt-2 text-[13.5px]">Limited vacancies in Nursery & P.1-P.6. Interview every Saturday 8am-2pm.</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto min-w-[220px]">
            <Link href="/admissions" className="bg-[#E30613] text-white px-8 py-4 rounded-full font-black text-[13px] text-center">Apply Now →</Link>
            <Link href="/contact" className="bg-[#FFCB05] text-[#0D4DA1] px-8 py-4 rounded-full font-black text-[13px] text-center">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 bg-[#F6F7F9] p-4 md:p-6 rounded-[28px]">
            <div className="bg-white rounded-[20px] p-7 shadow-sm">
              <h4 className="font-black text-[#0D4DA1] mb-6">Our Location</h4>
              <p className="text-[12px] text-gray-500">P.O BOX 102 Iganga<br/>Along Jinja Road<br/>0782631761</p>
              <Link href="/contact" className="mt-6 block bg-[#0D4DA1] text-white text-center py-3 rounded-full font-bold text-[13px]">Full Contact Page →</Link>
            </div>
            <div className="md:col-span-2 bg-white rounded-[20px] overflow-hidden border">
              <iframe src="https://www.google.com/maps?q=XXXXX+Nursery+School+Iganga+Uganda&z=15&output=embed" width="100%" height="360" style={{ border: 0 }} loading="lazy" className="w-full h-[360px]"></iframe>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}