// Components
import CategoriesAddPanel from "@/components/AdminComponents/categories/CategoriesAddPanel"

import prisma from "@/lib/prisma"

export default async function AddUserAdmin() {
  
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "desc"
    }
  })
  
  return(
  <section className="m-24">
    <div className="container mx-auto max-w-2xl px-8">
      <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
        Add Category
      </h1>

        <CategoriesAddPanel categories={categories} />
    </div>
  </section>
  )
}