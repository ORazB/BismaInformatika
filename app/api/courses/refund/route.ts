import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import { auth } from "@clerk/nextjs/server";

export async function DELETE(req: NextRequest) {

  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return new NextResponse("Missing ID", { status: 400 });
    }

    const actingUser = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!actingUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const targetUserCourse = await prisma.userCourse.findUnique({
      where: {
        userId_courseId: {
          courseId: parseInt(id),
          userId: actingUser.id,
        },
      },
    });

    if (!targetUserCourse) {
      return NextResponse.json({ message: `Cannot find Course from id: ${id}` })
    }

    const deletedUserCourse = await prisma.userCourse.delete({
      where: { 
        userId_courseId: { 
          courseId: parseInt(id), 
          userId: actingUser.id
        }
      }
    })

    return NextResponse.json(deletedUserCourse);
  } catch (error) {
    console.error("DELETE_ERROR: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}