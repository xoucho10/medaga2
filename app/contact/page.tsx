"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", childClass: "Baby Class 3y", mode: "Day - 250k-350k", message: "" });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hello MEDAG Infant and Primary Kigulu Iganga - Admission FREE 2026%0A%0AParent: ${form.name}%0APhone: ${form.phone}%0AClass: ${form.childClass}%0AMode: ${form.mode}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/256782198528?text=${text}`, "_blank");
  };

  return (
    <main className="bg-[#fcfcfc] min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-fadeUp { animation: fadeUp 0.7s ease-out both; }
      `}</style>

      {/* BANNER */}
      <section className="relative h-[380px] md:h-[460px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_2.jpg')] bg-cover bg-center transition-transform duration-[2000ms]" style={{ transform: `scale(${1 + scrollY * 0.0002})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5d50c6]/20 to-black/70"></div>
        <div className="relative text-center text-white px-6 z-10 animate-fadeUp">
          <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] bg-white/20 backdrop-blur inline-block px-4 py-2 rounded-full">HOME › CONTACT</p>
          <h1 className="text-[36px] md:text-[56px] font-extrabold mt-4 leading-[0.9]">Contact MEDAG</h1>
          <p className="text-[11px] md:text-[13px] mt-3 opacity-80 max-w-2xl mx-auto bg-black/20 backdrop-blur px-4 py-2 rounded-full">Kigulu, Iganga District - 3k Boda from Iganga Town - Van 100k-130k with Matron</p>
        </div>
      </section>

      {/* INFO BOXES - DYNAMIC */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { color: "bg-[#5d50c6]", title: "Our Location", lines: ["Kigulu, Iganga District", "3,000 UGX Boda from", "Iganga Town Main Taxi Park"], link: "https://maps.google.com/?q=Kigulu+Iganga+Uganda", label: "OPEN MAP →", icon: "📍" },
            { color: "bg-[#1e6a8a]", title: "Call Us", lines: ["MTN: 0782198528", "Airtel: [ADD]", "Mon-Sat 7am-6pm"], link: "tel:+256782198528", label: "CALL NOW →", icon: "📞" },
            { color: "bg-[#8cc63f]", title: "Transport", lines: ["Van 100k-130k /term", "With Matron", "Safe daily routes"], link: "/facilities", label: "VIEW ROUTES →", icon: "🚌" },
            { color: "bg-[#ffb400]", title: "WhatsApp", lines: ["Chat for Admission", "FREE Admission 2026", "Fast reply"], link: "https://wa.me/256782198528?text=Hello%20MEDAG%20Infant%20and%20Primary%20Kigulu%20Iganga%20-%20I%20want%20admission%20info", label: "WHATSAPP →", icon: "💬", darkText: true },
          ].map((b, i) => (
            <div key={b.title} className="group bg-white border border-gray-100 rounded-[20px] p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-fadeUp" style={{animationDelay:`${i*0.1}s`}}>
              <div className={`w-14 h-14 ${b.color} rounded-full flex items-center justify-center mx-auto text-white text-[22px] shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float`} style={{animationDelay:`${i*0.2}s`}}>{b.icon}</div>
              <h4 className="font-bold text-[13px] mt-4">{b.title}</h4>
              <p className="text-[12px] text-gray-500 mt-2 leading-5">{b.lines.map(l => <span key={l} className="block">{l}</span>)}</p>
              <a href={b.link} target={b.link.startsWith("http") ? "_blank" : undefined} className={`inline-block mt-3 text-[10px] font-bold px-3 py-1 rounded-full ${b.darkText ? "bg-[#111827] text-white" : "bg-[#f9fafb] border text-[#5d50c6] group-hover:bg-[#5d50c6] group-hover:text-white transition-colors"}`}>{b.label}</a>
            </div>
          ))}
        </div>

        {/* ADDED BEST INFO - OPENING HOURS + WHAT TO BRING */}
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-100 rounded-[20px] p-6 flex gap-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-[#f9fafb] border rounded-full flex items-center justify-center shrink-0">🕘</div>
            <div>
              <h4 className="font-bold text-[12px]">Opening Hours</h4>
              <p className="text-[11px] text-gray-500 mt-1 leading-5">Mon-Fri 7:00am-5:30pm • Sat 8am-1pm • Sun Closed • Office open during holidays</p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-[20px] p-6 flex gap-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-[#f9fafb] border rounded-full flex items-center justify-center shrink-0">🎒</div>
            <div>
              <h4 className="font-bold text-[12px]">What to Bring</h4>
              <p className="text-[11px] text-gray-500 mt-1 leading-5">Child birth certificate copy, 2 passport photos, parent ID. Uniform bought at school. Admission FREE 2026.</p>
            </div>
          </div>
          <div className="bg-[#5d50c6] rounded-[20px] p-6 text-white flex gap-4 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">👥</div>
            <div>
              <h4 className="font-bold text-[12px] text-[#ffb400]">500+ Pupils • Safe Compound</h4>
              <p className="text-[11px] mt-1 leading-5 opacity-90">Day & Boarding Baby to P7 • Islam embraced • Halal meals • Matron care 24/7 • 3k boda town</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 grid md:grid-cols-3 gap-8">
        {/* FORM */}
        <div className="md:col-span-2 bg-white border border-gray-100 rounded-[24px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-[20px] text-[#111827]">Send Us a Message</h3>
          <p className="text-[12px] text-gray-500 mt-2">Admission FREE 2026 - Baby to P7 - Day & Boarding - Kigulu Iganga</p>
          
          <form onSubmit={sendWhatsApp} className="mt-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-gray-500">PARENT NAME *</label>
                <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Full Name" className="mt-2 w-full border border-gray-200 rounded-full px-5 py-3 text-[13px] focus:border-[#5d50c6] focus:ring-2 focus:ring-[#5d50c6]/10 outline-none transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-gray-500">PHONE * MTN/Airtel</label>
                <input required value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="0782 198 528" className="mt-2 w-full border border-gray-200 rounded-full px-5 py-3 text-[13px] focus:border-[#5d50c6] focus:ring-2 focus:ring-[#5d50c6]/10 outline-none transition-all" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-gray-500">CHILD CLASS</label>
                <select value={form.childClass} onChange={(e)=>setForm({...form,childClass:e.target.value})} className="mt-2 w-full border border-gray-200 rounded-full px-5 py-3 text-[13px] bg-white focus:border-[#5d50c6] outline-none">
                  <option>Baby Class 3y</option>
                  <option>Middle Class 4y</option>
                  <option>Top Class 5y</option>
                  <option>P1-P3</option>
                  <option>P4-P5</option>
                  <option>P6-P7 - PLE Day 350k Board 630k Next Year</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-gray-500">DAY OR BOARDING</label>
                <select value={form.mode} onChange={(e)=>setForm({...form,mode:e.target.value})} className="mt-2 w-full border border-gray-200 rounded-full px-5 py-3 text-[13px] bg-white focus:border-[#5d50c6] outline-none">
                  <option>Day - 250k-350k</option>
                  <option>Boarding - 540k-630k</option>
                  <option>Need Transport Van 100k-130k</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold tracking-widest text-gray-500">MESSAGE</label>
              <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Hello MEDAG, I want admission for my child in Kigulu Iganga..." rows={4} className="mt-2 w-full border border-gray-200 rounded-[20px] px-5 py-3 text-[13px] focus:border-[#5d50c6] focus:ring-2 focus:ring-[#5d50c6]/10 outline-none transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#5d50c6] hover:bg-[#4a3fb8] text-white py-4 rounded-full font-bold text-[13px] transition-all hover:scale-[1.01] hover:shadow-lg">SEND VIA WHATSAPP - FREE ADMISSION 2026 →</button>
            <p className="text-[10px] text-gray-400 text-center">Form sends directly to MTN 0782198528 WhatsApp</p>
          </form>
        </div>

        {/* SIDE DETAILS */}
        <div className="space-y-5">
          <div className="bg-[#111827] rounded-[24px] p-7 text-white">
            <h4 className="font-bold text-[14px]">MEDAG INFANT AND PRIMARY</h4>
            <div className="mt-5 space-y-4 text-[12px] leading-6">
              <p>📍 <b>Kigulu, Iganga District</b><br/><span className="opacity-60">3k Boda from Iganga Town Main Park. Ask boda Kigulu MEDAG.</span></p>
              <p>📞 <b>MTN 0782198528</b><br/><span className="opacity-60">Call for directions or van route.</span></p>
              <p>🚌 <b>Van 100k-130k/term with Matron</b><br/><span className="opacity-60">Safe routes covering Iganga Town and surrounding.</span></p>
              <p>☪️ <b>Islam Embraced</b><br/><span className="opacity-60">Hijab allowed white top green skirt, halal meals, all faiths welcome.</span></p>
              <p>🎓 <b>FREE Admission 2026</b><br/><span className="opacity-60">Baby to P7 - Uniform Nursery 130k Primary 150k.</span></p>
            </div>
            <div className="mt-6 flex gap-2">
              <a href="tel:+256782198528" className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-[11px] hover:scale-105 transition-transform">Call</a>
              <a href="https://wa.me/256782198528" className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-[11px] hover:scale-105 transition-transform">WhatsApp</a>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-[20px] p-6 hover:shadow-md transition-all">
            <h4 className="font-bold text-[11px] tracking-widest text-gray-500">FEES QUICK VIEW</h4>
            <div className="mt-4 space-y-2.5 text-[11px]">
              <div className="flex justify-between"><span className="text-gray-500">Nursery Day</span><b>250k</b></div>
              <div className="flex justify-between"><span className="text-gray-500">Nursery Board</span><b>540k</b></div>
              <div className="flex justify-between"><span className="text-gray-500">P1-P5 Day</span><b>280k-320k</b></div>
              <div className="flex justify-between border-t border-gray-100 pt-2.5 mt-2"><span className="font-bold">P7 Day NEXT YEAR</span><b className="text-[#5d50c6]">350k</b></div>
              <div className="flex justify-between"><span className="font-bold">P7 Board NEXT YEAR</span><b className="text-[#5d50c6]">630k</b></div>
              <div className="flex justify-between"><span className="text-gray-500">Van</span><b>100k-130k</b></div>
              <div className="flex justify-between"><span className="text-gray-500">Boda Town</span><b>3k</b></div>
            </div>
            <Link href="/fees" className="block mt-4 text-center bg-[#f9fafb] border border-gray-100 text-[11px] font-bold py-2.5 rounded-full hover:bg-[#111827] hover:text-white transition-colors">View Full Fees →</Link>
          </div>

          <div className="bg-[#fff7e6] border border-[#ffb400]/20 rounded-[20px] p-6">
            <h4 className="font-bold text-[11px] tracking-widest text-[#b88a2b]">HOW TO REACH</h4>
            <ol className="mt-3 space-y-2 text-[11px] text-gray-700 leading-5 list-decimal ml-4">
              <li>From Iganga Town Taxi Park, take boda <b>3k to Kigulu MEDAG</b></li>
              <li>Or call MTN 0782198528 for van pick-up point</li>
              <li>Ask for MEDAG Infant and Primary - colorful buildings</li>
              <li>Admission FREE 2026 - come with child birth certificate</li>
            </ol>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-gray-100">
        <div className="bg-[#f9fafb] py-4 text-center">
          <p className="text-[11px] font-bold tracking-widest text-gray-500">FIND US ON MAP - KIGULU IGANGA DISTRICT</p>
        </div>
        <div className="p-2 md:p-3 bg-white">
          <iframe className="rounded-[20px] overflow-hidden" src="https://www.google.com/maps?q=Kigulu%20Iganga%20Uganda&z=14&output=embed" width="100%" height="420" style={{border:0}} loading="lazy"></iframe>
        </div>
      </section>

      {/* BOTTOM CTA - STRETCHED */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg_manners.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#111827]/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-wrap justify-between items-center gap-4 text-white">
          <div>
            <h3 className="font-bold text-[18px]">Visit MEDAG Today - Admission FREE 2026</h3>
            <p className="text-[12px] opacity-60 mt-1">Kigulu Iganga • Baby to P7 • Day & Boarding • Van 100k-130k • 3k Boda Town • MTN 0782198528</p>
          </div>
          <div className="flex gap-3">
            <Link href="/apply" className="bg-[#ffb400] text-black px-6 py-3 rounded-full font-bold text-[11px] hover:scale-105 transition-transform">Apply FREE 2026 →</Link>
            <Link href="/gallery" className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-3 rounded-full font-bold text-[11px] hover:bg-white hover:text-black transition-colors">View Gallery</Link>
          </div>
        </div>
      </section>
    </main>
  );
}