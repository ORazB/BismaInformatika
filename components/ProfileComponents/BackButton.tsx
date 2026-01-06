"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {router.back()}}
      className="ml-4 cursor-pointer rounded-lg bg-transparent border border-text px-6 py-2 text-text hover:opacity-90"
    >
      Back
    </button>
  )
}