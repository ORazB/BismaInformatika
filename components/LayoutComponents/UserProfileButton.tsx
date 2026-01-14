'use client';

// Clerk
import { useUser } from "@clerk/nextjs";
import type { UserResource } from "@clerk/types";

// Next.js
import Image from "next/image";
import Link from "next/link";

// React
import { use, useEffect, useState } from 'react';

export default function UserProfileButton(props: any) {
  const [clerkUser, setClerkUser] = useState<UserResource | null>(null);
  const { user, isLoaded } = useUser();

  // Use useEffect to set the clerk user
  useEffect(() => {
    if (isLoaded && user) {
      setClerkUser(user);
    }
  }, [user, isLoaded]);

  if (!isLoaded) {
    return <div><h1>LOADING...</h1></div>
  }

  const actingUserPromise = props.user?.actingUser;

  if (!actingUserPromise) return <div>No User Data</div>;

  const rawData = use(actingUserPromise);
  const userData = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;

  return (
    <div>
      <Link href={`/profile/${userData.id}`}>

        <Image
          src={clerkUser?.imageUrl || "/default-avatar.png"}
          alt={userData.username || userData.username}
          width={256}
          height={256}
          className="rounded-full object-cover w-11 h-11"
        />
      </Link>
    </div>
  );
}