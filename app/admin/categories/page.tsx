import prisma from "@/lib/prisma";

// Components
import CategoriesViewPanel from "@/components/AdminComponents/categories/CategoriesViewPanel";

export default async function CategoriesPage() {
  
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc"
    }
  });
  
  return (
    <div className="w-full my-24">
      <CategoriesViewPanel categories={categories} />
    </div>
  )
}