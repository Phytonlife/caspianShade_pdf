import { Wind, Cloud, Sun, Bug } from "lucide-react";

export function PageProblem() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center blueprint-grid border-b border-neutral-800">
      <div className="mb-12 border-b border-white/10 pb-6">
        <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-2 uppercase block">Региональная проблематика</span>
        <h2 className="text-5xl font-bold tracking-tighter text-white max-w-3xl leading-tight">
          ПОЧЕМУ СТАНДАРТНЫЕ РЕШЕНИЯ <br />
          <span className="text-neutral-500 font-light">НЕ РАБОТАЮТ В АТЫРАУ</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-12 items-start mt-8 flex-1">
        {/* Left Side: Cards */}
        <div className="col-span-7 grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Wind className="w-16 h-16" strokeWidth={1} />
            </div>
            <Wind className="w-6 h-6 text-neutral-400 mb-6" strokeWidth={1} />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Сильный ветер</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Порывы до 120 км/ч повреждают стандартные тенты и маркизы. Требуется жесткая фиксация.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Cloud className="w-16 h-16" strokeWidth={1} />
            </div>
            <Cloud className="w-6 h-6 text-neutral-400 mb-6" strokeWidth={1} />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Пыльные бури</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Степная пыль быстро оседает на мебели. Обычное остекление не обеспечивает нужной вентиляции.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Sun className="w-16 h-16" strokeWidth={1} />
            </div>
            <Sun className="w-6 h-6 text-neutral-400 mb-6" strokeWidth={1} />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Экстремальная жара</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Парниковый эффект на террасах летом. Необходима технологичная screen-ткань для рассеивания UV.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Bug className="w-16 h-16" strokeWidth={1} />
            </div>
            <Bug className="w-6 h-6 text-neutral-400 mb-6" strokeWidth={1} />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Мошкара и комары</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Локальная особенность региона делает открытые террасы некомфортными в вечернее время.</p>
          </div>
        </div>

        {/* Right Side: Engineering Explanation */}
        <div className="col-span-5 flex flex-col justify-center h-full">
          <div className="p-8 border border-white/10 technical-line">
            <h3 className="text-2xl font-bold tracking-tighter text-white mb-6">ИНЖЕНЕРНОЕ<br/><span className="text-neutral-500 font-light">ZIP-РЕШЕНИЕ</span></h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              Технология ZIP использует принцип "молнии", впаянной в края ткани, которая надежно фиксируется в направляющих профилях. В сочетании с усиленными алюминиевыми системами это полностью решает климатические проблемы Западного Казахстана.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans">Ветровая нагрузка</span>
                <span className="text-white font-mono text-sm tracking-wider">DO 120 KM/H</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans">Блокировка UV</span>
                <span className="text-white font-mono text-sm tracking-wider">UP TO 95%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans">Фильтрация пыли</span>
                <span className="text-white font-mono text-sm tracking-wider">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans">Вентиляция террасы</span>
                <span className="text-white font-mono text-sm tracking-wider">MICRO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
