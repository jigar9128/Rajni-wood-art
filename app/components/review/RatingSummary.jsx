"use client";

import { FaStar } from "react-icons/fa";

export default function RatingSummary({ reviews = [] }) {
  const totalReviews = reviews.length;

  const averageRating =
    totalReviews === 0
      ? 0
      : (
          reviews.reduce((sum, item) => sum + item.rating, 0) / totalReviews
        ).toFixed(1);

  function getCount(star) {
    return reviews.filter((r) => r.rating === star).length;
  }

  function getPercentage(star) {
    if (totalReviews === 0) return 0;
    return (getCount(star) / totalReviews) * 100;
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "30px",
        marginBottom: "35px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#6d4c41",
          marginBottom: "25px",
        }}
      >
        Customer Rating
      </h2>

      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "#6d4c41",
          }}
        >
          {averageRating}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            marginTop: "10px",
          }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              color={star <= Math.round(averageRating) ? "#f4b400" : "#d9d9d9"}
            />
          ))}
        </div>

        <p
          style={{
            marginTop: "10px",
            color: "#777",
          }}
        >
          Based on {totalReviews} customer review
          {totalReviews !== 1 ? "s" : ""}
        </p>
      </div>

      {[5, 4, 3, 2, 1].map((star) => (
        <div
          key={star}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
          }}
        >
          <span style={{ width: "20px" }}>{star}</span>

          <FaStar color="#f4b400" />

          <div
            style={{
              flex: 1,
              height: "10px",
              background: "#eee",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${getPercentage(star)}%`,
                height: "100%",
                background: "#6d4c41",
              }}
            />
          </div>

          <span
            style={{
              width: "35px",
              textAlign: "right",
              color: "#555",
            }}
          >
            {getCount(star)}
          </span>
        </div>
      ))}
    </div>
  );
}
