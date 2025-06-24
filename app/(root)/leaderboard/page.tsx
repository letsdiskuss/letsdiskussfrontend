"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Users,
  MessageSquare,
  ArrowLeft,
  Trophy,
  Medal,
  Award,
  Crown,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoImages } from "react-icons/io5";
import { FaCommentAlt, FaPhoneAlt, FaPen } from "react-icons/fa";
import { Bell } from "lucide-react";
import { Image } from "lucide-react";
import { Phone } from "lucide-react";
import { Edit } from "lucide-react";

const leaderboardData = [
  {
    id: 1,
    name: "Alex Thompson",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100",
    reputation: 5847,
    posts: 342,
    likes: 1234,
    badge: "Legend",
    joinDate: "Jan 2021",
    specialties: ["AI", "Web Dev", "Blockchain"],
    rank: 1,
    change: 0,
  },
  {
    id: 2,
    name: "Maria Garcia",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100",
    reputation: 4923,
    posts: 287,
    likes: 987,
    badge: "Expert",
    joinDate: "Mar 2021",
    specialties: ["Design", "UX", "Frontend"],
    rank: 2,
    change: 1,
  },
  {
    id: 3,
    name: "David Kim",
    avatar:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100",
    reputation: 3764,
    posts: 198,
    likes: 756,
    badge: "Pro",
    joinDate: "May 2021",
    specialties: ["Backend", "DevOps", "Security"],
    rank: 3,
    change: -1,
  },
  {
    id: 4,
    name: "Sarah Chen",
    avatar:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100",
    reputation: 3241,
    posts: 156,
    likes: 623,
    badge: "Expert",
    joinDate: "Jul 2021",
    specialties: ["AI", "Data Science", "Python"],
    rank: 4,
    change: 2,
  },
  {
    id: 5,
    name: "Marcus Johnson",
    avatar:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100",
    reputation: 2967,
    posts: 234,
    likes: 543,
    badge: "Mentor",
    joinDate: "Sep 2021",
    specialties: ["Business", "Leadership", "Strategy"],
    rank: 5,
    change: 0,
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100",
    reputation: 2543,
    posts: 167,
    likes: 432,
    badge: "Pro Designer",
    joinDate: "Nov 2021",
    specialties: ["Design", "Branding", "Creative"],
    rank: 6,
    change: 3,
  },
];

export default function Leaderboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("all-time");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredUsers = leaderboardData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-500">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600";
      default:
        return "bg-gradient-to-r from-blue-500 to-purple-600";
    }
  };

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
          <span className="text-gray-900 font-medium">Leaderboard</span>
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
            <Trophy className="h-8 w-8 text-yellow-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Community Leaderboard
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Recognize our most valuable community contributors
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search contributors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 border-0 focus:bg-white transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredUsers.slice(0, 3).map((user, index) => (
            <Card
              key={user.id}
              className={`relative overflow-hidden border-0 ${getRankBadgeColor(user.rank)} p-1`}
            >
              <div className="bg-white rounded-lg p-6 h-full">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {getRankIcon(user.rank)}
                  </div>
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-white shadow-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {user.name}
                  </h3>
                  <Badge
                    className={`${getRankBadgeColor(user.rank)} text-white mb-3`}
                  >
                    {user.badge}
                  </Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Reputation:</span>
                      <span className="font-semibold">
                        {user.reputation.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Posts:</span>
                      <span className="font-semibold">{user.posts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Likes:</span>
                      <span className="font-semibold">{user.likes}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4 justify-center">
                    {user.specialties.slice(0, 2).map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="border-0 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Full Rankings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12">
                    {user.rank <= 3 ? (
                      getRankIcon(user.rank)
                    ) : (
                      <span className="text-lg font-bold text-gray-500">
                        #{user.rank}
                      </span>
                    )}
                  </div>

                  <Avatar className="w-12 h-12 ring-2 ring-gray-100">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">
                        {user.name}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {user.badge}
                      </Badge>
                      {user.change > 0 && (
                        <div className="flex items-center text-green-600 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />+{user.change}
                        </div>
                      )}
                      {user.change < 0 && (
                        <div className="flex items-center text-red-600 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1 rotate-180" />
                          {user.change}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {user.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      Member since {user.joinDate}
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">
                        {user.reputation.toLocaleString()}
                      </div>
                      <div className="text-xs">Reputation</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">
                        {user.posts}
                      </div>
                      <div className="text-xs">Posts</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">
                        {user.likes}
                      </div>
                      <div className="text-xs">Likes</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No contributors found
            </h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
