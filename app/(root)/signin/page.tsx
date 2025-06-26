"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-teal-700 text-white p-3 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm0 0v1.5a2.5 2.5 0 005 0V11"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Sign in
        </h2>

        <input
          type="email"
          placeholder="Email Address *"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded pr-10"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="mb-4 text-sm text-gray-700">
          <span className="mr-4">Language</span>
          <label className="mr-2">
            <input type="radio" name="language" value="en" className="mr-1" />{" "}
            English
          </label>
          <label>
            <input type="radio" name="language" value="hi" className="mr-1" />{" "}
            Hindi
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
        </div>

        <button
          className="w-full bg-gray-300 text-white p-2 rounded cursor-not-allowed mb-4"
          disabled
        >
          SIGN IN
        </button>

        <div className="text-sm text-blue-600 mb-2">
          <Link href="#">Forgot password?</Link>
        </div>
        <div className="text-sm text-gray-700 mb-4">
          Don’t have an account?{" "}
          <Link href="#" className="text-blue-600">
            Sign Up
          </Link>
        </div>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 flex items-center justify-center border border-gray-300 py-2 px-4 rounded text-sm">
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </button>
          <button className="flex-1 flex items-center justify-center bg-[#3b5998] text-white py-2 px-4 rounded text-sm">
            <Image
              src="https://www.svgrepo.com/show/157818/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="mr-2"
            />
            Login with Facebook
          </button>
        </div>

        <p className="text-xs text-center text-gray-600">
          By signing up you indicate that you have read and agreed to the{" "}
          <Link href="#" className="text-blue-600">
            Privacy Policy
          </Link>
        </p>

        <p className="text-xs text-center text-gray-500 mt-4">
          Copyright ©{" "}
          <Link href="#" className="text-blue-600">
            Letsdiskuss
          </Link>{" "}
          2025.
        </p>
      </div>
    </div>
  );
}
