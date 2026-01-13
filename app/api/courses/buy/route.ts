import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  try {
    
    const id = req.nextUrl.searchParams.get("id");
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    if (!id) {
      return NextResponse.json({ error: 'Missing course ID' }, { status: 400 });
    }
    
    const user = await prisma.user.findUnique({
      where: { clerkId: userId.toString() }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    const exists = await prisma.userCourse.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: parseInt(id)
        }
      }
    });
    
    if (exists) {
      return NextResponse.json({ error: 'Can only purchase Once' }, { status: 404 });
    }
    
    const createdUserCourse = await prisma.userCourse.create({
      data: {
        userId: user.id,
        courseId: parseInt(id)
      }
    })
    
    return NextResponse.json({ message: 'Course purchased successfully', id: createdUserCourse.id }, { status: 200 });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}