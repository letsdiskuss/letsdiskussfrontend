'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  MessageCircle, Search, BellOff, HelpCircle, Wrench, Gamepad2, Heart,
  ChefHat, Star, Trophy, GraduationCap, Plus, Twitter, Facebook, Instagram,
  Youtube, Linkedin, Clock, MessageSquare, Eye, ThumbsUp, X
} from 'lucide-react';

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

const socialLinks = [
  { name: 'Twitter', icon: Twitter, color: 'bg-blue-400' },
  { name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
  { name: 'Instagram', icon: Instagram, color: 'bg-pink-500' },
  { name: 'YouTube', icon: Youtube, color: 'bg-red-500' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700' }
];

const footerLinks = [
  { name: 'Terms', path: '/terms' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Disclaimer', path: '' }, // Special handling for modal
  { name: 'About', path: '/about' },
  { name: 'Faq', path: '/faq' }
];

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
  },
  {
   id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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



export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Latest Questions');
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);

  const tabs = ['Latest Questions', 'Unanswered Questions', 'Blogs', 'Featured Questions', 'Reels'];

  return (
    <>
      <div className={`flex min-h-screen ${isDisclaimerOpen ? 'blur-sm overflow-hidden' : ''}`}>
        {/* Left Sidebar */}
        <div className="w-[20%] bg-white border-r border-gray-200 h-screen overflow-y-auto fixed left-5 top-0 z-10">
          <div className="p-4 border-b border-gray-200 mt-20">
            <Button className="w-full bg-teal-700 text-white py-3 px-4 rounded-md font-semibold hover:bg-teal-800 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Become A Blogger</span>
            </Button>
          </div>

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

          {/* Footer */}
          <div className="p-4">
            <div className="flex flex-wrap gap-4 text-xs">
              {footerLinks.map((link, index) =>
                link.name === 'Disclaimer' ? (
                  <button
                    key={index}
                    onClick={() => setDisclaimerOpen(true)}
                    className="text-blue-600 hover:text-blue-800 transition-colors underline"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link key={index} href={link.path} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

{/* 2nd div------------------------------- */}

  {/* Main Content - 50% */}
  <div className="flex-1 ml-[20%] mr-[20%] bg-gray-50 min-h-screen fixed">

    {/* Top Search Bar */}
    <div className="top-15 left-[25%] right-[25%] z-40 bg-white shadow-sm border-b border-gray-200 ">
      <div className="flex flex-wrap items-center justify-between px-6 py-2 border-b border-gray-100 gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search a question, user, blog or post"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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

      <div className="flex space-x-6 px-4 py-2 bg-white">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium transition-colors ${activeTab === tab ? 'bg-teal-800 text-white px-4 py-2 rounded-tl-full rounded-br-md' : 'text-gray-700 hover:text-black px-2 py-2'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

    <div className="max-w-4xl mx-auto pt-0">
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

{/* 3rd div -------------------------------------------------------- */}

  {/* Right Sidebar - 20% */}
  <div className="w-[20%] bg-white border-l border-gray-200 h-screen overflow-y-auto fixed right-1 top-0">
          <div className="p-4 border-b border-gray-200 mt-32">
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
      {isDisclaimerOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full rounded shadow-lg p-6 relative">
            <button
              onClick={() => setDisclaimerOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-2">Disclaimer</h2>
            <p className="text-sm mb-4 text-gray-600"><strong>Last updated: 01.01.2018</strong></p>
            <div className="text-gray-700 text-sm space-y-2 max-h-[300px] overflow-y-auto">
              <p>
                The information on www.letsdiskuss.com is for general information only. We assume no
                responsibility for errors or omissions.
              </p>
              <p>
                We are not liable for any damages (direct or indirect) related to the use of our website or services.
              </p>
              <p>
                We reserve the right to make changes to the site and its content at any time without notice.
              </p>
              <p>
                We do not guarantee the website is free from viruses or other harmful elements.
              </p>
            </div>
            <div className="text-right mt-4">
              <button
                onClick={() => setDisclaimerOpen(false)}
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