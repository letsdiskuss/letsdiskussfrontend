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
  Home,
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
  ChevronLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaUserCircle } from "react-icons/fa";

const categories = [
  { name: 'Science & Technology', icon: Wrench },
  { name: 'Current Topics', icon: MessageCircle },
  { name: 'Entertainment / Lifestyle', icon: Gamepad2 },
  { name: 'Health & Beauty', icon: Heart },
  { name: 'Food / Cooking', icon: ChefHat },
  { name: 'Astrology', icon: Star },
  { name: 'Sports', icon: Trophy },
  { name: 'Education', icon: GraduationCap },
  { name: 'Others', icon: Plus }
];

const contestQuestions = [
  "What is the 1st Day Collection of Jawan Worldwide?",
  "Why India's Government Wants to Change the Country's Name to Bharat?"
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, color: 'bg-blue-400' },
  { name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
  { name: 'Instagram', icon: Instagram, color: 'bg-pink-500' },
  { name: 'YouTube', icon: Youtube, color: 'bg-red-500' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700' }
];

const footerLinks = ['Terms', 'Privacy', 'Disclaimer', 'About', 'Faq'];

const topDiscussions = [
  "What is the best cursive font in Microsoft Word?",
  "Who is naomi burton-crews and What about her family?",
  "What are the latest chapters in Physical, Organic and Inorganic chemistry for class 11 and 12 of CBSE?",
  "Elaine Starchuk: Where is Tommy Lee's first wife now?"
];

const featuredDiscussions = [
  {
    id: 1,
    title: 'The Future of AI in Web Development: A Comprehensive Analysis',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100',
      reputation: 2845,
      badge: 'Expert'
    },
    category: 'Technology',
    replies: 47,
    views: 1203,
    likes: 89,
    createdAt: '2 hours ago',
    isPinned: true,
    hasNewReplies: true,
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications...'
  },
  {
    id: 2,
    title: 'Building a Successful Remote Team: Lessons from 5 Years of Experience',
    author: {
      name: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100',
      reputation: 1967,
      badge: 'Mentor'
    },
    category: 'Business & Entrepreneurship',
    replies: 32,
    views: 856,
    likes: 64,
    createdAt: '4 hours ago',
    isPinned: false,
    hasNewReplies: true,
    excerpt: 'Sharing practical insights on managing distributed teams, communication strategies, and building culture...'
  },
  {
    id: 3,
    title: 'Minimalist Design Principles That Actually Work in 2024',
    author: {
      name: 'Elena Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100',
      reputation: 3241,
      badge: 'Pro Designer'
    },
    category: 'Creative Arts',
    replies: 28,
    views: 692,
    likes: 52,
    createdAt: '6 hours ago',
    isPinned: false,
    hasNewReplies: false,
    excerpt: 'Breaking down the core principles of minimalist design and how to apply them effectively...'
  },
  {
    id: 4,
    title: 'Mental Health in the Digital Age: Finding Balance',
    author: {
      name: 'Dr. Michael Park',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100',
      reputation: 4156,
      badge: 'Healthcare Expert'
    },
    category: 'Health & Lifestyle',
    replies: 73,
    views: 2341,
    likes: 127,
    createdAt: '1 day ago',
    isPinned: false,
    hasNewReplies: true,
    excerpt: 'Discussing the impact of technology on mental health and practical strategies for digital wellness...'
  }
];

const trendingTopics = [
  'Next.js 14', 'AI Ethics', 'Remote Work', 'Crypto Regulation', 'Climate Tech', 
  'Web3 Development', 'Mental Health', 'Startup Funding', 'UX Design', 'Data Privacy'
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Latest Questions");

  const tabs = [
    'Latest Questions',
    'Unanswered Questions', 
    'Blogs',
    'Featured Questions',
    'Reels'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-950 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* LEFT: Navigation */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Home className="text-2xl text-white" />
                <span className="text-white font-bold">Home</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
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
                <Link href="/write" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2">
                  <Edit className="w-4 h-4" />
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
                  <input type="radio" name="language" defaultChecked className="accent-white" />
                  <span>English</span>
                </label>
              </div>

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

      {/* Search and Navigation Bar - Fixed */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white shadow-sm border-b border-gray-200">
        {/* Top Search Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          {/* Search Bar */}
          <div className="relative w-full max-w-3xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search a question, user, blog or post"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Icons + Button */}
          <div className="flex items-center space-x-4 ml-4">
            <BellOff className="text-red-600 cursor-pointer hover:text-red-700 transition-colors" />
            <HelpCircle className="text-gray-600 cursor-pointer hover:text-gray-700 transition-colors" />
            <Button className="bg-teal-800 text-white hover:bg-teal-900 px-4 py-2 text-sm rounded-md font-medium">
              Ask Question
            </Button>
          </div>
        </div>

        {/* Bottom Tab Menu */}
        <div className="flex space-x-6 px-4 py-2 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-teal-800 text-white px-4 py-2 rounded-tl-full rounded-br-md'
                  : 'text-gray-700 hover:text-black px-2 py-2'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout - Add top margin to account for fixed headers */}
      <div className="flex pt-32">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto fixed left-0 top-32">
          {/* Become A Blogger Button */}
          <div className="p-4 border-b border-gray-200">
            <Button className="w-full bg-teal-700 text-white py-3 px-4 rounded-md font-semibold hover:bg-teal-800 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Become A Blogger</span>
            </Button>
          </div>

          {/* Categories Section */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
              <span>Category</span>
            </h3>
            <div className="space-y-2">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 py-2 px-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
                    <IconComponent className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{category.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contest Questions Section */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
              <span>Contest Questions</span>
            </h3>
            <div className="space-y-3">
              {contestQuestions.map((question, index) => (
                <div key={index} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
                  {question}
                </div>
              ))}
            </div>
          </div>

          {/* Find Us Section */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Find Us</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div key={index} className={`${social.color} p-3 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="p-4">
            <div className="flex flex-wrap gap-4 text-xs">
              {footerLinks.map((link, index) => (
                <Link key={index} href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-80 mr-80 bg-gray-50 min-h-screen">
          <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Discussions</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {featuredDiscussions.map((discussion) => (
                <Card key={discussion.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12 ring-2 ring-gray-100">
                        <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                        <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          {discussion.isPinned && (
                            <Badge className="bg-blue-100 text-blue-700 text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Pinned
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">{discussion.category}</Badge>
                          {discussion.hasNewReplies && (
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                          {discussion.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{discussion.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="font-medium text-gray-700">{discussion.author.name}</span>
                            <Badge variant="secondary" className="text-xs">{discussion.author.badge}</Badge>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{discussion.createdAt}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
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
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white h-screen overflow-y-auto fixed right-0 top-32">
          {/* Top Discussions */}
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

          {/* Picnic Recipes Card */}
          <div className="p-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-4">
                  Planning a picnic? ???????? Try these 10 super easy and delicious recipes that are perfect for any outdoor vibe. Fresh, fun, and so simple to make!
                </p>
              </div>
              
              {/* Recipe Image */}
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Picnic recipes" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-lg mb-2">10 Simple Picnic Recipes</h4>
                  <p className="text-white/90 text-sm">
                    Check out these 10 easy picnic recipes that are super quick to make and perfect for any outdoor hangout. From yummy appetizers to fresh salads, they'll make your picnic extra tasty!
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-4 flex items-center justify-between">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm">BACK</span>
                </button>
                
                <div className="flex space-x-2">
                  {[0, 1, 2, 3, 4].map((dot, index) => (
                    <div 
                      key={index} 
                      className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-teal-600' : 'bg-gray-300'}`}
                    ></div>
                  ))}
                </div>
                
                <button className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 transition-colors">
                  <span className="text-sm">NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}