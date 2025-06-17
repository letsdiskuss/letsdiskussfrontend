"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  MessageSquare,
  Image,
  Phone,
  Edit,
  Bell
} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Delay rendering language selection until after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#20565c] shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LEFT: Navigation */}
          <div className="flex items-center space-x-8">
            
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-white font-bold">Home</span>
            </Link>
           
              <Link href="/blogs" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>Blogs</span>
              </Link>
              <Link href="/gallery" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2">
                <Image className="w-4 h-4" />
                <span>Gallery</span>
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
              <Link href="/writeforus" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2">
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
                <label className={`flex items-center space-x-1 px-2 py-1 rounded-full font-semibold cursor-pointer ${selectedLanguage === "Hindi" ? "bg-green-500 text-white" : "text-white"}`}>
                  <input
                    type="radio"
                    name="language"
                    value="Hindi"
                    checked={selectedLanguage === "Hindi"}
                    onChange={() => setSelectedLanguage("Hindi")}
                    className="accent-white"
                  />
                  <span>हिंदी</span>
                </label>
                <label className={`flex items-center space-x-1 px-2 py-1 rounded-full font-semibold cursor-pointer ${selectedLanguage === "English" ? "bg-green-500 text-white" : "text-white"}`}>
                  <input
                    type="radio"
                    name="language"
                    value="English"
                    checked={selectedLanguage === "English"}
                    onChange={() => setSelectedLanguage("English")}
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
