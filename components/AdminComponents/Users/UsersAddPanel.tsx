"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

// Components
import ProfileImageInput from "@/components/ProfileComponents/ProfileImageInput";
import BackButton from "@/components/ProfileComponents/BackButton";

export default function UsersAddPanel() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/profile/create", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      router.refresh();
      router.back();
    } else {
      const data = await response.json();
      
      console.log(data);
      setError(data.error ?? "Something went wrong");

      console.log("Current Form Data:", Object.fromEntries(formData.entries()));
    }
  };

  return (
    <div>
      <form
        className="space-y-6"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {/* Username */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your username"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your password"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your email"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your address"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
            placeholder="Your phone number"
          />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <select
            name="role"
            id="role"
            className="rounded-lg border px-4 py-2 outline-none focus:ring"
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </select>
        </div>

        {/* Profile Image */}
        <ProfileImageInput initialImageUrl="/profile-page/profile-placeholder.png" />

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
          Add User
        </button>

        <BackButton />
      </form>
    </div>
  );
}
