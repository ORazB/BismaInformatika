import prisma from "@/lib/prisma";

// Components
import CategoriesEditForm from "@/components/AdminComponents/categories/CategoriesEditForm";
import { NextResponse } from "next/server";

export default async function ProfileEditPanel({ params }: { params: Promise<{ id: string }> }) {  
  const searchParams = await params;
  
  if (!searchParams.id) {
    return NextResponse.redirect("/admin/categories");
  }
  
  const category = await prisma.category.findUnique({
    where: { id: Number(searchParams.id) }
  });
  
  const allCategories = await prisma.category.findMany();
  
  if (!category) {
    return NextResponse.json({message: "Course not found!"});
  }
  
  return (
    <section className="m-24">
      <div className="container mx-auto max-w-2xl px-8">
        <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
          Edit Course
        </h1>

        <CategoriesEditForm category={category} allCategories={allCategories} />
      </div>
    </section>
  )
}