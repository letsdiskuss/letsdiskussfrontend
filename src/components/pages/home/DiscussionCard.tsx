import React from "react";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Discussion } from "@/types";

interface DiscussionCardProps {
  discussion: Discussion;
}

export function DiscussionCard({ discussion }: DiscussionCardProps) {
  return (
    <Card className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <div className="flex">
        {/* Left: Avatar and Answer Count */}
        <div className="flex flex-col items-center p-4 bg-gray-50 min-w-[80px]">
          <Avatar className="w-12 h-12 mb-2">
            <AvatarImage
              src={discussion.author.avatar}
              alt={discussion.author.name}
            />
            <AvatarFallback className="bg-teal-600 text-white font-semibold">
              {discussion.author.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-700">
              {discussion.replies}
            </div>
            <div className="text-xs text-gray-500">Answer</div>
          </div>
        </div>

        {/* Middle: Content */}
        <div className="flex-1 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-600 cursor-pointer">
            {discussion.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {discussion.excerpt}
            <span className="text-teal-600 cursor-pointer ml-1">
              ...Read more
            </span>
          </p>

          <div className="flex items-center justify-between">
            <div className="text-xs text-black">
              By <span className="font-medium">{discussion.author.name}</span>
              <span className="mx-1">|</span>
              Posted on {discussion.createdAt}
            </div>
            {/* <div className="text-xs text-gray-500">
              Latest Answer: {discussion.}
            </div> */}
          </div>
          <hr className="my-0 border-gray-400" />

          {/* Stats and Social Icons */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4 text-green-600" />
                <span>{discussion.views}</span>
                <span>Views</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Social sharing icons */}
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  className="w-4 h-4 text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  className="w-4 h-4 text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Thumbnail Image */}
        <div className="w-48 h-32 flex-shrink-0">
          {/* <img
            src={discussion.thumbnail}
            alt={discussion.title}
            className="object-cover h-full w-full"
          /> */}
        </div>
      </div>
    </Card>
  );
}
