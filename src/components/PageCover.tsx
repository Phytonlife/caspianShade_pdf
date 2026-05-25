import { Wind, Cloud, Sun, Bug } from "lucide-react";

export function PageCover() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] flex flex-col justify-between p-12 relative overflow-hidden blueprint-grid border-b border-neutral-800">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 print-hidden"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0D0D0F] via-[#0D0D0F]/90 to-transparent"></div>
      
      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-6">
        <div className="flex flex-col">
          <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-2 uppercase">Brand Identity</span>
          <div className="text-2xl font-bold tracking-tighter text-white">CASPIAN <span className="text-neutral-400 font-light">SHADE</span></div>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-2 uppercase">Regional HQ</span>
          <div className="text-sm font-medium tracking-wide text-white uppercase">Atyrau, Kazakhstan</div>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-4xl py-12">
        <div className="self-start px-3 py-1 border border-neutral-700 text-[10px] uppercase tracking-[0.2em] mb-6 text-neutral-400">
          B2B Engineering Presentation 2024
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] mb-8 tracking-tighter text-white">
          ИНЖЕНЕРНЫЕ СИСТЕМЫ <br />
          <span className="text-neutral-500 font-light">ЗАЩИТЫ ТЕРРАС</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
          ZIP-screen системы, автоматизация и климатические фасадные решения 
          для экстремального климата Западного Казахстана.
        </p>
      </div>

      {/* Bottom Features */}
      <div className="relative z-10 grid grid-cols-4 gap-8 border-t border-white/10 pt-10 mt-auto">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
            <Wind className="w-5 h-5 text-neutral-400" strokeWidth={1} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">Protection</div>
            <div className="text-sm font-semibold uppercase text-white">Wind 120km/h</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
            <Cloud className="w-5 h-5 text-neutral-400" strokeWidth={1} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">Filtration</div>
            <div className="text-sm font-semibold uppercase text-white">Dust & Sand</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
            <Sun className="w-5 h-5 text-neutral-400" strokeWidth={1} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">Climate</div>
            <div className="text-sm font-semibold uppercase text-white">95% UV Block</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
            <Bug className="w-5 h-5 text-neutral-400" strokeWidth={1} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">Repellent</div>
            <div className="text-sm font-semibold uppercase text-white">Insect Guard</div>
          </div>
        </div>
      </div>
      
      {/* Decorative Industrial Background Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none z-0">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"/>
          <path d="M10 50 L90 50 M50 10 L50 90" stroke="white" strokeWidth="0.2"/>
        </svg>
      </div>
    </section>
  );
}
