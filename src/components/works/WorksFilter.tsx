import React from 'react';
import type { WorkCategory } from '../../types/work';

interface WorksFilterProps {
  activeCategory: WorkCategory;
  onSelectCategory: (category: WorkCategory) => void;
}

export const WorksFilter: React.FC<WorksFilterProps> = ({ activeCategory, onSelectCategory }) => {
  const categories: WorkCategory[] = ['All', 'Paid Ads', 'Branding', 'Social Media', 'AI Content', 'Video', 'Web'];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-5 py-2.5 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
            activeCategory === cat
              ? 'bg-[#008000] text-white shadow-md shadow-[#008000]/20'
              : 'bg-[#F6F7F5] text-[#222222] hover:bg-[#E5E7E5]'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
