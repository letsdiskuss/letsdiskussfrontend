"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-md shadow p-6">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-teal-800 text-white p-3 rounded-full">
            <Lock className="h-6 w-6" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mb-6">Sign up</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name *"
              className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address *"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm-Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-sm">
              I accept{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* CAPTCHA (mock) */}
          <div className="bg-white border border-gray-300 rounded p-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">I am not a robot</span>
              {/* Mocking reCAPTCHA logo */}
              <div className="ml-auto">
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-500 py-2 rounded mt-2 text-sm cursor-not-allowed"
            disabled
          >
            NEXT
          </button>
        </form>

        {/* Link to login */}
        <p className="mt-4 text-center text-sm">
          <Link href="#" className="text-blue-600 hover:underline">
            Already have an account?
          </Link>
        </p>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Copyright ©{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Letsdiskuss
          </Link>{" "}
          2025.
        </p>
      </div>
    </div>
  );
}
