import prisma from "@/lib/prisma";

import UsersViewPanel from "@/components/AdminComponents/Users/UsersViewPanel";

export default async function UserAdminPage() {
  const allUsers = await prisma.user.findMany();

  return (
    <div className="my-24">
      <UsersViewPanel validUserData={allUsers} />
    </div>
  );
}