"use client";
// Components
import BackButton from "@/components/ProfileComponents/BackButton";

// React
import { useState } from "react"

// Next
import { useRouter } from "next/navigation";

import { Category } from "@prisma/client";

export default function CategoriesEditForm({ category, allCategories }: { category: Category, allCategories: Category[] }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    
    const response = await fetch("/api/categories/edit", {
      method: "POST",
      body: formData
    })
    
    if (response.ok) {
      router.push("/admin/categories");
      router.refresh();
    } else {
      console.log("Current Form Data:", Object.fromEntries(formData.entries()));
      console.log(response);
      const data = await response.json();
      
      console.log(data);
      setError(data.error ?? "Something went wrong");

    }
  }
  
  return (
    <div>
      <form
        className="space-y-6"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {/* Category Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Category Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={category.name}
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Category Name"
          />
        </div>

        {/* Category Parent */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Category Parent (optional)</label>
          <select
            name="parentId"
            id="parentId"
            className="rounded-lg border px-4 py-2 outline-none focus:ring bg-white"
          >
            <option value="">{allCategories.find((c) => c.id === category.parentId)?.name ?? "Select a Category"}</option>
            {allCategories.filter((c) => c.parentId === null && c.id !== category.id && c.id !== category.parentId).map((c) => {
              return (
                <option key={c.id} value={c.id}>{`${c.name} | ID:${c.id}`}</option>
              )
            })}
          </select>
        </div>

        {error && (
          <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="rounded-lg bg-primary px-6 py-2 text-white hover:opacity-90"
        >
          Add Course
        </button>

        <BackButton />
      </form>
    </div>
  )
}