
import React from "react";
import { Bell, Search, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-accounting-primary flex items-center justify-center text-white font-bold">
              FF
            </div>
            <span className="font-bold text-xl text-accounting-dark hidden md:block">
              Fiscal Flow
            </span>
          </Link>
          
          <div className="hidden md:flex items-center ml-6 space-x-4">
            <Link to="/" className="text-accounting-secondary hover:text-accounting-primary text-sm font-medium">
              Dashboard
            </Link>
            <Link to="/communications" className="text-accounting-secondary hover:text-accounting-primary text-sm font-medium flex items-center gap-1">
              <MessageSquare size={14} />
              Communications
            </Link>
          </div>
        </div>
        
        <div className="hidden md:flex md:w-1/3 lg:w-1/4 mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-8 text-sm outline-none focus:border-accounting-primary focus:ring-1 focus:ring-accounting-primary"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-accounting-danger"></span>
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
