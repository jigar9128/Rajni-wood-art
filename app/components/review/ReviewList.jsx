"use client";

import ReviewCard from "./ReviewCard";
import { FaComments } from "react-icons/fa";

export default function ReviewList({ reviews = [], loading = false }) {
  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "6px solid #eee",
            borderTop: "6px solid #6d4c41",
            borderRadius: "50%",
            margin: "0 auto 20px",
            animation: "spin 1s linear infinite",
          }}
        />

        <h2
          style={{
            color: "#6d4c41",
            marginBottom: "10px",
          }}
        >
          Loading Reviews...
        </h2>

        <p style={{ color: "#777" }}>
          Please wait while we fetch customer reviews.
        </p>

        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "60px 30px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 15px 35px rgba(0,0,0,.08)",
          marginTop: "40px",
        }}
      >
        <FaComments
          size={70}
          color="#6d4c41"
          style={{ marginBottom: "20px" }}
        />

        <h2
          style={{
            color: "#6d4c41",
            marginBottom: "15px",
          }}
        >
          No Reviews Yet
        </h2>

        <p
          style={{
            color: "#777",
            fontSize: "17px",
            lineHeight: "1.8",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          Be the first customer to share your experience with Rajnish Wood Art.
          Your review will help other customers make better decisions.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#6d4c41",
            fontSize: "34px",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaComments />
          Customer Reviews
        </h2>

        <div
          style={{
            background: "#6d4c41",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </div>
      </div>

      {/* Reviews */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={review.id || index} review={review} />
        ))}
      </div>
    </div>
  );
}
