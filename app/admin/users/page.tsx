import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";

import UsersViewPanel from "@/components/AdminComponents/Users/UsersViewPanel";

export default async function UserAdminPage() {
  const allUsers = await prisma.user.findMany();
  const client = await clerkClient();

  const usersWithImages = await Promise.all(
    allUsers.map(async (user) => {
      let image = user.profileImage;

      if (!image && user.clerkId) {
        try {
          const clerkUser = await client.users.getUser(user.clerkId);
          image = clerkUser.imageUrl;
        } catch (e) {
          console.error("Clerk fetch failed for:", user.id);
        }
      }

      return {
        id: user.id,
        username: user.username,
        email: user.email,
        displayImage: image || "",
        phoneNumber: user.phoneNumber || undefined,
        address: user.address || undefined,
        role: user.role || "USER",
      };
    })
  );

  return (
    <div className="my-24">
      <UsersViewPanel validUserData={usersWithImages} />
    </div>
  );
}