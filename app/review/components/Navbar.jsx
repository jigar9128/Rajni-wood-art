"use client";

import { FaMoon } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-yellow-500">Rajnish Wood Art</h1>

        <button className="text-xl">
          <FaMoon />
        </button>
      </div>
    </nav>
  );
}
