import Link from "next/link";

export default function FacilitiesPage() {
  const facilities = [
    { icon: "🏫", title: "Nursery Colorful Buildings", desc: "Blue, green, yellow, red blocks - kid-friendly, bright, separate gate for safety", tag: "Nursery", color: "bg-[#BF000A]" },
    { icon: "🎠", title: "Play Area - Merry-Go-Round", desc: "Merry-go-round, swings, slide, sand pit - supervised play, soft ground", tag: "Play", color: "bg-[#FFCB05]" },
    { icon: "📚", title: "Primary Classrooms", desc: "Spacious P1-P7 classrooms, desks, blackboards, good ventilation, charts", tag: "Primary", color: "bg-[#141A33]" },
    { icon: "🏀", title: "Basketball Court - Brick Paving", desc: "Brick-paved court for basketball, inter-house sports, assembly", tag: "Sports", color: "bg-[#1EA44A]" },
    { icon: "🛏️", title: "Boarding Dormitories", desc: "Separate boys/girls dorms, matron care, casual wear evening, safe Kigulu compound", tag: "Boarding", color: "bg-[#25B1D1]" },
    { icon: "🍲", title: "Dining & Halal Meals", desc: "Porridge break + lunch posho, beans, meat twice weekly - halal meals on request", tag: "Meals", color: "bg-[#BF000A]" },
    { icon: "🚌", title: "Transport Van with Matron", desc: "100k-130k per term, matron in van, safe routes, 3k boda from Iganga Town option", tag: "Transport", color: "bg-[#8A2BE2]" },
    { icon: "🚻", title: "Kid-Size Toilets & Hand Washing", desc: "Nursery kid-size toilets, hand washing stations, hygiene training, clean", tag: "Hygiene", color: "bg-[#1EA44A]" },
    { icon: "🎨", title: "Fashion Show & MDD Stage", desc: "Grey vests, red bow ties fashion show, MDD music dance drama, traditional wear", tag: "Creative", color: "bg-[#FF6B35]" },
    { icon: "📖", title: "Library & Reading Corner", desc: "Story books, early readers, P1-P7 textbooks, reading culture", tag: "Academic", color: "bg-[#BF000A]" },
    { icon: "💧", title: "Safe Water & Compound", desc: "Clean water, safe fenced compound, supervised prep, secure gate", tag: "Safety", color: "bg-[#25B1D1]" },
    { icon: "☪️", title: "Prayer & Islam Friendly", desc: "Hijab allowed white top green skirt, prayer space, Ramadan respect, Muslim teachers", tag: "Inclusive", color: "bg-[#141A33]" },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* BANNER */}
      <section className="relative h-[300px] md:h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#BF000A]/75"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-[10px] md:text-[12px] font-black tracking-[0.2em] opacity-90">HOME › FACILITIES</p>
          <h1 className="text-[34px] md:text-[42px] lg:text-[52px] font-black mt-3 leading-[0.9]">Our Facilities</h1>
          <p className="text-[11px] md:text-[13px] mt-3 md:mt-4 opacity-90 max-w-2xl mx-auto leading-5">Kigulu, Iganga - Colorful nursery to boarding, brick basketball court to merry-go-round</p>
        </div>
      </section>

      {/* PILLS */}
      <section className="bg-[#FFFBFB] border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-wrap gap-2 text-[9px] md:text-[11px] font-black">
          <span className="bg-white border px-3 md:px-4 py-2 rounded-full">📍 Kigulu - 3k Boda Iganga Town</span>
          <span className="bg-white border px-3 md:px-4 py-2 rounded-full">🚌 Van 100k-130k with Matron</span>
          <span className="bg-[#BF000A] text-white px-3 md:px-4 py-2 rounded-full">12 Facilities - Editable</span>
          <span className="bg-[#141A33] text-white px-3 md:px-4 py-2 rounded-full">☪️ Halal Meals & Hijab Allowed</span>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">WHAT WE OFFER</span>
            <h2 className="text-[28px] md:text-[36px] font-black mt-2">MEDAG Facilities</h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] mt-2">Delete or edit any - all cards are same Kiddos concept</p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden group">
                <div className="p-5 md:p-7 text-center">
                  <div className={`w-14 h-14 md:w-16 md:h-16 ${f.color} rounded-full flex items-center justify-center mx-auto text-[20px] md:text-[26px] text-white`}>{f.icon}</div>
                  <span className="inline-block mt-3 md:mt-4 text-[8px] md:text-[9px] font-black bg-[#FFFBFB] border text-[#BF000A] px-2 py-1 rounded-full">{f.tag}</span>
                  <h3 className="font-black text-[13px] md:text-[14px] mt-2 md:mt-3 leading-tight">{f.title}</h3>
                  <p className="text-[10px] md:text-[11px] text-gray-600 mt-2 md:mt-3 leading-5">{f.desc}</p>
                </div>
                <div className="h-1 bg-gray-100 group-hover:bg-[#BF000A] transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#FFFBFB] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">PHOTO GALLERY</span>
            <h2 className="text-[26px] md:text-[32px] font-black mt-2">See Our Compound</h2>
          </div>
          <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "Nursery Colorful Buildings",
              "Merry-Go-Round Play Area",
              "Primary Maroon Uniform",
              "Basketball Brick Court",
              "Boarding Dorms",
              "Fashion Show Grey Vests",
              "MDD Traditional Wear",
              "Van with Matron",
            ].map((name, i) => (
              <div key={name} className="bg-white rounded-xl border-2 border-dashed h-[120px] md:h-[160px] flex flex-col items-center justify-center text-center p-2 md:p-3 hover:border-[#BF000A] transition">
                <span className="text-[8px] md:text-[10px] font-black text-gray-400">/public/facilities/{i+1}.jpg</span>
                <span className="text-[10px] md:text-[11px] font-bold text-gray-600 mt-2 leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#BF000A] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-white">
          <div>
            <h4 className="font-black text-[11px] md:text-[13px] tracking-widest text-[#FFCB05]">LOCATION</h4>
            <p className="text-[12px] md:text-[13px] mt-3 leading-6 opacity-90">Kigulu, Iganga District. 3k boda from Iganga Town. Van 100k-130k with matron. Safe fenced compound.</p>
          </div>
          <div>
            <h4 className="font-black text-[11px] md:text-[13px] tracking-widest text-[#FFCB05]">BOARDING LIFE</h4>
            <p className="text-[12px] md:text-[13px] mt-3 leading-6 opacity-90">Casual wear evening, matron care, porridge break, posho beans meat twice, halal meals, hand washing.</p>
          </div>
          <div>
            <h4 className="font-black text-[11px] md:text-[13px] tracking-widest text-[#FFCB05]">VISIT US</h4>
            <p className="text-[11px] md:text-[12px] mt-3 opacity-80">See nursery colorful buildings, merry-go-round, basketball brick court.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/apply" className="bg-white text-[#BF000A] px-5 py-2 rounded-full text-[10px] md:text-[11px] font-black">Apply FREE 2026</Link>
              <Link href="/contact" className="bg-[#141A33] text-white px-5 py-2 rounded-full text-[10px] md:text-[11px] font-black">Contact</Link>
            </div>
            <p className="text-[9px] md:text-[10px] mt-3 opacity-60">📞 MTN 0782198528</p>
          </div>
        </div>
      </section>
    </main>
  );
}