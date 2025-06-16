
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
  children?: FilterOption[];
}

interface FilterDropdownProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  multiSelect?: boolean;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  options,
  selectedValues,
  onSelectionChange,
  multiSelect = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryValue: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryValue)) {
      newExpanded.delete(categoryValue);
    } else {
      newExpanded.add(categoryValue);
    }
    setExpandedCategories(newExpanded);
  };

  const handleOptionClick = (value: string) => {
    if (multiSelect) {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onSelectionChange(newValues);
    } else {
      onSelectionChange([value]);
      setIsOpen(false);
    }
  };

  const renderOption = (option: FilterOption, level: number = 0) => {
    const hasChildren = option.children && option.children.length > 0;
    const isExpanded = expandedCategories.has(option.value);
    const isSelected = selectedValues.includes(option.value);

    return (
      <div key={option.value} className={`${level > 0 ? 'ml-4' : ''}`}>
        <div
          className={`flex items-center justify-between p-2 hover:bg-green-50 cursor-pointer rounded-md transition-colors ${
            isSelected ? 'bg-green-100 text-green-800' : 'text-gray-700'
          }`}
          onClick={() => {
            if (hasChildren) {
              toggleCategory(option.value);
            } else {
              handleOptionClick(option.value);
            }
          }}
        >
          <div className="flex items-center">
            {multiSelect && !hasChildren && (
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleOptionClick(option.value)}
                className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <span className={`text-sm ${level > 0 ? 'text-gray-600' : 'font-medium'}`}>
              {option.label}
            </span>
          </div>
          {hasChildren && (
            isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {option.children!.map(child => renderOption(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
      >
        <span className="font-medium text-gray-700">{title}</span>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
          <div className="p-2">
            {options.map(option => renderOption(option))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
