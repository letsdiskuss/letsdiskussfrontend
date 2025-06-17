'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Star, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  ThumbsUp, 
  Eye, 
  Bookmark,
  Bell,
  HelpCircle,
  BellOff,
  Image,
  Phone,
  Edit,
  Wrench,
  MessageCircle,
  Gamepad2,
  Heart,
  ChefHat,
  Trophy,
  GraduationCap,
  Plus,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronLeft,
  Sparkles,
  Zap,
  Globe,
  BookOpen,
  Coffee,
  Lightbulb,
  Target,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaUserCircle } from "react-icons/fa";

const featuredTopics = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Explore the future of artificial intelligence",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    posts: 1247,
    trending: true
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern frameworks and best practices",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    posts: 892,
    trending: true
  },
  {
    id: 3,
    title: "Design & UX",
    description: "Creative solutions and user experiences",
    icon: Lightbulb,
    color: "from-orange-500 to-red-500",
    posts: 634,
    trending: false
  },
  {
    id: 4,
    title: "Business Strategy",
    description: "Entrepreneurship and growth insights",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    posts: 456,
    trending: true
  }
];

const recentDiscussions = [
  {
    id: 1,
    title: 'The Future of Remote Work: Trends and Predictions for 2025',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100',
      badge: 'Tech Lead'
    },
    category: 'Business',
    replies: 47,
    views: 1203,
    likes: 89,
    createdAt: '2 hours ago',
    excerpt: 'Exploring how remote work culture is evolving and what it means for the future of business...'
  },
  {
    id: 2,
    title: 'Building Scalable React Applications: Architecture Patterns',
    author: {
      name: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100',
      badge: 'Senior Dev'
    },
    category: 'Technology',
    replies: 32,
    views: 856,
    likes: 64,
    createdAt: '4 hours ago',
    excerpt: 'Deep dive into architectural patterns that help build maintainable React applications...'
  },
  {
    id: 3,
    title: 'Sustainable Design: Creating Eco-Friendly Digital Products',
    author: {
      name: 'Elena Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100',
      badge: 'UX Designer'
    },
    category: 'Design',
    replies: 28,
    views: 692,
    likes: 52,
    createdAt: '6 hours ago',
    excerpt: 'How to incorporate sustainability principles into your design process...'
  }
];

const stats = [
  { label: 'Active Members', value: '50K+', icon: Users },
  { label: 'Discussions', value: '125K+', icon: MessageSquare },
  { label: 'Expert Contributors', value: '2.5K+', icon: Star },
  { label: 'Topics Covered', value: '500+', icon: BookOpen }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* LEFT: Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LetsDiskuss
                </span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1 font-medium">
                  <MessageSquare className="w-4 h-4" />
                  <span>Blogs</span>
                </Link>
                <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2 font-medium">
                  <Image className="w-4 h-4" />
                  <span>Gallery</span>
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
                <Link href="/writeforus" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2 font-medium">
                  <Edit className="w-4 h-4" />
                  <span>Write</span>
                </Link>
              </nav>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-600">Language:</span>
                <Button variant="ghost" size="sm" className="text-blue-600 font-medium">
                  English
                </Button>
              </div>
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-2xl text-gray-600" />
                <span className="text-gray-700 font-medium">Deepali Yadav</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Join 50,000+ Knowledge Seekers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Where Ideas Come to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with experts, share knowledge, and discover insights across technology, business, design, and more. 
              Your questions deserve thoughtful answers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="What would you like to discuss today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-6">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask a Question
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg font-semibold">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Topics
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Popular Topics</h2>
            <p className="text-xl text-gray-600">Dive into discussions that matter to you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTopics.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <Card key={topic.id} className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 overflow-hidden">
                  <div className={`h-32 bg-gradient-to-br ${topic.color} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-6 left-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {topic.trending && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 text-white border-white/30">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{topic.posts.toLocaleString()} posts</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Discussions</h2>
              <p className="text-xl text-gray-600">Join the conversation</p>
            </div>
            <Button variant="outline" size="lg" className="hidden md:flex">
              View All Discussions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="space-y-6">
            {recentDiscussions.map((discussion) => (
              <Card key={discussion.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-16 h-16 ring-4 ring-gray-100">
                      <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                      <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="outline" className="text-xs font-medium">{discussion.category}</Badge>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{discussion.createdAt}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                        {discussion.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-lg leading-relaxed">{discussion.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-900">{discussion.author.name}</span>
                          <Badge variant="secondary" className="text-xs">{discussion.author.badge}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{discussion.views}</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Share Your Knowledge?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of experts and enthusiasts sharing insights, solving problems, and building the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-semibold">
              <Coffee className="w-5 h-5 mr-2" />
              Start Writing
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">LetsDiskuss</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Where ideas come to life. Connect with experts, share knowledge, and discover insights across technology, business, design, and more.
              </p>
              <div className="flex space-x-4">
                {[Twitter, Facebook, Instagram, Youtube, Linkedin].map((Social, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <Social className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                {['About Us', 'How it Works', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <div key={link} className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                    {link}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-3">
                {['Help Center', 'Contact Us', 'Community Guidelines', 'Report Issue'].map((link) => (
                  <div key={link} className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LetsDiskuss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}