import Link from "next/link";

export default function TeachersPage() {
  const hierarchy = [
    {
      level: "01 - TOP MANAGEMENT",
      subtitle: "Vision & Overall Leadership - Making A Difference Kigulu",
      color: "bg-[#BF000A]",
      members: [
        { name: "[DIRECTOR FULL NAME]", role: "Director / Founder", tag: "FOUNDER", desc: "Founder & Vision bearer. Overall school ownership, strategy, Kigulu Iganga development. God-fearing leadership.", subjects: "Leadership • Vision • Community", exp: "Founder", img: "/teachers/director.jpg" },
        { name: "[HEADTEACHER NAME]", role: "Headteacher", tag: "HEADTEACHER", desc: "Overall administration, UNEB registration, PLE results, discipline maroon sweater green, teachers management, assembly.", subjects: "Admin • UNEB • PLE • Discipline", exp: "15+ Years", img: "/teachers/headteacher.jpg" },
        { name: "[DEPUTY NAME]", role: "Deputy Headteacher", tag: "DEPUTY", desc: "Deputy administration, timetabling, teachers supervision, assembly, stand-in for Headteacher, parents.", subjects: "Timetable • Supervision • Parents", exp: "10+ Years", img: "/teachers/deputy.jpg" },
      ]
    },
    {
      level: "02 - ADMINISTRATION & ACADEMICS",
      subtitle: "Day to Day Running - Curriculum, Fees, Admission",
      color: "bg-[#141A33]",
      members: [
        { name: "[DOS NAME]", role: "Director of Studies (DOS)", tag: "DOS", desc: "UNEB competence based curriculum P1-P7, syllabus coverage, exams, computer & agriculture, mock exams, lesson observation.", subjects: "Curriculum • UNEB • Exams", exp: "DOS", img: "/teachers/dos.jpg" },
        { name: "[BURSAR NAME]", role: "Bursar / Accounts", tag: "BURSAR", desc: "Fees: Day 250k-350k Board 540k-630k, van 100k-130k, uniform Nursery 130k Primary 150k, FREE admission 2026 receipts.", subjects: "Fees • Uniform • Van • Accounts", exp: "Accounts", img: "/teachers/bursar.jpg" },
        { name: "[SECRETARY NAME]", role: "Secretary / Registrar", tag: "REGISTRAR", desc: "Admission office, MTN 0782198528 WhatsApp, birth certificates, parent inquiries, files, communication.", subjects: "Admission • MTN 0782198528", exp: "Office", img: "/teachers/secretary.jpg" },
      ]
    },
    {
      level: "03 - NURSERY SECTION HEAD",
      subtitle: "Colorful Buildings Blue/Green/Yellow/Red - Separate Gate - Kid-size toilets",
      color: "bg-[#FFCB05] text-black",
      textDark: true,
      members: [
        { name: "[NURSERY HEAD NAME]", role: "Nursery Head - Baby/Middle/Top", tag: "NURSERY HEAD", desc: "Overall nursery - Baby 3y Middle 4y Top 5y, colorful buildings, toilet training help, merry-go-round swings slide sand pit.", subjects: "Baby • Middle • Top • Play", exp: "Nursery Lead", img: "/teachers/nursery-head.jpg" },
        { name: "[BABY CLASS TEACHER]", role: "Baby Class Teacher - 3 Years", tag: "BABY 3Y", desc: "3 Years - Phonics A-Z numbers 1-20 colors, toilet training patient help, social skills sharing manners, hand washing.", subjects: "Phonics • Numbers • Play", exp: "ECD", img: "/teachers/baby.jpg" },
        { name: "[MIDDLE TEACHER]", role: "Middle Class Teacher - 4 Years", tag: "MIDDLE 4Y", desc: "4 Years - Early reading writing counting 1-50, art music dance, moral stories God-fearing, confidence.", subjects: "Reading • Writing • Art", exp: "ECD", img: "/teachers/middle.jpg" },
        { name: "[TOP TEACHER]", role: "Top Class Teacher - 5 Years", tag: "TOP 5Y", desc: "5 Years - Reading fluency writing, P1 preparation, numbers early science, graduation day, MDD fashion show.", subjects: "P1 Prep • Graduation • MDD", exp: "ECD", img: "/teachers/top.jpg" },
      ]
    },
    {
      level: "04 - PRIMARY LOWER - P1-P3",
      subtitle: "Foundation - Maroon Sweater Green Skirt/Shorts - Smart Pupils - Hand washing",
      color: "bg-[#25B1D1]",
      members: [
        { name: "[P1 TEACHER]", role: "P1 Class Teacher", tag: "P1", desc: "P1 - Foundation English Math reading fluency, maroon sweater green, assembly discipline, porridge break.", subjects: "English • Math • Reading", exp: "Primary", img: "/teachers/p1.jpg" },
        { name: "[P2 TEACHER]", role: "P2 Class Teacher", tag: "P2", desc: "P2 - UNEB competence English Math Science SST RE, computer intro, smart pupils, supervised prep.", subjects: "English • Math • Science", exp: "Primary", img: "/teachers/p2.jpg" },
        { name: "[P3 TEACHER]", role: "P3 Class Teacher", tag: "P3", desc: "P3 - UNEB, agriculture intro, English grammar Science SST, handwriting, Islam embraced hijab allowed.", subjects: "SST • Agriculture • RE", exp: "Primary", img: "/teachers/p3.jpg" },
      ]
    },
    {
      level: "05 - PRIMARY UPPER & PLE CANDIDATES",
      subtitle: "Intermediate to PLE - Basketball Brick Court - MDD - Fashion Show Grey Vests Red Bow Ties",
      color: "bg-[#1EA44A]",
      members: [
        { name: "[P4 TEACHER]", role: "P4 Class Teacher", tag: "P4", desc: "P4 - Math Science SST English deeper, agriculture practical farming plot, computer lessons.", subjects: "Science • Agriculture • SST", exp: "Upper", img: "/teachers/p4.jpg" },
        { name: "[P5 TEACHER]", role: "P5 Class Teacher", tag: "P5", desc: "P5 - Upper primary, pre-PLE concepts, computer practical, basketball brick court inter-house.", subjects: "Math • Science • Computer", exp: "Upper", img: "/teachers/p5.jpg" },
        { name: "[P6 TEACHER]", role: "P6 Class Teacher - Pre-PLE", tag: "P6", desc: "P6 - Pre-PLE preparation start, past papers introduction, career awareness, discipline.", subjects: "PLE Prep • Past Papers", exp: "PLE", img: "/teachers/p6.jpg" },
        { name: "[P7 LEAD TEACHER]", role: "P7 Lead - PLE Candidate Class", tag: "P7 LEAD - PLE", desc: "P7 Day 350k Board 630k NEXT YEAR - PLE intensive past papers, mock UNEB, special coaching night prep, Islam embraced hijab halal meals.", subjects: "PLE Intensive • Mock • Coaching", exp: "PLE Lead 10y+", img: "/teachers/p7.jpg" },
      ]
    },
    {
      level: "06 - BOARDING, WELFARE & SUPPORT",
      subtitle: "Matron Care - Van 100k-130k with Matron - Halal Meals - Safe Kigulu Compound",
      color: "bg-[#8A2BE2]",
      members: [
        { name: "[MATRON NAME]", role: "Matron - Boarding & Transport", tag: "MATRON", desc: "Boarding dorms boys/girls separate, casual wear evening, matron care 24/7, van 100k-130k with matron safe routes, porridge break.", subjects: "Boarding • Van • Care", exp: "Matron", img: "/teachers/matron.jpg" },
        { name: "[PATRON / ISLAM TEACHER]", role: "Patron & Islam Teacher", tag: "PATRON - ISLAM", desc: "We embrace Islam as well - hijab allowed white top green skirt, halal meals, Muslim teachers, Ramadan respect, prayer, all faiths welcome.", subjects: "Islam • CRE • Discipline", exp: "Patron", img: "/teachers/patron.jpg" },
        { name: "[COOK NAME]", role: "Head Cook - Meals", tag: "COOK", desc: "Halal meals separate, porridge break & lunch posho beans greens meat twice weekly, balanced diet, clean kitchen.", subjects: "Meals • Halal • Nutrition", exp: "Cook", img: "/teachers/cook.jpg" },
        { name: "[GROUNDS / SECURITY]", role: "Grounds & Security", tag: "SUPPORT", desc: "Safe fenced compound Kigulu, basketball brick court maintenance, colorful buildings, play area merry-go-round security.", subjects: "Security • Maintenance", exp: "Support", img: "/teachers/security.jpg" },
      ]
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* BANNER */}
      <section className="relative h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#BF000A]/75"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-[9px] md:text-[11px] font-black tracking-[0.2em] bg-white/20 inline-block px-4 py-2 rounded-full">HOME › TEACHERS HIERARCHY</p>
          <h1 className="text-[32px] md:text-[40px] lg:text-[54px] font-black mt-4 leading-[0.9]">Our Teachers<br/>Full Hierarchy</h1>
          <p className="text-[11px] md:text-[13px] mt-3 md:mt-4 opacity-90 max-w-2xl mx-auto leading-5">Director → Headteacher → Deputy → DOS → Bursar → Nursery → Primary → P7 PLE → Matron - Kigulu Iganga - Editable names</p>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="bg-[#FFFBFB] border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-wrap gap-2 text-[9px] md:text-[11px] font-black">
          <span className="bg-white border px-3 md:px-4 py-2 rounded-full">👥 {hierarchy.reduce((a,b)=>a+b.members.length,0)} Positions - Edit [NAME]</span>
          <span className="bg-[#BF000A] text-white px-3 md:px-4 py-2 rounded-full">6 Levels - Top to Support</span>
          <span className="bg-[#141A33] text-white px-3 md:px-4 py-2 rounded-full">📍 Kigulu Iganga - MTN 0782198528</span>
          <span className="bg-[#FFCB05] text-black px-3 md:px-4 py-2 rounded-full">Put photos in /public/teachers/</span>
        </div>
      </section>

      {/* HIERARCHY FLOW */}
      <section className="bg-[#141A33] text-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="font-black text-[10px] md:text-[12px] tracking-[0.2em] opacity-60">SCHOOL HIERARCHY FLOW</h3>
          <div className="mt-4 md:mt-6 flex flex-wrap gap-2 text-[9px] md:text-[10px] font-black items-center">
            <span className="bg-[#BF000A] px-3 py-2 rounded-full">DIRECTOR</span>
            <span>→</span>
            <span className="bg-white text-black px-3 py-2 rounded-full">HEADTEACHER</span>
            <span>→</span>
            <span className="bg-white/20 px-3 py-2 rounded-full">DEPUTY</span>
            <span>→</span>
            <span className="bg-white/20 px-3 py-2 rounded-full">DOS + BURSAR + SECRETARY</span>
            <span>→</span>
            <span className="bg-[#FFCB05] text-black px-3 py-2 rounded-full">NURSERY HEAD</span>
            <span>→</span>
            <span className="bg-[#25B1D1] px-3 py-2 rounded-full">P1-P3</span>
            <span>→</span>
            <span className="bg-[#1EA44A] px-3 py-2 rounded-full">P4-P7 PLE</span>
            <span>→</span>
            <span className="bg-[#8A2BE2] px-3 py-2 rounded-full">MATRON & PATRON</span>
          </div>
        </div>
      </section>

      {/* TEACHERS GRID */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12 md:space-y-20">
          {hierarchy.map((group) => (
            <div key={group.level}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 border-b pb-4">
                <span className={`${group.color} ${group.textDark ? "" : "text-white"} px-4 md:px-5 py-2 rounded-full text-[10px] md:text-[11px] font-black tracking-widest`}>{group.level}</span>
                <span className="text-[10px] md:text-[11px] text-gray-500 font-bold leading-4">{group.subtitle}</span>
              </div>
              
              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {group.members.map((m) => (
                  <div key={m.role} className="group bg-white border rounded-[16px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition hover:-translate-y-1">
                    <div className="h-[240px] md:h-[260px] bg-gray-50 border-b-2 border-dashed flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-[#BF000A]/10 rounded-full flex items-center justify-center text-[24px] md:text-[28px] shadow-sm">👩‍🏫</div>
                      <p className="text-[8px] md:text-[9px] font-black text-gray-400 mt-3 max-w-[180px] truncate">{m.img}</p>
                      <span className="mt-2 text-[8px] md:text-[9px] font-black bg-[#141A33] text-white px-2.5 py-1 rounded-full">{m.tag}</span>
                      <span className="absolute top-3 right-3 bg-white border text-[8px] md:text-[9px] font-bold px-2 py-1 rounded-full">{m.exp}</span>
                    </div>
                    <div className="p-4 md:p-5">
                      <h4 className="font-black text-[13px] md:text-[14px] leading-tight">{m.name}</h4>
                      <p className="text-[#BF000A] text-[9px] md:text-[10px] font-black tracking-widest mt-1.5">{m.role}</p>
                      <p className="text-gray-600 text-[10px] md:text-[11px] mt-2 md:mt-3 leading-[1.6]">{m.desc}</p>
                      <div className="mt-3 md:mt-4 bg-[#FFFBFB] border rounded-lg p-2.5">
                        <p className="text-[8px] md:text-[9px] font-black tracking-widest opacity-60">TEACHES / HANDLES</p>
                        <p className="text-[9px] md:text-[10px] font-bold mt-1">{m.subjects}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO EDIT */}
      <section className="bg-[#FFFBFB] border-y py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border rounded-xl p-4 md:p-5">
            <h4 className="font-black text-[11px] md:text-[12px]">HOW TO EDIT NAMES</h4>
            <p className="text-[10px] md:text-[11px] text-gray-600 mt-2 leading-5">Find <code className="bg-gray-100 px-1 rounded">[DIRECTOR FULL NAME]</code> etc in code. Replace with real name. Eg: <code className="bg-gray-100 px-1 rounded">Mr. John M. - Director</code></p>
          </div>
          <div className="bg-white border rounded-xl p-4 md:p-5">
            <h4 className="font-black text-[11px] md:text-[12px]">ADD PHOTOS</h4>
            <p className="text-[10px] md:text-[11px] text-gray-600 mt-2 leading-5">Put photos in <code className="bg-gray-100 px-1 rounded">public/teachers/</code> named like <code className="bg-gray-100 px-1 rounded">director.jpg</code>. Replace placeholder div with <code className="bg-gray-100 px-1 rounded">img tag</code></p>
          </div>
          <div className="bg-[#BF000A] text-white rounded-xl p-4 md:p-5">
            <h4 className="font-black text-[11px] md:text-[12px] text-[#FFCB05]">HIERARCHY ORDER - KIGULU</h4>
            <p className="text-[10px] md:text-[11px] mt-2 leading-5 opacity-90">Director → Head → Deputy → DOS/Bursar/Secretary → Nursery Head (Baby/Middle/Top) → P1-P3 → P4-P7 PLE Lead → Matron/Patron/Cook/Security. Islam embraced at all levels.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-white text-center px-4">
        <h3 className="font-black text-[18px] md:text-[20px]">Want to join MEDAG teaching staff?</h3>
        <p className="text-[11px] md:text-[12px] text-gray-500 mt-2">Kigulu Iganga - Day & Boarding - Baby to P7 - MTN 0782198528 - Admission FREE 2026</p>
        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/contact" className="bg-[#BF000A] text-white px-7 py-3 rounded-full font-black text-[11px]">Contact Headteacher →</Link>
          <Link href="/apply" className="bg-[#141A33] text-white px-7 py-3 rounded-full font-black text-[11px]">Apply for Admission</Link>
        </div>
      </section>
    </main>
  );
}