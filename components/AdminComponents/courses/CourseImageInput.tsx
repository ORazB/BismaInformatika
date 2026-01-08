"use client";

import { useRef, useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

export default function CourseImageInput() {
  const [fileUuid, setFileUuid] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const triggerUploaderClick = () => {
    // Find the uploadCare button because this api sucks it doesn't even have a function to re open it LOL
    document.querySelector(".uc-light.uc-purple")?.querySelector("button")?.click();
  };

  return (
    <div className="space-y-4">
      <FileUploaderRegular
        pubkey="1b5e557fe4c7659013c8"
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
          setPreviewUrl(file.cdnUrl);
        }}
      />

      {/* Preview image to re-trigger uploadcare */}
      {previewUrl && (
        <div className="w-48 cursor-pointer" onClick={triggerUploaderClick}>
          <img
            src={`${previewUrl}-/resize/400x400/-/format/webp/`}
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
