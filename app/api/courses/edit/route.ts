import prisma from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { auth } from "@clerk/nextjs/server";

import { UserRole } from "@prisma/client";

import { UploadcareSimpleAuthSchema, storeFile, deleteFile } from '@uploadcare/rest-client';

export async function POST(req: NextRequest) {

  const authSchema = new UploadcareSimpleAuthSchema({
    publicKey: process.env.UPLOADCARE_PUBLIC_KEY!,
    secretKey: process.env.UPLOADC_CARE_SECRET!,
  });

  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await req.formData();
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing user id" }, { status: 400 });
    }

    const actingUser = prisma.user.findUnique({
      where: { clerkId: userId }
    })

    const course = await prisma.course.findUnique({
      where: { id: Number(id) },
    });

    if (!actingUser || !course) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    /* =======================
    Extract + validate data
    ======================= */

    const title = formData.get("title");
    if (typeof title !== "string") {
      return NextResponse.json({ error: "Title Required" }, { status: 400 });
    }

    const description = typeof formData.get("description") === "string" ? (formData.get("description") as string) : null;

    const startDate = typeof formData.get("startDate") === "string" ? (formData.get("startDate") as string) : null;
    const endDate = typeof formData.get("endDate") === "string" ? (formData.get("endDate") as string) : null;
    
    const categoryId = typeof formData.get("category") === "string" ? (formData.get("category") as string) : null;

    const rawPrice = formData.get("price");
    let price: Decimal | null = null;

    if (typeof rawPrice === "string" && rawPrice.trim() !== "") {
      const cleaned = rawPrice.replace(/,/g, "");
      price = new Decimal(cleaned);
    }

    const imageUuid = typeof formData.get("courseImageUuid") === "string" ? (formData.get("courseImageUuid") as string) : null;

    console.log({ title, description, startDate, endDate, rawPrice, imageUuid });

    // Store Course Image
    let storedFileInfo = null;
    if (imageUuid) {
      const storedFileInfo = await storeFile(
        { uuid: imageUuid },
        { authSchema }
      )
      console.log("File Stored Permanently: ", storedFileInfo)
    }

    // Delete old Course Image
    let deletedFileInfo = null;
    if (course.imageUuid != imageUuid) {
      const deletedFileInfo = await deleteFile(
        { uuid: course.imageUuid },
        { authSchema }
      )
      console.log("File Deleted Permanently: ", deletedFileInfo)
    }

    /* =======================
    Database update
    ======================= */

    const updatedCourse = await prisma.course.update({
      where: { id: course.id },
      data: {
        title,
        description: description ?? "",
        startDate: startDate ? new Date(startDate).toISOString() : null,
        endDate: endDate ? new Date(endDate).toISOString() : null,
        categoryId: categoryId ? parseInt(categoryId) : null,
        price: price ?? 0,
        imageUuid: imageUuid ?? ""
      }
    })

    revalidatePath("/admin/courses");
    return NextResponse.json({ course: updatedCourse, storedFileInfo, deletedFileInfo });

  } catch (error) {
    console.error("Critical Route Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}