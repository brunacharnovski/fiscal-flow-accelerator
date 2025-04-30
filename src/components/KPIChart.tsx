
import React from "react";
import { DashboardCard } from "./DashboardCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { ArrowUpCircle, ArrowDownCircle, HelpCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const monthlyData = [
  { name: "Jan", revenue: 24000, expenses: 18000 },
  { name: "Feb", revenue: 26000, expenses: 17000 },
  { name: "Mar", revenue: 27000, expenses: 18500 },
  { name: "Apr", revenue: 32000, expenses: 19000 }
];

const keyMetrics = [
  { 
    name: "Revenue",
    value: "R$ 109,000",
    change: 12.5,
    increasing: true
  },
  {
    name: "Expenses",
    value: "R$ 72,500",
    change: -3.2,
    increasing: false
  },
  {
    name: "Profit Margin",
    value: "33.5%",
    change: 5.7,
    increasing: true
  }
];

interface KPIChartProps {
  className?: string;
}

export const KPIChart: React.FC<KPIChartProps> = ({ className = "" }) => {
  return (
    <DashboardCard 
      title="Financial KPIs" 
      className={className}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">{metric.name}</span>
                <TooltipProvider>
                  <UITooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Calculated based on quarterly data</p>
                    </TooltipContent>
                  </UITooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-semibold">{metric.value}</div>
                <div className={`flex items-center text-sm ${metric.increasing ? "text-accounting-success" : "text-accounting-danger"}`}>
                  {metric.increasing ? (
                    <ArrowUpCircle className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownCircle className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(metric.change)}%
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Tabs defaultValue="revenue-expenses">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="revenue-expenses">Revenue & Expenses</TabsTrigger>
            <TabsTrigger value="profit-trend">Profit Trend</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue-expenses" className="pt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#2563eb" name="Revenue" />
                <Bar dataKey="expenses" fill="#94a3b8" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="profit-trend" className="pt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData.map(item => ({
                  name: item.name,
                  profit: item.revenue - item.expenses
                }))}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#10b981" 
                  strokeWidth={2} 
                  dot={{ fill: "#10b981", r: 4 }}
                  name="Profit"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardCard>
  );
};

export default KPIChart;
