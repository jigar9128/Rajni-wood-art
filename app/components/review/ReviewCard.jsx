"use client";

import { useState } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaThumbsUp,
  FaRegThumbsUp,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";

import Avatar from "react-avatar";

import { doc, updateDoc, increment } from "firebase/firestore";

import { db } from "../../firebase/firebase";

export default function ReviewCard({ review }) {
  const [liked, setLiked] = useState(false);
  const [helpful, setHelpful] = useState(review.helpful || 0);
  const [selectedImage, setSelectedImage] = useState(null);

  async function handleHelpful() {
    if (liked) return;

    try {
      await updateDoc(doc(db, "reviews", review.id), {
        helpful: increment(1),
      });

      setHelpful((prev) => prev + 1);
      setLiked(true);
    } catch (error) {
      console.error(error);
    }
  }

  function getRelativeDate(date) {
    if (!date) return "Today";

    const reviewDate = new Date(date);
    const now = new Date();

    const seconds = Math.floor((now - reviewDate) / 1000);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (seconds < minute) return "Just now";
    if (seconds < hour) return `${Math.floor(seconds / minute)} min ago`;
    if (seconds < day) return `${Math.floor(seconds / hour)} hour ago`;
    if (seconds < day * 2) return "Yesterday";
    if (seconds < day * 7) return `${Math.floor(seconds / day)} days ago`;

    return reviewDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  const reviewDate = getRelativeDate(review.createdAt);

  return (
    <>
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          transition: ".3s",
          border: "1px solid #f2f2f2",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Avatar name={review.name} round size="55" textSizeRatio={2} />

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#222",
                  fontSize: "20px",
                }}
              >
                {review.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#2e7d32",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
              >
                <FaCheckCircle />

                <span>Verified Customer</span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#777",
              fontSize: "14px",
            }}
          >
            <FaCalendarAlt />

            {reviewDate}
          </div>
        </div>

        {/* Rating */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            marginTop: "20px",
          }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={22}
              color={star <= review.rating ? "#FFC107" : "#E0E0E0"}
            />
          ))}
        </div>

        {/* Review */}
        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.8",
            color: "#444",
            fontSize: "16px",
            whiteSpace: "pre-wrap",
          }}
        >
          {review.review}
        </p>

        {/* Images */}
        {review.images?.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {review.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Customer Review"
                onClick={() => setSelectedImage(img)}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: ".3s",
                  border: "2px solid #eee",
                }}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: "25px",
            paddingTop: "18px",
            borderTop: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <button
            onClick={handleHelpful}
            disabled={liked}
            style={{
              border: "none",
              background: liked ? "#4CAF50" : "#f5f5f5",
              color: liked ? "#fff" : "#444",
              padding: "10px 18px",
              borderRadius: "30px",
              cursor: liked ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
              transition: ".3s",
            }}
          >
            {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            Helpful ({helpful})
          </button>

          <small
            style={{
              color: "#999",
              fontWeight: "500",
            }}
          >
            Rajnish Wood Art Review
          </small>
        </div>
      </div>
      {/* Image Viewer */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "none",
              background: "#fff",
              cursor: "pointer",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaTimes />
          </button>

          <img
            src={selectedImage}
            alt="Review"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              borderRadius: "15px",
              boxShadow: "0 20px 50px rgba(0,0,0,.4)",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}
