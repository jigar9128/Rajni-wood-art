"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link
            href="/"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={closeMenu}
          >
            Rajni Wood Art
          </Link>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/#why-choose-us" onClick={closeMenu}>
            Why Choose Us
          </Link>

          <Link href="/reviews" onClick={closeMenu}>
            Reviews
          </Link>

          <Link href="/#contact-us" onClick={closeMenu}>
            Contact Us
          </Link>

          <Link href="/review" onClick={closeMenu}>
            <button className="btn-review">Write Review</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
