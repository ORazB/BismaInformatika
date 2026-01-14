'use client'
// React
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [checkedCategories, setCheckedCategories] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    searchParams.getAll('category').forEach(cat => {
      initial[cat] = true;
    });
    return initial;
  });
  
  useEffect(() => {
    const params = new URLSearchParams();
    
    Object.entries(checkedCategories).forEach(([key, value]) => {
      if (value) {
        params.append('category', key);
      }
    });
    
    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : window.location.pathname, { scroll: false });
  }, [checkedCategories, router]);
  
  const categories = [
    { name: 'BNSP Certification', count: 6 },
    {
      name: 'In House Training', count: 13, subcategories: [
        { name: 'Digital Marketing', count: 7 },
        { name: 'Office Computer', count: 6 }
      ]
    },
    {
      name: 'Intl Certification', count: 21, subcategories: [
        { name: 'Adobe', count: 3 },
        { name: 'Autodesk', count: 2 },
        { name: 'Foresec', count: 4 },
        { name: 'Logical Operations', count: 9 }
      ]
    },
    {
      name: 'Regular Training', count: 49, subcategories: [
        { name: 'Programming', count: 9 },
        { name: 'Desain Grafis', count: 3 },
        { name: 'Office Computer', count: 10 },
        { name: 'Digital Marketing', count: 7 },
        { name: 'Komputer Animasi', count: 3 },
        { name: 'Accounting & Finance', count: 4 },
        { name: 'Business', count: 2 },
        { name: 'Tourism', count: 3 },
        { name: 'Computer network', count: 3 },
        { name: 'Network & Electronics', count: 2 },
        { name: 'Game Development', count: 2 }
      ]
    }
  ];
  
  function handleCheckboxChange(categoryName: string) {
    setCheckedCategories(prev => {
      const newState = { ...prev };
      const isChecking = !prev[categoryName];
      
      newState[categoryName] = isChecking;
      
      const parentCategory = categories.find(cat => cat.name === categoryName);
      
      if (parentCategory?.subcategories) {
        // If parent is checked, check all children
        // If parent is unchecked, uncheck all children
        parentCategory.subcategories.forEach(sub => {
          newState[`${categoryName}-${sub.name}`] = isChecking;
        });
      } else {
        // This is a child category, check if we need to uncheck the parent
        const parentCat = categories.find(cat => 
          cat.subcategories?.some(sub => `${cat.name}-${sub.name}` === categoryName)
        );
        
        if (parentCat && !isChecking) {
          // If unchecking a child, uncheck the parent
          newState[parentCat.name] = false;
        }
      }
      
      return newState;
    });
  }
  
  
  return (
    <div className="w-80 shrink-0">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Course categories</h2>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index}>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checkedCategories[category.name] || false}
                  onChange={() => handleCheckboxChange(category.name)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                  {category.name} ({category.count})
                </span>
              </label>
              {category.subcategories && (
                <div className="ml-7 mt-2 space-y-2">
                  {category.subcategories.map((sub, subIndex) => (
                    <label key={subIndex} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={checkedCategories[`${category.name}-${sub.name}`] || false}
                        onChange={() => handleCheckboxChange(`${category.name}-${sub.name}`)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-600 text-sm group-hover:text-gray-800">
                        {sub.name} ({sub.count})
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}