'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, TrendingUp, Users, MessageSquare, ArrowLeft, Grid, List, Filter, SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IoMdHome } from 'react-icons/io';
import { IoImages } from 'react-icons/io5';
import { FaCommentAlt, FaPhoneAlt, FaPen } from 'react-icons/fa';
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidBellOff } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";

import { TrendingUp as TrendingUpIcon } from 'lucide-react';

const allCategories = [
  {
    id: 1,
    name: 'Technology',
    description: 'Discuss the latest in tech, programming, artificial intelligence, software development, and digital innovation.',
    icon: '💻',
    threads: 1247,
    posts: 8953,
    members: 3421,
    color: 'bg-blue-500',
    trending: true,
    subcategories: ['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'DevOps', 'Cybersecurity']
  },
  {
    id: 2,
    name: 'Business & Entrepreneurship',
    description: 'Share insights about startups, business strategies, marketing, finance, and career growth opportunities.',
    icon: '💼',
    threads: 892,
    posts: 5674,
    members: 2156,
    color: 'bg-green-500',
    trending: false,
    subcategories: ['Startups', 'Marketing', 'Finance', 'Leadership', 'Remote Work']
  },
  {
    id: 3,
    name: 'Creative Arts',
    description: 'Showcase your creativity and discuss design, photography, writing, music, and digital media.',
    icon: '🎨',
    threads: 634,
    posts: 3821,
    members: 1789,
    color: 'bg-purple-500',
    trending: true,
    subcategories: ['Graphic Design', 'Photography', 'Writing', 'Music', 'Video Production']
  },
  {
    id: 4,
    name: 'Health & Lifestyle',
    description: 'Discuss wellness, fitness, nutrition, mental health, and lifestyle improvement tips.',
    icon: '🏃',
    threads: 456,
    posts: 2987,
    members: 1543,
    color: 'bg-orange-500',
    trending: false,
    subcategories: ['Fitness', 'Nutrition', 'Mental Health', 'Wellness', 'Self-Care']
  },
  {
    id: 5,
    name: 'Science & Education',
    description: 'Explore scientific discoveries, research findings, educational content, and academic discussions.',
    icon: '🔬',
    threads: 723,
    posts: 4532,
    members: 2087,
    color: 'bg-teal-500',
    trending: true,
    subcategories: ['Research', 'Physics', 'Biology', 'Chemistry', 'Mathematics']
  },
  {
    id: 6,
    name: 'General Discussion',
    description: 'Open discussions about current events, philosophy, culture, and everyday life topics.',
    icon: '💬',
    threads: 2145,
    posts: 12678,
    members: 4532,
    color: 'bg-gray-500',
    trending: false,
    subcategories: ['Current Events', 'Philosophy', 'Culture', 'Travel', 'Food']
  },
  {
    id: 7,
    name: 'Gaming',
    description: 'Discuss video games, gaming culture, reviews, tips, and the latest in the gaming industry.',
    icon: '🎮',
    threads: 943,
    posts: 6721,
    members: 2876,
    color: 'bg-red-500',
    trending: true,
    subcategories: ['PC Gaming', 'Console Gaming', 'Mobile Games', 'Esports', 'Game Development']
  },
  {
    id: 8,
    name: 'Sports & Fitness',
    description: 'Talk about sports, fitness routines, athletic performance, and recreational activities.',
    icon: '⚽',
    threads: 567,
    posts: 3456,
    members: 1987,
    color: 'bg-indigo-500',
    trending: false,
    subcategories: ['Football', 'Basketball', 'Training', 'Nutrition', 'Equipment']
  }
];

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [filterBy, setFilterBy] = useState('all');

  const filteredCategories = allCategories
    .filter(category => {
      const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           category.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterBy === 'all' || 
                           (filterBy === 'trending' && category.trending) ||
                           (filterBy === 'popular' && category.threads > 800);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'threads':
          return b.threads - a.threads;
        case 'members':
          return b.members - a.members;
        default: // popularity
          return (b.threads + b.posts) - (a.threads + a.posts);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Header */}
      <header className="sticky top-0 z-50 bg-green-950">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      
      {/* LEFT: Navigation */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <IoMdHome className="text-2xl text-white" />
          <span className="text-white font-bold">Home</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/categories" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-1">
            <FaCommentAlt />
            <span>Blogs</span>
          </Link>
          <Link href="/gallery" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
            <IoImages className="text-2xl" />
            <span>Gallery</span>
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
            <FaPhoneAlt className="text-xl" />
            <span>Contact Us</span>
          </Link>
          <Link href="/writeforus" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
            <FaPen className="text-xl" />
            <span>Write For Us</span>
          </Link>
        </nav>
      </div>

      {/* RIGHT: Language, Notification, Profile */}
      <div className="flex items-center space-x-6">
        
        {/* Language Switcher */}
        <div className="flex items-center space-x-2 text-white text-sm">
          <span>Language</span>
          <label className="flex items-center space-x-1">
            <input type="radio" name="language" className="accent-white" />
            <span>हिंदी</span>
          </label>
          <label className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full font-semibold">
            <input type="radio" name="language" checked className="accent-white" />
            <span>English</span>
          </label>
        </div>

        {/* Bell Icon */}
        <FaBell className="text-white text-xl cursor-pointer" />

        {/* User Profile */}
        <div className="flex items-center space-x-2 text-white">
          <FaUserCircle className="text-2xl" />
          <span>Deepali Yadav</span>
        </div>
      </div>

    </div>
  </div>
</header>

     {/* Hero Section */}
      
<div className="bg-white shadow-sm">
  {/* Top Navbar */}
  <div className="flex items-center justify-between px-4 py-2 border-b">
    {/* Search Bar */}
    <div className="relative w-full max-w-3xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        placeholder="Search a question, user, blog or post"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>

    {/* Icons + Button */}
    <div className="flex items-center space-x-4 ml-4">
      < BiSolidBellOff className="text-red-600 cursor-pointer" />
      <IoMdHelpCircle className="text-gray-600 cursor-pointer" />
      <Button className="bg-teal-800 text-white hover:bg-teal-900 px-4 py-2 text-sm rounded-md">
        Ask Question
      </Button>
    </div>
  </div>

  {/* Bottom Tab Menu */}
  <div className="flex space-x-6 px-4 py-2 border-t bg-white">
    
    <div className="text-gray-700 text-sm cursor-pointer hover:text-black">Recent Posts</div>
    <div className="text-gray-700 text-sm cursor-pointer hover:text-black">Popular Posts</div>
    
  </div>
</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 border-0 focus:bg-white transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-36">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                  <SelectItem value="threads">Most Threads</SelectItem>
                  <SelectItem value="members">Most Members</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8 p-0"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-20 ${category.color} bg-gradient-to-r relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 left-6 text-white">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    {category.trending && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 text-white border-white/30">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{category.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {category.subcategories.slice(0, 3).map((sub, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                        {category.subcategories.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.subcategories.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="font-semibold text-gray-900">{category.threads.toLocaleString()}</div>
                          <div className="text-gray-500 text-xs">Threads</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{category.posts.toLocaleString()}</div>
                          <div className="text-gray-500 text-xs">Posts</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{category.members.toLocaleString()}</div>
                          <div className="text-gray-500 text-xs">Members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center text-white text-2xl`}>
                      {category.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        {category.trending && (
                          <Badge className="bg-orange-100 text-orange-700">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3 line-clamp-2">{category.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {category.subcategories.slice(0, 5).map((sub, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                        {category.subcategories.length > 5 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.subcategories.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-8 text-sm text-gray-500">
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{category.threads.toLocaleString()}</div>
                        <div>Threads</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{category.posts.toLocaleString()}</div>
                        <div>Posts</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{category.members.toLocaleString()}</div>
                        <div>Members</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
        </div>
    </div>
  
  );
}