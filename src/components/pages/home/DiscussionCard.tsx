import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye, MessageSquare, Star, ThumbsUp } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Discussion } from "@/types";

interface DiscussionCardProps {
  discussion: Discussion;
}

export function DiscussionCard({ discussion }: DiscussionCardProps) {
  return (
    <Card
      key={discussion.id}
      className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white"
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12 ring-2 ring-gray-100">
            <AvatarImage
              src={discussion.author.avatar}
              alt={discussion.author.name}
            />
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
              <Badge variant="outline" className="text-xs">
                {discussion.category}
              </Badge>
              {discussion.hasNewReplies && (
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
              {discussion.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {discussion.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {discussion.author.name}
                </span>
                <Badge variant="secondary" className="text-xs">
                  {discussion.author.badge}
                </Badge>
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
  );
}
