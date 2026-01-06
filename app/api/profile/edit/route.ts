import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { clerkClient, auth } from "@clerk/nextjs/server";
import { UserRole } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing user id" }, { status: 400 });
    }

    const actingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!actingUser || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Regular users can only edit themselves
    if (actingUser.role !== "ADMIN" && actingUser.id !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

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
    const password =
      typeof passwordRaw === "string" && passwordRaw.length >= 8
        ? passwordRaw
        : null;

    const profileImage = formData.get("profileImage") as File | null;
    const role = formData.get("role") as UserRole | null;

    /* =======================
       Role handling
       ======================= */

    let newRole: UserRole = user.role;

    if (actingUser.role === "ADMIN" && role !== null) {
      if (role !== UserRole.ADMIN && role !== UserRole.USER) {
        return NextResponse.json({ error: "Invalid role" }, { status: 400 });
      }
      newRole = role;
    }

    /* =======================
       Clerk sync
       ======================= */

    const client = await clerkClient();
    let cachedImageUrl: string | null = user.profileImage;

    const updateData: any = { username };
    if (password) updateData.password = password;

    await client.users.updateUser(user.clerkId, updateData);

    if (email && email !== user.email) {
      await client.emailAddresses.createEmailAddress({
        userId: user.clerkId,
        emailAddress: email,
        primary: true,
      });
    }

    if (profileImage && profileImage.size > 0) {
      const updated = await client.users.updateUserProfileImage(user.clerkId, {
        file: profileImage,
      });
      cachedImageUrl = updated.imageUrl;
    }

    /* =======================
       Database update
       ======================= */

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        username,
        address,
        phoneNumber,
        role: newRole,
        profileImage: cachedImageUrl,
      },
    });

    return NextResponse.json({ message: "Success", user: updatedUser });
  } catch (error) {
    console.error("Critical Route Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
