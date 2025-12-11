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
      <div className="flex gap-4 items-center mt-8 w-max relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`border-b-4 pb-1 font-semibold tracking-wide cursor-pointer text-lg relative ${
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

      <div className="mt-4 w-full grid grid-cols-4 place-items-center gap-8">
        {courseData![activeTab]?.map((contentItem: any, index) => (
          <Link
            href={""}
            className="p-4 border border-gray-text rounded-xl"
            key={index}
          >
            <div className="w-full h-full">
              <Image
                width={1000}
                height={463}
                className=""
                src={contentItem.image}
                alt={contentItem.title}
              ></Image>
            </div>

            <div className="grid gap-1 mt-4">
              <h3 className="font-semibold text-lg tracking-wide text-text">
                {contentItem.title}
              </h3>
              <p className="font-light text-sm tracking-wide text-gray-text">
                {contentItem.author}
              </p>
            </div>

            <div className="flex gap-1 items-center mt-4">
              <div className="flex items-center gap-1 p-2 py-1 border-gray-text border rounded-2xl">
                <i className="bx bxs-star text-yellow-500"></i>
                <p className="font-light text-sm text-gray-text">
                  {contentItem.rating}
                </p>
              </div>
              <div className="flex items-center gap-1 p-2 py-1 border-gray-text border rounded-2xl">
                <p className="font-light text-sm text-gray-text">
                  {contentItem.totalReview.toLocaleString()} ratings
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-xl font-semibold tracking-wide">
              Rp.{contentItem.price.toLocaleString()}
            </h2>
          </Link>
        ))}
      </div>

      <div className="flex items-center mt-6 text-primary font-semibold hover:underline">
        <Link className="" href={`course/${activeTab}`}>
          Show all {`${activeTab}`} courses
        </Link>
        <i className="bx bx-caret-right"></i>
      </div>
    </div>
  );
}
