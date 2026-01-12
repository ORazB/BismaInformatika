import prisma from "@/lib/prisma";

import { NextResponse, NextRequest } from "next/server";

import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    
    const { userId } = await auth();
    
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const actingUser = await prisma.user.findUnique({
      where: { clerkId: userId }
    })
    
    if (!actingUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    /* =======================
    Extract + validate data
    ======================= */
    const formData = await req.formData();
    
    const categoryName = formData.get("name");
    if (typeof categoryName !== "string") {
      return NextResponse.json({ error: "Category Name Required" }, { status: 400 });
    }
    
    const categoryParent = formData.get("parentId") || null;
    
    const category = await prisma.category.create({
      data: {
        name: categoryName,
        parentId: categoryParent ? parseInt(categoryParent.toString()) : null
      }
    })
    
    return NextResponse.json({ message: "Category Created Successfully", category });
    
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", message: error }, { status: 500 });
  }
}