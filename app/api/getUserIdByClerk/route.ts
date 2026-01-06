import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const clerkId = req.nextUrl.searchParams.get("clerkId");
    if (!clerkId) return NextResponse.json({ id: null });

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    return NextResponse.json({ id: user?.id ?? null });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ id: null });
  }
}