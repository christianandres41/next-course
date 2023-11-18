"use client";
import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} alt="Image" width={280} height={320} />
      )}
      <CldUploadWidget
        uploadPreset="unvryjmu"
        options={{
          sources: ["local"],
          maxFiles: 5,
          multiple: false,
          styles: {
            palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#90a0b3",
              tabIcon: "#0094c7",
              inactiveTabIcon: "#69778A",
              menuIcons: "#0094C7",
              link: "#53ad9d",
              action: "#8F5DA5",
              inProgress: "#0194c7",
              complete: "#53ad9d",
              error: "#c43737",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Poppins",
                active: true,
              },
            },
          },
        }}
        onUpload={(result) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload files
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
