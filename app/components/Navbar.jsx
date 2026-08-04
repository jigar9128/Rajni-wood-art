import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">Rajnish Wood Art</div>

        <div className="nav-links">
          <Link href="/">Home</Link>

          <Link href="/review">Write Review</Link>

          <Link href="/reviews">Reviews</Link>
        </div>

        <Link href="/review">
          <button className="btn-review">Write Review</button>
        </Link>
      </div>
    </nav>
  );
}
