'use client';

import { User } from "@prisma/client";

// Clerk
import { useUser } from "@clerk/nextjs";
import type { UserResource } from "@clerk/types";

// Next.js
import Image from "next/image";
import Link from "next/link";

interface UserProps {
  user: User;
}

export default function UserProfileButton({user: actingUser}: UserProps) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div><h1>LOADING...</h1></div>
  }

  const actingUserPromise = actingUser

  if (!actingUserPromise) return <div>No User Data</div>;

  return (
    <div>
      <Link href={`/profile/${actingUser.id}`}>
        <Image
          src={user?.imageUrl || actingUser.profileImage || ""}
          alt={user?.username || actingUser.username}
          width={256}
          height={256}
          className="rounded-full object-cover w-11 h-11"
        />
      </Link>
    </div>
  );
}