export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* PAGE BANNER */}
      <section className="relative h-[320px] md:h-[400px] bg-gray-100 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#BF000A]/70"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-[11px] md:text-[13px] font-black tracking-widest opacity-90">HOME <span className="mx-2">›</span> ABOUT MEDAG</p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-black mt-2 leading-[0.9]">About MEDAG<br/>Infant and Primary</h1>
          <p className="text-[11px] md:text-[13px] mt-3 opacity-90 font-bold px-4">Kigulu, Iganga District - 3k Boda from Iganga Town</p>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-[#FFFBFB] h-[240px] md:h-[340px] rounded-xl border-2 border-dashed flex items-center justify-center text-[10px] md:text-[11px] text-gray-400 text-center p-3 md:p-4">/public/about1.jpg<br/>Nursery colorful buildings blue/green/yellow/red</div>
              <div className="bg-[#FFFBFB] h-[240px] md:h-[340px] rounded-xl border-2 border-dashed flex items-center justify-center text-[10px] md:text-[11px] text-gray-400 text-center p-3 md:p-4 mt-6 md:mt-8">/public/about2.jpg<br/>Primary maroon sweater green skirt assembly</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">WHAT WE OFFER</span>
            <h2 className="text-[28px] md:text-[32px] lg:text-[38px] font-black leading-[0.9] mt-3">We Are MEDAG<br/>In Kigulu, Iganga District</h2>
            <p className="text-[13px] md:text-[14px] text-gray-600 mt-4 md:mt-6 leading-6 md:leading-7">
              <strong>MEDAG Infant and Primary School</strong> was founded to make a difference in education in Eastern Uganda. 
              We are located in <strong>Kigulu, Iganga District</strong> - easily accessible, just <strong>3,000 UGX boda</strong> from Iganga Town, 
              or our school van <strong>100k-130k with matron</strong> for safe daily transport.
            </p>
            <p className="text-[13px] md:text-[14px] text-gray-600 mt-3 md:mt-4 leading-6 md:leading-7">
              We are a mixed Day & Boarding school - Nursery to P7. Nursery has colorful buildings (blue, green, yellow, red) 
              with merry-go-round, swings and slide. Primary is in maroon sweaters with green skirts/shorts, grey vests and red bow ties for fashion shows.
              We <strong>embrace Islam as well</strong> - hijab allowed, halal meals served. Porridge for break, lunch is posho, beans, meat twice a week. 
              Christian pupils are also warmly welcome.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="bg-[#BF000A] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-black text-[11px] md:text-[12px] hover:bg-[#8A0006] text-center">Contact Us - MTN 0782198528</a>
              <a href="/programs" className="bg-white border-2 border-[#141A33] text-[#141A33] px-6 md:px-8 py-3 md:py-4 rounded-full font-black text-[11px] md:text-[12px] text-center">Our Programs</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#FFFBFB] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">WHAT WE OFFER</span>
            <h2 className="text-[28px] md:text-[34px] font-black mt-2">What We Offer at MEDAG</h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-2 max-w-2xl mx-auto px-4">Kigulu, Iganga - Safe, Islamic-friendly, excellent education with Day & Boarding.</p>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "🛡️", title: "Safety & Transport", desc: "Van 100k-130k with matron, 3k boda from Iganga Town. Safe Kigulu compound with supervised prep." },
              { icon: "📚", title: "Nursery & Primary", desc: "Nursery colorful play area + Primary P1-P7 Day & Boarding. Maroon & green uniform discipline." },
              { icon: "☪️", title: "Islam Embraced", desc: "Hijab allowed, halal meals. Porridge break + posho beans meat twice weekly. All faiths welcome." },
              { icon: "🏫", title: "Sufficient Facilities", desc: "Colorful nursery blocks, primary classrooms, boarding dorms, basketball court with brick paving." },
              { icon: "🎨", title: "Creative & MDD", desc: "Fashion shows grey vests red bow ties, traditional wear, MDD, talent development." },
              { icon: "🏀", title: "Sports Facilities", desc: "Brick-paved basketball court, football, nursery play area merry-go-round swings slide." },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 md:p-7 bg-white rounded-xl shadow-sm border">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#BF000A] rounded-full flex items-center justify-center mx-auto text-[20px] md:text-[26px] text-white">{item.icon}</div>
                <h3 className="font-black text-[14px] md:text-[16px] mt-4 md:mt-5">{item.title}</h3>
                <p className="text-[11px] md:text-[12px] text-gray-600 mt-2 md:mt-3 leading-5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-12 md:py-20 bg-[#BF000A]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-white">
          <div>
            <h2 className="text-[28px] md:text-[38px] font-black leading-[0.9]">Making A Difference In Kigulu Since Foundation</h2>
            <p className="text-[13px] md:text-[14px] mt-4 md:mt-6 opacity-90 leading-6 md:leading-7">
              MEDAG was built to make a difference in Kigulu, Iganga. We provide quality infant and primary education 
              with both Day and Boarding options. Our location is convenient - 3k boda from Iganga Town, van transport available.
            </p>
            <p className="text-[13px] md:text-[14px] mt-3 md:mt-4 opacity-90 leading-6 md:leading-7">
              We embrace Islam as well while welcoming all - hijab allowed, halal meals, with a disciplined environment 
              maroon sweaters, green skirts/shorts, and creative programs like fashion shows and MDD on our basketball court.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center border border-white/20">
              <p className="text-[30px] md:text-[38px] font-black">500+</p>
              <p className="text-[9px] md:text-[11px] font-black opacity-80 mt-1 tracking-widest">PUPILS ENROLLED</p>
              <p className="text-[9px] md:text-[10px] opacity-60">[REPLACE REAL NO]</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center border border-white/20">
              <p className="text-[30px] md:text-[38px] font-black">FREE</p>
              <p className="text-[9px] md:text-[11px] font-black opacity-80 mt-1 tracking-widest">ADMISSION 2026</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center border border-white/20">
              <p className="text-[30px] md:text-[38px] font-black">350k</p>
              <p className="text-[9px] md:text-[11px] font-black opacity-80 mt-1 tracking-widest">P7 DAY NEXT YEAR</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center border border-white/20">
              <p className="text-[30px] md:text-[38px] font-black">630k</p>
              <p className="text-[9px] md:text-[11px] font-black opacity-80 mt-1 tracking-widest">P7 BOARD NEXT YEAR</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">TESTIMONIAL</span>
            <h2 className="text-[26px] md:text-[34px] font-black mt-2">What Parents Say About MEDAG</h2>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#FFFBFB] border p-6 md:p-8 rounded-xl">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#BF000A]/10 rounded-full mx-auto flex items-center justify-center font-black text-[#BF000A]">A</div>
              <p className="text-[12px] md:text-[13px] text-gray-600 mt-4 md:mt-6 text-center leading-6">"Safe transport with matron, van 100k-130k. My child loves the colorful nursery and merry-go-round. Kigulu is near town, 3k boda only."</p>
              <h4 className="font-black text-center mt-4 text-[13px] md:text-[14px]">Parent - Iganga Town</h4>
              <p className="text-[#BF000A] text-[9px] md:text-[10px] font-black tracking-widest text-center mt-1">NURSERY PARENT</p>
            </div>
            <div className="bg-[#FFFBFB] border p-6 md:p-8 rounded-xl">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#BF000A]/10 rounded-full mx-auto flex items-center justify-center font-black text-[#BF000A]">M</div>
              <p className="text-[12px] md:text-[13px] text-gray-600 mt-4 md:mt-6 text-center leading-6">"We embrace Islam - hijab allowed, halal meals. My children eat posho beans meat twice a week, porridge break. Very disciplined."</p>
              <h4 className="font-black text-center mt-4 text-[13px] md:text-[14px]">Parent - Kigulu</h4>
              <p className="text-[#BF000A] text-[9px] md:text-[10px] font-black tracking-widest text-center mt-1">PRIMARY BOARDING</p>
            </div>
            <div className="bg-[#FFFBFB] border p-6 md:p-8 rounded-xl">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#BF000A]/10 rounded-full mx-auto flex items-center justify-center font-black text-[#BF000A]">K</div>
              <p className="text-[12px] md:text-[13px] text-gray-600 mt-4 md:mt-6 text-center leading-6">"Maroon sweater green uniform, fashion shows grey vests red bow ties, MDD. Basketball court brick paving, good sports."</p>
              <h4 className="font-black text-center mt-4 text-[13px] md:text-[14px]">Parent - Iganga District</h4>
              <p className="text-[#BF000A] text-[9px] md:text-[10px] font-black tracking-widest text-center mt-1">P7 PARENT</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="grid grid-cols-3 md:grid-cols-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="h-[100px] md:h-[140px] bg-gray-100 border border-white flex items-center justify-center text-[9px] md:text-[10px] font-bold text-gray-400 text-center p-2">MEDAG Gallery {i}<br/>/public/gallery{i}.jpg</div>
        ))}
      </section>
    </main>
  );
}