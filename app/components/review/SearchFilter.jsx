"use client";

import { FaSearch, FaFilter } from "react-icons/fa";

export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        marginBottom: "30px",
      }}
    >
      <h2
        style={{
          color: "#6d4c41",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Search & Filter Reviews
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "15px",
        }}
      >
        {/* Search */}

        <div
          style={{
            position: "relative",
          }}
        >
          <FaSearch
            style={{
              position: "absolute",
              left: "15px",
              top: "17px",
              color: "#777",
            }}
          />

          <input
            type="text"
            placeholder="Search customer or review..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "15px 15px 15px 45px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        {/* Rating Filter */}

        <div
          style={{
            position: "relative",
          }}
        >
          <FaFilter
            style={{
              position: "absolute",
              left: "15px",
              top: "17px",
              color: "#777",
            }}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "15px 15px 15px 45px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <option value="all">All Ratings</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
        </div>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
        </select>
      </div>
    </div>
  );
}
