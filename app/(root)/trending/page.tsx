"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  MessageSquare,
  ArrowLeft,
  Siren as Fire,
  Clock,
  Eye,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const trendingDiscussions = [
  {
    id: 1,
    title: "The Future of AI in Web Development: A Comprehensive Analysis",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100",
      reputation: 2845,
      badge: "AI Expert",
    },
    category: "Technology",
    replies: 47,
    views: 1203,
    likes: 89,
    createdAt: "2 hours ago",
    trendingScore: 95,
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications...",
  },
  {
    id: 2,
    title:
      "Building a Successful Remote Team: Lessons from 5 Years of Experience",
    author: {
      name: "Marcus Johnson",
      avatar:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100",
      reputation: 1967,
      badge: "Mentor",
    },
    category: "Business & Entrepreneurship",
    replies: 32,
    views: 856,
    likes: 64,
    createdAt: "4 hours ago",
    trendingScore: 87,
    excerpt:
      "Sharing practical insights on managing distributed teams, communication strategies, and building culture...",
  },
  {
    id: 3,
    title: "Minimalist Design Principles That Actually Work in 2024",
    author: {
      name: "Elena Rodriguez",
      avatar:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100",
      reputation: 3241,
      badge: "Pro Designer",
    },
    category: "Creative Arts",
    replies: 28,
    views: 692,
    likes: 52,
    createdAt: "6 hours ago",
    trendingScore: 78,
    excerpt:
      "Breaking down the core principles of minimalist design and how to apply them effectively...",
  },
  {
    id: 4,
    title: "Mental Health in the Digital Age: Finding Balance",
    author: {
      name: "Dr. Michael Park",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100",
      reputation: 4156,
      badge: "Healthcare Expert",
    },
    category: "Health & Lifestyle",
    replies: 73,
    views: 2341,
    likes: 127,
    createdAt: "1 day ago",
    trendingScore: 92,
    excerpt:
      "Discussing the impact of technology on mental health and practical strategies for digital wellness...",
  },
  {
    id: 5,
    title: "Cryptocurrency Regulation: What Developers Need to Know",
    author: {
      name: "Alex Thompson",
      avatar:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100",
      reputation: 5847,
      badge: "Crypto Expert",
    },
    category: "Technology",
    replies: 156,
    views: 4523,
    likes: 234,
    createdAt: "3 hours ago",
    trendingScore: 98,
    excerpt:
      "Understanding the evolving regulatory landscape and its implications for blockchain development...",
  },
];

export default function Trending() {
  const [searchQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("today");

  const filteredDiscussions = trendingDiscussions
    .filter(
      (discussion) =>
        discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        discussion.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => b.trendingScore - a.trendingScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      {/* Header - Fixed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Trending</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-gray-600 hover:text-blue-600"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <Fire className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Trending Discussions
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Discover the hottest topics and most engaging conversations
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search trending discussions..."
                  value={searchQuery}
                  className="pl-10 bg-gray-50 border-0 focus:bg-white transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-32">
                  <Clock className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Trending Discussions */}
        <div className="space-y-6">
          {filteredDiscussions.map((discussion, index) => (
            <Card
              key={discussion.id}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-lg">
                      #{index + 1}
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-orange-600 font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      <span>{discussion.trendingScore}</span>
                    </div>
                  </div>

                  <Avatar className="w-12 h-12 ring-2 ring-gray-100">
                    <AvatarImage
                      src={discussion.author.avatar}
                      alt={discussion.author.name}
                    />
                    <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-orange-100 text-orange-700">
                        <Fire className="w-3 h-3 mr-1" />
                        Hot
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {discussion.category}
                      </Badge>
                    </div>

                    <Link href={`/discussion/${discussion.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        {discussion.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {discussion.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          {discussion.author.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {discussion.author.badge}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{discussion.createdAt}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{discussion.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{discussion.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDiscussions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No trending discussions found
            </h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
