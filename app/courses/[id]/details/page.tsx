import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
// Components
import CourseDetails from "@/components/CourseComponents/CourseDetails";

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
  
  const exists = await prisma.userCourse.findUnique({
    where: { userId_courseId: { userId: user.id, courseId: course.id } }
  });
  
  const purchased = exists ? true : false;

  return (
    <div className="w-full">
      <CourseDetails course={serializedCourse} category={category} user={user} purchased={purchased} />
    </div>
  );
}
