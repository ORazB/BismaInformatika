// Next
import Image from "next/image";
import Link from "next/link";

// Components
import SearchButton from "@/components/SearchComponents/SearchButton";
import FilterButton from "@/components/SearchComponents/FilterButton";
import SideBar from "@/components/SearchComponents/SideBar";

import { Course, UserCourse, Category } from "@prisma/client";

export default function SearchQuery({
  result,
  searchQueryResult,
  sortBy,
  totalEnrollments,
  categories,
}: {
  result: Course[];
  searchQueryResult: string;
  sortBy: string;
  totalEnrollments: UserCourse[];
  categories: Category[];
}) {
  return (
    <div>
      {/* Search Result */}
      <section className="mt-20 mb-10 lg:m-28 lg:mb-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-1">
            <h2 className="text-text text-2xl md:text-3xl font-semibold">
              {searchQueryResult}
            </h2>
            <h3 className="text-text text-xl md:text-2xl font-semibold">
              {`${result.length} Results`}
            </h3>
          </div>

          <div className="flex flex-col md:flex-row md:items-center mt-4 gap-4">
            <FilterButton />
            <div className="relative w-full md:w-auto">
              <SearchButton />
            </div>
          </div>
        </div>
      </section>

      {/* Main Page */}
      <section className="mb-20 lg:mb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Sidebar (desktop only) */}
            <div className="hidden lg:block">
              <SideBar />
            </div>

            {/* Course List */}
            <div
              className="
                col-span-1
                lg:col-span-3
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                lg:gap-8
                w-full
              "
            >
              {result.length === 0 && (
                <div className="col-span-full flex justify-center">
                  <p>No results found.</p>
                </div>
              )}

              {result &&
                result.map((course) => {
                  const enrollment = totalEnrollments.find(
                    (e) => e.courseId === course.id
                  );
                  const count = enrollment?._count.courseId || 0;

                  return (
                    <Link
                      key={course.title}
                      href={`/courses/${course.id}/details`}
                      className="grid gap-2 rounded-2xl border border-gray-text self-start"
                    >
                      <div className="w-full h-[200px] md:h-[225px] rounded-2xl rounded-b-none overflow-hidden">
                        <Image
                          className="w-full h-full object-cover"
                          alt="course image"
                          src={
                            course.imageUuid
                              ? `https://63hy5293v3.ucarecd.net/${course.imageUuid}/-/preview/736x736/`
                              : "/course-page/course-placeholder.png"
                          }
                          width={1000}
                          height={1000}
                        />
                      </div>

                      <div className="grid gap-2 p-4">
                        <div className="flex justify-between">
                          <p className="text-gray-text text-sm">
                            Author: Bisma Informatika
                          </p>
                        </div>

                        <h3 className="text-text text-lg md:text-xl font-semibold">
                          {course.title}
                        </h3>

                        <div className="flex items-center gap-2">
                          <div className="px-4 py-1 bg-primary rounded-full">
                            <h4 className="text-white text-sm">
                              {
                                categories.find(
                                  (c) => c.id === course.categoryId
                                )?.name
                              }
                            </h4>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-text">
                          <div className="flex gap-2 items-center">
                            <i className="bx bx-signal-5 text-lg"></i>
                            <p>Any Level</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <i className="bx bx-group text-lg"></i>
                            <p>{count} Students</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
