"use client";

import React, { useEffect, useState } from "react";

// Next.js
import Link from "next/link";
import Image from "next/image";

// Styles
import "boxicons/css/boxicons.min.css";

export default function CourseList() {
  const [courseData, setCourseData] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState("Python");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/landing-page/CourseList.json");
        const data = await response.json();

        setCourseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading Courses...</div>;
  }

  const tabs = [
    "Python",
    "Microsoft Excel",
    "Digital Marketing",
    "Game Development",
    "Finance",
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 items-center mt-8 w-full lg:w-max relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`border-b-4 pb-1 font-semibold tracking-wide cursor-pointer text-sm sm:text-base lg:text-lg relative ${
              activeTab === tab
                ? "border-text z-10 text-text"
                : "border-transparent text-gray-text"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="absolute bottom-0 left-0 right-0 border-b-4 border-gray-200"></div>
      </div>

      <div className="mt-4 w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {courseData![activeTab]?.map((contentItem: any, index) => (
          <Link
            href=""
            key={index}
            className="w-full max-w-[320px] h-[420px] p-4 border border-gray-text rounded-xl hover:shadow-md transition flex flex-col"
          >

            {/* IMAGE */}
            <div className="w-full h-[150px] overflow-hidden rounded-lg relative">
              <Image
                src={contentItem.image}
                alt={contentItem.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="grid gap-1 mt-4">
              <h3 className="font-semibold text-base sm:text-lg tracking-wide text-text line-clamp-2">
                {contentItem.title}
              </h3>
              <p className="font-light text-sm tracking-wide text-gray-text line-clamp-1">
                {contentItem.author}
              </p>
            </div>

            {/* RATING */}
            <div className="flex flex-wrap gap-2 items-center mt-4">
              <div className="flex items-center gap-1 px-3 py-1 border-gray-text border rounded-2xl">
                <i className="bx bxs-star text-yellow-500"></i>
                <p className="font-light text-sm text-gray-text">
                  {contentItem.rating}
                </p>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 border-gray-text border rounded-2xl">
                <p className="font-light text-sm text-gray-text">
                  {contentItem.totalReview.toLocaleString()} ratings
                </p>
              </div>
            </div>

            {/* PRICE */}
            <h2 className="mt-auto pt-4 text-lg sm:text-xl font-semibold tracking-wide">
              Rp.{contentItem.price.toLocaleString()}
            </h2>
          </Link>
        ))}
      </div>

      {/* ================= SHOW ALL ================= */}
      <div className="flex items-center gap-1 mt-8 text-primary font-semibold hover:underline">
        <Link href={`course/${activeTab}`}>Show all {activeTab} courses</Link>
        <i className="bx bx-caret-right"></i>
      </div>
    </div>
  );
}