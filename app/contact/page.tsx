import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* BANNER - Kiddos inner */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#BF000A]/75"></div>
        <div className="relative text-center text-white px-6">
          <p className="text-[11px] font-black tracking-[0.2em] bg-white/20 inline-block px-4 py-2 rounded-full">HOME › CONTACT</p>
          <h1 className="text-[44px] md:text-[56px] font-black mt-4 leading-[0.9]">Contact MEDAG</h1>
          <p className="text-[13px] mt-4 opacity-90">Kigulu, Iganga District - 3k Boda from Iganga Town - Van 100k-130k with Matron</p>
        </div>
      </section>

      {/* INFO BOXES - Kiddos has 4 boxes: Address, Phone, Email, Website */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#FFFBFB] border rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="w-14 h-14 bg-[#BF000A] rounded-full flex items-center justify-center mx-auto text-white text-[22px]">📍</div>
            <h4 className="font-black text-[13px] mt-4">Our Location</h4>
            <p className="text-[12px] text-gray-600 mt-2 leading-5">Kigulu, Iganga District<br/>3,000 UGX Boda from<br/>Iganga Town Main Taxi Park</p>
            <a href="https://maps.google.com/?q=Kigulu+Iganga+Uganda" target="_blank" className="inline-block mt-3 text-[10px] font-black text-[#BF000A]">OPEN MAP →</a>
          </div>
          <div className="bg-[#FFFBFB] border rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="w-14 h-14 bg-[#141A33] rounded-full flex items-center justify-center mx-auto text-white text-[22px]">📞</div>
            <h4 className="font-black text-[13px] mt-4">Call Us</h4>
            <p className="text-[12px] text-gray-600 mt-2 leading-5">MTN: 0782198528<br/>Airtel: [ADD]<br/>Mon-Sat 7am-6pm</p>
            <a href="tel:+256782198528" className="inline-block mt-3 text-[10px] font-black text-[#BF000A]">CALL NOW →</a>
          </div>
          <div className="bg-[#FFFBFB] border rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="w-14 h-14 bg-[#1EA44A] rounded-full flex items-center justify-center mx-auto text-white text-[22px]">🚌</div>
            <h4 className="font-black text-[13px] mt-4">Transport</h4>
            <p className="text-[12px] text-gray-600 mt-2 leading-5">Van 100k-130k /term<br/>With Matron<br/>Safe daily routes</p>
            <Link href="/facilities" className="inline-block mt-3 text-[10px] font-black text-[#BF000A]">VIEW ROUTES →</Link>
          </div>
          <div className="bg-[#FFFBFB] border rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="w-14 h-14 bg-[#25B1D1] rounded-full flex items-center justify-center mx-auto text-white text-[22px]">💬</div>
            <h4 className="font-black text-[13px] mt-4">WhatsApp</h4>
            <p className="text-[12px] text-gray-600 mt-2 leading-5">Chat for Admission<br/>FREE Admission 2026<br/>Fast reply</p>
            <a href="https://wa.me/256782198528?text=Hello%20MEDAG%20Infant%20and%20Primary%20Kigulu%20Iganga%20-%20I%20want%20admission%20info" className="inline-block mt-3 text-[10px] font-black text-white bg-[#25D366] px-3 py-1 rounded-full">WHATSAPP →</a>
          </div>
        </div>
      </section>

      {/* FORM + DETAILS - Kiddos two column: form left, contact details right */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-10">
        {/* FORM */}
        <div className="md:col-span-2 bg-white border rounded-[24px] p-8 shadow-sm">
          <h3 className="font-black text-[20px]">Send Us a Message</h3>
          <p className="text-[12px] text-gray-500 mt-2">Admission FREE 2026 - Baby to P7 - Day & Boarding - Kigulu Iganga</p>
          
          <form className="mt-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-black tracking-widest">PARENT NAME *</label>
                <input placeholder="Full Name" className="mt-2 w-full border rounded-full px-5 py-3 text-[13px] focus:border-[#BF000A] outline-none" />
              </div>
              <div>
                <label className="text-[11px] font-black tracking-widest">PHONE * MTN/Airtel</label>
                <input placeholder="0782 198 528" className="mt-2 w-full border rounded-full px-5 py-3 text-[13px] focus:border-[#BF000A] outline-none" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-black tracking-widest">CHILD CLASS</label>
                <select className="mt-2 w-full border rounded-full px-5 py-3 text-[13px] bg-white">
                  <option>Baby Class 3y</option>
                  <option>Middle Class 4y</option>
                  <option>Top Class 5y</option>
                  <option>P1-P3</option>
                  <option>P4-P5</option>
                  <option>P6-P7 - PLE Day 350k Board 630k Next Year</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] font-black tracking-widest">DAY OR BOARDING</label>
                <select className="mt-2 w-full border rounded-full px-5 py-3 text-[13px] bg-white">
                  <option>Day - 250k-350k</option>
                  <option>Boarding - 540k-630k</option>
                  <option>Need Transport Van 100k-130k</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[11px] font-black tracking-widest">MESSAGE</label>
              <textarea placeholder="Hello MEDAG, I want admission for my child in Kigulu Iganga..." rows={4} className="mt-2 w-full border rounded-[20px] px-5 py-3 text-[13px] focus:border-[#BF000A] outline-none"></textarea>
            </div>
            <button className="w-full bg-[#BF000A] text-white py-4 rounded-full font-black text-[13px] hover:bg-[#8A0006] transition">SEND MESSAGE - FREE ADMISSION 2026 →</button>
            <p className="text-[10px] text-gray-400 text-center">Form: Connect to your WhatsApp / Email backend later. For now mailto / WhatsApp.</p>
          </form>
        </div>

        {/* SIDE DETAILS - Kiddos contact page has side info */}
        <div className="space-y-6">
          <div className="bg-[#141A33] rounded-[24px] p-7 text-white">
            <h4 className="font-black text-[14px]">MEDAG INFANT AND PRIMARY</h4>
            <div className="mt-5 space-y-4 text-[12px] leading-6 opacity-90">
              <p>📍 <b>Kigulu, Iganga District</b><br/><span className="opacity-60">3k Boda from Iganga Town Main Park. Ask boda Kigulu MEDAG.</span></p>
              <p>📞 <b>MTN 0782198528</b><br/><span className="opacity-60">Call for directions or van route.</span></p>
              <p>🚌 <b>Van 100k-130k/term with Matron</b><br/><span className="opacity-60">Safe routes covering Iganga Town and surrounding.</span></p>
              <p>☪️ <b>Islam Embraced</b><br/><span className="opacity-60">Hijab allowed white top green skirt, halal meals, all faiths welcome.</span></p>
              <p>🎓 <b>FREE Admission 2026</b><br/><span className="opacity-60">Baby to P7 - Uniform Nursery 130k Primary 150k.</span></p>
            </div>
            <div className="mt-6 flex gap-2">
              <a href="tel:+256782198528" className="bg-white text-[#141A33] px-5 py-2.5 rounded-full font-black text-[11px]">Call</a>
              <a href="https://wa.me/256782198528" className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-black text-[11px]">WhatsApp</a>
            </div>
          </div>

          <div className="bg-[#FFFBFB] border rounded-[20px] p-6">
            <h4 className="font-black text-[12px] tracking-widest">FEES QUICK VIEW</h4>
            <div className="mt-4 space-y-2 text-[11px]">
              <div className="flex justify-between"><span>Nursery Day</span><b>250k</b></div>
              <div className="flex justify-between"><span>Nursery Board</span><b>540k</b></div>
              <div className="flex justify-between"><span>P1-P5 Day</span><b>280k-320k</b></div>
              <div className="flex justify-between border-t pt-2 mt-2"><span className="font-black">P7 Day NEXT YEAR</span><b className="text-[#BF000A]">350k</b></div>
              <div className="flex justify-between"><span className="font-black">P7 Board NEXT YEAR</span><b className="text-[#BF000A]">630k</b></div>
              <div className="flex justify-between"><span>Van</span><b>100k-130k</b></div>
              <div className="flex justify-between"><span>Boda Town</span><b>3k</b></div>
            </div>
            <Link href="/fees" className="block mt-4 text-center bg-white border text-[11px] font-black py-2.5 rounded-full">View Full Fees →</Link>
          </div>

          <div className="bg-[#BF000A]/10 border border-[#BF000A]/20 rounded-[20px] p-6">
            <h4 className="font-black text-[12px] text-[#BF000A]">HOW TO REACH</h4>
            <ol className="mt-3 space-y-2 text-[11px] text-gray-700 leading-5 list-decimal ml-4">
              <li>From Iganga Town Taxi Park, take boda <b>3k to Kigulu MEDAG</b></li>
              <li>Or call MTN 0782198528 for van pick-up point</li>
              <li>Ask for MEDAG Infant and Primary - colorful buildings</li>
              <li>Admission FREE 2026 - come with child birth certificate</li>
            </ol>
          </div>
        </div>
      </section>

      {/* MAP - Kiddos has map at bottom */}
      <section className="border-t">
        <div className="bg-[#FFFBFB] py-4 text-center">
          <p className="text-[11px] font-black tracking-widest">FIND US ON MAP - KIGULU IGANGA DISTRICT</p>
        </div>
        <iframe src="https://www.google.com/maps?q=Kigulu%20Iganga%20Uganda&z=14&output=embed" width="100%" height="420" style={{border:0}} loading="lazy"></iframe>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#BF000A] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-white">
          <div>
            <h3 className="font-black text-[18px]">Visit MEDAG Today - Admission FREE 2026</h3>
            <p className="text-[12px] opacity-80 mt-1">Kigulu Iganga • Baby to P7 • Day & Boarding • Van 100k-130k • 3k Boda Town • MTN 0782198528</p>
          </div>
          <div className="flex gap-3">
            <Link href="/apply" className="bg-white text-[#BF000A] px-6 py-3 rounded-full font-black text-[11px]">Apply FREE 2026 →</Link>
            <Link href="/gallery" className="bg-[#141A33] text-white px-6 py-3 rounded-full font-black text-[11px]">View Gallery</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#141A33] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-[11px] opacity-60">
          <p>© 2026 MEDAG Infant and Primary - Kigulu Iganga</p>
          <p>MTN 0782198528 - FREE Admission 2026 - Day & Boarding</p>
        </div>
      </footer>
    </main>
  );
}