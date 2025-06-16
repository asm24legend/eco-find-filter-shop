
import React from 'react';
import { Star, Heart, Leaf, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  sustainable: boolean;
  category: string;
}

const ProductGrid: React.FC = () => {
  // Mock products data
  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Coconut Oil',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 128,
      image: '/placeholder.svg',
      sustainable: true,
      category: 'Personal Care'
    },
    {
      id: 2,
      name: 'Bamboo Toothbrush Set',
      price: 149,
      rating: 4.6,
      reviews: 89,
      image: '/placeholder.svg',
      sustainable: true,
      category: 'Personal Care'
    },
    {
      id: 3,
      name: 'Essential Oil Gift Set',
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 203,
      image: '/placeholder.svg',
      sustainable: true,
      category: 'Essential Oils'
    },
    {
      id: 4,
      name: 'Organic Cotton Tote Bag',
      price: 449,
      rating: 4.5,
      reviews: 67,
      image: '/placeholder.svg',
      sustainable: true,
      category: 'Accessories'
    },
    {
      id: 5,
      name: 'Natural Face Serum',
      price: 899,
      originalPrice: 1199,
      rating: 4.7,
      reviews: 156,
      image: '/placeholder.svg',
      sustainable: true,
      category: 'Beauty'
    },
    {
      id: 6,
      name: 'Herbal Tea Combo',
      price: 699,
      rating: 4.4,
      reviews: 92,
      image: '/placeholder.svg',
      sustainable: true,
      category: 'Organic Food'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Sustainable Products</h2>
          <p className="text-gray-600">{products.length} products found</p>
        </div>
        <div className="flex items-center space-x-2">
          <Leaf size={20} className="text-green-500" />
          <span className="text-sm text-green-600 font-medium">Eco-Friendly</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            {/* Product Image */}
            <div className="relative mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg bg-gray-100"
              />
              {product.sustainable && (
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                  <Leaf size={12} className="mr-1" />
                  Eco
                </div>
              )}
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart size={16} className="text-gray-400 hover:text-red-500" />
              </button>
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
                {product.category}
              </p>
              <h3 className="font-semibold text-gray-800 line-clamp-2">
                {product.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-800">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart size={16} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
