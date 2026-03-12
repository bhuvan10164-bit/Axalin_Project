'use client';

export default function MarqueeBanner() {
  return (
    <div className="bg-[var(--color-accent)] text-white overflow-hidden py-3 reveal reveal-3 font-body tracking-[0.1em] text-xs uppercase shadow-sm">
      <div className="marquee-track">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-8">
            🔥 Free Shipping on orders above ₹999
            <span className="inline-block mx-8 opacity-50">·</span>
            ✨ New Shirt Collection Available
            <span className="inline-block mx-8 opacity-50">·</span>
            ✦ Flat 40% OFF this week
            <span className="inline-block mx-8 opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
