import { auth } from "@clerk/nextjs/server"

import prisma from "@/lib/prisma"
import { User } from "@prisma/client";

import AdminDashboard from "@/components/AdminComponents/AdminDashboard"

export default async function AdminPage() {
  const { userId } = await auth()
  
  const user = await prisma.user.findUnique({ 
    where: { clerkId: userId || "" } 
  })

  return (
    <div className="w-full">
      <AdminDashboard user={user as User}/>
    </div>
  )
}