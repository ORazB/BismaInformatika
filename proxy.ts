import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import prisma from "./lib/prisma";
import { NextResponse } from 'next/server';
import { UserRole } from "@/types/roles";

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (isAdminRoute(req)) {

    if (!userId) return new NextResponse('Unauthorized', { status: 401 });
    
    const user = await prisma.user.findUnique({
      where: { clerkId: userId || "" },
      select: { role: true }
    });

    if (user?.role !== UserRole.ADMIN) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }
});

export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}