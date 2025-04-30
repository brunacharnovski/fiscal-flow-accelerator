
import React from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { NewsCard } from "../components/NewsCard";
import { CalendarView } from "../components/CalendarView";
import { KPIChart } from "../components/KPIChart";
import { SupportTickets } from "../components/SupportTickets";
import { DocumentUpload } from "../components/DocumentUpload";
import { DashboardCard } from "../components/DashboardCard";
import { Button } from "@/components/ui/button";
import { FileText, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-accounting-dark mb-1">Welcome to Fiscal Flow Accelerator</h1>
        <p className="text-accounting-secondary">Your centralized platform for tax and accounting processes</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
        <KPIChart className="col-span-full lg:col-span-4" />
        <CalendarView className="col-span-full md:col-span-2 lg:col-span-2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <NewsCard className="col-span-1" />
        <SupportTickets className="col-span-1" />
        <DocumentUpload className="col-span-1" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard 
          title="Reports & Documents" 
          icon={<FileText size={18} />}
          className="col-span-1"
          footer={<p>View all your accounting and tax documents in one place</p>}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm">Q1 Income Statement</span>
              <Button variant="ghost" size="sm">Download</Button>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm">Annual Tax Report</span>
              <Button variant="ghost" size="sm">Download</Button>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm">March VAT Payment</span>
              <Button variant="ghost" size="sm">Download</Button>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Help Center" 
          icon={<HelpCircle size={18} />}
          className="col-span-1 md:col-span-2"
          actionText="View All Resources"
          onActionClick={() => console.log("View all help resources")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Video Tutorials</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn how to use the platform with step-by-step video guides.
              </p>
              <Button variant="outline" size="sm">Watch Now</Button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Documentation</h3>
              <p className="text-sm text-gray-600 mb-3">
                Detailed guides on all features and processes available on the platform.
              </p>
              <Button variant="outline" size="sm">Read Docs</Button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">FAQs</h3>
              <p className="text-sm text-gray-600 mb-3">
                Find answers to commonly asked questions about the platform.
              </p>
              <Button variant="outline" size="sm">View FAQs</Button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Contact Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Can't find what you're looking for? Contact our support team.
              </p>
              <Button variant="outline" size="sm">Get Help</Button>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default Index;
