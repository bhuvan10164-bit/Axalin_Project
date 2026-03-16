'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import MarqueeBanner from '@/components/MarqueeBanner';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { fetchProducts } from '@/services/api';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        console.log("Products response:", res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setError("Unable to load the collection at this time. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Banner />
        <MarqueeBanner />

        <section id="products" className="max-w-7xl mx-auto px-4 py-20 reveal reveal-5">
          <div className="flex flex-col items-center mb-16 space-y-4">
             <h2 className="display-font text-5xl font-semibold tracking-tight text-[var(--color-text-primary)]">
               The Collection
             </h2>
             <div className="h-px w-16 bg-[var(--color-accent)] opacity-80"></div>
          </div>

          {loading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {Array.from({ length: 8 }).map((_, i) => (
                 <div key={i} className="animate-pulse bg-[#EFECE5]/80 aspect-[4/5] rounded-[12px] border border-[var(--color-border)]"></div>
               ))}
             </div>
          ) : error ? (
             <div className="flex flex-col items-center justify-center p-12 text-center border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)]">
               <p className="text-[var(--color-accent)] mb-4">{error}</p>
               <button 
                 onClick={() => window.location.reload()} 
                 className="px-6 py-2 border border-[var(--color-border)] rounded-md hover:bg-gray-50 transition-colors">
                 Try Again
               </button>
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
