import { Wind, Cloud, Sun, Bug } from "lucide-react";
import imageWind from "../assets/images/regenerated_image_1779795847581.png";
import imageDust from "../assets/images/regenerated_image_1779795853053.png";
import imageHeat from "../assets/images/regenerated_image_1779800252248.png";
import imageBugs from "../assets/images/regenerated_image_1779800257272.png";

export function PageProblem() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center blueprint-grid border-b border-neutral-800">
      <div className="mb-8 border-b border-white/10 pb-4">
        <span className="text-xs font-mono tracking-[0.3em] font-medium text-neutral-400 mb-2 uppercase block">Региональная проблематика</span>
        <h2 className="text-5xl font-bold tracking-tighter text-white max-w-3xl leading-tight">
          ПОЧЕМУ СТАНДАРТНЫЕ РЕШЕНИЯ <br />
          <span className="text-neutral-500 font-light">НЕ РАБОТАЮТ В АТЫРАУ</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-8 items-start mt-6 flex-1">
        {/* Left Side: Cards */}
        <div className="col-span-7 grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-5 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col">
            <img src={imageWind} alt="Сильный ветер" className="h-24 w-full object-cover mb-5 border border-white/10" />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Сильный ветер</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Порывы до 120 км/ч повреждают стандартные тенты. Требуется жесткая фиксация.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-5 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col">
            <img src={imageDust} alt="Пыльные бури" className="h-24 w-full object-cover mb-5 border border-white/10" />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Пыльные бури</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Степная пыль быстро оседает. Обычное остекление не дает нужной вентиляции.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-5 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col">
            <img src={imageHeat} alt="Экстремальная жара" className="h-24 w-full object-cover mb-5 border border-white/10 opacity-80" />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Экстремальная жара</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Парниковый эффект. Необходима технологичная screen-ткань для рассеивания UV.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0D0D0F] border border-white/10 p-5 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col">
             <img src={imageBugs} alt="Мошкара и комары" className="h-24 w-full object-cover mb-5 border border-white/10" />
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Мошкара и комары</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Локальная особенность делает террасы некомфортными в вечернее время.</p>
          </div>
        </div>

        {/* Right Side: Engineering Explanation */}
        <div className="col-span-5 flex flex-col justify-center h-full">
          <div className="p-8 border border-white/10 technical-line">
            <h3 className="text-2xl font-bold tracking-tighter text-white mb-6">ИНЖЕНЕРНОЕ<br/><span className="text-neutral-400 font-light">ZIP-РЕШЕНИЕ</span></h3>
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
