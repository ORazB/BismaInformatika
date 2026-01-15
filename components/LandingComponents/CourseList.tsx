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
      {/* ================= TABS ================= */}
      <div className="mt-8 relative">
        <div className="flex gap-4 items-center overflow-x-auto no-scrollbar pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`whitespace-nowrap border-b-4 pb-1 font-semibold tracking-wide cursor-pointer text-base sm:text-lg relative transition-colors ${
                activeTab === tab
                  ? "border-text text-text"
                  : "border-transparent text-gray-text"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* GARIS BAWAH */}
        <div className="absolute bottom-0 left-0 right-0 border-b-4 border-gray-200"></div>
      </div>

      {/* ================= COURSE GRID ================= */}
      <div
        className="
      mt-6 w-full grid gap-6
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
    "
      >
        {courseData![activeTab]?.map((contentItem: any, index) => (
          <Link
            href=""
            key={index}
            className="p-4 border border-gray-text rounded-xl hover:shadow-md transition"
          >
            {/* IMAGE */}
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <Image
                width={1000}
                height={463}
                className="w-full h-full object-cover"
                src={contentItem.image}
                alt={contentItem.title}
              />
            </div>

            {/* TEXT */}
            <div className="grid gap-1 mt-4">
              <h3 className="font-semibold text-base sm:text-lg tracking-wide text-text">
                {contentItem.title}
              </h3>
              <p className="font-light text-sm tracking-wide text-gray-text">
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
            <h2 className="mt-6 text-lg sm:text-xl font-semibold tracking-wide">
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
