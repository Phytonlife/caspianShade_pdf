import { Smartphone, Mail, MapPin, Globe } from "lucide-react";

export function PageContacts() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center items-center text-center relative blueprint-grid border-b border-neutral-800">
      <div className="absolute inset-0 z-0 print-hidden opacity-5 bg-[#0D0D0F]">
         <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="contacts background" className="w-full h-full object-cover" />
      </div>

      <div className="mb-16 mt-8 relative z-10 w-full">
        <h2 className="text-5xl font-bold tracking-widest text-white uppercase mb-6 inline-block">
          NEXT STEP
        </h2>
        <div className="text-center max-w-3xl mx-auto border-b border-t border-white/10 py-8 px-4 bg-white/5 mb-10">
          <h3 className="font-bold text-2xl text-white mb-4 uppercase tracking-wide">Готовы обсудить партнерство</h3>
          <p className="text-neutral-300 font-light text-base leading-relaxed mb-6">
            Мы ищем одного надежного производителя для эксклюзивного развития ZIP-направления в Западном Казахстане.
          </p>
          <div className="grid grid-cols-2 text-left gap-4 max-w-2xl mx-auto mb-6">
             <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></div>
                <span className="text-sm text-neutral-400">Инвестируем в <b>showroom</b></span>
             </div>
             <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></div>
                <span className="text-sm text-neutral-400">Организуем <b>локальный сервис</b></span>
             </div>
             <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></div>
                <span className="text-sm text-neutral-400">Продвигаем <b>ваш бренд</b> в регионе</span>
             </div>
             <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></div>
                <span className="text-sm text-neutral-400">Обеспечиваем <b>инженерный монтаж</b></span>
             </div>
          </div>
          <div className="text-sm border border-neutral-700 bg-[#0D0D0F] inline-block px-6 py-3 font-mono text-neutral-300 uppercase tracking-widest">
            Предлагаем провести online-встречу для обсуждения условий
          </div>
        </div>
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
              <span className="text-sm font-bold tracking-wide text-white">+7 702 270 2500</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 flex justify-center items-center bg-[#0D0D0F]">
              <Mail className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-neutral-500 mb-0.5 tracking-wider">Email</span>
              <span className="text-sm font-bold tracking-wide text-white">info.caspianshade@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 flex justify-center items-center bg-[#0D0D0F]">
              <MapPin className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-neutral-500 mb-0.5 tracking-wider">Location</span>
              <span className="text-sm font-bold tracking-wide text-white">Атырау СМП 163 блок 5б</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white/10 flex justify-center items-center bg-[#0D0D0F]">
              <Globe className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-neutral-500 mb-0.5 tracking-wider">Website & Social</span>
              <span className="text-sm font-bold tracking-wide text-white lowercase">caspian-shade.vercel.app</span>
              <span className="text-xs text-neutral-400 mt-1 font-light">@info.caspianshade (Instagram)</span>
            </div>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white p-3 flex items-center justify-center border-4 border-white/10 shadow-2xl">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://caspian-shade.vercel.app" alt="QR Code" className="w-full h-full object-contain bg-white" />
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
