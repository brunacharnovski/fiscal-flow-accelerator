
import React from "react";
import { DashboardCard } from "./DashboardCard";
import { Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SupportTicket {
  id: string;
  title: string;
  status: "open" | "in-progress" | "closed" | "cancelled";
  date: string;
  lastUpdate: string;
}

const demoTickets: SupportTicket[] = [
  {
    id: "TK-001",
    title: "Missing document upload confirmation",
    status: "open",
    date: "2025-04-28",
    lastUpdate: "2025-04-28"
  },
  {
    id: "TK-002",
    title: "Request for tax certificate",
    status: "in-progress",
    date: "2025-04-25",
    lastUpdate: "2025-04-27"
  },
  {
    id: "TK-003",
    title: "Question about VAT calculation",
    status: "closed",
    date: "2025-04-20",
    lastUpdate: "2025-04-22"
  }
];

interface SupportTicketsProps {
  className?: string;
}

export const SupportTickets: React.FC<SupportTicketsProps> = ({ className = "" }) => {
  const getStatusBadge = (status: SupportTicket["status"]) => {
    switch (status) {
      case "open":
        return <Badge variant="outline" className="status-open">Open</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="status-in-progress">In Progress</Badge>;
      case "closed":
        return <Badge variant="outline" className="status-closed">Closed</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="status-cancelled">Cancelled</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <DashboardCard 
      title="Support Tickets" 
      icon={<Ticket size={18} />}
      actionText="View All"
      onActionClick={() => console.log("View all tickets")}
      className={className}
      footer={
        <div className="text-center">
          <Button variant="outline" size="sm" className="w-full">
            Create New Ticket
          </Button>
        </div>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="data-header">ID</th>
              <th className="data-header">Subject</th>
              <th className="data-header">Status</th>
              <th className="data-header">Date</th>
            </tr>
          </thead>
          <tbody>
            {demoTickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="data-cell font-medium">{ticket.id}</td>
                <td className="data-cell">{ticket.title}</td>
                <td className="data-cell">{getStatusBadge(ticket.status)}</td>
                <td className="data-cell">{new Date(ticket.date).toLocaleDateString()}</td>
              </tr>
            ))}
            {demoTickets.length === 0 && (
              <tr>
                <td colSpan={4} className="data-cell text-center py-4 text-gray-500">
                  No support tickets found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
};

export default SupportTickets;
