import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecommerce.settings')
django.setup()

from products.models import Product

def seed_db():
    products = [
        {
            "name": "Heavyweight Box Tee",
            "brand": "ESSENTIALS",
            "category": "T-Shirt",
            "size": "L",
            "stock": 45,
            "price": 1299.00,
            "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Premium 100% cotton heavyweight tee with a relaxed, boxy fit."
        },
        {
            "name": "Classic Oxford Shirt",
            "brand": "RALPH LAUREN",
            "category": "Collared",
            "size": "M",
            "stock": 20,
            "price": 3499.00,
            "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Timeless oxford cloth button-down in crisp white."
        },
        {
            "name": "Linen Camp Collar",
            "brand": "SATURDAYS NYC",
            "category": "Casual",
            "size": "XL",
            "stock": 15,
            "price": 2899.00,
            "image": "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Breezy linen shirt perfect for summer with a relaxed camp collar."
        },
        {
            "name": "Supima Cotton Crew",
            "brand": "UNIQLO",
            "category": "T-Shirt",
            "size": "S",
            "stock": 120,
            "price": 999.00,
            "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Ultra-soft Supima cotton everyday crewneck t-shirt."
        },
        {
            "name": "Oversized Graphic Tee",
            "brand": "STÜSSY",
            "category": "Streetwear",
            "size": "M",
            "stock": 8,
            "price": 1899.00,
            "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Vintage wash graphic tee with a distressed finish."
        },
        {
            "name": "Merino Wool Polo",
            "brand": "SUNSPEL",
            "category": "Polo",
            "size": "L",
            "stock": 30,
            "price": 4200.00,
            "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Luxurious fine-gauge merino wool polo shirt."
        },
        {
            "name": "Denim Overshirt",
            "brand": "LEVI'S",
            "category": "Overshirt",
            "size": "XL",
            "stock": 25,
            "price": 2499.00,
            "image": "https://images.unsplash.com/photo-1588625906566-02e7ac10f8dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Rugged denim overshirt, perfect for layering."
        },
        {
            "name": "Textured Knit Tee",
            "brand": "ZARA STUDIO",
            "category": "Knitwear",
            "size": "M",
            "stock": 40,
            "price": 1599.00,
            "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "description": "Slim-fit textured knit short sleeve shirt."
        }
    ]

    Product.objects.all().delete()
    for item in products:
        Product.objects.create(**item)

    print("Successfully seeded 8 products.")

if __name__ == '__main__':
    seed_db()
