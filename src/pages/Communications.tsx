import React from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Communication {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  attachment?: boolean;
}

const demoCommunications: Communication[] = [
  {
    id: 1,
    date: "2025-04-28",
    category: "Tax Updates",
    title: "Quarterly Tax Filing Reminder",
    excerpt: "Important reminder about upcoming quarterly tax filing deadlines and requirements.",
    attachment: true
  },
  {
    id: 2,
    date: "2025-04-25",
    category: "Client Notifications",
    title: "New Document Request",
    excerpt: "Please provide the requested financial documents for the current month's reconciliation.",
    attachment: false
  },
  {
    id: 3,
    date: "2025-04-20",
    category: "Regulatory Changes",
    title: "New Tax Regulations for Small Businesses",
    excerpt: "Important changes to tax regulations affecting small businesses starting next quarter.",
    attachment: true
  },
  {
    id: 4,
    date: "2025-04-15",
    category: "Account Notifications",
    title: "Monthly Statement Available",
    excerpt: "Your monthly account statement is now available for review in the portal.",
    attachment: true
  },
  {
    id: 5,
    date: "2025-04-10",
    category: "System Updates",
    title: "Portal Maintenance Notice",
    excerpt: "The client portal will be unavailable for scheduled maintenance on Sunday from 2AM-4AM.",
    attachment: false
  },
  {
    id: 6,
    date: "2025-04-05",
    category: "Tax Updates",
    title: "Tax Payment Confirmation",
    excerpt: "Confirmation of your recent tax payment processing and receipt.",
    attachment: true
  },
  {
    id: 7,
    date: "2025-04-01",
    category: "Client Notifications",
    title: "Quarterly Review Meeting",
    excerpt: "Invitation to schedule your quarterly financial review meeting with your accountant.",
    attachment: false
  }
];

const Communications: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-accounting-dark mb-1">Communications</h1>
        <p className="text-accounting-secondary">View and manage all communications</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Communications List</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                type="search"
                placeholder="Search communications..." 
                className="pl-9 w-[250px]" 
              />
            </div>
            <Button>New Communication</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Attachment</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demoCommunications.map((comm) => (
                <TableRow key={comm.id}>
                  <TableCell>{formatDate(comm.date)}</TableCell>
                  <TableCell>
                    <span className="text-xs font-medium px-2 py-1 bg-accounting-secondary/10 rounded-full">
                      {comm.category}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">{comm.title}</TableCell>
                  <TableCell className="max-w-[250px] truncate">{comm.excerpt}</TableCell>
                  <TableCell>
                    {comm.attachment && (
                      <FileText size={16} className="text-accounting-secondary" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-accounting-primary">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Communications;
