"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

// Components
import BackButton from "@/components/ProfileComponents/BackButton";
import CourseImageInput from "./CourseImageInput";

export default function CoursesAddPanel() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const [price, setPrice] = useState<number | "">("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, ""); // remove commas
    if (/^\d*$/.test(rawValue)) { // only digits allowed
      setPrice(rawValue === "" ? "" : Number(rawValue));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/courses/create", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      router.push("/admin/courses");
      router.refresh();
    } else {
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
        {/* Title */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Course Title"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Description</label>
          <textarea name="description" id="description" className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Course Description">
          </textarea>
        </div>

        {/* Start Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Start Date (optional)</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">End Date (optional)</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Price (Rp)</label>
          <input
            type="text"
            name="price"
            id="price"
            value={price === "" ? "" : price.toLocaleString()}
            onChange={handleChange}
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Course Price"
          />
        </div>

        {/* Profile Image */}
        <CourseImageInput />

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