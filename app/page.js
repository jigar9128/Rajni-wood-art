"use client";

import { useState } from "react";

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [image, setImage] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          Rajnish Wood Art
        </h1>

        <h2 className="text-xl font-semibold mb-4">Give Your Rating</h2>

        {/* Stars */}

        <div className="flex justify-center gap-3 text-5xl mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)}>
              <span
                className={star <= rating ? "text-yellow-400" : "text-black"}
              >
                ★
              </span>
            </button>
          ))}
        </div>

        <p className="text-center mb-6 text-lg">Rating : {rating}/5</p>

        {/* Review */}

        <textarea
          className="w-full border rounded-xl p-4 h-40"
          placeholder="Write your experience..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        {/* Image Upload */}

        <div className="mt-6">
          <label className="font-semibold">Upload Work Image</label>

          <input
            type="file"
            accept="image/*"
            className="mt-2 block w-full"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {image && <p className="mt-3 text-green-600">Selected: {image.name}</p>}

        <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl">
          Submit Review
        </button>
      </div>
    </main>
  );
}
