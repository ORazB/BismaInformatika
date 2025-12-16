'use client';
// React
import { useState } from "react";

// Next
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Searchbutton() {

  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter" && searchQuery) {
      router.push(`/courses/search/${searchQuery}`);
    }
  }

  return (
    <div className="w-full">
      <input onKeyDown={handleKeyDown} onChange={(e) => setSearchQuery(e.target.value)} id="searchQuery" name="searchQuery" className="p-4 w-full rounded-full border border-gray-text focus:outline-transparent! focus:outline!" type="text" placeholder="Search..."></input>

      <Link aria-disabled={!searchQuery} href={searchQuery ? `/courses/search/${searchQuery}` : '#'} className="flex items-center justify-center p-4 bg-primary rounded-full absolute top-0 right-0 h-full">
        <button className="text-white"><i className="cursor-pointer text-2xl bx bx-search"></i></button>
      </Link>

    </div>
  )
}