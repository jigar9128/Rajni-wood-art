"use client";

import { useRef } from "react";
import { FaCamera } from "react-icons/fa";

export default function ImageUploader({ images, setImages, maxImages = 5 }) {
  const fileInputRef = useRef(null);

  function handleFiles(files) {
    const fileArray = Array.from(files);
    d;

    const validFiles = fileArray.slice(0, maxImages - images.length);

    const previews = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages([...images, ...previews]);
  }

  function removeImage(index) {
    const updated = [...images];
    URL.revokeObjectURL(updated[index].preview);
    updated.splice(index, 1);
    setImages(updated);
  }

  return (
    <div style={{ marginTop: "25px" }}>
      <div
        onClick={() => fileInputRef.current.click()}
        style={{
          width: "70%",
          margin: "0 auto",
          border: "2px dashed #6d4c41",
          borderRadius: "12px",
          padding: "30px",
          textAlign: "center",
          cursor: "pointer",
          background: "#faf7f3",
          transition: ".3s",
        }}
      >
        <FaCamera size={40} color="#6d4c41" style={{ marginBottom: "12px" }} />

        <h3 style={{ color: "#6d4c41" }}>Add Images of Your Work</h3>

        <p style={{ color: "#777", marginTop: "8px" }}>
          Click to upload (Maximum {maxImages} images)
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {images.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                position: "relative",
              }}
            >
              <img
                src={img.preview}
                alt="preview"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "2px solid #ddd",
                }}
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "#c62828",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
