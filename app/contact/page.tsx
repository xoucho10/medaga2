"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans antialiased">

      {/* HERO */}
      <section className="bg-[#0D4DA1] py-16 md:py-20 px-6 text-white relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-[#FFCB05] text-[#0D4DA1] text-[11px] font-black px-4 py-2 rounded-full mb-4">CONTACT US • WE REPLY IN 5 MINS</div>
            <h1 className="text-4xl md:text-5xl font-black leading-[0.9]">Visit, Call, or<br/><span className="text-[#FFCB05]">WhatsApp Us</span></h1>
            <p className="text-blue-100/80 text-[14px] mt-4 leading-relaxed max-w-lg">P.O BOX 102 Iganga • Along Iganga-Jinja Highway, Northern Division. Open Mon-Sat 7:30am-5pm. Admissions interview every Saturday 8am-2pm.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:0782631761" className="bg-[#E30613] px-6 py-3 rounded-full font-black text-[13px]">📞 0782631761</a>
              <a href="tel:0758735343" className="bg-white text-[#0D4DA1] px-6 py-3 rounded-full font-black text-[13px]">📞 0758735343</a>
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-6 text-gray-800">
            <h3 className="font-black text-[#0D4DA1]">Quick Contacts</h3>
            <div className="mt-5 space-y-4 text-[13px]">
              <div className="flex gap-3"><span className="w-10 h-10 bg-[#FFCB05] rounded-full flex items-center justify-center">📞</span><div><p className="font-bold">Admissions Office</p><p className="text-gray-500">0782631761 / 0758735343 (Call & WhatsApp)</p></div></div>
              <div className="flex gap-3"><span className="w-10 h-10 bg-[#0D4DA1] rounded-full flex items-center justify-center text-white">✉️</span><div><p className="font-bold">Email</p><p className="text-gray-500">fairwayiganga@gmail.com • Reply in 2 hours</p></div></div>
              <div className="flex gap-3"><span className="w-10 h-10 bg-[#E30613] rounded-full flex items-center justify-center text-white">📍</span><div><p className="font-bold">Location</p><p className="text-gray-500">P.O BOX 102 Iganga, Jinja Road, Northern Division, 5 min from Iganga Town</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        {/* FORM */}
        <div className="md:col-span-2 bg-[#F8F9FB] rounded-[24px] p-7 md:p-8">
          <h2 className="text-[22px] font-black text-[#0D4DA1]">Send Us a Message</h2>
          <p className="text-[12px] text-gray-500 mt-1">We reply on WhatsApp within 5 minutes during working hours.</p>

          {!sent? (
            <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}} className="mt-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-black text-gray-600 tracking-wide">PARENT NAME *</label>
                  <input required placeholder="e.g. Mrs. Namulondo" className="mt-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] focus:border-[#0D4DA1] outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-black text-gray-600 tracking-wide">PHONE (WhatsApp) *</label>
                  <input required placeholder="07XX XXX XXX" className="mt-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] focus:border-[#0D4DA1] outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-black text-gray-600 tracking-wide">CHILD NAME & AGE</label>
                  <input placeholder="e.g. John 6yrs - P.2" className="mt-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] focus:border-[#0D4DA1] outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-black text-gray-600 tracking-wide">INTERESTED IN</label>
                  <select className="mt-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] focus:border-[#0D4DA1] outline-none">
                    <option>Select Class</option>
                    <option>Baby Class</option>
                    <option>Middle Class</option>
                    <option>Top Class</option>
                    <option>P.1 - P.3 Day</option>
                    <option>P.4 - P.7 Day</option>
                    <option>Boarding - Nursery</option>
                    <option>Boarding - Primary</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-black text-gray-600 tracking-wide">MESSAGE</label>
                <textarea required placeholder="Hello, I want admission for my child..." rows={4} className="mt-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] focus:border-[#0D4DA1] outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0D4DA1] text-white py-4 rounded-full font-black text-[13px] hover:bg-blue-800 transition shadow-lg">Send Message via WhatsApp →</button>
              <p className="text-[11px] text-gray-400 text-center">By sending, you agree we can contact you on WhatsApp about admission.</p>
            </form>
          ) : (
            <div className="mt-8 bg-white rounded-[20px] p-8 text-center border-2 border-green-100">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto">✓</div>
              <h3 className="font-black text-[#0D4DA1] mt-4">Message Received!</h3>
              <p className="text-[13px] text-gray-600 mt-2">We will WhatsApp you in 5 minutes on 0782631761. Or call us now for faster reply.</p>
              <div className="mt-6 flex gap-3 justify-center">
                <a href="https://wa.me/256782631761" target="_blank" className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-[12px]">Open WhatsApp</a>
                <button onClick={()=>setSent(false)} className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-bold text-[12px]">Send Another</button>
              </div>
            </div>
          )}
        </div>

        {/* SIDE INFO */}
        <div className="space-y-6">
          <div className="bg-[#0D4DA1] rounded-[24px] p-7 text-white">
            <h3 className="font-black">Visit Hours</h3>
            <div className="mt-5 space-y-3 text-[13px]">
              <div className="flex justify-between"><span className="text-blue-200">Mon - Fri</span><span className="font-bold">7:30am - 5:00pm</span></div>
              <div className="flex justify-between"><span className="text-blue-200">Saturday</span><span className="font-bold">8:00am - 2:00pm (Interview)</span></div>
              <div className="flex justify-between"><span className="text-blue-200">Sunday</span><span className="font-bold">Closed</span></div>
            </div>
            <div className="mt-6 bg-white/10 rounded-xl p-3 text-[11px]">💡 Come Saturday 8am for fastest admission - no appointment needed</div>
          </div>

          <div className="bg-[#FFCB05] rounded-[24px] p-7 text-[#0D4DA1]">
            <h3 className="font-black">Emergency / Matron</h3>
            <p className="text-[12px] mt-2 font-medium">For boarding parents only</p>
            <div className="mt-4 space-y-2 text-[13px] font-bold">
              <p>📞 Matron Girls: 07XX XXX XXX</p>
              <p>📞 Matron Boys: 07XX XXX XXX</p>
              <p>📞 Headteacher: 0782631761</p>
            </div>
          </div>

          <div className="bg-white border rounded-[24px] p-7">
            <h3 className="font-black text-[14px] text-[#0D4DA1]">School Details</h3>
            <div className="mt-4 space-y-2 text-[12px] text-gray-600">
              <p><b>Reg No:</b> PPS/F/95</p>
              <p><b>UNEB Center:</b> Official Center</p>
              <p><b>District:</b> Iganga Municipality</p>
              <p><b>Motto:</b> Emmitti Emmitto</p>
              <p><b>Founded:</b> 2005 - 20 Years</p>
              <p><b>Pupils:</b> 800+ Day & Boarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F6F7F9] p-3 md:p-4 rounded-[28px]">
            <div className="bg-white rounded-[20px] overflow-hidden shadow-sm border">
              <iframe
                src="https://www.google.com/maps?q=Fairway+Nursery+and+Primary+School+Iganga+Uganda&z=16&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="w-full h-[420px]"
              ></iframe>
              <div className="p-4 bg-[#0D4DA1] text-white flex flex-col md:flex-row justify-between gap-3 text-[11px] font-bold">
                <span>📍 Along Iganga-Jinja Highway, Northern Division, 5 min from Iganga Town Taxi Park</span>
                <a href="https://www.google.com/maps/search/Fairway+Nursery+and+Primary+School+Iganga" target="_blank" className="bg-white text-[#0D4DA1] px-4 py-1.5 rounded-full text-center">Get Directions →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ QUICK */}
      <section className="bg-[#F8F9FB] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-[20px] font-black text-[#0D4DA1]">Quick Answers Before You Visit</h3>
          <div className="mt-8 space-y-3">
            <div className="bg-white p-5 rounded-[16px] border"><p className="font-black text-[13px] text-[#0D4DA1]">Do you have transport?</p><p className="text-[12px] text-gray-600 mt-1">Yes, van covers Iganga Town, Nakalama, Busesa, Namungalwe - 150k/term with matron.</p></div>
            <div className="bg-white p-5 rounded-[16px] border"><p className="font-black text-[13px] text-[#0D4DA1]">Can I pay fees in installments?</p><p className="text-[12px] text-gray-600 mt-1">Yes, 2 installments: 60% first month, 40% mid-term. Talk to bursar.</p></div>
            <div className="bg-white p-5 rounded-[16px] border"><p className="font-black text-[13px] text-[#0D4DA1]">What if my child doesn't know English?</p><p className="text-[12px] text-gray-600 mt-1">We teach from zero. Many P.1 join without English and catch up in 1 term.</p></div>
          </div>
        </div>
      </section>

    </main>
  );
}