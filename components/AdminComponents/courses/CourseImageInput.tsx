"use client";

import { useState, useEffect } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import Image from "next/image";

export default function CourseImageInput({ initialImage }: { initialImage: string }) {
  const [fileUuid, setFileUuid] = useState<string | null>(null);

  useEffect(() => {
    setFileUuid(initialImage);
  }, [initialImage])

  const triggerUploaderClick = () => {
    // Find the uploadCare button because this api sucks it doesn't even have a function to re open it LOL
    document.querySelector(".uc-light.uc-purple")?.querySelector("button")?.click();
  };

  return (
    <div className="space-y-4">
      <FileUploaderRegular
        pubkey="0d94f54ff475d5e102f2"
        classNameUploader="uc-light uc-purple"
        store={false}
        sourceList="local"
        imgOnly={true}
        multiple={false}
        filesViewMode="grid"
        onCommonUploadSuccess={(e: any) => {
          const file = e.allEntries?.[0];
          if (!file) return;

          setFileUuid(file.uuid);
        }}
      />

      {/* Preview image to re-trigger uploadcare */}
      {fileUuid && (
        <div className="w-48 cursor-pointer" onClick={triggerUploaderClick}>
          <Image
            width={736}
            height={736}
            src={
              fileUuid
                ? `https://1sschtwdwh.ucarecd.net/${fileUuid}/-/preview/736x736/`
                : "/course-page/course-placeholder.png"
            }
            alt="Course preview"
            className="rounded-lg border object-cover"
          />
          <p className="text-sm text-gray-500 text-center mt-1">
            Click image to replace
          </p>
        </div>
      )}

      {/* Hidden input for form submission */}
      <input type="hidden" name="courseImageUuid" value={fileUuid ?? ""} />
    </div>
  );
}
