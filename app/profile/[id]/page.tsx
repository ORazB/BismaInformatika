// Prisma
import prisma from "@/lib/prisma";
// Clerk
import { clerkClient } from "@clerk/nextjs/server";
// Components
import ProfilePage from "@/components/ProfileComponents/ProfilePage";

export default async function ProfilePageServer({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  
  const completedEnrollments = await prisma.userCourse.count({
    where: {
      userId: Number(id),
      courseStatus: "COMPLETED",
    },
  });
  
  const userCourses = await prisma.userCourse.findMany({
    where: { userId: Number(id) },
    include: {
      course: true,
    },
  });
  
  // Get only courses the user IS enrolled in
  const enrolledCourseIds = userCourses.map((uc) => uc.courseId);
  
  const allCourses = await prisma.course.findMany({
    where: {
      id: {
        in: enrolledCourseIds,
      },
    },
  });
  
  // Clerk User Fetch
  const client = await clerkClient();
  const clerkUser = await client.users.getUser(user?.clerkId || "");
  
  // Serialize data to convert Decimal to string/number and Dates to strings
  const serializedUserCourses = userCourses.map((uc) => ({
    ...uc,
    course: {
      ...uc.course,
      price: uc.course.price?.toNumber() ?? 0,
      startDate: uc.course.startDate?.toISOString() ?? null,
      endDate: uc.course.endDate?.toISOString() ?? null,
    },
  }));
  
  const serializedAllCourses = allCourses.map((course) => ({
    ...course,
    price: course.price?.toNumber() ?? 0,
    startDate: course.startDate?.toISOString() ?? null,
    endDate: course.endDate?.toISOString() ?? null,
  }));
  
  const serializedUser = user || null;
  
  return (
    <div className="w-full">
      <ProfilePage 
        user={serializedUser}
        clerkUser={JSON.parse(JSON.stringify(clerkUser))}
        completedEnrollments={completedEnrollments}
        userCourses={serializedUserCourses}
        allCourses={serializedAllCourses}
      />
    </div>
  );
}