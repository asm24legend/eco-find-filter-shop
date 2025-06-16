
import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';
import { Leaf, Filter, X } from 'lucide-react';

const FilterSection: React.FC = () => {
  const [filters, setFilters] = useState({
    category: [] as string[],
    price: [] as string[],
    gender: [] as string[],
    region: [] as string[],
    combos: [] as string[],
  });

  const filterOptions = {
    category: [
      {
        label: 'Organic Food',
        value: 'organic-food',
        children: [
          { label: 'Eatables', value: 'eatables' },
          { label: 'Beverages', value: 'beverages' }
        ]
      },
      {
        label: 'Personal Care',
        value: 'personal-care',
        children: [
          { label: 'Body', value: 'body' },
          { label: 'Face', value: 'face' },
          { label: 'Hair', value: 'hair' }
        ]
      },
      {
        label: 'Beauty',
        value: 'beauty',
        children: [
          { label: 'Perfumes', value: 'perfumes' },
          { label: 'Serums', value: 'serums' },
          { label: 'Skincare', value: 'skincare' },
          { label: "Men's Section", value: 'beauty-mens' }
        ]
      },
      {
        label: 'Home',
        value: 'home',
        children: [
          { label: 'Bamboo Products', value: 'bamboo' },
          { label: 'Candles', value: 'candles' },
          { label: 'Pet Care', value: 'pet-care' },
          { label: 'Bedroom', value: 'bedroom' },
          { label: 'Utensils', value: 'utensils' }
        ]
      },
      {
        label: 'Clothing',
        value: 'clothing',
        children: [
          { label: 'Men', value: 'clothing-men' },
          { label: 'Women', value: 'clothing-women' },
          { label: 'Children', value: 'clothing-children' }
        ]
      },
      {
        label: 'Accessories',
        value: 'accessories',
        children: [
          { label: 'Tote Bags', value: 'tote-bags' },
          { label: 'Belts', value: 'belts' },
          { label: 'Hair Extensions', value: 'hair-extensions' },
          { label: "Men's Section", value: 'accessories-mens' }
        ]
      },
      {
        label: 'Health Supplements',
        value: 'health-supplements'
      },
      {
        label: 'Essential Oils',
        value: 'essential-oils',
        children: [
          { label: 'Stress and Anxiety Relief', value: 'stress-anxiety' },
          { label: 'Skin Problems', value: 'skin-problems' },
          { label: 'Joint Pain', value: 'joint-pain' },
          { label: 'Meditation', value: 'meditation' },
          { label: 'Common Cold', value: 'common-cold' }
        ]
      },
      {
        label: 'Gifts',
        value: 'gifts',
        children: [
          { label: 'Weddings', value: 'weddings' },
          { label: 'Baby Shower', value: 'baby-shower' },
          { label: 'Birthdays', value: 'birthdays' },
          { label: 'Anniversaries', value: 'anniversaries' },
          { label: 'Graduation', value: 'graduation' }
        ]
      }
    ],
    price: [
      { label: 'Below ₹500', value: 'below-500' },
      { label: '₹500 - ₹1,000', value: '500-1000' },
      { label: '₹1,000 - ₹3,000', value: '1000-3000' },
      { label: '₹3,000 - ₹5,000', value: '3000-5000' },
      { label: '₹5,000 - ₹10,000', value: '5000-10000' }
    ],
    gender: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ],
    region: [
      { label: 'North India', value: 'north-india' },
      { label: 'South India', value: 'south-india' },
      { label: 'East India', value: 'east-india' },
      { label: 'West India', value: 'west-india' },
      { label: 'Central India', value: 'central-india' }
    ],
    combos: [
      { label: 'Skincare Combo', value: 'skincare-combo' },
      { label: 'Health Pack', value: 'health-pack' },
      { label: 'Home Essentials', value: 'home-essentials' },
      { label: 'Gift Sets', value: 'gift-sets' }
    ]
  };

  const handleFilterChange = (filterType: keyof typeof filters, values: string[]) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: values
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      price: [],
      gender: [],
      region: [],
      combos: []
    });
  };

  const applyFilters = () => {
    console.log('Applied filters:', filters);
    // Here you would typically call an API or update the product list
  };

  const getTotalActiveFilters = () => {
    return Object.values(filters).reduce((total, filterArray) => total + filterArray.length, 0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
            <Filter size={20} className="text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Filter Products</h2>
            <p className="text-sm text-gray-600">Find your perfect sustainable products</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Leaf size={20} className="text-green-500 leaf-float" />
          {getTotalActiveFilters() > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              <X size={16} />
              <span>Clear All</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        <FilterDropdown
          title="Category"
          options={filterOptions.category}
          selectedValues={filters.category}
          onSelectionChange={(values) => handleFilterChange('category', values)}
        />
        <FilterDropdown
          title="Price Range"
          options={filterOptions.price}
          selectedValues={filters.price}
          onSelectionChange={(values) => handleFilterChange('price', values)}
        />
        <FilterDropdown
          title="Gender"
          options={filterOptions.gender}
          selectedValues={filters.gender}
          onSelectionChange={(values) => handleFilterChange('gender', values)}
        />
        <FilterDropdown
          title="Region"
          options={filterOptions.region}
          selectedValues={filters.region}
          onSelectionChange={(values) => handleFilterChange('region', values)}
        />
        <FilterDropdown
          title="Combos"
          options={filterOptions.combos}
          selectedValues={filters.combos}
          onSelectionChange={(values) => handleFilterChange('combos', values)}
        />
      </div>

      {/* Active Filters Display */}
      {getTotalActiveFilters() > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(([filterType, values]) =>
              values.map(value => (
                <span
                  key={`${filterType}-${value}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  {value.replace('-', ' ')}
                  <button
                    onClick={() => {
                      const newValues = filters[filterType as keyof typeof filters].filter(v => v !== value);
                      handleFilterChange(filterType as keyof typeof filters, newValues);
                    }}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}

      {/* Apply Button */}
      <div className="flex justify-center">
        <button
          onClick={applyFilters}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Apply Filters ({getTotalActiveFilters()})
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
