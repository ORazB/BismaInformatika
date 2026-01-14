import prisma from "@/lib/prisma";

// Components
import CoursesEditForm from "@/components/AdminComponents/courses/CoursesEditForm"
import { NextResponse } from "next/server";

export default async function ProfileEditPanel({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params

  const course = await prisma.course.findUnique({
    where: {
      id: Number(id)
    }
  })
  
  const allCategories = await prisma.category.findMany();

  if (!course || !allCategories) {
    return NextResponse.json({message: "Course not found!"});
  }
  
  const serializedCourse = {
    ...course,
    price: course.price.toNumber(),
    // Convert Dates to ISO strings
    createdAt: course.createdAt.toISOString(),
    updatedAt: course.updatedAt.toISOString(),
    startDate: course.startDate ? course.startDate.toISOString() : null,
    endDate: course.endDate ? course.endDate.toISOString() : null,
  };

  return (
    <section className="m-28">
      <div className="container mx-auto max-w-2xl px-8">
        <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
          Edit Course
        </h1>

        <CoursesEditForm course={serializedCourse} categories={allCategories} />
      </div>
    </section>
  )

}