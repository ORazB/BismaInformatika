import prisma from "@/lib/prisma";
// Components
import SearchQueryComponent from "@/components/SearchComponents/SearchQuery";

export default async function SearchQuery({
  params,
  searchParams,
}: {
  params: Promise<{ SearchQuery: string; category: string }>;
  searchParams: Promise<{ SortBy: string; category: string | string[] }>;
}) {
  const { SearchQuery } = await params;
  const { SortBy, category } = await searchParams;

  let filteredResult: any;

  if (category) {
    // Make Category to always be an array
    const categoryArray = Array.isArray(category) ? category : [category];

    // Decode URL-encoded strings and handle spaces
    const decodedCategories = categoryArray.map(cat => {
      const decoded = decodeURIComponent(cat.replace(/\+/g, ' '));
      // If category has a dash (parent-child format), extract just the child name
      // Otherwise use the full name (for parent categories without children)
      const parts = decoded.split('-');
      return parts.length > 1 ? parts[1].trim() : decoded;
    });

    console.log('Searching for categories:', decodedCategories);

    const allCategories = await prisma.category.findMany({
      where: {
        name: {
          in: decodedCategories,
        },
      },
    });

    console.log('Found categories:', allCategories);

    const allCategoriesId = allCategories.map((cat) => cat.id);

    filteredResult = await prisma.course.findMany({
      where: {
        title: {
          contains: SearchQuery,
        },
        categoryId: {
          in: allCategoriesId,
        },
      },
    });
  } else {
    filteredResult = await prisma.course.findMany({
      where: {
        title: {
          contains: SearchQuery,
        },
      },
      take: 9,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  
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

  return (
    <SearchQueryComponent
      result={filteredResult}
      searchQueryResult={SearchQuery}
      sortBy={SortBy || ""}
      totalEnrollments={enrollmentsPerCourse}
      categories={categories}
    />
  );
}