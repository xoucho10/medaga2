import Link from "next/link";

export default function Academics() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">

      {/* HERO */}
      <section className="bg-[#0D4DA1] py-20 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-block bg-[#FFCB05] text-[#0D4DA1] text-[11px] font-black px-4 py-2 rounded-full mb-5">ACADEMICS • UNEB CENTER</div>
            <h1 className="text-4xl md:text-[56px] font-black text-white leading-[0.9]">From ABC to<br/><span className="text-[#FFCB05]">PLE Division 1</span></h1>
            <p className="text-blue-100/90 text-[15px] mt-6 leading-relaxed max-w-xl">CBC, UNEB prep, computer, science & Christian values. We don't just pass, we excel.</p>
            <div className="mt-8 flex gap-3">
              <Link href="/admissions" className="bg-[#E30613] text-white px-7 py-3.5 rounded-full font-black text-[13px]">Admit My Child →</Link>
              <div className="bg-white/10 text-white px-5 py-3.5 rounded-full font-bold text-[12px]">98% PLE Pass</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-[20px] text-center"><p className="text-3xl font-black text-[#0D4DA1]">P.1-P.7</p><p className="text-[11px] font-bold text-gray-500">PRIMARY</p></div>
            <div className="bg-[#FFCB05] p-6 rounded-[20px] text-center"><p className="text-3xl font-black text-[#0D4DA1]">Baby-Top</p><p className="text-[11px] font-bold">NURSERY</p></div>
            <div className="bg-[#E30613] p-6 rounded-[20px] text-center text-white"><p className="text-3xl font-black">45</p><p className="text-[11px] font-bold">DIVISION 1 (2024)</p></div>
            <div className="bg-white p-6 rounded-[20px] text-center"><p className="text-3xl font-black text-[#0D4DA1]">35</p><p className="text-[11px] font-bold text-gray-500">TEACHERS</p></div>
          </div>
        </div>
      </section>

      {/* PRIMARY DETAILS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-gray-100 rounded-[20px] p-7">
            <h4 className="font-black text-[#0D4DA1]">Lower P.1-P.3</h4>
            <p className="text-[12px] font-bold text-[#E30613] mt-1">Ages 6-9</p>
            <ul className="mt-4 space-y-2 text-[13px] text-gray-600"><li>• English, Maths, Science, SST</li><li>• Reading, Writing, CRE</li><li>• Small classes, mother care</li></ul>
          </div>
          <div className="bg-[#0D4DA1] rounded-[20px] p-7 text-white shadow-xl">
            <h4 className="font-black">Middle P.4-P.5</h4>
            <p className="text-[12px] font-bold text-[#FFCB05] mt-1">Ages 9-11</p>
            <ul className="mt-4 space-y-2 text-[13px] text-blue-100"><li>• All 4 core + Computer</li><li>• Agriculture, Art & Tech</li><li>• Clubs: Debate, Scouts</li></ul>
          </div>
          <div className="border-2 border-[#E30613]/20 rounded-[20px] p-7">
            <h4 className="font-black text-[#0D4DA1]">Upper P.6-P.7</h4>
            <p className="text-[12px] font-bold text-[#E30613] mt-1">PLE Focus</p>
            <ul className="mt-4 space-y-2 text-[13px] text-gray-600"><li>• UNEB Past Papers</li><li>• Mock Exams monthly</li><li>• 6am-9pm prep</li></ul>
          </div>
        </div>
        <div className="mt-12 bg-[#08162e] rounded-[24px] p-8 text-white flex flex-col md:flex-row justify-between gap-6">
          <div><h3 className="text-[20px] font-black">PLE Performance 2024</h3><p className="text-gray-400 text-[12px] mt-1">UNEB Center - Verified</p></div>
          <div className="flex gap-3 text-center"><div className="bg-white/10 rounded-xl px-6 py-3"><p className="text-[10px] text-gray-400">D1</p><p className="font-black text-[#FFCB05]">45</p></div><div className="bg-white/10 rounded-xl px-6 py-3"><p className="text-[10px] text-gray-400">D2</p><p className="font-black">78</p></div><div className="bg-white/10 rounded-xl px-6 py-3"><p className="text-[10px] text-gray-400">PASS</p><p className="font-black">98%</p></div></div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#0D4DA1] rounded-[28px] p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
          <div><h3 className="text-[22px] font-black">Ready to Join XXXXXXX?</h3><p className="text-blue-200 text-[13px] mt-1">Interviews every Saturday 8am-2pm</p></div>
          <Link href="/admissions" className="bg-[#FFCB05] text-[#0D4DA1] px-8 py-4 rounded-full font-black text-[13px]">See Admission Requirements →</Link>
        </div>
      </section>

    </main>
  );
}