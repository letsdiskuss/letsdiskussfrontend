"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Share,
  Bookmark,
  Flag,
  Clock,
  Eye,
  Reply,
  MoreHorizontal,
  Star,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// Mock data for a discussion thread
const discussion = {
  id: 1,
  title: "The Future of AI in Web Development: A Comprehensive Analysis",
  content: `
# The Revolution is Here

Artificial Intelligence is fundamentally transforming how we approach web development. From automated code generation to intelligent debugging, AI tools are becoming indispensable in modern development workflows.

## Key Areas of Impact

### 1. Code Generation and Completion
AI-powered tools like GitHub Copilot and CodeT5 are revolutionizing how developers write code. These tools can:
- Generate entire functions from natural language descriptions
- Provide intelligent autocompletion
- Suggest optimal code patterns and best practices

### 2. Automated Testing
AI is making testing more efficient and comprehensive:
- Automatic test case generation
- Visual regression testing
- Performance optimization suggestions

### 3. UI/UX Design Assistance
AI tools are helping designers and developers create better user experiences:
- Automated layout suggestions
- Color palette optimization
- Accessibility improvements

## Challenges and Considerations

While AI offers tremendous benefits, we must also consider:
- **Code Quality**: AI-generated code requires careful review
- **Security**: Potential vulnerabilities in automated solutions
- **Learning**: Balancing AI assistance with skill development

## Looking Forward

The future of AI in web development is incredibly promising. We're moving toward a world where developers can focus more on creative problem-solving while AI handles routine tasks.

What are your thoughts on this transformation? How has AI impacted your development workflow?
  `,
  author: {
    name: "Sarah Chen",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100",
    reputation: 2845,
    badge: "AI Expert",
    joinDate: "Joined Mar 2021",
    posts: 234,
    isVerified: true,
  },
  category: "Technology",
  createdAt: "2 hours ago",
  views: 1203,
  likes: 89,
  dislikes: 3,
  replies: 47,
  isPinned: true,
  isBookmarked: false,
  tags: ["AI", "Web Development", "Automation", "Future Tech"],
};

const replies = [
  {
    id: 1,
    content: `Excellent analysis, Sarah! I've been using GitHub Copilot for the past 6 months and the productivity gains are remarkable. However, I've noticed that it sometimes suggests deprecated patterns.

The key is finding the right balance - using AI as a powerful assistant while maintaining our critical thinking skills. What's your experience with code review processes when AI-generated code is involved?`,
    author: {
      name: "Marcus Johnson",
      avatar:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100",
      reputation: 1967,
      badge: "Senior Dev",
      isVerified: false,
    },
    createdAt: "1 hour ago",
    likes: 23,
    dislikes: 1,
    replies: 5,
    isAccepted: false,
  },
  {
    id: 2,
    content: `This is a fascinating topic! As someone who's been in the industry for over a decade, I'm amazed by how quickly AI tools have evolved.

One concern I have is about junior developers becoming too dependent on AI without understanding the underlying principles. How do you think we should approach AI education in development bootcamps and CS programs?`,
    author: {
      name: "Elena Rodriguez",
      avatar:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100",
      reputation: 3241,
      badge: "Tech Lead",
      isVerified: true,
    },
    createdAt: "3 hours ago",
    likes: 31,
    dislikes: 0,
    replies: 8,
    isAccepted: true,
  },
  {
    id: 3,
    content: `Great points about security considerations! I've been working on a project where we're implementing AI-powered code scanning for vulnerabilities.

The results are promising, but human oversight is still crucial. AI can catch common patterns but may miss context-specific security issues.`,
    author: {
      name: "Alex Park",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100",
      reputation: 1543,
      badge: "Security Expert",
      isVerified: false,
    },
    createdAt: "5 hours ago",
    likes: 18,
    dislikes: 0,
    replies: 3,
    isAccepted: false,
  },
];

export default function DiscussionPage({ params }: { params: { id: string } }) {
  const [newReply, setNewReply] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(discussion.isBookmarked);
  const [likes, setLikes] = useState(discussion.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-green-950">ForumHub</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/categories"
            className="hover:text-blue-600 transition-colors"
          >
            Categories
          </Link>
          <span>/</span>
          <Link
            href={`/category/${discussion.category.toLowerCase()}`}
            className="hover:text-blue-600 transition-colors"
          >
            {discussion.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">Discussion</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-gray-600 hover:text-blue-600"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Discussions
            </Link>
          </Button>
        </div>

        {/* Main Discussion */}
        <Card className="border-0 bg-white shadow-sm mb-8">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  {discussion.isPinned && (
                    <Badge className="bg-blue-100 text-blue-700">
                      <Star className="w-3 h-3 mr-1" />
                      Pinned
                    </Badge>
                  )}
                  <Badge variant="outline">{discussion.category}</Badge>
                  <div className="flex flex-wrap gap-1">
                    {discussion.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {discussion.title}
                </h1>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Button variant="ghost" size="sm" onClick={handleBookmark}>
                  <Bookmark
                    className={`h-4 w-4 ${isBookmarked ? "fill-current text-blue-600" : ""}`}
                  />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
              <Avatar className="w-14 h-14 ring-2 ring-gray-100">
                <AvatarImage
                  src={discussion.author.avatar}
                  alt={discussion.author.name}
                />
                <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold text-gray-900">
                    {discussion.author.name}
                  </h3>
                  {discussion.author.isVerified && (
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {discussion.author.badge}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>
                    {discussion.author.reputation.toLocaleString()} reputation
                  </span>
                  <span>{discussion.author.posts} posts</span>
                  <span>{discussion.author.joinDate}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{discussion.createdAt}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{discussion.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none mb-8">
              <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                {discussion.content}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`${hasLiked ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <ThumbsDown className="w-4 h-4 mr-1" />
                  {discussion.dislikes}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <Reply className="w-4 h-4 mr-1" />
                  Reply
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Flag className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Replies Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Replies ({discussion.replies})
            </h2>
            <Button variant="outline" size="sm">
              Sort by Best
            </Button>
          </div>

          {/* Reply Form */}
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Share your thoughts..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    className="min-h-24 resize-none border-gray-200 focus:border-blue-300"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-sm text-gray-500">
                      Be respectful and constructive in your response
                    </div>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={!newReply.trim()}
                    >
                      Post Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Replies List */}
          {replies.map((reply) => (
            <Card key={reply.id} className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <Avatar className="w-12 h-12 ring-2 ring-gray-100">
                    <AvatarImage
                      src={reply.author.avatar}
                      alt={reply.author.name}
                    />
                    <AvatarFallback>{reply.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {reply.author.name}
                      </h4>
                      {reply.author.isVerified && (
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {reply.author.badge}
                      </Badge>
                      {reply.isAccepted && (
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          ✓ Accepted Answer
                        </Badge>
                      )}
                      <span className="text-sm text-gray-500">
                        {reply.createdAt}
                      </span>
                    </div>
                    <div className="text-gray-800 mb-4 leading-relaxed whitespace-pre-line">
                      {reply.content}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600"
                        >
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {reply.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600"
                        >
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          {reply.dislikes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600"
                        >
                          <Reply className="w-4 h-4 mr-1" />
                          Reply ({reply.replies})
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Replies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
