"use client";

import { FaStar } from "react-icons/fa";

export default function StarRating({
  rating,
  setRating,
  hover,
  setHover,
  size = 32,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
        marginBottom: "20px",
      }}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={size}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            cursor: "pointer",
            transition: "0.25s",
            color: star <= (hover || rating) ? "#f4b400" : "#d1d5db",
            transform: star === hover ? "scale(1.2)" : "scale(1)",
          }}
        />
      ))}
    </div>
  );
}
