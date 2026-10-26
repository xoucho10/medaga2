import Link from "next/link";

export default function ClassesPage() {
  const classes = [
    {
      badge: "BABY 3Y",
      title: "Baby Class",
      age: "3 Years",
      time: "8:00am - 12:30pm",
      day: "250k",
      board: "540k",
      color: "border-t-[#FFCB05]",
      accent: "bg-[#FFCB05]",
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
      color: "border-t-[#BF000A]",
      accent: "bg-[#BF000A]",
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
      color: "border-t-green-500",
      accent: "bg-green-500",
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
      color: "border-t-[#25B1D1]",
      accent: "bg-[#25B1D1]",
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
      color: "border-t-[#8A2BE2]",
      accent: "bg-[#8A2BE2]",
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
      color: "border-t-[#141A33]",
      accent: "bg-[#141A33]",
      emoji: "🏆",
      highlight: true,
      focus: "PLE intensive - past papers UNEB competence, special coaching, career guidance, discipline",
      curriculum: ["PLE Past Papers", "UNEB Mock Exams", "Special Coaching", "Career Guidance", "Interview Skills", "Fashion Show & MDD"],
      uniform: "Primary 150k + P7 badge - maroon sweater special candidate",
      facility: "PLE special classes, basketball court break, MDD traditional wear, fashion show ministers, safe prep late",
      care: "We embrace Islam as well - hijab allowed halal meals, special meals for candidates, matron care, Islam teachers",
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* BANNER */}
      <section className="relative h-[300px] md:h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#BF000A]/75"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-[9px] md:text-[11px] font-black tracking-[0.2em] bg-white/20 inline-block px-4 py-2 rounded-full">CLASSES & FEES - BABY TO P7</p>
          <h1 className="text-[32px] md:text-[54px] font-black mt-4 leading-[0.9]">Baby Class to P7</h1>
          <p className="text-[11px] md:text-[13px] mt-3 opacity-90 max-w-2xl mx-auto">Day & Boarding - Fees included - Kigulu Iganga - FREE Admission 2026 - Van 100k-130k</p>
        </div>
      </section>

      {/* PILLS + FEES SUMMARY */}
      <section className="bg-[#FFFBFB] border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex flex-wrap gap-2 text-[9px] md:text-[11px] font-black">
            <span className="bg-[#BF000A] text-white px-3 md:px-4 py-2 rounded-full">🎓 Admission FREE 2026</span>
            <span className="bg-white border px-3 md:px-4 py-2 rounded-full">👕 Uniform Nursery 130k Primary 150k</span>
            <span className="bg-white border px-3 md:px-4 py-2 rounded-full">🚌 Van 100k-130k with Matron</span>
            <span className="bg-[#141A33] text-white px-3 md:px-4 py-2 rounded-full">📍 3k Boda Iganga Town</span>
          </div>
          {/* Quick Fees Table */}
          <div className="mt-4 overflow-x-auto rounded-xl border bg-white hidden md:block">
            <table className="w-full text-[11px]">
              <thead className="bg-[#141A33] text-white"><tr><th className="p-3 text-left">Class</th><th className="p-3 text-center">Day / Term</th><th className="p-3 text-center">Boarding / Term</th><th className="p-3 text-left">Uniform</th></tr></thead>
              <tbody className="divide-y">
                {classes.map(c => (
                  <tr key={c.title} className={c.highlight ? "bg-[#FFFBFB] font-black" : ""}>
                    <td className="p-3 font-bold">{c.title} - {c.age}</td>
                    <td className="p-3 text-center font-black text-[#BF000A]">{c.day}</td>
                    <td className="p-3 text-center font-bold">{c.board}</td>
                    <td className="p-3">{c.title.includes('Baby') || c.title.includes('Middle') || c.title.includes('Top') ? '130k' : '150k'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CLASSES WITH FEES */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">OUR COURSES & FEES</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">Full Class Details + Fees</h2>
            <p className="text-gray-500 text-[11px] md:text-[13px] mt-2">Each card shows focus, curriculum, uniform, facility, care, schedule + fees - one page only</p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {classes.map((c) => (
              <div key={c.title} className={`bg-white rounded-[16px] md:rounded-[20px] border shadow-sm border-t-4 ${c.color} overflow-hidden hover:shadow-xl transition ${c.highlight ? "lg:col-span-2 ring-2 ring-[#BF000A]/10" : ""}`}>
                <div className="p-5 md:p-7">
                  <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 md:w-12 md:h-12 ${c.accent} rounded-full flex items-center justify-center text-white text-[16px] md:text-[20px]`}>{c.emoji}</div>
                      <div>
                        <span className="text-[8px] md:text-[9px] font-black bg-[#FFFBFB] text-[#BF000A] px-2 py-1 rounded-full border">{c.badge}</span>
                        <h3 className="font-black text-[16px] md:text-[18px] leading-tight mt-1">{c.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-2 justify-end">
                        <span className="bg-[#FFFBFB] border text-[#BF000A] text-[9px] font-black px-2 py-1 rounded-full">DAY {c.day}</span>
                        <span className="bg-[#141A33] text-white text-[9px] font-black px-2 py-1 rounded-full">BOARD {c.board}</span>
                      </div>
                      <p className="text-[9px] font-bold text-gray-500 mt-1">⏰ {c.time} • {c.age}</p>
                    </div>
                  </div>

                  <p className="text-[11px] md:text-[12px] font-black text-[#BF000A] mt-4">{c.age} - {c.focus}</p>

                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div><p className="text-[9px] font-black tracking-widest">CURRICULUM</p><div className="flex flex-wrap gap-1 mt-1">{c.curriculum.map(i => <span key={i} className="text-[8px] bg-[#FFFBFB] border px-2 py-1 rounded-full font-bold">{i}</span>)}</div></div>
                      <div><p className="text-[9px] font-black tracking-widest">UNIFORM</p><p className="text-[10px] text-gray-600 mt-1">{c.uniform}</p></div>
                    </div>
                    <div className="space-y-3">
                      <div><p className="text-[9px] font-black tracking-widest">FACILITY</p><p className="text-[10px] text-gray-600 mt-1">{c.facility}</p></div>
                      <div><p className="text-[9px] font-black tracking-widest">CARE & MEALS</p><p className="text-[10px] text-gray-600 mt-1">{c.care}</p></div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <div className="bg-[#141A33] text-white text-[11px] font-black px-5 py-2.5 rounded-full">Fees: Day {c.day} / Board {c.board} / term</div>
                    <Link href="/apply" className="bg-[#BF000A] text-white text-[11px] font-black px-5 py-2.5 rounded-full">Apply FREE →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WHAT FEES INCLUDE */}
          <div className="mt-12 bg-[#FFFBFB] border rounded-xl p-5 md:p-7">
            <h3 className="font-black text-[13px]">What Fees Include + Extra</h3>
            <div className="mt-4 grid md:grid-cols-3 gap-3 text-[11px] text-gray-600">
              <p>• <b>Tuition:</b> UNEB competence English Math Science SST RE Computer Agriculture</p>
              <p>• <b>Meals:</b> Porridge break + posho beans greens meat twice - halal on request</p>
              <p>• <b>Boarding:</b> Dorms matron care casual wear evening supervised prep safe compound</p>
              <p>• <b>Uniform:</b> Nursery 130k Primary 150k (2 sets + sweater + socks) grey vests red bow ties functions</p>
              <p>• <b>Transport:</b> Van 100k-130k with matron - 3k boda Iganga Town option</p>
              <p>• <b>Admission:</b> FREE 2026 - birth certificate + photos only - MTN 0782198528</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}