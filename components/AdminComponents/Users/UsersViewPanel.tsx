"use client"

import Image from "next/image"
import Link from "next/link"

import { useRouter } from "next/navigation"

import { useState, useEffect } from "react"

interface User {
  id: number;
  username: string;
  email: string;
  displayImage?: string;
  phoneNumber?: string;
  address?: string;
  role: "ADMIN" | "USER" | string;
}

interface UsersViewPanelProps {
  validUserData: User[];
}

export default function UsersViewPanel({ validUserData }: UsersViewPanelProps) {
  
  const [error, setError] = useState<string | null>(null);

  const [filteredUsers, setFilteredUsers] = useState(validUserData);
  const [filterRole, setFilterRole] = useState<("ADMIN" | "USER")[]>([
    "ADMIN",
    "USER",
  ]);

  const router = useRouter();

  useEffect(() => {
    setFilteredUsers(
      validUserData.filter((user) => filterRole.includes(user.role as "ADMIN" | "USER"))
    );
  }, [filterRole, validUserData]);  

  function handleFilter(role: "ADMIN" | "USER") {
    setFilterRole((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  }

  async function handleDelete(userId: number) {
    const response = await fetch(`/api/profile/delete?id=${userId}`, {
      method: "DELETE",
    })

    if (response.ok) {
      router.refresh();
    } else {
      console.log("FAIL");
      const data = await response.json();
      
      console.log(data);
      setError(data.error ?? "Something went wrong");
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          href="/admin/users/add"
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <i className="bx bx-plus text-xl mr-2"></i>
          Add User
        </Link>
        <Link
          href="/admin/users"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-text shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <i className="bx bxs-chevron-left text-xl mr-2"></i>
          Back
        </Link>

      </div>

      {/* Filter Group */}
      <h1 className="mb-2 text-text text-2xl font-semibold tracking-wide">Filter Role</h1>
      <div className="flex gap-2 mb-6 overflow-hidden bg-white shadow-sm">
        <button onClick={() => handleFilter("USER")} className={`
            ${filterRole.includes("USER")
            ? "bg-primary text-white"
            : "text-text hover:bg-gray-50"
          }
            cursor-pointer border rounded-lg border-gray-300 flex items-center px-4 py-2.5 text-sm font-medium text-text`}>
          <i className="bx bx-user text-lg mr-2"></i>
          Users
        </button>
        <button onClick={() => handleFilter("ADMIN")} className={`
            ${filterRole.includes("ADMIN")
            ? "bg-primary text-white"
            : "text-text hover:bg-gray-50"
          }
            cursor-pointer border rounded-lg border-gray-300 flex items-center px-4 py-2.5 text-sm font-medium`}>
          <i className="bx bx-shield-quarter text-lg mr-2"></i>
          Admins
        </button>
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Role</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="transition-colors hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{user.id || "N/A"}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 shrink-0">
                        <Image
                          src={user.displayImage || "/default-avatar.png"}
                          alt={user.username || "User"}
                          width={40}
                          height={40}
                          className="rounded-full object-cover ring-1 ring-gray-100"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.username}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{user.phoneNumber || "N/A"}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{user.address || "N/A"}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex rounded-full px-3 py-0.5 text-xs font-medium capitalize ${user.role === "ADMIN" ? "text-red-800 bg-red-100" : "text-green-800 bg-green-100"
                      }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="whitespace-pre px-6 py-4 text-right text-sm font-medium">

                    <div className="flex items-center justify-end gap-2">
                      
                      <Link href={`/admin/users/${user.id}/courses`} className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-blue-700 hover:bg-blue-100">
                        View Courses
                      </Link>

                      <Link href={`/admin/users/${user.id}/edit`} className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-blue-700 hover:bg-blue-100">
                        Edit
                      </Link>

                      <button onClick={() => {handleDelete(user.id)}} className="cursor-pointer items-center rounded-md bg-red-50 px-3 py-1.5 text-red-700 hover:bg-red-100">
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {validUserData.length === 0 && (
          <div className="py-12 text-center">
            <i className="bx bxs-group text-6xl text-gray-300"></i>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No users found</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by adding a new user.</p>
          </div>
        )}
      </div>
    </div>
  )
}