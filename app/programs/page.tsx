import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      badge: "Baby 3y",
      title: "Baby Class",
      age: "3 Years - Toilet Training Help",
      fee: "Day 250k / Board 540k",
      color: "border-t-[#FFCB05]",
      img: "/programs/baby.jpg",
      points: ["Play-based phonics & numbers", "Toilet training - we help patiently", "Social skills, sharing, manners", "Colorful building, kid-size toilets", "Play Area: merry-go-round, swings, sand pit", "Hand washing, supervised always"],
    },
    {
      badge: "Middle 4y",
      title: "Middle Class",
      age: "4 Years",
      fee: "Day 250k / Board 540k",
      color: "border-t-[#BF000A]",
      img: "/programs/middle.jpg",
      points: ["Early reading & writing", "Counting, art, music, dance", "Moral stories, God-fearing", "Social skills & confidence", "Nursery Section separate gate", "Merry-go-round & slide play"],
    },
    {
      badge: "Top 5y",
      title: "Top Class",
      age: "5 Years - Graduation",
      fee: "Day 250k / Board 540k",
      color: "border-t-green-500",
      img: "/programs/top.jpg",
      points: ["Reading fluency & writing", "P1 preparation program", "Graduation Day celebration", "Numbers & early science", "MDD - Music Dance Drama", "Fashion Show confidence building"],
    },
    {
      badge: "P1-P7",
      title: "Primary Section",
      age: "6-13 Years - UNEB",
      fee: "Day 280k-350k / Board 560k-630k",
      color: "border-t-[#141A33]",
      highlight: true,
      img: "/programs/primary.jpg",
      points: ["UNEB competence-based curriculum", "English, Math, Science, SST, RE", "Computer & Agriculture lessons", "Smart Pupils maroon sweater green skirt", "Basketball court brick paving inter-house", "PLE special - P7 Day 350k Board 630k NEXT YEAR", "We embrace Islam as well - hijab allowed, halal meals"],
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* BANNER */}
      <section className="relative h-[300px] md:h-[380px] bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#BF000A]/75"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-[10px] md:text-[12px] font-black tracking-[0.2em] opacity-90">HOME › PROGRAMS</p>
          <h1 className="text-[34px] md:text-[42px] lg:text-[52px] font-black mt-3 leading-[0.9]">Baby Class to P7</h1>
          <p className="text-[11px] md:text-[13px] mt-3 md:mt-4 opacity-90 max-w-xl mx-auto leading-5">Nursery colorful buildings blue/green/yellow/red + Primary maroon sweater green skirt • Kigulu Iganga • Day & Boarding</p>
        </div>
      </section>

      {/* TOP INFO PILLS */}
      <section className="bg-[#FFFBFB] border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-wrap gap-2 md:gap-3 text-[9px] md:text-[11px] font-black">
          <span className="bg-white border px-3 md:px-4 py-2 rounded-full">📍 Kigulu, Iganga - 3k Boda Town</span>
          <span className="bg-white border px-3 md:px-4 py-2 rounded-full">🚌 Van 100k-130k with Matron</span>
          <span className="bg-white border px-3 md:px-4 py-2 rounded-full">👕 Uniform Nursery 130k Primary 150k</span>
          <span className="bg-[#BF000A] text-white px-3 md:px-4 py-2 rounded-full">🎓 Admission FREE 2026</span>
          <span className="bg-[#141A33] text-white px-3 md:px-4 py-2 rounded-full">☪️ Islam Embraced - Halal Meals</span>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">OUR COURSES</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">Our Programs</h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-2">Baby to P7 - Play to UNEB excellence in Kigulu</p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {programs.map((p) => (
              <div key={p.title} className={`bg-white rounded-xl shadow-sm border-t-4 ${p.color} border border-gray-100 overflow-hidden hover:shadow-xl transition ${p.highlight ? "ring-2 ring-[#BF000A]/10 lg:scale-[1.02]" : ""}`}>
                <div className="h-[160px] md:h-[180px] bg-gray-100 border-b border-dashed flex items-center justify-center text-[10px] md:text-[11px] font-bold text-gray-400 text-center p-4">
                  {p.title}<br/>{p.img}
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] md:text-[10px] font-black bg-[#FFFBFB] text-[#BF000A] px-3 py-1 rounded-full border">{p.badge}</span>
                    {p.highlight && <span className="text-[8px] md:text-[9px] font-black bg-[#BF000A] text-white px-2 py-1 rounded-full">POPULAR</span>}
                  </div>
                  <h3 className="font-black text-[16px] md:text-[18px] mt-3">{p.title}</h3>
                  <p className="text-[10px] md:text-[11px] font-bold text-gray-500 mt-1">{p.age}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-[10px] md:text-[11px] text-gray-600 leading-[1.4]"><span className="text-[#BF000A] font-black">•</span>{pt}</li>
                    ))}
                  </ul>

                  <div className="mt-5 md:mt-6">
                    <div className="bg-[#141A33] text-white text-[10px] md:text-[11px] font-black px-4 py-2.5 rounded-full text-center">{p.fee}/term</div>
                    <Link href="/apply" className="mt-3 block bg-[#BF000A] text-white text-[10px] md:text-[11px] font-black px-4 py-2.5 rounded-full text-center hover:bg-[#8A0006]">Apply FREE 2026 →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMARY HIGHLIGHT */}
      <section className="bg-[#FFFBFB] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="bg-white p-2 rounded-xl shadow-lg border md:rotate-1 order-2 md:order-1">
            <div className="bg-gray-100 h-[280px] md:h-[360px] rounded-lg border-2 border-dashed flex items-center justify-center text-[10px] md:text-[11px] font-bold text-gray-400 text-center p-4 md:p-6">
              /public/primary-life.jpg<br/>Primary maroon sweater, basketball brick court, fashion show grey vests red bow ties
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">PRIMARY SECTION</span>
            <h2 className="text-[26px] md:text-[32px] font-black leading-[0.9] mt-3">P1-P7 UNEB<br/>Day & Boarding</h2>
            <p className="text-[12px] md:text-[13px] text-gray-600 mt-4 md:mt-5 leading-6">
              UNEB competence-based curriculum - English, Math, Science, SST, RE, Computer & Agriculture. 
              Smart pupils in maroon sweater, green skirts/shorts. Basketball court brick paving for inter-house sports.
              <strong> P7 Day 350k / Board 630k NEXT YEAR.</strong>
            </p>
            <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] md:text-[11px]">
              <div className="bg-white border rounded-lg p-3"><p className="font-black">☪️ Islam Embraced</p><p className="text-gray-500 mt-1">Hijab white top green skirt allowed, halal meals on request</p></div>
              <div className="bg-white border rounded-lg p-3"><p className="font-black">🍲 Boarding Meals</p><p className="text-gray-500 mt-1">Porridge break, posho beans veg meat twice, matron care</p></div>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/fees" className="bg-[#141A33] text-white px-6 py-3 rounded-full font-black text-[10px] md:text-[11px] text-center">View Full Fees</Link>
              <Link href="/apply" className="bg-[#BF000A] text-white px-6 py-3 rounded-full font-black text-[10px] md:text-[11px] text-center">Apply FREE 2026</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#BF000A] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <p className="font-black text-[11px] md:text-[12px] tracking-widest text-[#FFCB05]">INCLUSIVE EDUCATION</p>
            <p className="text-[12px] md:text-[13px] mt-3 opacity-90 leading-6">We embrace Islam as well - hijab allowed, halal meals for boarders on request, Muslim teachers, Ramadan respect. Christian & Muslim together in Kigulu, Iganga.</p>
          </div>
          <div>
            <p className="font-black text-[11px] md:text-[12px] tracking-widest text-[#FFCB05]">BOARDING LIFE</p>
            <p className="text-[12px] md:text-[13px] mt-3 opacity-90 leading-6">Casual wear evening, prep supervised, balanced diet posho beans veg meat twice, porridge break, hand washing, matron care. Safe Kigulu compound.</p>
          </div>
          <div>
            <p className="font-black text-[11px] md:text-[12px] tracking-widest text-[#FFCB05]">NEXT STEP</p>
            <p className="text-[11px] md:text-[12px] mt-3 opacity-80">Uniform Nursery 130k Primary 150k (2 sets + sweater + socks). Day & Boarding with casual wear.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/fees" className="bg-white text-[#BF000A] px-5 py-2.5 rounded-full text-[10px] md:text-[11px] font-black">View Fees</Link>
              <Link href="/apply" className="bg-[#141A33] text-white px-5 py-2.5 rounded-full text-[10px] md:text-[11px] font-black">Apply FREE</Link>
            </div>
            <p className="text-[9px] md:text-[10px] mt-3 opacity-60">📞 MTN 0782198528 • 3k Boda Iganga Town • Van 100k-130k</p>
          </div>
        </div>
      </section>
    </main>
  );
}