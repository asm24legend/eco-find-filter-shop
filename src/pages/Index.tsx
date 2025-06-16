
import React from 'react';
import FilterSection from '../components/FilterSection';
import ProductGrid from '../components/ProductGrid';
import { Leaf, Search, ShoppingBag, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full">
                <Leaf size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">EcoShop</h1>
                <p className="text-xs text-green-600">Sustainable Living</p>
              </div>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sustainable products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="md:hidden p-2">
                <Search size={20} className="text-gray-600" />
              </button>
              <button className="relative p-2">
                <ShoppingBag size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2">
                <User size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Sustainable Products
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Shop eco-friendly products that are good for you and the planet
          </p>
          <div className="flex justify-center">
            <Leaf size={32} className="text-green-200 leaf-float" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Section */}
        <FilterSection />
        
        {/* Products Grid */}
        <ProductGrid />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf size={24} className="text-green-400" />
                <span className="text-xl font-bold">EcoShop</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for sustainable and eco-friendly products.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Organic Food</a></li>
                <li><a href="#" className="hover:text-white">Personal Care</a></li>
                <li><a href="#" className="hover:text-white">Home Products</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
                <li><a href="#" className="hover:text-white">Social Media</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoShop. All rights reserved. Made with 💚 for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
