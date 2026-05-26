import { Coffee, Hotel, Store, Wine } from "lucide-react";

export function PageHoreca() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center relative blueprint-grid border-b border-neutral-800">
      <div className="absolute top-0 right-0 w-2/5 h-full border-l border-white/10 opacity-20 bg-[#0D0D0F]">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Horeca background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0F] via-[#0D0D0F]/80 to-transparent"></div>
      </div>
      
      <div className="mb-8 border-b border-white/10 pb-4 relative z-10 w-3/5">
        <span className="text-xs font-mono tracking-[0.3em] font-medium text-neutral-400 mb-2 uppercase block">Золотой рынок</span>
        <h2 className="text-5xl font-bold tracking-tighter text-white leading-tight">
          HORECA <br />
          <span className="text-neutral-500 font-light">SOLUTIONS</span>
        </h2>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center gap-12 w-full lg:w-3/5 mt-4">
        <p className="text-lg text-neutral-400 leading-relaxed font-light">
          Основной канал сбыта в регионе — коммерческие террасы. ZIP-системы позволяют рестораторам фиксировать прибыль, не завися от капризов погоды в Атырау.
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
             <span className="text-sm font-bold text-white tracking-widest uppercase border-b border-white/10 pb-2">Целевые объекты</span>
             <ul className="space-y-4">
                <li className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-[#0D0D0F]"><Wine className="w-4 h-4 text-neutral-400" /></div>
                   <span className="text-sm text-neutral-300">Рестораны и бары</span>
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-[#0D0D0F]"><Coffee className="w-4 h-4 text-neutral-400" /></div>
                   <span className="text-sm text-neutral-300">Летние кофейни</span>
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-[#0D0D0F]"><Store className="w-4 h-4 text-neutral-400" /></div>
                   <span className="text-sm text-neutral-300">Открытые веранды</span>
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-[#0D0D0F]"><Hotel className="w-4 h-4 text-neutral-400" /></div>
                   <span className="text-sm text-neutral-300">Terrace lounge & Гостиницы</span>
                </li>
             </ul>
          </div>
          
          <div className="flex flex-col gap-4">
             <span className="text-sm font-bold text-white tracking-widest uppercase border-b border-white/10 pb-2">Финансовая ценность</span>
             <ul className="space-y-4 pt-1">
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-sm bg-neutral-500 mt-1.5"></div>
                   <span className="text-sm text-neutral-300 font-medium leading-snug">Стабильная посадка<br/><span className="text-xs text-neutral-500 font-light mt-1 block">полный зал даже в плохую погоду</span></span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-sm bg-neutral-500 mt-1.5"></div>
                   <span className="text-sm text-neutral-300 font-medium leading-snug">Защита гостей<br/><span className="text-xs text-neutral-500 font-light mt-1 block">от палящего солнца и мошкары вечером</span></span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-sm bg-neutral-500 mt-1.5"></div>
                   <span className="text-sm text-neutral-300 font-medium leading-snug">Продление сезона<br/><span className="text-xs text-neutral-500 font-light mt-1 block">комфорт ранней весной и осенью</span></span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-sm bg-neutral-500 mt-1.5"></div>
                   <span className="text-sm text-neutral-300 font-medium leading-snug">Премиальный вид<br/><span className="text-xs text-neutral-500 font-light mt-1 block">безупречная архитектурная интеграция</span></span>
                </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
