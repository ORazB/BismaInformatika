import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { ClerkAPIResponseError } from "@clerk/shared/error";

import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = await clerkClient();
    const { username, email, password } = body;

    const user = await client.users.createUser({
      emailAddress: [email],
      username: username,
      password: password,
    });

    if (user) {
      const dbUser = await prisma.user.create({
        data: {
          email: email,
          username: username,
          clerkId: user.id
        },
      });
      
      if (dbUser) {
        return NextResponse.json({ message: "User created successfully" });
      } else {
        await client.users.deleteUser(user.id);
        return NextResponse.json({ message: "Error creating user in database" }, { status: 500 });
      }
    }
  } catch (error) {
    if (error instanceof ClerkAPIResponseError) {
      return NextResponse.json(
        { message: error.errors[0]?.longMessage ?? error.message },
        { status: error.status },
      );
    }
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 },
    );
  }
}
