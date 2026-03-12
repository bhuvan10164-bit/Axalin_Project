'use client';

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  image?: string;
  stock: number;
  category: string;
  size: string;
}

export default function ProductCard({ id, name, brand, price, image, stock, category, size }: ProductCardProps) {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, brand, price, image: image || '' }));
  };

  const isOutOfStock = stock <= 0;

  return (
    <div className="group relative flex flex-col bg-[var(--color-surface)] rounded-[12px] 
                    shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] 
                    hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-[var(--color-border)]">
      
      {/* Aspect ratio 4/5 Image */}
      <div className="relative w-full aspect-[4/5] bg-[#EFECE5] overflow-hidden">
        {image ? (
          <Image 
            src={image} 
            alt={`${brand} - ${name}`}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
           <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] font-light">
             No Image Found
           </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow gap-3">
        {/* Brand & Size Row */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs">
          <span className="text-[var(--color-text-muted)] uppercase tracking-[0.07em] font-semibold">{brand}</span>
          <span className="text-[var(--color-text-muted)] uppercase px-2 py-0.5 rounded-sm bg-[var(--color-bg)] 
                           border border-[var(--color-border)]">{size}</span>
        </div>

        {/* Title & Category */}
        <div className="flex flex-col gap-1]">
           <h3 className="font-body font-medium text-[var(--color-text-primary)] text-base leading-tight 
                          line-clamp-2 min-h-[2.5rem]">{name}</h3>
           <span className="text-xs text-[var(--color-text-muted)] mt-1">{category}</span>
        </div>

        {/* Price & Stock */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-[var(--color-border)]/50">
          <span className="display-font text-xl text-[var(--color-accent)] font-semibold tnum">
            ₹{price.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-[var(--color-text-muted)] font-mono">
             Stock: <span className={isOutOfStock ? "text-red-500" : ""}>{stock}</span>
          </span>
        </div>

        {/* Add To Cart CTA */}
        <button 
           onClick={handleAddToCart}
           disabled={isOutOfStock}
           className={`mt-2 w-full py-3 rounded-md font-body text-sm font-semibold tracking-[0.05em] 
                       transition-all active:scale-[0.97]
                       ${isOutOfStock 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-200 shadow-none' 
                          : 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:shadow-md'
                       }`}
           aria-label={`Add ${name} to cart`}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
