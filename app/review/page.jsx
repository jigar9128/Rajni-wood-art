"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import ReviewForm from "../components/review/ReviewForm";
import ReviewList from "../components/review/ReviewList";
import RatingSummary from "../components/review/RatingSummary";
import SearchFilter from "../components/review/SearchFilter";

import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const reviewData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate
            ? doc.data().createdAt.toDate()
            : new Date(),
        }));

        console.log("Firestore Reviews:", reviewData);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const submitReview = async (reviewData) => {
    try {
      await addDoc(collection(db, "reviews"), {
        ...reviewData,
        createdAt: serverTimestamp(),
      });

      alert("Review submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit review.");
    }
  };

  const filteredReviews = useMemo(() => {
    let data = [...reviews];

    if (search) {
      data = data.filter(
        (item) =>
          item.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.review?.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (filter !== "all") {
      data = data.filter((item) => item.rating === Number(filter));
    }

    switch (sort) {
      case "highest":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "lowest":
        data.sort((a, b) => a.rating - b.rating);
        break;

      case "oldest":
        data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;

      default:
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return data;
  }, [reviews, search, filter, sort]);

  return (
    <section className="hero">
      <div className="container">
        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto",
          }}
        >
          {/* Page Heading */}
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
                marginBottom: "10px",
              }}
            >
              Rajnish Wood Art Reviews
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: "18px",
              }}
            >
              Read genuine customer reviews or share your own experience.
            </p>
          </div>

          {/* Product Image */}

          {/* Rating Summary */}
          <RatingSummary reviews={reviews} />

          {/* Search & Filter */}
          <SearchFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />

          {/* Review Form */}
          <ReviewForm onSubmit={submitReview} />

          {/* Review List */}
          <ReviewList reviews={filteredReviews} loading={loading} />
        </div>
      </div>
    </section>
  );
}
