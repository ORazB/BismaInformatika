import prisma from "@/lib/prisma"
import { Decimal } from "@prisma/client/runtime/library";

import { clerkClient } from "@clerk/nextjs/server"

import CoursesViewPanel from "@/components/AdminComponents/courses/CoursesViewPanel"

export default async function CourseAdminPage() {

  const allCourses = await prisma.course.findMany();
  const client = await clerkClient();

  const coursesWithImages = await Promise.all(
    allCourses.map(async (course) => {
      let image = course.imageUuid;

      if (!image) {
        console.log("imageURL on course doesn't exist (null)");
      }

      return {
        id: course.id,
        title: course.title || "",
        description: course.description || "",
        imageUuid: image,
        startDate: course.startDate || new Date(),
        endDate: course.endDate || new Date(),
        price: course.price ? course.price.toNumber() : 0,
      }

    })
  )

  return (
    <div className="w-full">
      <div className="m-24">
        <CoursesViewPanel validCourseData={coursesWithImages}/>
      </div>
    </div>
  )
}