"use client";

import { useRouter } from "next/navigation";

import ReviewForm from "../components/review/ReviewForm";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/firebase";

export default function ReviewPage() {
  const router = useRouter();

  const submitReview = async (reviewData) => {
    try {
      await addDoc(collection(db, "reviews"), {
        ...reviewData,
        createdAt: serverTimestamp(),
      });

      alert("🎉 Thank you! Your review has been submitted successfully.");

      // Redirect to Reviews page
      router.push("/reviews");
    } catch (error) {
      console.error(error);
      alert("Failed to submit review.");
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div
          style={{
            maxWidth: "1000px",
            margin: "50px auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                color: "#6d4c41",
                fontSize: "42px",
                marginBottom: "12px",
                fontWeight: "700",
              }}
            >
              Write a Review
            </h1>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              We'd love to hear about your experience with
              <strong> Rajnish Wood Art.</strong>
              Your feedback helps us improve and helps future customers.
            </p>
          </div>

          <ReviewForm onSubmit={submitReview} />
        </div>
      </div>
    </section>
  );
}
