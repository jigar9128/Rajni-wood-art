"use client";

import { useState } from "react";
import StarRating from "./StarRating";
import ImageUploader from "./ImageUploader";
import { FaPaperPlane } from "react-icons/fa";

export default function ReviewForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !rating || !review) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      let imageUrls = [];

      // Upload all selected images to Cloudinary
      if (images.length > 0) {
        for (const image of images) {
          const formData = new FormData();

          // IMPORTANT
          formData.append("file", image.file);
          formData.append("upload_preset", "review_upload");

          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dol9outwd/image/upload",
            {
              method: "POST",
              body: formData,
            },
          );

          const data = await response.json();

          if (data.secure_url) {
            imageUrls.push(data.secure_url);
          } else {
            console.error("Cloudinary Error:", data);
          }
        }
      }

      const reviewData = {
        name,
        email,
        rating,
        review,
        images: imageUrls,
        createdAt: new Date(),
      };

      if (onSubmit) {
        await onSubmit(reviewData);
      }

      // Reset Form
      setName("");
      setEmail("");
      setRating(0);
      setHover(0);
      setReview("");
      setImages([]);

      alert("Thank you! Your review has been submitted.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while uploading.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "35px",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#6d4c41",
        }}
      >
        Write a Review
      </h2>

      <input
        type="text"
        placeholder="Your Name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="email"
        placeholder="Your Email *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <h3
        style={{
          textAlign: "center",
          marginTop: "25px",
          color: "#6d4c41",
        }}
      >
        Rate Your Experience
      </h3>

      <StarRating
        rating={rating}
        setRating={setRating}
        hover={hover}
        setHover={setHover}
      />

      <textarea
        placeholder="Tell us about your experience with Rajnish Wood Art..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        style={{
          width: "100%",
          minHeight: "170px",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          resize: "vertical",
          marginTop: "20px",
          fontSize: "15px",
        }}
      />

      <ImageUploader images={images} setImages={setImages} />

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          marginTop: "30px",
          background: "#6d4c41",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "10px",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "17px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <FaPaperPlane />
        {loading ? "Uploading..." : "Submit Review"}
      </button>
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  marginBottom: "18px",
  fontSize: "15px",
};
