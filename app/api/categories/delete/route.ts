import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import { auth } from "@clerk/nextjs/server";

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json( {error: "Unauthorized"} , { status: 401 })
    }
    
    const id = req.nextUrl.searchParams.get("id");
    
    if (!id) {
      return NextResponse.json( {error: "Missing category id"} , { status: 400 })
    }
    
    const actingUser = await prisma.user.findUnique({
      where: {clerkId: userId}
    })
    
    if (!actingUser) {
      return NextResponse.json( {error: "User not found"} , { status: 404 })
    }
    
    const categoryTarget = await prisma.category.findUnique({
      where: {id: Number(id)}
    })
    
    if (!categoryTarget) {
      return NextResponse.json( {error: "Category not found"} , { status: 404 })
    }
    
    const deletedCategory = await prisma.category.delete({
      where: {id: categoryTarget.id}
    })
    
    return NextResponse.json(deletedCategory);
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An Internal Server Occured" }, { status: 500 })
  }
}
