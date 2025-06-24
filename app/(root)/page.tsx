"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  categories,
  socialLinks,
  footerLinks,
  featuredDiscussions,
  topDiscussions,
} from "../../src/assets/data/index"; // Likely unused, remove

import {
  MessageCircle,
  Search,
  BellOff,
  HelpCircle,
  Star,
  Clock,
  MessageSquare,
  Eye,
  ThumbsUp,
  X,
} from "lucide-react";
import { Discussion } from "@/types";
import { DiscussionCard } from "@/components/pages/home/DiscussionCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Latest Questions");
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [discussions, setDiscussions] =
    React.useState<Discussion[]>(featuredDiscussions);

  const tabs = [
    "Latest Questions",
    "Unanswered Questions",
    "Blogs",
    "Featured Questions",
    "Reels",
  ];

  return (
    <>
      <div
        className={`flex min-h-screen  ${
          isDisclaimerOpen ? "blur-sm overflow-hidden" : ""
        }`}
      >
        {/* Left Sidebar */}
        <div className="w-[16%] bg-white  overflow-y-auto">
          <div className="p-4  ">
            <Button className="w-full bg-teal-700 text-white py-3 px-4 rounded-md font-semibold hover:bg-teal-800 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Become A Blogger</span>
            </Button>
          </div>

          <div className="p-3 m-8  bg-white  rounded-md ">
            <h3 className=" text-black mb-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded"></div>
              <span>Category</span>
            </h3>
            <hr className="my-4 border-1 border-gray-300"></hr>
            <div>
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 py-2 px-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      {category.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Find Us</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div
                    key={index}
                    className={`${social.color} p-3 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          {footerLinks.map((link, index) =>
            link.name === "Disclaimer" ? (
              <button
                key={index}
                onClick={() => setDisclaimerOpen(true)}
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
              >
                {link.name}
              </button>
            ) : link.name === "About" ? (
              <button
                key={index}
                onClick={() => setAboutOpen(true)}
                className="text-blue-600 hover:text-blue-800 transition-colors underline"
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
            )
          )}
        </div>

        {/* 2nd div------------------------------- */}

        {/* Main Content - 50% */}
        <div className="flex-1  px-10">
          {/* Top Search Bar */}
          <div className="  shadow-sm border-b border-gray-200 ">
            <div className="flex  flex-wrap items-center justify-between px-6 py-2 border-b border-gray-100 gap-4">
              <div className="relative flex-1 ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search a question, user, blog or post"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <BellOff className="text-red-600 cursor-pointer hover:text-red-700 transition-colors" />
                <HelpCircle className="text-gray-600 cursor-pointer hover:text-gray-700 transition-colors" />
                <Button className="bg-teal-800 text-white hover:bg-[#20565c] px-4 py-2 text-sm rounded-md font-medium">
                  Ask Question
                </Button>
              </div>
            </div>

            <div className="flex space-x-6 px-4 py-2 bg-white ml-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
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

          <div className=" mx-auto p-6">
            <div className="space-y-4">
              {discussions?.map((discussion: Discussion, index) => (
                <DiscussionCard key={index} discussion={discussion} />
              ))}
            </div>
          </div>
        </div>

        {/* 3rd div -------------------------------------------------------- */}

        {/* Right Sidebar - 20% */}
        <div className="w-[16%] bg-white ">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
              <span>Top Discussions</span>
            </h3>
            <div className="space-y-4">
              {topDiscussions.map((discussion, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                    {discussion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full rounded shadow-lg p-6 relative">
            <button
              onClick={() => setAboutOpen(false)}
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
                Whether youre a student, professional, hobbyist, or just
                curious, there something here for you. We value respectful
                communication, factual accuracy, and open dialogue.
              </p>
              <p>
                Thank you for being part of our journey. Lets discuss, learn,
                and grow together!
              </p>
            </div>
            <div className="text-right mt-4">
              <button
                onClick={() => setAboutOpen(false)}
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
