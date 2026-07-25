"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/config";

export default function LoginButton() {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      alert(`Welcome ${result.user.displayName}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={login}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg"
    >
      Sign in with Google
    </button>
  );
}
