import prisma from "@/lib/prisma";

// Components
import CoursesAddPanel from "@/components/AdminComponents/courses/CoursesAddPanel";
import { NextResponse } from "next/server";

export default async function AddCourseAdmin() {
  
  const allCategories = await prisma.category.findMany();
  
  if (!allCategories) {
    return NextResponse.json({ error: "Categories not found" });
  }
  
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-2xl px-8 my-24">
        <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
          Add Course
        </h1>
        <CoursesAddPanel categories={allCategories} />
      </div>
    </div>
  )
}