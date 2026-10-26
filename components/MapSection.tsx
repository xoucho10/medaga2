export default function MapSection() {
  return (
    <div className="bg-white border-t">
      <div className="bg-[#FFFBFB] py-3 text-center">
        <p className="text-[10px] font-black tracking-[0.2em] text-gray-500">FIND US - KIGULU, IGANGA DISTRICT - 3K BODA FROM IGANGA TOWN</p>
      </div>
      <iframe 
        src="https://www.google.com/maps?q=Kigulu%20Iganga%20Uganda&z=14&output=embed" 
        width="100%" 
        height="320" 
        style={{border:0}} 
        loading="lazy"
      ></iframe>
    </div>
  );
}