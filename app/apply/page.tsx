"use client";
import { useState } from "react";

export default function Apply() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    childName: "",
    dob: "",
    gender: "",
    classApply: "",
    prevSchool: "",
    dayBoarding: "Day",
    village: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = `*NEW ADMISSION APPLICATION - FAIRWAY N&P SCHOOL*\n\n` +
      `👨‍👩‍👧 Parent: ${form.parentName}\n` +
      `📞 Phone: ${form.phone}\n` +
      `👶 Child: ${form.childName}\n` +
      `🎂 DOB: ${form.dob}\n` +
      `⚧️ Gender: ${form.gender}\n` +
      `📚 Applying for: ${form.classApply}\n` +
      `🏫 Previous School: ${form.prevSchool}\n` +
      `🛏️ Type: ${form.dayBoarding}\n` +
      `📍 Village: ${form.village}\n\n` +
      `Please confirm interview this Saturday 8am-2pm at P.O BOX 102 Iganga`;

    const waLink = `https://wa.me/256782631761?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");

    // Also second number
    setTimeout(()=> {
      window.open(`https://wa.me/256758735343?text=${encodeURIComponent(message)}`, "_blank");
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] font-sans antialiased">

      {/* HERO */}
      <section className="bg-[#0D4DA1] py-14 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-[#FFCB05] text-[#0D4DA1] text-[11px] font-black px-4 py-2 rounded-full mb-4">ADMISSIONS OPEN 2026 • APPLY IN 2 MINS</div>
          <h1 className="text-4xl md:text-5xl font-black leading-[0.9]">Apply Now - <span className="text-[#FFCB05]">Secure Slot</span></h1>
          <p className="text-blue-100/80 text-[14px] mt-4">Fill form → Click Submit → It will open WhatsApp with your details to 0782631761 / 0758735343. No online payment needed.</p>
          <div className="mt-6 inline-flex gap-3 text-[11px] font-bold">
            <span className="bg-white/10 px-4 py-2 rounded-full">✓ No Interview Fee</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">✓ Reply in 5 mins</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">✓ Start Monday</span>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-6 py-12 -mt-8 relative z-10">
        <div className="bg-white rounded-[24px] p-7 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border">

          <h2 className="text-[18px] font-black text-[#0D4DA1]">1. Parent / Guardian Information</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-black text-gray-600">PARENT FULL NAME *</label>
                <input required value={form.parentName} onChange={e=>setForm({...form, parentName:e.target.value})} placeholder="Mrs. Namulondo Sarah" className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none" />
              </div>
              <div>
                <label className="text-[11px] font-black text-gray-600">PHONE / WHATSAPP *</label>
                <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="0782 631 761" className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none" />
              </div>
            </div>

            <h2 className="text-[18px] font-black text-[#0D4DA1] pt-6 border-t">2. Child Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-[11px] font-black text-gray-600">CHILD FULL NAME *</label>
                <input required value={form.childName} onChange={e=>setForm({...form, childName:e.target.value})} placeholder="Isabirye John Winner" className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none" />
              </div>
              <div>
                <label className="text-[11px] font-black text-gray-600">DATE OF BIRTH</label>
                <input type="date" value={form.dob} onChange={e=>setForm({...form, dob:e.target.value})} className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none" />
              </div>
              <div>
                <label className="text-[11px] font-black text-gray-600">GENDER</label>
                <select required value={form.gender} onChange={e=>setForm({...form, gender:e.target.value})} className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none">
                  <option value="">Select</option>
                  <option>Boy</option>
                  <option>Girl</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] font-black text-gray-600">CLASS APPLYING FOR *</label>
                <select required value={form.classApply} onChange={e=>setForm({...form, classApply:e.target.value})} className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none">
                  <option value="">Select Class</option>
                  <option>Baby Class (3yrs)</option>
                  <option>Middle Class (4yrs)</option>
                  <option>Top Class (5-6yrs)</option>
                  <option>P.1</option>
                  <option>P.2</option>
                  <option>P.3</option>
                  <option>P.4</option>
                  <option>P.5</option>
                  <option>P.6</option>
                  <option>P.7 (Limited)</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] font-black text-gray-600">DAY / BOARDING *</label>
                <select value={form.dayBoarding} onChange={e=>setForm({...form, dayBoarding:e.target.value})} className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none">
                  <option>Day</option>
                  <option>Boarding</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] font-black text-gray-600">PREVIOUS SCHOOL (if any)</label>
                <input value={form.prevSchool} onChange={e=>setForm({...form, prevSchool:e.target.value})} placeholder="e.g. ABC Nursery Iganga" className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none" />
              </div>
              <div>
                <label className="text-[11px] font-black text-gray-600">VILLAGE / TOWN</label>
                <input value={form.village} onChange={e=>setForm({...form, village:e.target.value})} placeholder="e.g. Nakalama, Iganga Town" className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] focus:border-[#0D4DA1] outline-none" />
              </div>
            </div>

            <div className="bg-[#FFCB05]/20 rounded-xl p-4 text-[12px] text-[#0D4DA1]">
              <p className="font-black">What happens after you submit?</p>
              <p className="mt-1 leading-relaxed">1. WhatsApp will open with your details → Send it.<br/>2. We reply in 5 mins with interview confirmation.<br/>3. Come Saturday 8am-2pm with birth certificate + 2 photos + report.<br/>4. Child starts Monday if admitted.</p>
            </div>

            <button type="submit" className="w-full bg-[#E30613] text-white py-4 rounded-full font-black text-[14px] hover:bg-red-700 transition shadow-xl">Submit & Send via WhatsApp →</button>

            <p className="text-[11px] text-gray-400 text-center">By applying, you agree to school rules. Reg: PPS/F/95 • P.O BOX 102 Iganga • Tel: 0782631761</p>
          </form>
        </div>

        {/* TRUST */}
        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="bg-white rounded-xl p-4 border"><p className="text-xl">🔒</p><p className="text-[11px] font-bold mt-1 text-gray-600">Safe & Secure Data</p></div>
          <div className="bg-white rounded-xl p-4 border"><p className="text-xl">⚡</p><p className="text-[11px] font-bold mt-1 text-gray-600">Instant WhatsApp</p></div>
          <div className="bg-white rounded-xl p-4 border"><p className="text-xl">🎓</p><p className="text-[11px] font-bold mt-1 text-gray-600">800+ Happy Parents</p></div>
        </div>
      </section>

    </main>
  );
}