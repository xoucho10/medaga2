export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== 1. HERO SLIDER ===== */}
      <section className="relative h-[70vh] md:h-[90vh] min-h-[500px] md:min-h-[650px] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-kiddos.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-black text-white leading-[0.85]">
              Kids Are The<br/>Best Explorers<br/>In The World
            </h1>
            <p className="text-white/90 text-[14px] md:text-[16px] mt-4 md:mt-6 max-w-md leading-6">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="/about" className="bg-[#BF000A] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-[13px] md:text-[14px] text-center">Read More</a>
              <a href="/contact" className="bg-white text-[#BF000A] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-[13px] md:text-[14px] text-center">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-3 h-3 bg-[#BF000A] rounded-full"></span>
          <span className="w-3 h-3 bg-white/50 rounded-full"></span>
        </div>
      </section>

      {/* ===== 2. WHAT WE OFFER ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-bold text-[11px] md:text-[14px] tracking-widest">WHAT WE OFFER</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">What We Offer</h2>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: "🛡️", color: "bg-[#1EA44A]", title: "Safety First", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
              { icon: "📚", color: "bg-[#BF000A]", title: "Regular Classes", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
              { icon: "👩‍🏫", color: "bg-[#25B1D1]", title: "Certified Teachers", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
              { icon: "🏫", color: "bg-[#FFD23F]", title: "Sufficient Classrooms", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
              { icon: "🎨", color: "bg-[#8A2BE2]", title: "Creative Lessons", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
              { icon: "⚽", color: "bg-[#1EA44A]", title: "Sports Facilities", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 md:p-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${item.color} rounded-full flex items-center justify-center mx-auto text-[22px] md:text-[28px] text-white`}>{item.icon}</div>
                <h3 className="font-bold text-[16px] md:text-[18px] mt-4 md:mt-5">{item.title}</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 mt-2 md:mt-3 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. TEACHING MANNERS ===== */}
      <section className="bg-[#F8F9FA] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-2 rounded-xl shadow-lg md:rotate-1">
              <div className="bg-gray-200 h-[280px] md:h-[380px] rounded-lg border-2 border-dashed flex items-center justify-center text-[11px] md:text-[12px] text-gray-400">Image - Teaching Good Manners</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[#BF000A] font-bold text-[11px] md:text-[13px] tracking-widest">LEARN ANYTHING</span>
            <h2 className="text-[28px] md:text-[34px] font-black leading-[0.95] mt-3">Teaching Your Child<br/>Some Good Manners</h2>
            <p className="text-[13px] md:text-[15px] text-gray-500 mt-4 md:mt-6 leading-6 md:leading-7">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div className="mt-6 md:mt-8">
              <a href="/about" className="bg-[#BF000A] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-[13px] md:text-[14px] inline-block">Take A Course</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. CERTIFIED TEACHERS ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-bold text-[11px] md:text-[14px] tracking-widest">CERTIFIED TEACHERS</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">Certified Teachers</h2>
            <p className="text-gray-500 text-[13px] md:text-[14px] mt-2 max-w-xl mx-auto">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="text-center group">
                <div className="h-[260px] md:h-[280px] bg-gray-100 rounded-xl overflow-hidden border-2 border-dashed flex items-center justify-center relative">
                  <span className="text-[11px] text-gray-400">Teacher {i} Image</span>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-3 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <span className="w-8 h-8 bg-[#BF000A] rounded-full"></span><span className="w-8 h-8 bg-[#BF000A] rounded-full"></span>
                  </div>
                </div>
                <h4 className="font-bold text-[16px] md:text-[18px] mt-4">Bianca Wilson</h4>
                <p className="text-[#BF000A] text-[11px] md:text-[12px] font-bold tracking-widest mt-1">TEACHER</p>
                <p className="text-gray-500 text-[12px] md:text-[13px] mt-2 md:mt-3">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. OUR COURSES ===== */}
      <section className="bg-[#F8F9FA] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-bold text-[11px] md:text-[14px] tracking-widest">OUR COURSES</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">Our Courses</h2>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Arts Lesson", time: "9:00am - 10am" },
              { title: "Language Lesson", time: "9:00am - 10am" },
              { title: "Music Lesson", time: "9:00am - 10am" },
              { title: "Sports Lesson", time: "9:00am - 10am" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-[180px] md:h-[200px] bg-gray-200 border-b-2 border-dashed flex items-center justify-center text-[11px] text-gray-400">{c.title} Image</div>
                <div className="p-4 md:p-6">
                  <h4 className="font-bold text-[15px] md:text-[16px]">{c.title}</h4>
                  <p className="text-[#BF000A] text-[11px] md:text-[12px] font-bold mt-1">{c.time}</p>
                  <p className="text-gray-500 text-[12px] md:text-[13px] mt-3 leading-5">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. 20 YEARS ===== */}
      <section className="relative py-12 md:py-20 bg-cover bg-center" style={{backgroundImage: "url('/bg_4.jpg')"}}>
        <div className="absolute inset-0 bg-[#BF000A]/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-white">
          <div>
            <h2 className="text-[30px] md:text-[40px] font-black leading-[0.9]">20 Years of Experience</h2>
            <p className="text-[13px] md:text-[15px] mt-4 md:mt-6 opacity-90 leading-6 md:leading-7">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p className="text-[13px] md:text-[15px] mt-3 md:mt-4 opacity-90 leading-6 md:leading-7">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { n: "18", l: "Certified Teachers" },
              { n: "351", l: "Successful Kids" },
              { n: "564", l: "Happy Parents" },
              { n: "300", l: "Awards Won" },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center border border-white/20">
                <p className="text-[32px] md:text-[42px] font-black">{s.n}</p>
                <p className="text-[11px] md:text-[13px] font-bold opacity-80 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-bold text-[11px] md:text-[14px] tracking-widest">TESTIMONIAL</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">What Parents Say About Us</h2>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-[#F8F9FA] p-6 md:p-8 rounded-xl relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full mx-auto border-2 border-dashed flex items-center justify-center text-[10px]">Parent {i}</div>
                <p className="text-[13px] md:text-[14px] text-gray-600 mt-4 md:mt-6 text-center leading-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h4 className="font-bold text-center mt-4">Racky Henderson</h4>
                <p className="text-[#BF000A] text-[10px] md:text-[11px] font-bold tracking-widest text-center mt-1">FATHER</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. PRICING ===== */}
      <section className="bg-[#F8F9FA] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-bold text-[11px] md:text-[14px] tracking-widest">OUR PRICING</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">Pricing</h2>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Basic", price: "$24.50", color: "border-t-[#1EA44A]" },
              { title: "Standard", price: "$34.50", color: "border-t-[#25B1D1]" },
              { title: "Premium", price: "$54.50", color: "border-t-[#BF000A]" },
              { title: "Platinum", price: "$89.50", color: "border-t-[#8A2BE2]" },
            ].map((p) => (
              <div key={p.title} className={`bg-white rounded-xl shadow-sm p-6 md:p-8 text-center border-t-4 ${p.color}`}>
                <h4 className="font-bold text-[15px] md:text-[16px]">{p.title}</h4>
                <p className="text-[36px] md:text-[40px] font-black text-[#BF000A] mt-3 md:mt-4">{p.price}</p>
                <p className="text-gray-400 text-[11px] md:text-[12px]">/ 5mos</p>
                <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-[12px] md:text-[13px] text-gray-600">
                  <li>Far far away, behind the word mountains</li>
                  <li>Vokalia and Consonantia</li>
                  <li>There live the blind texts</li>
                </ul>
                <a href="/fees" className="inline-block mt-4 md:mt-6 bg-[#BF000A] text-white px-6 py-3 rounded-full font-bold text-[12px] md:text-[13px]">Take A Course</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. BLOG ===== */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-bold text-[11px] md:text-[14px] tracking-widest">OUR BLOG</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">Recent Blog</h2>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border">
                <div className="h-[200px] md:h-[220px] bg-gray-200 border-b-2 border-dashed flex items-center justify-center text-[11px] text-gray-400">Blog Image {i}</div>
                <div className="p-4 md:p-6">
                  <div className="flex gap-3 md:gap-4 text-[10px] md:text-[11px] text-gray-400 font-bold">
                    <span>JAN 18, 2019</span><span>ADMIN</span><span>💬 3</span>
                  </div>
                  <h4 className="font-bold text-[16px] md:text-[18px] mt-3 leading-tight">Skills To Develop Your Child Memory</h4>
                  <p className="text-gray-500 text-[12px] md:text-[13px] mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}