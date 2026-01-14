"use client";
import { Decimal } from "@prisma/client/runtime/library";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { Category } from "@prisma/client";

interface Course {
  id: number;
  title: string;
  categoryId: number | null;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  imageUuid: string;
  startDate: Date | null;
  endDate: Date | null;
  price: number;
}

interface CoursesViewPanelProps {
  validCourseData: Course[];
  categories: Category[];
}

export default function CoursesViewPanel({
  validCourseData,
  categories,
}: CoursesViewPanelProps) {
  const [error, setError] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>(validCourseData);

  const router = useRouter();

  async function handleDelete(courseId: number) {
    const response = await fetch(`/api/courses/delete?id=${courseId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // const data = await response.json();
      router.refresh();
      setCourses(courses.filter((course) => course.id !== courseId));
    } else {
      const data = await response.json();
      console.log(data);
      setError(data.error ?? "Something went wrong");
    }
  }

  function formatDate(date: Date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          href="/admin/courses/add"
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <i className="bx bx-plus text-xl mr-2"></i>
          Add Course
        </Link>
        <Link
          href="/admin"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-text shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <i className="bx bxs-chevron-left text-xl mr-2"></i>
          Back
        </Link>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {validCourseData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Course Image */}
            <div className="relative h-48 w-full bg-gray-200">
              <Image
                src={
                  course.imageUuid
                    ? `https://63hy5293v3.ucarecd.net/${course.imageUuid}/-/preview/736x736/`
                    : "/course-page/course-placeholder.png"
                }
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Course Content */}
            <div className="p-5">
              {/* ID Badge */}
              <div className="mb-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                  ID: {course.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {course.description || "No description available"}
              </p>

              {/* Dates */}
              <div className="space-y-1 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="bx bx-calendar mr-2"></i>
                  <span>
                    Start:{" "}
                    {course.startDate ? formatDate(course.startDate) : "N/A"}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="bx bx-calendar-check mr-2"></i>
                  <span>
                    End: {course.endDate ? formatDate(course.endDate) : "N/A"}
                  </span>
                </div>
              </div>

              {/* Category */}
              <div className="space-y-1 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="bx bx-calendar mr-2"></i>
                  <span>
                    Category:{" "}
                    {categories.find(
                      (category) => category.id === course.categoryId,
                    )?.name || "N/A"}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-gray-900">
                  Rp. {course.price.toLocaleString()}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  href={`/admin/courses/${course.id}`}
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
                >
                  View
                </Link>
                <Link
                  href={`/admin/courses/${course.id}/edit`}
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {validCourseData.length === 0 && (
        <div className="bg-white rounded-lg shadow py-12 text-center">
          <i className="bx bxs-book text-6xl text-gray-300"></i>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No courses found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by adding a new course.
          </p>
        </div>
      )}
    </div>
  );
}
