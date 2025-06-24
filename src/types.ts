export type User = {
  name: string;
  email: string;
  role: string;
  user_id: number;
  exp: number;
};

export interface Author {
  id?: number; // Optional as it's not in the example object
  name: string;
  avatar: string;
  reputation: number; // Changed from 'badge' to 'reputation' based on the object
  badge: string;
}

export interface Discussion {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  isPinned: boolean;
  hasNewReplies: boolean;
  createdAt: string;
  replies: number;
  views: number;
  likes: number;
  author: Author;
}
