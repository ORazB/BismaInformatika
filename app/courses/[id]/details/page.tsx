import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
// Components
import CourseDetails from "@/components/CourseComponents/CourseDetails";

// Types
type EnrollmentCountPerCourse = {
  courseId: number;
  _count: number;
};

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { userId } = await auth();

  
  if (!userId) {
    console.error("User not authenticated");
  }

  const course = await prisma.course.findUnique({
    where: { id: parseInt(id) },
  });

  if (!course) {

    return (
      <div className="col-span-3 items-center justify-center">
        <p>No results found.</p>
      </div>
    );
  }
  
  const serializedCourse = {
    ...course,
    price: Number(course.price)
  }
  
  const user = await prisma.user.findUnique({
    where: { clerkId: userId || "" },
  });
  
  if (!user) {
    return (
      <div className="col-span-3 items-center justify-center">
        <p>User not found.</p>
      </div>
    );
  }

  let category = null
  if (course.categoryId) {
    category = await prisma.category.findUnique({
      where: { id: course.categoryId || 0 },
    });
  }

  const courseEnrollments = await prisma.userCourse.groupBy({
    by: ["courseId"],
    where: { courseId: course.id },
    _count: {
      courseId: true,
    },
  });
  
  const exists = await prisma.userCourse.findUnique({
    where: { userId_courseId: { userId: user.id, courseId: course.id } }
  });
  
  const purchased = exists ? true : false;
  
  const totalEnrollments: EnrollmentCountPerCourse = courseEnrollments[0] 
    ? { courseId: courseEnrollments[0].courseId, _count: courseEnrollments[0]._count.courseId }
    : { courseId: course.id, _count: 0 };

  return (
    <div className="w-full">
      <CourseDetails course={serializedCourse} category={category} user={user} purchased={purchased} totalEnrollments={totalEnrollments} />
    </div>
  );
}
