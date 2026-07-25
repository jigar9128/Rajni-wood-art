import LoginButton from "./LoginButton";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-r from-amber-900 to-yellow-700 text-white p-10"
    >
      <h1 className="text-5xl font-bold text-center">
        Rajnish Wood Art Reviews
      </h1>

      <p className="mt-5 text-xl text-center max-w-2xl">
        Share your experience with Rajnish Wood Art and help other customers.
      </p>

      <div className="mt-10 text-center">
        <div className="text-5xl">⭐⭐⭐⭐⭐</div>

        <h2 className="text-3xl mt-4 font-bold">4.9 / 5</h2>

        <p className="text-lg mt-2">Based on 250+ customer reviews</p>
      </div>

      <button
        className="
        mt-10
        bg-yellow-500
        hover:bg-yellow-600
        text-black
        font-bold
        px-8
        py-4
        rounded-xl
        transition"
      >
        <LoginButton />
      </button>
    </section>
  );
}
