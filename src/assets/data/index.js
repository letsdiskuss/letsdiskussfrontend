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
  {
    name: "Twitter",
    icon: Twitter,
    color: "bg-blue-400",
    url: "https://twitter.com/Letsdiskuss",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-blue-600",
    url: "https://facebook.com/letsdiscuss",
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-pink-500",
    url: "https://instagram.com",
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "bg-red-500",
    url: "https://youtube.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "bg-blue-700",
    url: "https://linkedin.com",
  },
  {
    name: "Google News",
    icon: "/google.png",
    color: "", // Custom gradient is used in the JSX logic
    url: "https://news.google.com",
  },
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
      email: "author1@gmail.com",
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
    image:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg",
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
      email: "author2@gmail.com",
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
    image:
      "https://about.fb.com/wp-content/uploads/2024/02/Facebook-News-Update_US_AU_Header.jpg",
  },
];
