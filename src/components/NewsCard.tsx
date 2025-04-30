
import React from "react";
import { DashboardCard } from "./DashboardCard";
import { News } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const demoNews: NewsItem[] = [
  {
    id: 1,
    title: "New Tax Regulations for Small Businesses",
    excerpt: "Important changes to tax regulations affecting small businesses starting next quarter.",
    date: "2025-04-25",
    category: "Tax Updates"
  },
  {
    id: 2,
    title: "Year-End Accounting Guidelines",
    excerpt: "Prepare for year-end with our comprehensive accounting guidelines and checklists.",
    date: "2025-04-20",
    category: "Accounting"
  },
  {
    id: 3,
    title: "Platform Update: Enhanced Document Validation",
    excerpt: "We've improved our document validation process to reduce errors and processing time.",
    date: "2025-04-15",
    category: "Platform Updates"
  }
];

interface NewsCardProps {
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ className = "" }) => {
  return (
    <DashboardCard 
      title="Latest News" 
      icon={<News size={18} />}
      actionText="View All"
      onActionClick={() => console.log("View all news")}
      className={className}
    >
      <div className="space-y-4">
        {demoNews.map((item) => (
          <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium px-2 py-1 bg-accounting-secondary/10 rounded-full">
                {item.category}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(item.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="font-medium mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.excerpt}</p>
            <Button 
              variant="link" 
              size="sm" 
              className="text-accounting-primary p-0 h-auto"
            >
              Read more
            </Button>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default NewsCard;
