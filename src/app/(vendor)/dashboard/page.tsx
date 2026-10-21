"use client";
import { Coins, Receipt, Clock, Star } from "lucide-react";
import { StatCard } from "@/components/shared/stat-card";
import { SalesChart } from "@/components/modules/dashboard/sales-chart";
import { RecentOrders } from "@/components/modules/dashboard/recent-orders";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Stall Performance</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time revenue, order metrics, peak hour stats, and dispatched order log.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
            <Clock className="mr-2 size-3.5 text-muted-foreground" />
            Today (17 Oct 2026)
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          label="Total Sales Today" 
          value="Rs. 8,450" 
          icon={Coins} 
          trend={{ value: "24%", positive: true }} 
          hint="vs yesterday"
        />
        <StatCard 
          label="Dispatched Orders" 
          value="38" 
          icon={Receipt} 
          hint="Completion rate: 97.4%" 
        />
        <StatCard 
          label="Avg Kitchen Prep" 
          value="11.4 mins" 
          icon={Clock} 
          hint="Fast SLA benchmark" 
        />
        <StatCard 
          label="Customer Rating" 
          value="4.9 / 5.0" 
          icon={Star} 
          hint="Based on 142 reviews" 
        />
      </div>

      {/* Chart & Top Items Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <RecentOrders />
    </div>
  );
}