
import React, { useState } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "@/components/ui/toggle-group";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TicketData {
  id: string;
  title: string;
  status: "open" | "in-progress" | "completed" | "cancelled";
  priority: "low" | "medium" | "high";
  date: string;
  category: string;
  assignedTo: string;
  lastUpdate: string;
}

const demoTickets: TicketData[] = [
  {
    id: "TK-001",
    title: "Missing document upload confirmation",
    status: "open",
    priority: "high",
    date: "2025-04-28",
    category: "Document Upload",
    assignedTo: "Sarah Johnson",
    lastUpdate: "2025-04-28"
  },
  {
    id: "TK-002",
    title: "Request for tax certificate",
    status: "in-progress",
    priority: "medium",
    date: "2025-04-25",
    category: "Tax Documents",
    assignedTo: "Michael Chen",
    lastUpdate: "2025-04-27"
  },
  {
    id: "TK-003",
    title: "Question about VAT calculation",
    status: "completed",
    priority: "medium",
    date: "2025-04-20",
    category: "Tax Calculation",
    assignedTo: "Emma Wilson",
    lastUpdate: "2025-04-22"
  },
  {
    id: "TK-004",
    title: "Access issues to monthly reports",
    status: "in-progress",
    priority: "high",
    date: "2025-04-18",
    category: "Access Issues",
    assignedTo: "Daniel Brown",
    lastUpdate: "2025-04-26"
  },
  {
    id: "TK-005",
    title: "Discrepancy in income statement",
    status: "open",
    priority: "high",
    date: "2025-04-15",
    category: "Financial Reports",
    assignedTo: "Unassigned",
    lastUpdate: "2025-04-15"
  },
  {
    id: "TK-006",
    title: "Need help with tax deduction form",
    status: "cancelled",
    priority: "low",
    date: "2025-04-10",
    category: "Tax Forms",
    assignedTo: "Sarah Johnson",
    lastUpdate: "2025-04-12"
  },
  {
    id: "TK-007",
    title: "Request for previous year statements",
    status: "completed",
    priority: "low",
    date: "2025-04-05",
    category: "Financial Reports",
    assignedTo: "Michael Chen",
    lastUpdate: "2025-04-08"
  }
];

const Tickets: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [dateFilter, setDateFilter] = useState<string | undefined>(undefined);

  // Filter tickets based on search query and filters
  const filteredTickets = demoTickets.filter(ticket => {
    // Filter by search query
    const matchesSearch = searchQuery === "" || 
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by status
    const matchesStatus = !statusFilter || ticket.status === statusFilter;
    
    // Filter by date (simplified for demo)
    const matchesDate = !dateFilter || ticket.date.includes(dateFilter);
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusBadge = (status: TicketData["status"]) => {
    switch (status) {
      case "open":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Open</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">In Progress</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Cancelled</Badge>;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: TicketData["priority"]) => {
    switch (priority) {
      case "high":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">High</Badge>;
      case "medium":
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Medium</Badge>;
      case "low":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Low</Badge>;
      default:
        return null;
    }
  };

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
        <h1 className="text-2xl font-bold text-accounting-dark mb-1">Support Tickets</h1>
        <p className="text-accounting-secondary">View and manage your support tickets</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Ticket size={20} />
            <span>All Tickets</span>
          </CardTitle>
          <Button>Create New Ticket</Button>
        </CardHeader>
        
        <CardContent>
          <div className="mb-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search"
                  placeholder="Search tickets..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="2025-04">April 2025</SelectItem>
                  <SelectItem value="2025-03">March 2025</SelectItem>
                  <SelectItem value="2025-02">February 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <ToggleGroup type="single" value={statusFilter} onValueChange={setStatusFilter}>
                <ToggleGroupItem value="all" aria-label="All Tickets">
                  All
                </ToggleGroupItem>
                <ToggleGroupItem value="open" aria-label="Open Tickets">
                  Open
                </ToggleGroupItem>
                <ToggleGroupItem value="in-progress" aria-label="In Progress Tickets">
                  In Progress
                </ToggleGroupItem>
                <ToggleGroupItem value="completed" aria-label="Completed Tickets">
                  Completed
                </ToggleGroupItem>
                <ToggleGroupItem value="cancelled" aria-label="Cancelled Tickets">
                  Cancelled
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                      <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                      <TableCell>
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                          {ticket.category}
                        </span>
                      </TableCell>
                      <TableCell>{formatDate(ticket.date)}</TableCell>
                      <TableCell>{ticket.assignedTo}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No tickets found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Tickets;
