
import React from "react";
import { Header } from "../components/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-accounting-light">
      <Header />
      <div className="container mx-auto px-4 py-6 md:px-6">
        {children}
      </div>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-accounting-secondary">
          © {new Date().getFullYear()} Fiscal Flow Accelerator. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
