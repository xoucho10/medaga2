
"use client";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Classroom", "Assembly", "Sports", "Boarding", "Events", "PLE"];

const images = [
  { id:1, cat:"Classroom", title:"P.3 English Lesson", src:"/gallery/class1.jpg", color:"bg-blue-100" },
  { id:2, cat:"Assembly", title:"Monday Assembly & Prayer", src:"/gallery/assembly.jpg", color:"bg-blue-200" },
  { id:3, cat:"Sports", title:"Inter-House Sports Day 2024", src:"/gallery/sports.jpg", color:"bg-[#FFCB05]/50" },
  { id:4, cat:"Boarding", title:"Girls Dorm - Matron Time", src:"/gallery/dorm.jpg", color:"bg-pink-100" },
  { id:5, cat:"Events", title:"Top Class Graduation 2024", src:"/gallery/grad.jpg", color:"bg-red-100" },
  { id:6, cat:"Classroom", title:"Science Practical P.6", src:"/gallery/science.jpg", color:"bg-green-100" },
  { id:7, cat:"PLE", title:"PLE 2024 Celebration - 45 D1", src:"/gallery/ple.jpg", color:"bg-purple-100" },
  { id:8, cat:"Sports", title:"Football Team - Busoga Champions", src:"/gallery/football.jpg", color:"bg-orange-100" },
  { id:9, cat:"Boarding", title:"Dining Hall - Lunch Time", src:"/gallery/dining.jpg", color:"bg-yellow-100" },
];

const videos = [
  { id:1, title:"A Day at XXXXXXX - Morning Assembly to Prep", youtube:"https://www.youtube.com/embed/dQw4w9WgXcQ", thumb:"Assembly Video" },
  { id:2, title:"PLE 2024 Results Celebration", youtube:"https://www.youtube.com/embed/dQw4w9WgXcQ", thumb:"PLE Celebration" },
  { id:3, title:"Boarding Life - Safe & Loving", youtube:"https://www.youtube.com/embed/dQw4w9WgXcQ", thumb:"Boarding Tour" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<any>(null);

  const filtered = active === "All"? images : images.filter(i => i.cat === active);

  return (
    <main className="min-h-screen bg-white font-sans antialiased">

      {/* HERO */}
      <section className="bg-[#0D4DA1] py-14 md:py-20 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,203,5,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-block bg-[#FFCB05] text-[#0D4DA1] text-[10px] md:text-[11px] font-black px-4 py-2 rounded-full mb-4">GALLERY • 200+ PHOTOS & VIDEOS</div>
          <h1 className="text-[32px] md:text-6xl font-black leading-[0.9]">Life at <span className="text-[#FFCB05]">XXXXXX</span><br/>In Pictures & Videos</h1>
          <p className="text-blue-100/80 text-[13px] md:text-[14px] mt-4 max-w-xl mx-auto">Classroom, boarding, sports, assembly, PLE, graduation - See why 800+ parents trust us.</p>
        </div>
      </section>

      {/* FILTERS - STICKY WITH SCROLL ON MOBILE */}
      <section className="max-w-7xl mx-auto px-0 md:px-6 sticky top-[68px] md:top-[88px] bg-white/95 backdrop-blur z-30 border-b md:border-0">
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-6 py-4 md:justify-center">
          {categories.map(c => (
            <button key={c} onClick={()=>setActive(c)} className={`shrink-0 px-5 py-2.5 rounded-full text-[11px] md:text-[12px] font-black transition ${active===c? "bg-[#0D4DA1] text-white shadow-lg" : "bg-[#F6F7F9] text-gray-600 hover:bg-gray-200"}`}>{c}</button>
          ))}
        </div>
      </section>

      {/* PHOTOS GRID - 1 COL ON TINY PHONE */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6">
          {filtered.map(img => (
            <div key={img.id} onClick={()=>setSelected(img)} className={`group ${img.color} rounded-[16px] md:rounded-[20px] h-[200px] sm:h-[180px] md:h-[260px] flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition duration-300 relative overflow-hidden`}>
              <div className="text-[28px] group-hover:scale-110 transition">📸</div>
              <p className="font-black text-[13px] mt-3 text-[#0D4DA1]">{img.title}</p>
              <p className="text-[10px] text-gray-600 mt-1 font-bold tracking-wide">{img.cat}</p>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] py-1.5 text-center opacity-0 group-hover:opacity-100 transition">Click to view</div>
              {/* REAL IMAGE: uncomment when you have photos
              <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover" />
              */}
            </div>
          ))}
        </div>
        {filtered.length===0 && <p className="text-center text-gray-400 text-[13px] mt-10">No photos in this category yet.</p>}
        <p className="text-center text-[11px] text-gray-400 mt-8">To add real photos: put images in <b>public/gallery/</b> folder and uncomment img tag.</p>
      </section>

      {/* VIDEOS */}
      <section className="bg-[#F8F9FB] py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-3 mb-8">
            <div><h2 className="text-[22px] md:text-[28px] font-black text-[#0D4DA1]">School Videos</h2><p className="text-[13px] text-gray-500 mt-1">Watch life at XXXXXXX - Assembly, PLE, Boarding</p></div>
            <a href="https://youtube.com" target="_blank" className="w-full md:w-auto text-center bg-[#E30613] text-white px-5 py-3 rounded-full text-[12px] font-black">YouTube Channel →</a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {videos.map(v => (
              <div key={v.id} className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="aspect-video bg-[#0D4DA1] flex items-center justify-center text-white font-bold text-[12px] relative">
                  <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">▶</span>
                  <p className="absolute bottom-2 left-3 text-[10px] bg-black/50 px-2 py-1 rounded-full">{v.thumb}</p>
                </div>
                <div className="p-4">
                  <p className="font-black text-[13px] text-[#0D4DA1]">{v.title}</p>
                  <p className="text-[11px] text-gray-500 mt-1">Tap to play • HD</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 bg-[#0D4DA1] rounded-[16px] md:rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white text-center md:text-left">
            <div>
              <h3 className="font-black text-[16px]">Want Virtual Tour of Campus?</h3>
              <p className="text-[12px] text-blue-200 mt-1">Live WhatsApp video tour every Saturday 9am-12pm</p>
            </div>
            <a href="https://wa.me/256782631761?text=Hello%20I%20want%20virtual%20tour%20of%20XXXXXX%20School" target="_blank" className="w-full md:w-auto text-center bg-[#25D366] px-6 py-3 rounded-full font-black text-[12px]">Request WhatsApp Tour →</a>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-black text-[#0D4DA1] text-center">Our Facilities in Photos</h2>
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            {n:"Classrooms", d:"30 pupils max", e:"🏫"},
            {n:"Library", d:"800+ books", e:"📚"},
            {n:"Computer Lab", d:"P.3-P.7 ICT", e:"💻"},
            {n:"Play Ground", d:"Football & Netball", e:"⚽"},
            {n:"Dining Hall", d:"Boarding meals", e:"🍲"},
            {n:"Dormitories", d:"Matron 24/7", e:"🛏️"},
            {n:"Chapel", d:"Prayer & SU", e:"✝️"},
            {n:"Admin Block", d:"Visit us", e:"🏢"},
          ].map((f,i)=>(
            <div key={i} className="bg-[#F8F9FB] rounded-[14px] md:rounded-[16px] p-4 md:p-5 text-center hover:bg-white hover:shadow-lg transition">
              <div className="text-[20px] md:text-[22px]">{f.e}</div>
              <p className="font-black text-[11px] md:text-[12px] text-[#0D4DA1] mt-2">{f.n}</p>
              <p className="text-[10px] md:text-[11px] text-gray-500 mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL - FULL SCREEN ON MOBILE */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 md:p-6" onClick={()=>setSelected(null)}>
          <div className="bg-white rounded-[16px] md:rounded-[20px] p-3 md:p-4 max-w-2xl w-full" onClick={e=>e.stopPropagation()}>
            <div className={`h-[280px] md:h-[400px] ${selected.color} rounded-[12px] md:rounded-[16px] flex items-center justify-center text-center p-4`}>
              <p className="font-black text-[#0D4DA1] text-[14px]">📸 {selected.title}<br/><span className="text-[11px] font-normal">Replace with real image: {selected.src}</span></p>
            </div>
            <div className="flex justify-between items-center mt-4 gap-3">
              <p className="font-black text-[13px] md:text-[14px] text-[#0D4DA1]">{selected.title}</p>
              <button onClick={()=>setSelected(null)} className="bg-gray-900 text-white px-5 py-2 rounded-full text-[12px] font-bold shrink-0">Close ✕</button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#FFCB05] py-10 md:py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <h3 className="font-black text-[#0D4DA1] text-[18px] md:text-[20px]">Love what you see? Admit your child this Saturday!</h3>
          <Link href="/apply" className="w-full md:w-auto text-center bg-[#0D4DA1] text-white px-7 py-3 rounded-full font-black text-[13px]">Apply Now →</Link>
        </div>
      </section>

    </main>
  );
}