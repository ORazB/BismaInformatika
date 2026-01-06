import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return new NextResponse("Missing ID", { status: 400 })
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(id),
        clerkId: userId
      }
    })

    return NextResponse.json(deletedUser);
  } catch (error) {
    console.error("DELETE_ERROR: ", error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}