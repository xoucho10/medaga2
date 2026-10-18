import Link from "next/link";

export default function Admissions() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">

      {/* HERO */}
      <section className="bg-[#E30613] py-14 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,203,5,0.2),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center relative text-white">
          <div>
            <div className="inline-block bg-white text-[#E30613] text-[10px] md:text-[11px] font-black px-4 py-2 rounded-full mb-5">ADMISSIONS OPEN 2026 • LIMITED VACANCIES</div>
            <h1 className="text-[36px] md:text-[56px] font-black leading-[0.9] tracking-tight">Join The<br/><span className="text-[#FFCB05]">Winners Family</span><br/>Today</h1>
            <p className="text-white/90 text-[14px] md:text-[15px] mt-6 leading-relaxed max-w-xl">Interviews every Saturday 8am-2pm at campus. No appointment needed. Bring child + requirements below.</p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/apply" className="bg-[#0D4DA1] text-white px-7 py-3.5 rounded-full font-black text-[13px] text-center shadow-lg">Apply Online Now →</Link>
              <a href="tel:0782631761" className="bg-white text-[#E30613] px-7 py-3.5 rounded-full font-black text-[13px] text-center">📞 0782631761</a>
              <a href="https://wa.me/256758735343" target="_blank" className="bg-[#FFCB05] text-[#0D4DA1] px-7 py-3.5 rounded-full font-black text-[13px] text-center">WhatsApp</a>
            </div>
          </div>
          <div className="bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-7 text-gray-800 shadow-xl">
            <h3 className="font-black text-[#0D4DA1]">Interview Days</h3>
            <p className="text-[13px] text-gray-500 mt-1">Every Saturday • 8:00am - 2:00pm</p>
            <div className="mt-6 space-y-3 text-[13px]">
              <div className="flex justify-between bg-[#F8F9FB] p-3 rounded-xl"><span className="font-bold">Venue</span><span className="text-gray-500 text-right">Main Campus, Jinja Rd</span></div>
              <div className="flex justify-between bg-[#F8F9FB] p-3 rounded-xl"><span className="font-bold">Time</span><span className="text-gray-500">8am-2pm</span></div>
              <div className="flex justify-between bg-[#0D4DA1] text-white p-3 rounded-xl"><span className="font-bold">Fee</span><span>NO INTERVIEW FEE</span></div>
            </div>
            <p className="text-[11px] text-gray-400 mt-4">P.O BOX 102 Iganga • Reg: PPS/F/95 • Along Iganga-Jinja Highway</p>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-[24px] md:text-[28px] font-black text-[#0D4DA1]">Admission Requirements</h2>
          <p className="text-[13px] text-gray-500 mt-2">Bring these on interview day. Child must come with parent/guardian.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-[#F8F9FB] p-6 rounded-[20px]">
              <h4 className="font-black text-[14px] text-[#0D4DA1]">1. For Nursery (Baby-Top)</h4>
              <ul className="mt-3 space-y-2 text-[13px] text-gray-600">
                <li>✅ Birth Certificate / Immunization Card</li>
                <li>✅ 2 Passport Photos (child)</li>
                <li>✅ Parent ID Copy</li>
                <li>✅ Must be 3 years+ for Baby</li>
              </ul>
            </div>
            <div className="bg-[#F8F9FB] p-6 rounded-[20px]">
              <h4 className="font-black text-[14px] text-[#0D4DA1]">2. For Primary P.1-P.7</h4>
              <ul className="mt-3 space-y-2 text-[13px] text-gray-600">
                <li>✅ Birth Certificate</li>
                <li>✅ Previous School Report / Results</li>
                <li>✅ 2 Passport Photos</li>
                <li>✅ Transfer Letter (if from other school)</li>
              </ul>
            </div>
            <div className="bg-[#FFCB05]/30 p-6 rounded-[20px] sm:col-span-2">
              <h4 className="font-black text-[14px] text-[#0D4DA1]">3. For Boarding</h4>
              <p className="text-[13px] text-gray-600 mt-2">All above + Beddings: 1 mattress (3.5x6), 2 blankets, 2 bedsheets, towel, bucket, plate, cup, 5 uniforms, sports wear, toiletries, mosquito net. Matron will give full list at admission.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0D4DA1] rounded-[20px] md:rounded-[24px] p-7 md:p-8 text-white h-fit">
          <h3 className="font-black text-[16px]">How to Apply - 3 Steps</h3>
          <div className="mt-6 space-y-5">
            <div className="flex gap-3"><div className="w-7 h-7 bg-[#FFCB05] text-[#0D4DA1] rounded-full flex items-center justify-center font-black text-[12px] shrink-0">1</div><div><p className="font-bold text-[13px]">Visit on Saturday</p><p className="text-[12px] text-blue-200 mt-1">Come with child + docs 8am-2pm</p></div></div>
            <div className="flex gap-3"><div className="w-7 h-7 bg-[#FFCB05] text-[#0D4DA1] rounded-full flex items-center justify-center font-black text-[12px] shrink-0">2</div><div><p className="font-bold text-[13px]">Interview & Assessment</p><p className="text-[12px] text-blue-200 mt-1">Simple reading, writing, counting for placement</p></div></div>
            <div className="flex gap-3"><div className="w-7 h-7 bg-white text-[#0D4DA1] rounded-full flex items-center justify-center font-black text-[12px] shrink-0">3</div><div><p className="font-bold text-[13px]">Pay & Get Admission</p><p className="text-[12px] text-blue-200 mt-1">Pay fees, get uniform list, start Monday</p></div></div>
          </div>
          <div className="mt-8 space-y-3">
            <Link href="/apply" className="block bg-[#FFCB05] text-[#0D4DA1] text-center py-3 rounded-full font-black text-[13px]">Apply Online →</Link>
            <Link href="/contact" className="block bg-white/10 text-white text-center py-3 rounded-full font-black text-[13px]">Need Directions? →</Link>
          </div>
        </div>
      </section>

      {/* FEES STRUCTURE - MOBILE SWIPEABLE */}
      <section className="bg-[#F8F9FB] py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-[24px] md:text-[32px] font-black text-[#0D4DA1]">Fees Structure 2026 (Per Term)</h2>
            <p className="text-[13px] text-gray-500 mt-2">Affordable quality - Pay in 2 installments allowed. Includes lunch & porridge.</p>
            <p className="text-[11px] font-bold text-[#E30613] mt-2">NOTE: Call 0782631761 for latest - fees may be adjusted slightly</p>
            <p className="md:hidden text-[11px] text-gray-400 mt-3">← Swipe table left to see all →</p>
          </div>

          <div className="bg-white rounded-[20px] md:rounded-[24px] overflow-hidden shadow-sm border">
            <div className="overflow-x-auto -mx-0">
              <div className="px-0">
                <table className="w-full min-w-[650px] text-[13px]">
                  <thead className="bg-[#0D4DA1] text-white">
                    <tr>
                      <th className="text-left p-4 font-black">Class</th>
                      <th className="text-left p-4 font-black">Day</th>
                      <th className="text-left p-4 font-black">Boarding</th>
                      <th className="text-left p-4 font-black">Includes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b"><td className="p-4 font-bold text-[#0D4DA1]">Baby & Middle</td><td className="p-4">350,000 UGX</td><td className="p-4">650,000 UGX</td><td className="p-4 text-[12px]">Porridge, Lunch, Books</td></tr>
                    <tr className="border-b bg-[#FFCB05]/10"><td className="p-4 font-bold text-[#0D4DA1]">Top Class</td><td className="p-4 font-bold">400,000 UGX</td><td className="p-4 font-bold">700,000 UGX</td><td className="p-4 text-[12px]">+ Graduation gown</td></tr>
                    <tr className="border-b"><td className="p-4 font-bold text-[#0D4DA1]">P.1 - P.3</td><td className="p-4">450,000 UGX</td><td className="p-4">750,000 UGX</td><td className="p-4 text-[12px]">Lunch, Porridge, Exams</td></tr>
                    <tr className="border-b"><td className="p-4 font-bold text-[#0D4DA1]">P.4 - P.5</td><td className="p-4">500,000 UGX</td><td className="p-4">800,000 UGX</td><td className="p-4 text-[12px]">+ Computer lessons</td></tr>
                    <tr className="bg-[#E30613]/5"><td className="p-4 font-bold text-[#E30613]">P.6 - P.7</td><td className="p-4 font-bold">550,000 UGX</td><td className="p-4 font-bold">850,000 UGX</td><td className="p-4 text-[12px]">+ UNEB Prep, Mock Exams</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-4 md:p-5 bg-[#08162e] text-white flex flex-col md:flex-row justify-between gap-3 text-[11px] md:text-[12px]">
              <span>💰 Transport: 150,000 UGX/term (Iganga Town, Nakalama, Busesa, Namungalwe)</span>
              <span>📚 Uniform: ~120,000 full set (sold at school)</span>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-[12px]">
            <div className="bg-white p-4 rounded-xl border"><p className="font-bold">Payment:</p><p className="text-gray-500 mt-1">Centenary Bank / School Office. No mobile money without receipt.</p></div>
            <div className="bg-white p-4 rounded-xl border"><p className="font-bold">Discount:</p><p className="text-gray-500 mt-1">5% off if you pay full year, 3% for 2 siblings, 5% for 3+ siblings</p></div>
            <div className="bg-white p-4 rounded-xl border"><p className="font-bold">No hidden fees:</p><p className="text-gray-500 mt-1">Fees include exams, porridge, lunch, co-curricular. No extra PTA.</p></div>
          </div>
        </div>
      </section>

      {/* BOARDING INFO */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
        <div>
          <h3 className="text-[22px] md:text-[26px] font-black text-[#0D4DA1]">Boarding Life - Safe & Loving</h3>
          <p className="text-[13px] text-gray-600 mt-3 leading-relaxed">Mixed Day & Boarding. Boys and girls in separate dorms with matrons. 24/7 security, fence, CCTV, nurse, balanced diet.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-[12px]">
            <div className="bg-[#F8F9FB] p-4 rounded-xl"><p className="font-bold">🍲 Meals</p><p className="text-gray-500 mt-1">Breakfast, Lunch, Supper, Tea</p></div>
            <div className="bg-[#F8F9FB] p-4 rounded-xl"><p className="font-bold">🛏️ Dorms</p><p className="text-gray-500 mt-1">20 pupils per dorm + matron</p></div>
            <div className="bg-[#F8F9FB] p-4 rounded-xl"><p className="font-bold">🩺 Health</p><p className="text-gray-500 mt-1">Nurse on site, first aid</p></div>
            <div className="bg-[#F8F9FB] p-4 rounded-xl"><p className="font-bold">📖 Prep</p><p className="text-gray-500 mt-1">Evening prep 7-9:30pm</p></div>
          </div>
        </div>
        <div className="bg-[#FFCB05] rounded-[20px] md:rounded-[24px] p-7 md:p-8">
          <h4 className="font-black text-[#0D4DA1]">What Parents Say About Boarding</h4>
          <p className="text-[14px] italic text-gray-800 mt-4 leading-relaxed">"My daughter was homesick first week, now she doesn't want to come home! Food is good, matron calls me every week."</p>
          <p className="text-[12px] font-bold mt-4">— Mrs. Mukyala, P.5 Boarding Parent</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/gallery" className="bg-[#0D4DA1] text-white px-5 py-2.5 rounded-full text-[12px] font-bold text-center">See Boarding Photos →</Link>
            <Link href="/contact" className="bg-white text-[#0D4DA1] px-5 py-2.5 rounded-full text-[12px] font-bold text-center">Talk to Matron</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0D4DA1] py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[20px] md:rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-[20px] md:text-[22px] font-black text-[#0D4DA1]">Visit Us This Saturday!</h3>
            <p className="text-[13px] text-gray-600 mt-1">Along Iganga-Jinja Highway, 5 mins from Iganga Town.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/apply" className="bg-[#0D4DA1] text-white px-8 py-4 rounded-full font-black text-[13px] text-center">Apply Online →</Link>
            <a href="https://www.google.com/maps/search/XXXXXXX+Nursery+School+Iganga" target="_blank" className="bg-[#E30613] text-white px-8 py-4 rounded-full font-black text-[13px] text-center">Get Directions →</a>
          </div>
        </div>
      </section>

    </main>
  );
}