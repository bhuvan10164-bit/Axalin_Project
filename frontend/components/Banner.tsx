'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <section className="banner-bg relative overflow-hidden min-h-[70vh] flex items-center pt-16 reveal reveal-2 border-b border-[var(--color-border)]">
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.03] text-white pointer-events-none display-font leading-none select-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-16">
        <div className="flex flex-col items-start gap-4">
          <h1 className="display-font text-white font-bold leading-[0.9] tracking-tight -ml-1 sm:-ml-2 
                         text-[clamp(64px,12vw,140px)] w-full whitespace-nowrap overflow-visible">
            SUMMER <br className="hidden sm:block" />
            <span className="text-[var(--color-text-muted)] italic font-light">COLLECTION</span>
          </h1>

          <div className="h-px w-24 bg-[var(--color-border)] my-6 opacity-40"></div>
          
          <div className="flex flex-col gap-1 items-start">
             <span className="display-font text-[clamp(40px,8vw,80px)] text-[var(--color-accent)] font-medium leading-none">
               Flat 40% OFF
             </span>
             <p className="text-[var(--color-text-muted)] max-w-sm mt-3 text-lg font-light leading-relaxed">
               Redefining minimal essentials. The new standard for everyday shirting.
             </p>
          </div>

          <Link href="#products" 
                className="mt-8 group inline-flex items-center gap-2 text-white font-medium 
                           border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black 
                           transition-all duration-300">
            Shop the collection 
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
