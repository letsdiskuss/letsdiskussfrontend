import React from "react";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Discussion } from "@/types";
import Image from "next/image";

interface DiscussionCardProps {
  discussion: Discussion;
}

export function DiscussionCard({ discussion }: DiscussionCardProps) {
  return (
    <Card className="mb-0 overflow-hidden rounded-md border-2 border-green-800 bg-white shadow-sm">
      <div className="flex h-[220px]">
        {/* Left: Avatar + Answer count */}
        <div className="flex w-[80px] flex-col items-center justify-center border-r border-gray-200 bg-white px-2">
          <Avatar className="mb-2 h-10 w-10">
            <AvatarFallback className="bg-teal-600 text-white font-semibold">
              {discussion.author.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="text-lg font-bold text-green-900">
            {discussion.replies}
          </div>
          <div className="text-xs text-gray-500">Answer</div>
        </div>

        {/* Middle: Title, Excerpt, Meta */}
        <div className="flex flex-1 flex-col justify-between px-4 py-3">
          <div>
            <h3 className="cursor-pointer text-[17px] font-semibold leading-tight text-black hover:text-green-700">
              {discussion.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-snug text-gray-700">
              {discussion.excerpt}
              <span className="ml-1 cursor-pointer text-green-700 hover:underline">
                ..Read more
              </span>
            </p>
          </div>

          <div className="mt-2 flex justify-between text-[11px] text-gray-600">
            <span>
              By <strong>{discussion.author.name}</strong> (
              {discussion.author.email})
            </span>
            <span>Posted on {discussion.createdAt}</span>
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-gray-300 pt-2 text-xs">
            <div className="flex items-center gap-4 text-green-800">
              <span className="flex items-center gap-1 font-medium">
                🗨 {discussion.replies} Answer
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {discussion.views} Views
              </span>
            </div>
          </div>
        </div>

        {/* Right: Thumbnail Image */}
        {discussion.image && (
          <div className="flex-shrink-0 p-2">
            <Image
              src={discussion.image}
              alt={discussion.title}
              width={80}
              height={60}
              className="rounded-sm object-cover"
            />
          </div>
        )}
      </div>
    </Card>
  );
}
