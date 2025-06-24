import {
  MessageCircle,
  Wrench,
  Gamepad2,
  Heart,
  ChefHat,
  Star,
  Trophy,
  GraduationCap,
  Plus,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export const posts = [
  {
    text: "This is the content of the post.",
    photo: "https://example.com/photo.jpg",
    votes: 100,
    private: false,
    postUserInfo: {
      username: "user123",
      profilePic: "https://example.com/profile_pic.jpg",
    },
  },
  {
    text: "Another post here!",
    photo: "https://example.com/another_photo.jpg",
    votes: 75,
    private: true,
    postUserInfo: {
      username: "user456",
      profilePic: "https://example.com/another_profile_pic.jpg",
    },
  },
];

export const categories = [
  { name: "Science & Technology", icon: Wrench },
  { name: "Current Topics", icon: MessageCircle },
  { name: "Entertainment / Lifestyle", icon: Gamepad2 },
  { name: "Health & Beauty", icon: Heart },
  { name: "Food / Cooking", icon: ChefHat },
  { name: "Astrology", icon: Star },
  { name: "Sports", icon: Trophy },
  { name: "Education", icon: GraduationCap },
  { name: "Others", icon: Plus },
];

export const socialLinks = [
  { name: "Twitter", icon: Twitter, color: "bg-blue-400" },
  { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
  { name: "Instagram", icon: Instagram, color: "bg-pink-500" },
  { name: "YouTube", icon: Youtube, color: "bg-red-500" },
  { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700" },
];

export const footerLinks = [
  { name: "Terms", path: "/terms" },
  { name: "Privacy", path: "/privacy" },
  { name: "Disclaimer", path: "" }, // Special handling for modal
  { name: "About", path: "/about" },
  { name: "Faq", path: "/faq" },
];

export const topDiscussions = [
  "What is the best cursive font in Microsoft Word?",
  "Who is naomi burton-crews and What about her family?",
  "What are the latest chapters in Physical, Organic and Inorganic chemistry for class 11 and 12 of CBSE?",
  "Elaine Starchuk: Where is Tommy Lee's first wife now?",
];

export const featuredDiscussions = [
  {
    id: 1,
    title: "The Future of AI in Web Development: A Comprehensive Analysis",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100",
      reputation: 2845,
      badge: "Expert",
    },
    category: "Technology",
    replies: 47,
    views: 1203,
    likes: 89,
    createdAt: "2 hours ago",
    isPinned: true,
    hasNewReplies: true,
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
    isPinned: false,
    hasNewReplies: true,
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
    isPinned: false,
    hasNewReplies: false,
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
    isPinned: false,
    hasNewReplies: true,
    excerpt:
      "Discussing the impact of technology on mental health and practical strategies for digital wellness...",
  },
  {
    id: 5,
    title: "The Future of AI in Web Development: A Comprehensive Analysis",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100",
      reputation: 2845,
      badge: "Expert",
    },
    category: "Technology",
    replies: 47,
    views: 1203,
    likes: 89,
    createdAt: "2 hours ago",
    isPinned: true,
    hasNewReplies: true,
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications...",
  },
  {
    id: 6,
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
    isPinned: false,
    hasNewReplies: true,
    excerpt:
      "Sharing practical insights on managing distributed teams, communication strategies, and building culture...",
  },
  {
    id: 7,
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
    isPinned: false,
    hasNewReplies: false,
    excerpt:
      "Breaking down the core principles of minimalist design and how to apply them effectively...",
  },
  {
    id: 8,
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
    isPinned: false,
    hasNewReplies: true,
    excerpt:
      "Discussing the impact of technology on mental health and practical strategies for digital wellness...",
  },
];
