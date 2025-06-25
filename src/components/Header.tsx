"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone, Edit, Bell } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [selectedLanguage] = useState("English");
  const [isMounted, setIsMounted] = useState(false);

  // Delay rendering language selection until after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0  z-50  shadow-sm mt-10">
      <div className="max-w-full bg-[#20565c] mx-auto px-14 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-10">
          {/* LEFT: Navigation */}
          <div className="flex items-center space-x-8 pl-22 ">
            <Link href="/" className="flex  rounded-full bg-white">
              <Image
                src="/image.png"
                width={100}
                height={50}
                alt="Logo"
                objectFit="contain"
              />
            </Link>

            <Link href="/" className="flex items-center space-x-2">
              <FaHome className="text-xl text-white" />
              <span className="text-white ">Home</span>
            </Link>

            <Link
              href="/blogs"
              className="text-white hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Blogs</span>
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2"
            >
              <img src="/icons/gallery.png" className="w-5 h-5 " alt="Add" />
              <span>Gallery</span>
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
            <Link
              href="/writeforus"
              className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2"
            >
              <Edit className="w-4 h-4" />
              <span>Write For Us</span>
            </Link>
          </div>

          {/* RIGHT: Language, Notification, Profile */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher - Hydration Safe */}
            {isMounted && (
              <div className="flex items-center space-x-2 text-white text-sm">
                <span>Language</span>
                <label
                  className={`flex items-center space-x-1 px-2 py-1 rounded-full font-semibold cursor-pointer ${
                    selectedLanguage === "Hindi"
                      ? "bg-green-500 text-white"
                      : "text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="language"
                    value="Hindi"
                    checked={selectedLanguage === "Hindi"}
                    className="accent-white"
                  />
                  <span>हिंदी</span>
                </label>
                <label
                  className={`flex items-center space-x-1 px-2 py-1 rounded-full font-semibold cursor-pointer ${
                    selectedLanguage === "English"
                      ? "bg-green-500 text-white"
                      : "text-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="language"
                    value="English"
                    checked={selectedLanguage === "English"}
                    className="accent-white"
                  />
                  <span>English</span>
                </label>
              </div>
            )}

            {/* Bell Icon */}
            <Bell className="text-white text-xl cursor-pointer hover:text-blue-300 transition-colors" />

            {/* User Profile */}
            <div className="flex items-center space-x-2 text-white">
              <FaUserCircle className="text-2xl" />
              <span>Deepali Yadav</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
