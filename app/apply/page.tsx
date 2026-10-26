import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="bg-white">
      <section className="relative h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#BF000A]/80"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-[11px] font-black tracking-[0.2em] bg-white/20 px-4 py-2 rounded-full inline-block">ADMISSION FREE 2026</p>
          <h1 className="text-[42px] font-black mt-4 leading-[0.9]">Apply Now</h1>
          <p className="text-[13px] mt-3 opacity-90">Kigulu Iganga - Baby to P7 - MTN 0782198528</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-[28px] font-black">Admission FREE 2026</h2>
        <p className="text-[13px] text-gray-600 mt-3">Visit school in Kigulu - 3k Boda from Iganga Town - Van 100k-130k with Matron</p>
        <div className="mt-8 bg-[#FFFBFB] border rounded-xl p-6 text-left text-[13px] leading-7">
          <p><b>Requirements:</b> Birth certificate, 2 passport photos</p>
          <p><b>Uniform:</b> Nursery 130k Primary 150k</p>
          <p><b>Fees:</b> Baby 250k/540k - P7 350k/630k - See Classes page</p>
          <p><b>Location:</b> Kigulu, Iganga District</p>
          <p><b>Contact:</b> MTN 0782198528</p>
          <p><b>Islam:</b> Hijab allowed, Halal meals</p>
        </div>
        <a href="https://wa.me/256782198528?text=Hello%20MEDAG%20I%20want%20to%20apply%202026" className="inline-block mt-8 bg-[#BF000A] text-white px-8 py-4 rounded-full font-black text-[12px]">Apply via WhatsApp →</a>
      </section>
    </main>
  );
}