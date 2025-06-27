"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  categories,
  footerLinks,
  featuredDiscussions,
  topDiscussions,
} from "../../../src/assets/data/index";
import {
  AlignJustify,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

import { Search, BellOff, HelpCircle, Star, X } from "lucide-react";
import { Discussion } from "@/types";
import { DiscussionCard } from "@/components/pages/home/DiscussionCard";

export default function Home() {
  const [searchQuery] = useState("");
  const [activeTab] = useState("Latest Questions");
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [discussions] = React.useState<Discussion[]>(featuredDiscussions);

  const tabs = ["Recent Posts", "Popular Posts"];

  return (
    <>
      <div
        className={`flex min-h-screen bg-gray-100 ${
          isDisclaimerOpen ? "blur-sm overflow-hidden" : ""
        }`}
      >
        {/* Left Sidebar */}
        <div className="w-[16%] bg-gray-100 overflow-y-auto">
          <div className="p-5">
            <Link href="/add-blog" passHref>
              <Button className="w-full bg-[#20565c] text-white rounded-md hover:bg-teal-800 transition-colors flex items-center justify-center">
                <span>BECOME A BLOGGER</span>
              </Button>
            </Link>
          </div>
          <div className="p-4 border border-gray-200 bg-white shadow-md rounded m-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <AlignJustify className="w-4 h-4" />
              <span>Category</span>
            </h3>
            <hr className="my-6 border-gray-400" />
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 py-2 px-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                >
                  {typeof category.icon === "string" ? (
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <category.icon className="w-6 h-6 text-gray-700" />
                  )}
                  <span className="text-sm text-gray-700">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* "Find Us" section */}
          <div className="p-3 border m-5 border-gray-300 shadow-md">
            <h3 className="font-bold text-gray-900 mb-4">Find Us</h3>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://twitter.com/Letsdiskuss"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full flex items-center justify-center w-[70px] h-[40px] hover:scale-105 transition-transform duration-200 bg-blue-400"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.facebook.com/letsdiskussss"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full flex items-center justify-center w-[70px] h-[40px] hover:scale-105 transition-transform duration-200 bg-blue-600"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/letsdiskuss/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full flex items-center justify-center w-[70px] h-[40px] hover:scale-105 transition-transform duration-200 bg-pink-500"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC8P36SywfXz8FI0ioSzJuew/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full flex items-center justify-center w-[70px] h-[40px] hover:scale-105 transition-transform duration-200 bg-red-500"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/lets-diskuss/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full flex items-center justify-center w-[70px] h-[40px] hover:scale-105 transition-transform duration-200 bg-blue-700"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN%3Aenk"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full flex items-center justify-center w-[70px] h-[40px] hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-green-400 via-red-500 to-blue-500"
              >
                <img
                  src="/google.png"
                  alt="Google News"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-wrap gap-3 ml-5 text-sm">
            {footerLinks.map((link, index) =>
              link.name === "Disclaimer" ? (
                <button
                  key={index}
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => setIsDisclaimerOpen(true)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {link.name}
                </button>
              ) : link.name === "About" ? (
                <button
                  key={index}
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => setIsAboutOpen(true)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={index}
                  href={link.path}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Main Content - 50% */}
        <div className="flex-1  px-10">
          {/* Top Search Bar */}
          <div className="  shadow-sm border-b border-gray-200 ">
            <div className="flex  flex-wrap items-center justify-between px-6 py-2 border-b border-gray-100 gap-4">
              <div className="relative flex-1  ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search a question, user, blog or post"
                  value={searchQuery}
                  // onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <BellOff className="text-red-600 cursor-pointer hover:text-red-700 transition-colors" />
                <HelpCircle className="text-gray-600 cursor-pointer hover:text-gray-700 transition-colors" />
                <Button className="bg-teal-800 text-white hover:bg-[#20565c] px-6 py-2 text-sm rounded-md font-medium">
                  Create User
                </Button>
              </div>
            </div>

            <div className="flex space-x-6 px-4 py-2 bg-white ml-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  // onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-teal-800 text-white px-4 py-2 rounded-tl-full rounded-br-md"
                      : "text-gray-700 hover:text-black px-2 py-2"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto p-6">
            <div className="space-y-4">
              {discussions?.map((discussion: Discussion, index) => (
                <div
                  key={index}
                  className="border-2 border-green-900 rounded-md"
                >
                  <DiscussionCard discussion={discussion} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - 20% */}
        <div className="w-[16%] m-5 bg-white rounded-md shadow h-[300px] overflow-y-auto">
          <div className="p-3 ">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <AlignJustify className="w-4 h-4" />
              <span>Top Posts</span>
            </h3>
            <hr className="my-2 border-gray-400" />
            <div className="space-y-3">
              {topDiscussions.map((discussion, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
                    {discussion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full rounded shadow-lg p-6 relative">
            <button
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-sm mb-4 text-gray-600">
              <strong>Last updated: 01.01.2024</strong>
            </p>
            <div className="text-gray-700 text-sm space-y-2 max-h-[300px] overflow-y-auto">
              <p>
                Welcome to LetsDiskuss – your go-to platform for meaningful
                discussions, knowledge sharing, and community building.
              </p>
              <p>
                Our mission is to foster an inclusive environment where users
                can ask questions, share insights, and explore ideas across a
                wide range of categories.
              </p>
              <p>
                Whether you are a student, professional, hobbyist, or just
                curious, there is something here for you. We value respectful
                communication, factual accuracy, and open dialogue.
              </p>
              <p>
                Thank you for being part of our journey.Let us discuss, learn,
                and grow together!
              </p>
            </div>
            <div className="text-right mt-4">
              <button
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setIsAboutOpen(false)}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer Modal */}
      {isDisclaimerOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full rounded shadow-lg p-6 relative">
            <button
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setIsDisclaimerOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-2">Disclaimer</h2>
            <div className="text-gray-700 text-sm space-y-2 max-h-[300px] overflow-y-auto">
              <p>
                The content provided on LetsDiskuss is for general informational
                purposes only. All discussions, opinions, and advice are those
                of individual users and do not represent the official position
                of the platform.
              </p>
              <p>
                We do not guarantee the accuracy or reliability of any
                user-contributed content. You are advised to verify information
                independently before making decisions.
              </p>
              <p>
                LetsDiskuss is not liable for any losses or damages arising from
                the use of this site.
              </p>
            </div>
            <div className="text-right mt-4">
              <button
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setIsDisclaimerOpen(false)}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
