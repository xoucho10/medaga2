export default function GalleryPage() {
  const categories = ["All", "Nursery", "Primary", "Islam Embraced", "Fashion Show", "Sports", "Boarding", "Transport", "Events"];

  const gallery = [
    { id: 1, cat: "Nursery", title: "Colorful Buildings", sub: "Blue / Green / Yellow / Red blocks", color: "bg-blue-100", emoji: "🏫", file: "/gallery/nursery-building.jpg", desc: "Separate gate, kid-size toilets" },
    { id: 2, cat: "Nursery", title: "Play Area", sub: "Merry-go-round, Swings, Slide, Sand Pit", color: "bg-sky-100", emoji: "🛝", file: "/gallery/play-area.jpg", desc: "Supervised, soft ground" },
    { id: 3, cat: "Nursery", title: "Baby Class Activity", sub: "Phonics & Toilet Training Help", color: "bg-cyan-100", emoji: "🧸", file: "/gallery/baby-class.jpg", desc: "3 Years - Social skills" },
    { id: 4, cat: "Nursery", title: "Top Class Graduation", sub: "Graduation Day Celebration", color: "bg-indigo-100", emoji: "🎓", file: "/gallery/graduation.jpg", desc: "5 Years to P1" },
    { id: 5, cat: "Primary", title: "Smart Pupils Assembly", sub: "Maroon Sweater Green Skirt / Shorts", color: "bg-red-100", emoji: "🎓", file: "/gallery/assembly.jpg", desc: "Discipline & Smartness" },
    { id: 6, cat: "Primary", title: "P1-P3 Classroom", sub: "UNEB Competence Based", color: "bg-orange-100", emoji: "✏️", file: "/gallery/classroom-p1.jpg", desc: "English Math Science" },
    { id: 7, cat: "Primary", title: "P4-P5 Lessons", sub: "Computer & Agriculture", color: "bg-amber-100", emoji: "💻", file: "/gallery/computer.jpg", desc: "Practical learning" },
    { id: 8, cat: "Primary", title: "P7 PLE Candidates", sub: "P7 Day 350k Board 630k Next Year", color: "bg-[#FFCB05]/30", emoji: "🏆", file: "/gallery/p7.jpg", desc: "Special coaching" },
    { id: 9, cat: "Islam Embraced", title: "Hijab Allowed", sub: "White Top Green Skirt Hijab", color: "bg-green-100", emoji: "☪️", file: "/gallery/hijab.jpg", desc: "We embrace Islam as well" },
    { id: 10, cat: "Islam Embraced", title: "Halal Meals", sub: "Porridge Break + Posho Beans Meat Twice", color: "bg-emerald-100", emoji: "🍲", file: "/gallery/halal-meals.jpg", desc: "Muslim & Christian together" },
    { id: 11, cat: "Fashion Show", title: "Grey Vests Red Bow Ties", sub: "Ministers & Confidence", color: "bg-yellow-100", emoji: "👔", file: "/gallery/fashion-boy.jpg", desc: "Fashion Show Day" },
    { id: 12, cat: "Fashion Show", title: "Traditional Wear", sub: "MDD Music Dance Drama", color: "bg-lime-100", emoji: "💃", file: "/gallery/mdd.jpg", desc: "Culture & Talent" },
    { id: 13, cat: "Sports", title: "Basketball Brick Court", sub: "Inter-house Sports Day", color: "bg-orange-100", emoji: "🏀", file: "/gallery/basketball.jpg", desc: "Brick Paving Court" },
    { id: 14, cat: "Sports", title: "Football & Athletics", sub: "Field & Sports", color: "bg-green-100", emoji: "⚽", file: "/gallery/football.jpg", desc: "Sports facilities" },
    { id: 15, cat: "Boarding", title: "Dormitories", sub: "Matron Care - Casual Wear Evening", color: "bg-purple-100", emoji: "🛏️", file: "/gallery/dorm.jpg", desc: "Boys/Girls separate" },
    { id: 16, cat: "Boarding", title: "Prep & Dining", sub: "Supervised Prep - Balanced Diet", color: "bg-pink-100", emoji: "📖", file: "/gallery/dining.jpg", desc: "Safe compound" },
    { id: 17, cat: "Transport", title: "School Van", sub: "100k-130k with Matron", color: "bg-teal-100", emoji: "🚌", file: "/gallery/van.jpg", desc: "Safe routes" },
    { id: 18, cat: "Transport", title: "Kigulu Location", sub: "3k Boda from Iganga Town", color: "bg-slate-100", emoji: "📍", file: "/gallery/location.jpg", desc: "Kigulu Iganga District" },
    { id: 19, cat: "Events", title: "Parents Day", sub: "Parent Meeting", color: "bg-red-100", emoji: "👨‍👩‍👧", file: "/gallery/parents-day.jpg", desc: "Community" },
    { id: 20, cat: "Events", title: "Debate & Quiz", sub: "Inter-school", color: "bg-blue-100", emoji: "🎤", file: "/gallery/debate.jpg", desc: "Academics" },
    { id: 21, cat: "Events", title: "Ramadan & Prayers", sub: "Respect for All Faiths", color: "bg-green-100", emoji: "🕌", file: "/gallery/prayer.jpg", desc: "Inclusive" },
    { id: 22, cat: "Events", title: "Admission FREE 2026", sub: "Apply Now MTN 0782198528", color: "bg-[#BF000A]/10", emoji: "🎉", file: "/gallery/admission.jpg", desc: "Free admission" },
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      {/* BANNER */}
      <section className="relative h-[300px] md:h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#BF000A]/80"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-[9px] md:text-[11px] font-black tracking-[0.2em] bg-white/20 inline-block px-4 py-2 rounded-full">GALLERY - LIFE AT MEDAG</p>
          <h1 className="text-[32px] md:text-[42px] lg:text-[56px] font-black mt-4 leading-[0.9]">Our Colorful School</h1>
          <p className="text-[11px] md:text-[13px] mt-3 md:mt-4 opacity-90 max-w-2xl mx-auto">22 placeholders ready - Nursery colorful buildings to P7 350k/630k - Kigulu Iganga</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-[#FFFBFB] border-b sticky top-[64px] md:top-[72px] z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button key={cat} className={`whitespace-nowrap text-[10px] md:text-[11px] font-black px-4 md:px-5 py-2 md:py-2.5 rounded-full border transition shrink-0 ${cat === "All" ? "bg-[#BF000A] text-white border-[#BF000A]" : "bg-white text-gray-600 border-gray-200 hover:border-[#BF000A] hover:text-[#BF000A]"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#141A33] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><p className="text-[20px] md:text-[22px] font-black">22</p><p className="text-[9px] md:text-[10px] font-bold opacity-60 tracking-widest">GALLERY ITEMS</p></div>
          <div><p className="text-[20px] md:text-[22px] font-black">8</p><p className="text-[9px] md:text-[10px] font-bold opacity-60 tracking-widest">CATEGORIES</p></div>
          <div><p className="text-[20px] md:text-[22px] font-black">FREE</p><p className="text-[9px] md:text-[10px] font-bold opacity-60 tracking-widest">ADMISSION 2026</p></div>
          <div><p className="text-[20px] md:text-[22px] font-black">MTN</p><p className="text-[9px] md:text-[10px] font-bold opacity-60 tracking-widest">0782198528</p></div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {gallery.map((g) => (
            <div key={g.id} className="group bg-white rounded-[16px] md:rounded-[20px] border overflow-hidden hover:shadow-xl transition hover:-translate-y-1">
              <div className={`h-[170px] md:h-[190px] ${g.color} flex flex-col items-center justify-center relative overflow-hidden`}>
                <span className="text-[40px] md:text-[48px] group-hover:scale-110 transition duration-300">{g.emoji}</span>
                <span className="mt-2 text-[8px] md:text-[9px] font-black bg-white/90 px-3 py-1 rounded-full border">{g.cat}</span>
                <span className="absolute top-3 right-3 text-[8px] md:text-[9px] font-black bg-black/60 text-white px-2 py-1 rounded-full max-w-[120px] truncate">{g.id}. {g.file}</span>
                <div className="absolute inset-0 bg-[#BF000A]/0 group-hover:bg-[#BF000A]/20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white text-[#BF000A] w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black">+</span>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h4 className="font-black text-[12px] md:text-[13px] leading-tight">{g.title}</h4>
                <p className="text-[10px] md:text-[11px] text-[#BF000A] font-bold mt-1 leading-tight">{g.sub}</p>
                <p className="text-[9px] md:text-[10px] text-gray-500 mt-1">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-[#FFFBFB] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-[#BF000A] font-black text-[10px] md:text-[11px] tracking-[0.2em]">VIDEO TOUR</span>
            <h2 className="text-[24px] md:text-[30px] font-black mt-2">Life at MEDAG Kigulu</h2>
          </div>
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { title: "Nursery Tour - Colorful Buildings & Play Area", file: "/video/nursery-tour.mp4" },
              { title: "Primary & Basketball Court - Brick Paving", file: "/video/primary-tour.mp4" },
              { title: "Fashion Show Grey Vests Red Bow Ties & MDD", file: "/video/fashion-mdd.mp4" },
            ].map((v) => (
              <div key={v.title} className="bg-white border-2 border-dashed rounded-xl h-[180px] md:h-[200px] flex flex-col items-center justify-center p-4 text-center hover:border-[#BF000A] transition">
                <span className="text-[28px] md:text-[32px]">▶️</span>
                <p className="text-[11px] md:text-[12px] font-black mt-3 leading-tight">{v.title}</p>
                <p className="text-[9px] md:text-[10px] text-gray-400 mt-1">{v.file}</p>
                <p className="text-[8px] md:text-[9px] text-[#BF000A] font-bold mt-2">Replace with video or YouTube embed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO REPLACE GUIDE */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
        <div className="bg-[#141A33] rounded-[16px] md:rounded-[24px] p-5 md:p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-black text-[12px] md:text-[14px] text-[#FFCB05]">HOW TO ADD REAL PHOTOS</h3>
            <ul className="text-[10px] md:text-[11px] mt-3 opacity-80 leading-6 space-y-1">
              <li>1. Put photos in `public/gallery/` folder</li>
              <li>2. Replace emoji div with: img tag with object-cover</li>
              <li>3. File names in code: `g.file` - already mapped</li>
              <li>4. Keep 4:3 ratio for best look</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-[12px] md:text-[14px] text-[#FFCB05]">LIGHTBOX (KIDDOS STYLE)</h3>
            <ul className="text-[10px] md:text-[11px] mt-3 opacity-80 leading-6 space-y-1">
              <li>• Kiddos uses lightbox on click</li>
              <li>• Add: `npm i yet-another-react-lightbox`</li>
              <li>• Wrap gallery with Lightbox component</li>
              <li>• Hover shows + icon already added</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-[12px] md:text-[14px] text-[#FFCB05]">NEED PHOTOS?</h3>
            <p className="text-[10px] md:text-[11px] mt-3 opacity-80">Send via WhatsApp, we will compress & rename</p>
            <a href="https://wa.me/256782198528?text=Hello%20MEDAG%20I%20want%20to%20send%20gallery%20photos%20for%20website" className="inline-block mt-4 bg-[#BF000A] px-5 md:px-6 py-2.5 md:py-3 rounded-full font-black text-[10px] md:text-[11px]">Send Photos on WhatsApp →</a>
            <p className="text-[9px] md:text-[10px] mt-3 opacity-60">📍 Kigulu Iganga • Van 100k-130k • 3k Boda Town • MTN 0782198528</p>
          </div>
        </div>

        <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[10px] md:text-[11px]">
          <div className="bg-white border rounded-xl p-3 md:p-4"><b>📸 Must Have:</b> Nursery colorful, play area merry-go-round, assembly maroon, basketball brick</div>
          <div className="bg-white border rounded-xl p-3 md:p-4"><b>👔 Fashion:</b> Grey vests red bow ties, traditional wear, MDD, ministers</div>
          <div className="bg-white border rounded-xl p-3 md:p-4"><b>🚌 Transport:</b> Van with matron, location Kigulu, boda</div>
          <div className="bg-white border rounded-xl p-3 md:p-4"><b>🍲 Life:</b> Meals porridge posho beans meat twice, hijab halal, boarding dorms</div>
        </div>
      </section>
    </main>
  );
}