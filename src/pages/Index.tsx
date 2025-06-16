
import React from 'react';
import FilterSection from '../components/FilterSection';
import { Search, Menu, Bell } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-green-500 shadow-sm border-b border-green-600 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side - Menu */}
          <button className="p-2 hover:bg-green-600 rounded-lg transition-colors">
            <Menu size={24} className="text-white" />
          </button>

          {/* Center - Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 font-bold text-sm">E</span>
            </div>
            <h1 className="text-xl font-bold text-white">EcoShop</h1>
          </div>

          {/* Right side - Search and Notification */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-green-600 rounded-lg transition-colors">
              <Search size={20} className="text-white" />
            </button>
            <button className="p-2 hover:bg-green-600 rounded-lg transition-colors relative">
              <Bell size={20} className="text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
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
