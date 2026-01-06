'use client';

// Clerk
import { useUser } from "@clerk/nextjs";

// Next.js
import Image from "next/image";
import Link from "next/link";

// React
import { useEffect, useState } from "react";

export default function UserProfileButton() {

  const { user } = useUser();
  const [dbUserId, setDbUserId] = useState<number | null>(null);

  async function fetchDbUserId(clerkId: string) {
    const res = await fetch(`/api/getUserIdByClerk?clerkId=${clerkId}`);
    const data = await res.json();
    return data.id;
  }

  useEffect(() => {

    if (!user) return;
    fetchDbUserId(user.id).then(setDbUserId);

  }, [user]);

  if (!user) return null;

  return (
    <div>
      <Link href={`/profile/${dbUserId || ""}`}>
        <Image src={user.imageUrl || "default-avatar.png"} alt={user.firstName || "User"} width={256} height={256} className="rounded-full object-cover w-11 h-11"></Image>
      </Link>
    </div>
  );
}