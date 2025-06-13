'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, TrendingUp, Users, MessageSquare, Star, ArrowRight, ChevronRight, Clock, ThumbsUp, Eye, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaCommentAlt } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidBellOff } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";


const categories = [
  {
    id: 1,
    name: 'Technology',
    description: 'Discuss the latest in tech, programming, and digital trends',
    icon: '💻',
    threads: 1247,
    posts: 8953,
    color: 'bg-blue-500',
    trending: true
  },
  {
    id: 2,
    name: 'Business & Entrepreneurship',
    description: 'Share insights about startups, business strategies, and career growth',
    icon: '💼',
    threads: 892,
    posts: 5674,
    color: 'bg-green-500',
    trending: false
  },
  {
    id: 3,
    name: 'Creative Arts',
    description: 'Showcase your creativity and discuss design, art, and media',
    icon: '🎨',
    threads: 634,
    posts: 3821,
    color: 'bg-purple-500',
    trending: true
  },
  {
    id: 4,
    name: 'Health & Lifestyle',
    description: 'Discuss wellness, fitness, nutrition, and lifestyle tips',
    icon: '🏃',
    threads: 456,
    posts: 2987,
    color: 'bg-orange-500',
    trending: false
  },
  {
    id: 5,
    name: 'Science & Education',
    description: 'Explore scientific discoveries and educational content',
    icon: '🔬',
    threads: 723,
    posts: 4532,
    color: 'bg-teal-500',
    trending: true
  },
  {
    id: 6,
    name: 'General Discussion',
    description: 'Open discussions about anything and everything',
    icon: '💬',
    threads: 2145,
    posts: 12678,
    color: 'bg-gray-500',
    trending: false
  }
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

const Categories = [
  'Science And Teechnology', 'Current Topics', 'Entertainment/Lifestyle', 'Health & Beauty', 'Food/Cooking', 
  'Astrology', 'Sports', 'Education', 'Others'
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
const [activeTab, setActiveTab] = useState("Latest Questions");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
          <Link href="/trending" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
            <IoImages className="text-2xl" />
            <span>Gallery</span>
          </Link>
          <Link href="/leaderboard" className="text-white hover:text-blue-600 transition-colors flex items-center space-x-2">
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
    <div className="bg-teal-800 text-white px-4 py-1 rounded-tl-full rounded-br-md text-sm font-semibold">
      Latest Questions
    </div>
    <div className="text-gray-700 text-sm cursor-pointer hover:text-black">Unanswered Questions</div>
    <div className="text-gray-700 text-sm cursor-pointer hover:text-black">Blogs</div>
    <div className="text-gray-700 text-sm cursor-pointer hover:text-black">Featured Questions</div>
    <div className="text-gray-700 text-sm cursor-pointer hover:text-black">Reels</div>
  </div>
</div>


      {/* Stats Section */}

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Categories Grid */}
            

            {/* Featured Discussions */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Discussions</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
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
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className=" border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Categories.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className=" block cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                    {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>


            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span>Top Disscussion</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      <FaStar className="text-yellow-500" />
                    {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card className="border-0 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>Top Contributors</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Alex Thompson', reputation: 5847, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100', badge: 'Legend' },
                    { name: 'Maria Garcia', reputation: 4923, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100', badge: 'Expert' },
                    { name: 'David Kim', reputation: 3764, avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100', badge: 'Pro' }
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-sm font-bold text-gray-400 w-6">#{index + 1}</div>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={contributor.avatar} alt={contributor.name} />
                        <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{contributor.name}</div>
                        <div className="text-xs text-gray-500">{contributor.reputation.toLocaleString()} points</div>
                      </div>
                      <Badge variant="outline" className="text-xs">{contributor.badge}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start New Discussion
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bookmark className="w-4 h-4 mr-2" />
                    View Bookmarks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">ForumHub</span>
              </div>
              <p className="text-gray-400">Building communities through meaningful discussions and shared knowledge.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Guidelines</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Code of Conduct</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Moderation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Developer Tools</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Status Page</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LetDiskuss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}