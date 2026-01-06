"use client";

// Next
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

// Clerk
import { useUser } from "@clerk/nextjs";

// Components
import ProfileImageInput from "@/components/ProfileComponents/ProfileImageInput";
import { Enumerable } from "@/app/generated/prisma/internal/prismaNamespace";
import BackButton from "./BackButton";

interface ProfileEditProps {
  params: { id: string };
  username?: string;
  email?: string;
  address?: string | null;
  phoneNumber?: string | null;
  role?: Enumerable<"USER" | "ADMIN"> | null;
}

export default function ProfileEditForm({ params, username, email, address, phoneNumber, role }: ProfileEditProps) {
  const { id } = params;
  const router = useRouter();

  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  // Handle Submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const profileImage = formData.get("profileImage") as File | null;

    // Update Clerk Image instantly by setting it cliently first
    if (profileImage && profileImage.size > 0) {
      await user?.setProfileImage({ file: profileImage });
    }

    const response = await fetch(`/api/profile/edit?id=${id}`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      router.refresh();
      router.push(`/profile/${id}`);
    } else {
      const errorData = await response.json();
      console.error("Server Error Message:", errorData.error);
      console.log("Current Form Data:", Object.fromEntries(formData.entries()));
    }
  }

  return (
    <div>
      <form className="space-y-6" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your username"
            defaultValue={username ?? undefined} />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your New password"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your Email"
            defaultValue={email ?? "undefined"}
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your Address"
            defaultValue={address ?? ""}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your Phone Number"
            defaultValue={phoneNumber ?? ""}
          />
        </div>

        {/* Role */}
        {role === "ADMIN" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-sm font-medium">Role</label>
            <select
              name="role"
              id="role"
              className="rounded-lg border px-4 py-2 outline-none focus:ring"
              defaultValue={role ?? ""}
            >
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
          </div>
        )}

        {/* Profile Image */}
        <ProfileImageInput initialImageUrl={user?.imageUrl || "/profile-page/profile-placeholder.png"} />

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-primary px-6 py-2 text-white hover:opacity-90"
        >
          Save Changes
        </button>

        {/* Back */}
        <BackButton />
      </form>
    </div>
  );
}