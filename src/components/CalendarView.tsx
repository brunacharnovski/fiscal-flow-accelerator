
import React, { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

interface DueDate {
  id: number;
  title: string;
  date: Date;
  type: string;
}

const demoDueDates: DueDate[] = [
  {
    id: 1,
    title: "Monthly VAT Declaration",
    date: new Date(2025, 4, 15), // May 15, 2025
    type: "tax"
  },
  {
    id: 2,
    title: "Quarterly Tax Payment",
    date: new Date(2025, 4, 20), // May 20, 2025
    type: "tax"
  },
  {
    id: 3,
    title: "Annual Financial Report",
    date: new Date(2025, 5, 10), // June 10, 2025
    type: "report"
  }
];

interface CalendarViewProps {
  className?: string;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ className = "" }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Create an object mapping dates to due items for highlighting
  const dueDateMap = demoDueDates.reduce((acc, dueItem) => {
    const dateString = dueItem.date.toDateString();
    if (!acc[dateString]) {
      acc[dateString] = [];
    }
    acc[dateString].push(dueItem);
    return acc;
  }, {} as Record<string, DueDate[]>);
  
  // Function to determine if a date has due items
  const isDueDate = (day: Date): boolean => {
    return !!dueDateMap[day.toDateString()];
  };
  
  const getDayClass = (day: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (isDueDate(day)) {
      return "bg-accounting-primary/20 text-accounting-primary font-medium rounded-full";
    }
    return "";
  };
  
  return (
    <DashboardCard 
      title="Due Dates Calendar" 
      icon={<CalendarIcon size={18} />}
      actionText="View All"
      onActionClick={() => console.log("View all due dates")}
      className={className}
    >
      <div className="flex flex-col space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiersClassNames={{
            today: "bg-accounting-light text-accounting-dark font-semibold",
            selected: "bg-accounting-primary text-white hover:bg-accounting-primary hover:text-white"
          }}
          modifiers={{
            dueDate: (day) => isDueDate(day)
          }}
          modifiersStyles={{
            dueDate: { fontWeight: "bold" }
          }}
          styles={{
            day_today: { fontWeight: "bold" }
          }}
          components={{
            DayContent: ({ date: dayDate }) => (
              <div className={`flex items-center justify-center h-8 w-8 p-0 ${getDayClass(dayDate)}`}>
                {dayDate.getDate()}
              </div>
            ),
          }}
        />
        
        <div className="space-y-2 mt-4">
          <h3 className="font-medium text-sm">Upcoming Due Dates</h3>
          {demoDueDates.length > 0 ? (
            <div className="space-y-2">
              {demoDueDates
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .slice(0, 3)
                .map((dueItem) => {
                  const isOverdue = dueItem.date < new Date();
                  const isSoon = !isOverdue && 
                    dueItem.date.getTime() - new Date().getTime() < 7 * 24 * 60 * 60 * 1000;
                  
                  let dateClass = "due-date-normal";
                  if (isOverdue) dateClass = "due-date-overdue";
                  else if (isSoon) dateClass = "due-date-soon";
                  
                  return (
                    <div 
                      key={dueItem.id} 
                      className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded-md"
                    >
                      <div>
                        <span 
                          className={`inline-block w-2 h-2 rounded-full mr-2 
                            ${dueItem.type === 'tax' ? 'bg-accounting-primary' : 'bg-accounting-success'}`}
                        ></span>
                        {dueItem.title}
                      </div>
                      <div className={dateClass}>
                        {dueItem.date.toLocaleDateString()}
                      </div>
                    </div>
                  );
                })
              }
            </div>
          ) : (
            <p className="text-sm text-gray-500">No upcoming due dates</p>
          )}
        </div>
      </div>
    </DashboardCard>
  );
};

export default CalendarView;
