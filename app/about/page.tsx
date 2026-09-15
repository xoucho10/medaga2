export default function About() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">

      {/* HERO - ABOUT */}
      <section className="bg-[#0D4DA1] py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,203,5,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block bg-[#FFCB05] text-[#0D4DA1] text-[11px] font-black px-4 py-2 rounded-full mb-6">ABOUT FAIRWAY • EST. 2005</div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight">We Don't Just<br/><span className="text-[#FFCB05]">Teach, We Raise</span><br/>Winners</h1>
          <p className="text-blue-100/80 text-[15px] md:text-[17px] mt-6 max-w-2xl mx-auto leading-relaxed">From a small nursery in 2005 to 800+ pupils today - our story is about faith, discipline, and believing every child can win.</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-[#E30613] font-black text-[11px] tracking-[0.2em]">OUR STORY</p>
          <h2 className="text-[32px] md:text-[40px] font-black text-[#0D4DA1] leading-[0.95] mt-3 tracking-tight">20 Years of<br/>Emmitti Emmitto</h2>
          <div className="mt-8 space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p><b className="text-[#0D4DA1]">Fairway Nursery & Primary School</b> started in 2005 with 30 children under a mango tree in Iganga, with one mission: <b>Knowledge is Light (Emmitti Emmitto)</b>.</p>
            <p>Our founder, a born-again Christian teacher, believed that Busoga children deserve Kampala-quality education without leaving Iganga.</p>
            <p>Today we are <b>PPS/F/95</b> fully registered, UNEB examination center, with 800+ pupils, 35 qualified teachers, and both Day & Boarding facilities along Iganga-Jinja Highway.</p>
            <p><b>Winners Never Quit.</b></p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-[#F6F7F9] rounded-2xl p-4"><p className="font-black text-[#0D4DA1] text-xl">2005</p><p className="text-[10px] text-gray-500 font-bold mt-1">FOUNDED</p></div>
            <div className="bg-[#FFCB05] rounded-2xl p-4"><p className="font-black text-[#0D4DA1] text-xl">800+</p><p className="text-[10px] font-bold mt-1">PUPILS</p></div>
            <div className="bg-[#0D4DA1] rounded-2xl p-4 text-white"><p className="font-black text-xl">98%</p><p className="text-[10px] opacity-80 font-bold mt-1">PLE PASS</p></div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-[#0D4DA1] rounded-[24px] p-8 text-white">
            <h3 className="font-black text-lg">Our Mission</h3>
            <p className="text-[14px] text-blue-100 mt-3 leading-relaxed">To provide holistic, Christian-based quality education that nurtures academic excellence, discipline, and God-fearing leaders.</p>
          </div>
          <div className="bg-[#FFCB05] rounded-[24px] p-8 text-[#0D4DA1]">
            <h3 className="font-black text-lg">Our Vision</h3>
            <p className="text-[14px] mt-3 leading-relaxed font-medium">To be the leading primary school in Eastern Uganda producing winners who never quit.</p>
          </div>
          <div className="bg-white border-2 border-gray-100 rounded-[24px] p-8">
            <h3 className="font-black text-lg text-[#0D4DA1]">Our Motto</h3>
            <p className="text-[22px] font-black text-[#E30613] mt-2">EMMITTI EMMITTO</p>
            <p className="text-[13px] text-gray-500 mt-1">Knowledge is Light</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#F8F9FB] py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-[32px] font-black text-[#0D4DA1]">Our Core Values</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              {t:"God First", d:"Prayer and Christian morals daily.", c:"bg-[#0D4DA1] text-white"},
              {t:"Discipline", d:"Early, clean uniform, respect.", c:"bg-white"},
              {t:"Excellence", d:"Winners Never Quit - D1 aim.", c:"bg-[#FFCB05] text-[#0D4DA1]"},
              {t:"Community", d:"We serve Iganga with love.", c:"bg-white"},
            ].map((v,i)=>(
              <div key={i} className={`${v.c} p-7 rounded-[20px] shadow-sm`}>
                <h4 className="font-black text-[14px]">{v.t}</h4>
                <p className="text-[12.5px] mt-2 leading-relaxed opacity-80">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEADTEACHER */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="bg-white border border-gray-100 rounded-[28px] p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h3 className="text-[11px] font-black tracking-[0.2em] text-[#E30613]">MESSAGE FROM HEADTEACHER</h3>
          <p className="text-[18px] md:text-[20px] italic text-gray-700 leading-relaxed mt-4">"Dear Parent, thank you for considering Fairway. Your child will be safe, loved, disciplined, and taught by teachers who see teaching as a calling, not a job. We don't produce failures - we produce winners."</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0D4DA1] rounded-full"></div>
            <div>
              <p className="font-black text-[#0D4DA1] text-[14px]">Headteacher</p>
              <p className="text-[12px] text-gray-500">Fairway N&P School Iganga</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}