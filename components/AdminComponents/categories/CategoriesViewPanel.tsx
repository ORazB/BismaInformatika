"use client";
import { Category } from "@prisma/client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface CategoryProps {
  categories: Category[];
}

export default function CategoriesViewPanel({ categories }: CategoryProps) {
  
  const router = useRouter();

  const handleDelete = async (id: number) => {
    const response = await fetch(`/api/categories/delete?id=${id}`, {
      method: "DELETE"
    });
    
    if (response.ok) {
      router.refresh();
      router.push("/admin/categories");
    } else {
      console.log("FAIL");
      const data = await response.json();
      
      console.log(data);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Category Management</h1>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          href="/admin/categories/add"
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <i className="bx bx-plus text-xl mr-2"></i>
          Add Category
        </Link>
        <Link
          href="/admin"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-text shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <i className="bx bxs-chevron-left text-xl mr-2"></i>
          Back
        </Link>
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Category Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Category Parent
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {category.id || "N/A"}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {category.name || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {category.parentId
                        ? `ID: ${category.parentId} | Name: ${categories.find((c) => c.id === category.parentId)?.name ?? "N/A"}`
                        : "N/A"}
                    </div>
                  </td>

                  <td className="whitespace-pre px-6 py-4 text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/categories/${category.id}/edit`}
                        className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-blue-700 hover:bg-blue-100"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => {
                          handleDelete(category.id);
                        }}
                        className="cursor-pointer items-center rounded-md bg-red-50 px-3 py-1.5 text-red-700 hover:bg-red-100"
                      >
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
        {categories.length === 0 && (
          <div className="py-12 text-center">
            <i className="bx bxs-folder text-6xl text-gray-300"></i>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              No Category found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by adding a new category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
