import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import { clerkClient, auth } from "@clerk/nextjs/server";

import { UserRole } from "@prisma/client";

export async function POST(req: NextRequest) {
  let createdClerkUser: any = null;
  try {

    console.log("1. Getting auth...");
    const { userId } = await auth();

    console.log("2. Checking authorization...");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("3. Parsing form data...");
    const formData = await req.formData();

    console.log("4. Fetching acting user...");
    const actingUser = await prisma.user.findUnique({
      where: { clerkId: userId }
    });

    /* =======================
    Extract + validate data
    ======================= */

    const usernameRaw = formData.get("username");
    if (typeof usernameRaw !== "string") {
      return NextResponse.json({ error: "Username required" }, { status: 400 });
    }

    const username = usernameRaw.trim().toLowerCase().replaceAll(" ", "_");

    if (!/^[a-z0-9_]{3,20}$/.test(username)) {
      return NextResponse.json(
        { error: "Invalid username format" },
        { status: 400 }
      );
    }

    const address =
      typeof formData.get("address") === "string"
        ? (formData.get("address") as string)
        : null;

    const phoneNumber =
      typeof formData.get("phoneNumber") === "string"
        ? (formData.get("phoneNumber") as string)
        : null;

    const emailRaw = formData.get("email");
    const email =
      typeof emailRaw === "string" && emailRaw.includes("@")
        ? emailRaw
        : null;

    const passwordRaw = formData.get("password");

    if (typeof passwordRaw !== "string" || passwordRaw.length < 8) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    const password = passwordRaw;

    const profileImage = formData.get("profileImage") as File | null;

    const roleRaw = formData.get("role") as string;
    const role = Object.values(UserRole).includes(roleRaw as UserRole)
      ? (roleRaw as UserRole)
      : UserRole.USER;

    if (actingUser?.role !== UserRole.ADMIN) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    /* =======================
      Clerk sync
    ======================= */

    const client = await clerkClient();
    let cachedImageUrl: string | null = null;

    const createData: any = { username };
    if (password) createData.password = password;

    if (email) {
      createData.emailAddress = [email];
    }

    try {
      createdClerkUser = await client.users.createUser(createData);
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          error: err?.errors?.[0]?.message ?? "Invalid credentials",
          code: err?.errors?.[0]?.code ?? null,
        },
        { status: 400 }
      );
    }


    console.log("User Created: ", createdClerkUser);

    if (profileImage && profileImage.size > 0) {
      const uploadedImage = await client.users.updateUserProfileImage(createdClerkUser.id, {
        file: profileImage
      });
      cachedImageUrl = uploadedImage.imageUrl;
    }

    /* =======================
       Database Create
       ======================= */

    const createdUser = await prisma.user.create({
      data: {
        clerkId: createdClerkUser.id,
        username,
        email: email ?? "",
        address: address ?? "",
        phoneNumber: phoneNumber ?? "",
        role: (role as UserRole) || UserRole.USER,
        profileImage: cachedImageUrl || "",
      },
    });

    return NextResponse.json({ message: "Success", user: createdUser });

  } catch (error) {
    // If DB fails, delete the user from Clerk
    if (createdClerkUser?.id) {
      try {
        const client = await clerkClient();
        await client.users.deleteUser(createdClerkUser.id);

        console.log("Cleaned up Clerk user:", createdClerkUser.id);
      } catch (cleanupError) {
        console.error("Failed to cleanup Clerk user:", cleanupError);
      }
    }

    console.error("Critical Route Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}