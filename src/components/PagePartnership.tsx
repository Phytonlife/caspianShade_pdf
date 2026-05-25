import { MapPin, ArrowRight } from "lucide-react";

export function PagePartnership() {
  return (
    <section className="pdf-slide bg-[#0D0D0F] p-12 flex flex-col justify-center relative blueprint-grid border-b border-neutral-800">
      <div className="mb-10 lg:mb-12 text-center max-w-3xl mx-auto border-b border-white/10 pb-6">
        <h2 className="text-5xl font-bold text-white leading-tight mb-4 tracking-tighter">
          РЕГИОНАЛЬНОЕ ПАРТНЕРСТВО
        </h2>
        <p className="text-neutral-400 font-light text-sm lg:text-base">
          Ищем долгосрочного производителя для развития ZIP-систем на Западе Казахстана.
        </p>
      </div>

      {/* Main Pillars */}
      <div className="grid grid-cols-2 gap-12 flex-1 mt-4">
        {/* Left: What we provide */}
        <div className="bg-[#0D0D0F] border border-white/10 p-8 flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 font-mono border-b border-white/10 pb-4">Что мы предоставляем</span>
          
          <ul className="space-y-5 text-sm font-light text-neutral-400">
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Локальное представительство</strong> — надежный инженерный партнер в Атырау.</span>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Технический Sales</strong> — квалифицированная продажа архитекторам и B2C клиентам.</span>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Монтаж "под ключ"</strong> — правильная установка, снимающая рекламации с завода.</span>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Сервисное обслуживание</strong> — гарантийная и постгарантийная локальная поддержка.</span>
            </li>
          </ul>
        </div>

        {/* Right: What we expect */}
        <div className="bg-[#0D0D0F] border border-white/10 p-8 flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 font-mono border-b border-white/10 pb-4">Что мы ищем</span>
          
          <ul className="space-y-5 text-sm font-light text-neutral-400">
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Дилерское партнерство</strong> — официальный статус представителя в регионе.</span>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Техническая поддержка</strong> — консультации конструкторов на сложных объектах.</span>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Дилерские цены</strong> — прогрессивная система скидок при увеличении объемов.</span>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight className="w-4 h-4 mt-0.5 text-neutral-500" shrink-0="true" strokeWidth={1.5} />
              <span><strong className="text-white font-medium">Маркетинговые материалы</strong> — доступ к каталогам, образцам тканей и профиля.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom: Regional Map Marker logic */}
      <div className="mt-12 flex flex-col items-center">
        <div className="w-full max-w-4xl border-t border-b border-white/10 py-6 flex justify-between items-center px-4">
          <span className="text-sm font-bold tracking-widest text-white uppercase text-center w-full">Западный Казахстан</span>
        </div>
        <div className="flex gap-16 mt-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
            <span className="font-mono text-xs text-white">ATYRAU</span>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <MapPin className="w-4 h-4 text-neutral-600" strokeWidth={1.5} />
            <span className="font-mono text-xs text-neutral-500">AKTAU</span>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <MapPin className="w-4 h-4 text-neutral-600" strokeWidth={1.5} />
            <span className="font-mono text-xs text-neutral-500">AKTOBE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
