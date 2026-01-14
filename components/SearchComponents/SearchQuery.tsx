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
      <section className="m-28 mb-14">
        <div className="container mx-auto px-8">
          <div className="gap-1 grid">
            <h2 className="text-text text-3xl font-semibold">
              {searchQueryResult}
            </h2>
            <h3 className="text-text text-2xl font-semibold">
              {`${result.length} Results`}
            </h3>
          </div>

          <div className="flex items-center mt-4 gap-4">
            <FilterButton />
            <div className="relative mt-4">
              <SearchButton />
            </div>
          </div>
        </div>
      </section>

      {/* Main Page */}
      <section className="mb-28">
        <div className="container mx-auto px-8">
          {/* Side Bar */}
          <div className="grid grid-cols-4">
            <SideBar />

            <div className="col-span-3 grid grid-cols-3 gap-8 w-full">
              
              {result.length === 0 && (
                <div className="col-span-3 items-center justify-center">
                  <p>No results found.</p>
                </div>
              )}
              
              {result && result.map((course) => {
                
                const enrollment = totalEnrollments.find(e => e.courseId === course.id);
                const count = enrollment?._count.courseId || 0;
                
                return (
                  <Link
                    key={course.title}
                    href={`/courses/${course.id}/details`}
                    className="grid gap-2 rounded-2xl border border-gray-text self-start"
                  >
                    <div className="w-full h-[225px] rounded-2xl rounded-b-none overflow-y-hidden">
                      <Image
                        className="w-full h-full rounded-2xl rounded-b-none object-cover"
                        alt="test"
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
                        <p className="text-gray-text font-sm text-sm">
                          Author: Bisma Informatika
                        </p>

                        {/*Rating*/}

                        {/*<div className="flex gap-1 items-center">
                          <i className="bx bxs-star text-orange-400"></i>
                          <h4 className="text-text font-semibold">5</h4>
                          <h4 className="text-text font-semibold">(5)</h4>
                        </div>*/}
                      </div>

                      <h3 className="text-text text-xl font-semibold">
                        {course.title}
                      </h3>

                      <div className="flex items-center gap-2">
                        <div className="p-1 px-4 bg-primary rounded-full">
                          <h4 className="text-white">{categories.find(c => c.id === course.categoryId)?.name}</h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex gap-2 text-gray-text font-sm text-sm">
                          <i className="text-lg bx bx-signal-5"></i>
                          <p>Any Level</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-text font-sm text-sm">
                          <i className="text-lg bx bx-group"></i>
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
