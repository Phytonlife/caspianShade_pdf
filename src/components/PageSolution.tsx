import { Settings, Shield, Zap, Crosshair } from "lucide-react";

export function PageSolution() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center blueprint-grid border-b border-neutral-800">
      <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-2 uppercase block">Флагманское решение</span>
          <h2 className="text-5xl font-bold tracking-tighter text-white leading-tight">
            ZIP-SCREEN SYSTEMS
          </h2>
        </div>
        <div className="text-right max-w-xs">
          <p className="text-neutral-400 text-sm font-light">
            Моторизованная защита от солнца, ветра и осадков на базе алюминиевой экструзии.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-12 flex-1">
        {/* Left Side: Callouts */}
        <div className="col-span-4 flex flex-col justify-center space-y-8 pr-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2 text-white">
              <Shield className="w-5 h-5 text-neutral-400" strokeWidth={1} />
              <h4 className="font-bold tracking-wide text-sm uppercase">Экструдированный профиль</h4>
            </div>
            <p className="text-xs text-neutral-500 font-light pl-8">Толстостенный алюминиевый сплав, порошковая покраска по RAL, защита от коррозии.</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2 text-white">
              <Settings className="w-5 h-5 text-neutral-400" strokeWidth={1} />
              <h4 className="font-bold tracking-wide text-sm uppercase">Технология ZIP-фиксации</h4>
            </div>
            <p className="text-xs text-neutral-500 font-light pl-8">Края ткани впаяны в ZIP-молнию, исключающую парусность и вырывание из направляющих.</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2 text-white">
              <Crosshair className="w-5 h-5 text-neutral-400" strokeWidth={1} />
              <h4 className="font-bold tracking-wide text-sm uppercase">Screen-ткань</h4>
            </div>
            <p className="text-xs text-neutral-500 font-light pl-8">Стекловолокно Serge Ferrari. Пропускает воздух, блокирует жару, не поддерживает горение.</p>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2 text-white">
              <Zap className="w-5 h-5 text-neutral-400" strokeWidth={1} />
              <h4 className="font-bold tracking-wide text-sm uppercase">Скрытая автоматизация</h4>
            </div>
            <p className="text-xs text-neutral-500 font-light pl-8">Интегрированные внутривальные моторы Somfy. Управление с пульта, радиусом до 200м или со смартфона.</p>
          </div>
        </div>

        {/* Center: Hero Visual (Abstract representation of ZIP system) */}
        <div className="col-span-8 flex items-center justify-center relative bg-[#0D0D0F] border border-white/10 overflow-hidden p-8">
           <img 
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Engineering architecture details" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity inset-0 absolute print-hidden grayscale"
           />
           
           <div className="relative z-10 w-full max-w-lg border border-white/20 bg-[#0D0D0F]/90 backdrop-blur pb-4" style={{ padding: '2px' }}>
              <div className="w-full h-6 border-b border-white/20 bg-white/5 flex items-center px-4 mb-4 justify-between">
                 <span className="text-[10px] text-neutral-400 tracking-widest font-mono uppercase">ZIP CROSS-SECTION</span>
                 <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-neutral-600"></div>
                    <div className="w-1.5 h-1.5 bg-neutral-600"></div>
                 </div>
              </div>
              
              <div className="flex p-4 gap-6 items-center">
                 {/* Abstract ZIP Rail */}
                 <div className="w-16 h-48 bg-neutral-900 border-x border-neutral-700 relative flex justify-center">
                    <div className="absolute top-0 bottom-0 w-2 bg-neutral-950 flex items-center justify-center border-x border-neutral-800">
                       <div className="w-px h-full bg-neutral-500"></div>
                    </div>
                 </div>
                 
                 {/* Abstract Fabric and Box */}
                 <div className="flex-1 flex flex-col items-center">
                    <div className="w-full h-12 bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                       <span className="text-[10px] text-neutral-400 tracking-wider font-mono">MOTOR TUBE (SOMFY)</span>
                    </div>
                    <div className="w-11/12 h-36 bg-[#0D0D0F] border-x border-neutral-800 mt-[-2px] relative overflow-hidden">
                       <div className="absolute inset-0 opacity-10" style={{ 
                          backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)',
                          backgroundPosition: '0 0, 4px 4px', backgroundSize: '8px 8px'
                       }}></div>
                    </div>
                    <div className="w-11/12 h-3 bg-neutral-800"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom: Product Tiers */}
      <div className="grid grid-cols-3 gap-6 mt-auto">
        {/* Tier 1 */}
        <div className="border border-white/10 bg-transparent p-5 flex flex-col hover:border-white/20 transition-colors">
          <span className="font-bold text-neutral-300 text-lg mb-1 tracking-wide">ZIP <span className="text-white">BASIC</span></span>
          <span className="text-[10px] text-neutral-500 font-mono tracking-widest mb-4 border-b border-white/10 pb-3 uppercase">MANUAL SYSTEM</span>
          <ul className="text-xs text-neutral-400 space-y-2 font-light">
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-600">Ручной воротковый привод</li>
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-600">Пружинный амортизатор</li>
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-600">Стандартные цвета RAL</li>
          </ul>
        </div>
        
        {/* Tier 2 */}
        <div className="border border-white/20 bg-white/5 p-5 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white"></div>
          <span className="font-bold text-neutral-300 text-lg mb-1 tracking-wide">ZIP <span className="text-white">SMART</span></span>
          <span className="text-[10px] text-neutral-400 font-mono tracking-widest mb-4 border-b border-white/20 pb-3 uppercase block">MOTORIZED (DOOYA)</span>
          <ul className="text-xs text-neutral-300 space-y-2 font-light">
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-400">Электропривод с радиоуправлением</li>
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-400">Многоканальный пульт ДУ</li>
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-400">Автоматическое натяжение</li>
          </ul>
        </div>

        {/* Tier 3 */}
        <div className="border border-white/10 bg-transparent p-5 flex flex-col hover:border-white/20 transition-colors">
          <span className="font-bold text-neutral-300 text-lg mb-1 tracking-wide">ZIP <span className="text-white">PREMIUM</span></span>
          <span className="text-[10px] text-neutral-500 font-mono tracking-widest mb-4 border-b border-white/10 pb-3 uppercase">SOMFY AUTOMATION</span>
          <ul className="text-xs text-neutral-400 space-y-2 font-light">
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-600">Премиальные моторы Somfy (Франция)</li>
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-600">Датчики ветра и солнца (io-homecontrol)</li>
            <li className="flex items-center gap-2 before:content-[''] before:block before:w-1 before:h-1 before:bg-neutral-600">Интеграция в умный дом (TaHoma)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
