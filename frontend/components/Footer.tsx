'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text-primary)] text-white py-16 reveal reveal-4 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-body tracking-[0.02em] font-light leading-relaxed">
        
        {/* Brand / About Column */}
        <div className="flex flex-col gap-4">
           <h4 className="display-font text-2xl mb-2 font-bold opacity-90 tracking-tight text-white">MINIMAL.</h4>
           <p className="text-[#a19e99] max-w-xs">
             A high-design framework for modern shirting. Stripped-back essentials crafted with purpose.
           </p>
           <div className="flex gap-4 mt-6">
              {/* placeholder socials */}
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">IG</Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Twitter">TW</Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Pinterest">PI</Link>
           </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-xs uppercase tracking-[0.1em] text-[#a19e99] mb-2 opacity-80">Contact</h4>
          <a href="mailto:hello@minimalstore.com" className="hover:text-[var(--color-accent)] transition-colors inline-block w-fit">hello@minimalstore.com</a>
          <a href="tel:+919876543210" className="hover:text-[var(--color-accent)] transition-colors inline-block w-fit tnum">+91 98765 43210</a>
          <address className="not-italic opacity-80 mt-2 text-[#a19e99]">
            Level 4, High Street Avenue<br />
            New Delhi, India 110001
          </address>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-xs uppercase tracking-[0.1em] text-[#a19e99] mb-2 opacity-80">Legal</h4>
          <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors inline-block w-fit">Privacy Policy</Link>
          <Link href="/returns" className="hover:text-[var(--color-accent)] transition-colors inline-block w-fit">Return Policy</Link>
          <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors inline-block w-fit">Terms of Service</Link>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-xs text-[#a19e99] opacity-70 flex items-center justify-between font-mono tracking-tight flex-col sm:flex-row gap-4 text-center sm:text-left">
         <span>© {new Date().getFullYear()} Minimal Shirt Store.</span>
         <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
