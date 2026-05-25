import { Smartphone, Mail, MapPin, Globe } from "lucide-react";

export function PageContacts() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center items-center text-center relative blueprint-grid border-b border-neutral-800">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-5 print-hidden" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}></div>

      <div className="mb-16 mt-8 relative z-10 w-full">
        <h2 className="text-5xl font-bold tracking-widest text-white uppercase border-b border-white/10 pb-6 inline-block">
          CONTACT / PARTNERSHIP
        </h2>
      </div>

      {/* Main Info Blocks */}
      <div className="flex flex-row justify-center items-center gap-16 lg:gap-24 relative z-10 w-full mb-16 px-12">
        {/* Contact info */}
        <div className="flex flex-col gap-8 text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 flex justify-center items-center bg-[#0D0D0F]">
              <Smartphone className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-neutral-500 mb-0.5 tracking-wider">WhatsApp / Direct</span>
              <span className="text-sm font-bold tracking-wide text-white">+7 (***) ***-**-**</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 flex justify-center items-center bg-[#0D0D0F]">
              <Mail className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-neutral-500 mb-0.5 tracking-wider">Email</span>
              <span className="text-sm font-bold tracking-wide text-white">partnership@caspianshade.kz</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 flex justify-center items-center bg-[#0D0D0F]">
              <MapPin className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-neutral-500 mb-0.5 tracking-wider">Location</span>
              <span className="text-sm font-bold tracking-wide text-white">Atyrau, Kazakhstan</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 flex justify-center items-center bg-[#0D0D0F]">
              <Globe className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-neutral-500 mb-0.5 tracking-wider">Website & Social</span>
              <span className="text-sm font-bold tracking-wide text-white">caspianshade.kz</span>
              <span className="text-xs text-neutral-400 mt-1 font-light">@caspianshade (Instagram)</span>
            </div>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white p-3 flex items-center justify-center border-4 border-white/10 shadow-2xl">
            {/* Minimalist QR representation using borders/blocks */}
            <div className="w-full h-full border-[6px] border-[#0D0D0F] relative">
              <div className="absolute top-2 left-2 w-8 h-8 border-[6px] border-[#0D0D0F]"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-[6px] border-[#0D0D0F]"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-[6px] border-[#0D0D0F]"></div>
              <div className="absolute top-14 left-14 right-14 bottom-14 bg-[#0D0D0F]"></div>
              <div className="absolute top-2 left-12 w-6 h-4 bg-[#0D0D0F]"></div>
              <div className="absolute bottom-2 right-2 w-10 h-10 bg-[#0D0D0F]"></div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 mt-6 uppercase tracking-[0.2em] text-center">
            Scan to save <br/>contacts
          </span>
        </div>
      </div>

      {/* Footer Title */}
      <div className="mt-auto relative z-10 border-t border-white/10 w-full pt-8 text-center pb-2 flex justify-between items-center px-4">
         <span className="text-[10px] tracking-widest text-neutral-500 uppercase">Caspian Shade</span>
         <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            Engineering Climate Systems for Western Kazakhstan
         </span>
         <span className="text-[10px] tracking-widest text-neutral-500 uppercase line-through opacity-0">Caspian Shade</span>
      </div>
    </section>
  );
}
