import Link from "next/link"
import { auth } from "@clerk/nextjs/server"

import prisma from "@/lib/prisma"

import AdminDashboard from "@/components/AdminComponents/AdminDashboard"

export default async function AdminPage() {
  const { userId } = await auth()
  const user = await prisma.user.findUnique({ 
    where: { clerkId: userId || "" } 
  })

  const adminCards = [
    {
      title: "Courses",
      description: "Manage courses and course content",
      icon: "bx bxs-book",
      href: "/admin/courses",
    },
    {
      title: "Users",
      description: "View and manage user accounts and permissions",
      icon: "bx bxs-group",
      href: "/admin/users",
    }
  ]

  return (
    <div className="w-full">
      <AdminDashboard user={user}/>
    </div>
  )
}