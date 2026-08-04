import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <span className="badge">⭐ Trusted by 500+ Happy Customers</span>

          <h1>
            Share Your Experience
            <br />
            with
            <span> Rajnish Wood Art</span>
          </h1>

          <p>
            Your feedback helps us improve and helps new customers choose
            Rajnish Wood Art with confidence.
          </p>

          <div className="hero-rating">
            <div className="stars">★★★★★</div>

            <h3>4.9 / 5</h3>

            <p>Based on 500+ Reviews</p>
          </div>

          <div className="hero-buttons">
            <Link href="/review">
              <button className="primary-btn">Write a Review</button>
            </Link>

            <Link href="/reviews">
              <button className="secondary-btn">View Reviews</button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <h2>★★★★★</h2>

            <h3>Customer Satisfaction</h3>

            <p>
              Every review helps us build better furniture and better customer
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
