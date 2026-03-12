'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '@/redux/cartSlice';

export default function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(247,245,240,0.85)] backdrop-blur-md border-b border-[var(--color-border)] reveal reveal-1">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="display-font text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
          MINIMAL.
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-[var(--color-text-primary)] uppercase transition-colors">Home</Link>
          <a href="#products" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-[var(--color-text-primary)] uppercase transition-colors">Collection</a>
          <Link href="/" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-[var(--color-text-primary)] uppercase transition-colors">About</Link>
        </div>

        <Link href="/cart" className="relative group flex items-center p-2">
          <ShoppingBag className="w-5 h-5 text-[var(--color-text-primary)] transition-transform group-hover:-rotate-[-15deg] duration-200" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-0 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-bold h-4 min-w-[16px] flex items-center justify-center px-1 shadow-sm transition-transform group-hover:scale-110">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
