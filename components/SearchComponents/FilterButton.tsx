'use client';
// React
import { useState, useRef, useEffect, SetStateAction } from "react";

// Next
import { useRouter } from "next/navigation";

export default function FilterButton() {
  const [sortBy, setSortBy] = useState("Relevance");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter()

  const sortOptions = ["Relevance", "Number of Students", "Most Recent"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    router.push(`?SortBy=${sortBy}`)

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSortChange = (option: SetStateAction<string>) => {
    setSortBy(option);
    router.push(`?SortBy=${option}`)

    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="justify-self-start mt-4 px-6 py-4 bg-primary text-white cursor-pointer font-semibold rounded-full transition-colors"
      >
        <i className="bx bx-filter mr-2 text-2xl align-middle"></i>
        Sort by: {sortBy}
        <i className={`bx bx-chevron-${isOpen ? 'up' : 'down'} ml-2 text-xl align-middle transition-transform`}></i>
      </button>

      <div
        className={`absolute top-full left-6 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] z-10 origin-top-left transition-all duration-200 ease-out ${isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-75 pointer-events-none'
          }`}
      >
        {sortOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleSortChange(option)}
            className={`cursor-pointer w-full text-left px-6 py-3 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${sortBy === option ? 'bg-blue-50 text-primary font-semibold' : 'text-gray-text'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}