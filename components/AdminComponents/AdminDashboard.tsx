"use client";

import Link from "next/link"

import { useRouter } from "next/navigation";

import { User } from "@prisma/client";

export default function AdminDashboard({ user }: { user: User }) {

  const router = useRouter();

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
    },
    {
      title: "Categories",
      description: "View and manage categories",
      icon: "bx bxs-folder",
      href: "/admin/categories",
    }
  ]

  return (
    <div>
      {/* Upper Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Welcome back, <span className="font-medium text-text">{user?.username}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Admin Access
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Management Tools
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">

                    <div className="text-4xl mb-4 group-hover:text-primary transition"><i className={`transition ${card.icon}`}></i></div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2  transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="ml-4 transform group-hover:text-primary group-hover:translate-x-1 transition-transform duration-300">
                    <i className="text-3xl bx bxs-chevron-right group transition"></i>
                  </div>

                </div>

                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => router.push("/admin/courses/add")} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm">
              Create New Course
            </button>
            <button type="button" onClick={() => router.push("/admin/users/add")} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors font-medium text-sm">
              Add New User
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}