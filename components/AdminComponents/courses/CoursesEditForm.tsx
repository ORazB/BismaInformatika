"use client";
import { Decimal } from "@prisma/client/runtime/library";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Components
import CourseImageInput from "./CourseImageInput";
import BackButton from "@/components/ProfileComponents/BackButton";

interface CoursesEditProps {
  id: number;
  title: string;
  description: string;
  imageUuid: string;
  startDate?: Date | null;
  endDate?: Date | null;
  price: number | Decimal;
}

export default function CoursesEditPanel({ id, title, description, imageUuid, startDate, endDate, price }: CoursesEditProps) {

  const [error, setError] = useState<string | null>(null);
  const [rawPrice, setRawPrice] = useState<number | "">(Number(price));

  const router = useRouter();

  useEffect(() => {
    setRawPrice(Number(price));
  }, [price]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, ""); // remove commas
    if (/^\d*$/.test(rawValue)) { // only digits allowed
      setRawPrice(rawValue === "" ? "" : Number(rawValue));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch(`/api/courses/edit?id=${id}`, {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      router.refresh();
      router.push("/admin/courses")
    } else {
      const errorData = await response.json();

      console.error("Server Errror Message: ", errorData.error);
      console.log("Current Form Data:", Object.fromEntries(formData.entries()));
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
            defaultValue={title}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Description</label>
          <textarea defaultValue={description} name="description" id="description" className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Course Description">
          </textarea>
        </div>

        {/* Start Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Start Date (optional)</label>
          <input
            defaultValue={startDate ? new Date(startDate).toISOString().split('T')[0] : ''}
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
            defaultValue={endDate ? new Date(endDate).toISOString().split('T')[0] : ''}
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
            value={rawPrice === "" ? "" : Number(rawPrice).toLocaleString()}
            onChange={handleChange}
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Course Price"
          />
        </div>

        {/* Profile Image */}
        <CourseImageInput initialImage={imageUuid} />

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
          Edit Course
        </button>

        <BackButton />
      </form>
    </div>
  )
}