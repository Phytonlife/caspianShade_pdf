import { MapPin, CheckSquare, Target } from "lucide-react";

export function PagePartnership() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center relative blueprint-grid border-b border-neutral-800">
      <div className="mb-8 border-b border-white/10 pb-4">
        <span className="text-xs font-mono tracking-[0.3em] font-medium text-neutral-400 mb-2 uppercase block">Why Caspian Shade</span>
        <h2 className="text-5xl font-bold text-white leading-tight mb-2 tracking-tighter uppercase">
          Эксклюзивное <br/> дилерство
        </h2>
        <p className="text-neutral-400 font-light text-sm lg:text-base max-w-2xl">
          Атырау и Западный Казахстан — стратегические регионы. Мы предлагаем не просто закупку, а инженерный подход к продажам ZIP-систем.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 flex-1 mt-4">
        {/* Left: Your advantages / Market Gap */}
        <div className="bg-[#0D0D0F] border border-white/10 p-8 flex flex-col hover:border-white/20 transition-all">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <Target className="w-5 h-5 text-neutral-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-bold">ПОЗИЦИОНИРОВАНИЕ НА РЫНКЕ</span>
          </div>
          
          <ul className="space-y-6 text-sm font-light text-neutral-400">
            <li className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-0.5 text-neutral-500" strokeWidth={1.5} shrink-0="true" />
              <span><strong className="text-white font-medium block mb-1">Регион без сильных ZIP-интеграторов</strong> Рынок свободен от качественного инженерного монтажа.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-0.5 text-neutral-500" strokeWidth={1.5} shrink-0="true" />
              <span><strong className="text-white font-medium block mb-1">Инженерный подход, а не \"шабашники\"</strong> Проектировщики и профессиональная установка снимают головную боль с завода.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckSquare className="w-4 h-4 mt-0.5 text-neutral-500" strokeWidth={1.5} shrink-0="true" />
              <span><strong className="text-white font-medium block mb-1">Фокус на HoReCa и премиум B2C</strong> Выход на клиентов с высокой маржинальностью и объемами.</span>
            </li>
          </ul>
        </div>

        {/* Right: What we bring */}
        <div className="bg-[#0D0D0F] border border-white/10 p-8 flex flex-col hover:border-white/20 transition-all cursor-default relative overflow-hidden">
           <div className="absolute inset-0 bg-neutral-900/20 z-0"></div>
           <div className="relative z-10 hidden print:block mb-4">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" className="w-full h-32 object-cover grayscale opacity-40 border border-white/10" alt="Showroom office" />
           </div>
          <div className="relative z-10 flex items-center gap-3 mb-6 border-b border-white/10 pb-4 print:mt-0">
             <div className="w-5 h-5 rounded-full border border-neutral-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
             </div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-bold">ГОТОВНОСТЬ К ИНВЕСТИЦИЯМ</span>
          </div>
          
          <ul className="relative z-10 space-y-6 text-sm font-light text-neutral-400">
            <li className="flex items-start gap-4">
              <div className="w-4 h-px bg-neutral-500 mt-2 shrink-0"></div>
              <span><strong className="text-white font-medium">Шоурум и представительство</strong> Готовность инвестировать в полноценную бренд-зону производителя.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-4 h-px bg-neutral-500 mt-2 shrink-0"></div>
              <span><strong className="text-white font-medium">Локальная база в Атырау</strong> Формирование склада комплектующих для оперативного сервиса.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-4 h-px bg-neutral-500 mt-2 shrink-0"></div>
              <span><strong className="text-white font-medium">Развитие региона</strong> Поступательная экспансия в соседние области на базе вашей продукции.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom: Regional Map Marker logic */}
      <div className="mt-8 flex flex-col items-center">
        <div className="w-full max-w-4xl border-t border-b border-white/10 py-6 flex justify-between items-center px-4 relative overflow-hidden bg-white/5">
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Map" />
          <span className="relative z-10 text-sm font-bold tracking-widest text-white uppercase text-center w-full">Зона интересов: Западный Казахстан</span>
        </div>
        <div className="flex gap-16 mt-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-neutral-200" strokeWidth={1.5} />
            <span className="font-mono text-sm text-white font-bold tracking-widest">ATYRAU</span>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <MapPin className="w-4 h-4 text-neutral-500" strokeWidth={1.5} />
            <span className="font-mono text-xs text-neutral-400 tracking-widest">AKTAU</span>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <MapPin className="w-4 h-4 text-neutral-500" strokeWidth={1.5} />
            <span className="font-mono text-xs text-neutral-400 tracking-widest">AKTOBE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
