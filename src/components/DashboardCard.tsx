
import React from "react";
import { Button } from "@/components/ui/button";

interface DashboardCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  actionText?: string;
  onActionClick?: () => void;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  children,
  footer,
  actionText,
  onActionClick,
  className = "",
}) => {
  return (
    <div className={`dashboard-card animate-fade-in ${className}`}>
      <div className="dashboard-card-header">
        <div className="flex items-center">
          {icon && <div className="mr-2 text-accounting-primary">{icon}</div>}
          <h2 className="dashboard-card-title">{title}</h2>
        </div>
        {actionText && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onActionClick}
            className="text-accounting-primary hover:text-accounting-primary/90"
          >
            {actionText}
          </Button>
        )}
      </div>
      <div className="dashboard-card-body">{children}</div>
      {footer && <div className="dashboard-card-footer">{footer}</div>}
    </div>
  );
};

export default DashboardCard;
