"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  initialImageUrl: string;
};

export default function ProfileImageInput({ initialImageUrl }: Props ) {
  const [preview, setPreview] = useState<string>(initialImageUrl);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Profile Image</label>

      <Image
        src={preview}
        alt="User Profile Image"
        width={150}
        height={150}
        className="w-[150px] h-[150px] object-cover rounded-full"
        loading="eager"
      />

      <input
        type="file"
        name="profileImage"
        id="profileImage"
        // accept="" is important to limit file picker to images only
        accept="image/*"
        className="rounded-lg border w-2/5 px-4 py-2 outline-none focus:ring self-start"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
        
          const objectUrl = URL.createObjectURL(file);
          setPreview(objectUrl);
          
          // Free memory when ever this component is unmounted
          return () => URL.revokeObjectURL(objectUrl);
        }}
      />
    </div>
  );
}