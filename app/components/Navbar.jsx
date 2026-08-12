import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Rajni Wood Art
          </Link>
        </div>

        <div className="nav-links">
          <Link href="/">Home</Link>

          <Link href="/#why-choose-us">Why Choose Us</Link>

          <Link href="/review">Write Review</Link>

          <Link href="/reviews">Reviews</Link>

          <Link href="/#contact-us">Contact Us</Link>
        </div>

        <Link href="/review">
          <button className="btn-review">Write Review</button>
        </Link>
      </div>
    </nav>
  );
}
