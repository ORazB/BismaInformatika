import prisma from "@/lib/prisma"
import { Decimal } from "@prisma/client/runtime/library";

import { clerkClient } from "@clerk/nextjs/server"

import CoursesViewPanel from "@/components/AdminComponents/courses/CoursesViewPanel"

export default async function CourseAdminPage() {

  const allCourses = await prisma.course.findMany();
  const allCategories = await prisma.category.findMany();

  const coursesWithImages = await Promise.all(
    allCourses.map(async (course) => {
      return {
        ...course,
        title: course.title ?? "",
        description: course.description ?? "",
        startDate: course.startDate, 
        endDate: course.endDate,
        price: course.price.toNumber(),
        imageUuid: course.imageUuid 
      };
    })
  )

  return (
    <div className="w-full">
      <div className="m-24">
        <CoursesViewPanel validCourseData={coursesWithImages} categories={allCategories}/>
      </div>
    </div>
  )
}