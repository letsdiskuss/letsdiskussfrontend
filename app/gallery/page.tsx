'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Filter, Grid, List, Eye, Heart, Download, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from 'react-icons/io';
import { IoImages } from 'react-icons/io5';
import { FaCommentAlt, FaPhoneAlt, FaPen } from 'react-icons/fa';

const galleryItems = [
  {
    id: 1,
    title: 'Modern Web Design Trends',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=400',
    category: 'Design',
    author: 'Sarah Chen',
    views: 1234,
    likes: 89,
    description: 'Exploring the latest trends in modern web design and user experience.'
  },
  {
    id: 2,
    title: 'AI Technology Showcase',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=400',
    category: 'Technology',
    author: 'Alex Thompson',
    views: 2156,
    likes: 156,
    description: 'Artificial intelligence applications in modern technology.'
  },
  {
    id: 3,
    title: 'Creative Photography',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?w=400',
    category: 'Photography',
    author: 'Maria Garcia',
    views: 987,
    likes: 67,
    description: 'Stunning creative photography techniques and compositions.'
  },
  {
    id: 4,
    title: 'Business Innovation',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400',
    category: 'Business',
    author: 'David Kim',
    views: 1543,
    likes: 98,
    description: 'Innovative business strategies for the digital age.'
  },
  {
    id: 5,
    title: 'Digital Art Creation',
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?w=400',
    category: 'Art',
    author: 'Elena Rodriguez',
    views: 876,
    likes: 54,
    description: 'Digital art techniques and creative processes.'
  },
  {
    id: 6,
    title: 'Tech Workspace',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=400',
    category: 'Technology',
    author: 'Marcus Johnson',
    views: 1876,
    likes: 123,
    description: 'Modern technology workspace and productivity setup.'
  }
];

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const filteredItems = galleryItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || item.category.toLowerCase() === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views;
        case 'liked':
          return b.likes - a.likes;
        default: // latest
          return b.id - a.id;
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Gallery</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-blue-600">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <IoImages className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          </div>
          <p className="text-gray-600 text-lg">Discover amazing visual content from our community</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 border-0 focus:bg-white transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Most Viewed</SelectItem>
                  <SelectItem value="liked">Most Liked</SelectItem>
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

        {/* Gallery Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">{item.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="font-medium">{item.author}</span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-medium">{item.author}</span>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{item.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}