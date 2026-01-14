// Prisma
import prisma from "@/lib/prisma";

// Clerk
import { clerkClient } from "@clerk/nextjs/server";

// Components
import ProfileDashboard from "@/components/ProfileComponents/ProfileDashboard";

export default async function ResponsiveProfilePage({ params }: { params: Promise<{ id: string }> }) {

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

  // Clerk User Fetch
  const client = await clerkClient();

  return (
    <div>
      <ProfileDashboard actingUser={user} userCourses={userCourses} />
    </div>
  );
}