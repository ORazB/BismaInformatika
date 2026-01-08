import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import { auth, clerkClient } from "@clerk/nextjs/server";

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

    const actingUser = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (actingUser?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const targetUser = await prisma.user.findUnique({
      where: { id: parseInt(id) }
    })

    if (!targetUser) {
      return NextResponse.json({ message: `Cannot find User from userId: ${id}` })
    }

    const client = await clerkClient();
    await client.users.deleteUser(targetUser?.clerkId);

    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(id)
      }
    })

    return NextResponse.json(deletedUser);
  } catch (error) {
    console.error("DELETE_ERROR: ", error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}