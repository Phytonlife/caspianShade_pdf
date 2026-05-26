import { CheckCircle2, Wrench } from "lucide-react";
import imageTeam from "../assets/images/regenerated_image_1779801319971.png";

export function PageWhyUs() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center relative blueprint-grid border-b border-neutral-800">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -z-10 border-l border-white/10"></div>
      
      <div className="mb-8 border-b border-white/10 pb-4">
        <span className="text-xs font-mono tracking-[0.3em] font-medium text-neutral-400 mb-2 uppercase block">Corporate Advantage</span>
        <h2 className="text-5xl font-bold tracking-tighter text-white leading-tight">
          ЛОКАЛЬНАЯ <br />
          <span className="text-neutral-500 font-light">ИНЖЕНЕРНАЯ КОМАНДА</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-8 flex-1 items-start mt-6">
        {/* Left Side: Image Content */}
        <div className="col-span-5 h-[360px] lg:h-[400px] relative border border-white/10 bg-[#0D0D0F] overflow-hidden">
           {/* Fallback pattern if image is hidden in print or fails */}
           <div className="absolute inset-0 opacity-20 flex" style={{ 
              backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #333 10px, #333 11px)' 
           }}></div>
           <img 
            src={imageTeam} 
            alt="Engineer at work" 
            className="w-full h-full object-cover opacity-20 absolute inset-0"
           />
           <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
           
           <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0D0D0F]/90 backdrop-blur border border-white/20">
             <div className="flex items-center gap-3">
               <Wrench className="w-5 h-5 text-neutral-400" strokeWidth={1} />
               <span className="font-mono text-xs text-white tracking-widest uppercase">Atyrau Engineering Hub</span>
             </div>
           </div>
        </div>

        {/* Right Side: Technical Advantages */}
        <div className="col-span-7 flex flex-col justify-center h-full space-y-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="flex flex-col">
              <span className="flex items-center gap-2 font-bold text-white tracking-wide mb-2 uppercase text-sm border-b border-white/10 pb-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                Лазерная точность
              </span>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Замеры и установка с использованием лазерных нивелиров. Идеальная геометрия даже на сложных фасадах.
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="flex items-center gap-2 font-bold text-white tracking-wide mb-2 uppercase text-sm border-b border-white/10 pb-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                Локальный сервис
              </span>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Оперативное обслуживание и ремонт. Свой склад запчастей и комплектующих по Западном Казахстану.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="flex items-center gap-2 font-bold text-white tracking-wide mb-2 uppercase text-sm border-b border-white/10 pb-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                Чистая установка
              </span>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Монтаж с использованием индустриальных пылесосов. Бережное отношение к готовому ремонту.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="flex items-center gap-2 font-bold text-white tracking-wide mb-2 uppercase text-sm border-b border-white/10 pb-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                Скрытая проводка
              </span>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Проектирование и интеграция кабель-каналов в фасад клиента без нарушения гидроизоляции.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Infrastructure */}
      <div className="grid grid-cols-4 gap-4 mt-auto border-t border-white/10 pt-8 text-center divide-x divide-white/10">
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Локальная база</span>
          <span className="text-[10px] uppercase text-neutral-500 font-mono tracking-widest">Штаб-квартира в г. Атырау</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Собственная логистика</span>
          <span className="text-[10px] uppercase text-neutral-500 font-mono tracking-widest">Доставка спецтранспортом</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Проф. оборудование</span>
          <span className="text-[10px] uppercase text-neutral-500 font-mono tracking-widest">Лазерное нивелирование</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Оперативный сервис</span>
          <span className="text-[10px] uppercase text-neutral-500 font-mono tracking-widest">Выезд в течение 24-48 ч</span>
        </div>
      </div>
    </section>
  );
}
