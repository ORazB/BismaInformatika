import prisma from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

// Components
import SearchQueryComponent from "@/components/SearchComponents/SearchQuery";

// Types
type EnrollmentCountPerCourse = {
  courseId: number;
  _count: number;
};

export default async function SearchQuery({
  params,
  searchParams,
}: {
  params: Promise<{ SearchQuery: string; category: string }>;
  searchParams: Promise<{ SortBy: string; category: string | string[] }>;
}) {
  const { SearchQuery } = await params;
  const { category } = await searchParams;
  // const { SortBy } = await searchParams;

  const where: Prisma.CourseWhereInput = {
    title: {
      contains: SearchQuery,
    }
  };

  if (category) {
      const categoryArray = Array.isArray(category) ? category : [category];
  
      const decodedCategories = categoryArray.map((cat) => {
        const decoded = decodeURIComponent(cat.replace(/\+/g, " "));
        const parts = decoded.split("-");
        
        return parts.length > 1 ? parts[1].trim() : decoded;
      });
  
      const matchedCategories = await prisma.category.findMany({
        where: {
          name: {
            in: decodedCategories,
          },
        },
        select: {
          id: true,
        },
      });
  
      where.categoryId = {
        in: matchedCategories.map((cat) => cat.id),
      };
    }
  
    const filteredResult = await prisma.course.findMany({
      where,
      // take: category ? undefined : 9,
      // orderBy: category ? undefined : { createdAt: "desc" },
    });
  
    const categories = await prisma.category.findMany();
  
    const enrollmentsPerCourse = await prisma.userCourse.groupBy({
      by: ["courseId"],
      where: {
        courseId: {
          in: filteredResult.map((course) => course.id),
        },
      },
      _count: {
        courseId: true,
      },
    });
  
    const enrollmentCounts: EnrollmentCountPerCourse[] =
      enrollmentsPerCourse.map(e => ({
        courseId: e.courseId,
        _count: e._count.courseId,
      }));

  return (
    <SearchQueryComponent
      result={filteredResult}
      searchQueryResult={SearchQuery}
      // sortBy={SortBy || ""}
      totalEnrollments={enrollmentCounts}
      categories={categories}
    />
  );
}