
import React from 'react';
import FilterSection from '../components/FilterSection';
import { Search, Menu, Bell } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-green-500 shadow-sm border-b border-green-600 px-3 py-4 mx-2 mt-2 rounded-2xl">
        <div className="flex items-center justify-between">
          {/* Left side - Menu */}
          <button className="p-2 hover:bg-green-600 rounded-xl transition-colors">
            <Menu size={20} className="text-white" />
          </button>

          {/* Center - Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 font-bold text-xs">E</span>
            </div>
            <h1 className="text-lg font-bold text-white">EcoShop</h1>
          </div>

          {/* Right side - Search and Notification */}
          <div className="flex items-center space-x-1">
            <button className="p-2 hover:bg-green-600 rounded-xl transition-colors">
              <Search size={18} className="text-white" />
            </button>
            <button className="p-2 hover:bg-green-600 rounded-xl transition-colors relative">
              <Bell size={18} className="text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <FilterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
