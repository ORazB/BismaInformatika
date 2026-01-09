import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import { clerkClient, auth } from "@clerk/nextjs/server";

import { UploadcareSimpleAuthSchema, deleteFile } from '@uploadcare/rest-client';

export async function DELETE(req: NextRequest) {

  const authSchema = new UploadcareSimpleAuthSchema({
    publicKey: "1b5e557fe4c7659013c8",
    secretKey: "02949571d91cd4ff816d",
  });

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

    if (actingUser?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const targetCourse = await prisma.course.findUnique({
      where: { id: parseInt(id) }
    })

    if (!targetCourse) {
      return NextResponse.json({ message: `Cannot find Course from id: ${id}` })
    }

    if (targetCourse.imageUuid) {
      await deleteFile(
        { uuid: targetCourse.imageUuid },
        { authSchema }
      )
    }

    const deletedCourse = await prisma.course.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.error("DELETE_ERROR: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}