import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-700 to-yellow-500 text-white">
      <nav className="flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold">
          Rajnish <span className="text-yellow-300">Wood Art</span>
        </h1>

        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Dark Mode
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h2 className="text-6xl font-bold">Customer Reviews</h2>

        <p className="mt-6 text-xl max-w-2xl">
          Share your experience with Rajnish Wood Art.
        </p>

        <div className="mt-8 text-5xl">⭐⭐⭐⭐⭐</div>

        <h3 className="text-3xl font-bold mt-4">4.9 / 5</h3>

        <p className="mt-2">Based on 250+ Reviews</p>

        <Link href="/review">
          <button className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300">
            Write Review
          </button>
        </Link>
      </section>
    </main>
  );
}
