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

  if (!course) {
    return NextResponse.json({message: "Course not found!"});
  }

  return (
    <section className="m-24">
      <div className="container mx-auto max-w-2xl px-8">
        <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
          Edit Course
        </h1>

        <CoursesEditForm id={course.id} title={course.title} description={course.description} imageUuid={course.imageUuid} startDate={course.startDate ?? null} endDate={course.endDate ?? null} price={Number(course.price)} />
      </div>
    </section>
  )

}