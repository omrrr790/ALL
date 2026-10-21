"use client";
import { PageHeader } from "@/components/shared/page-header";
import { SalesChart } from "@/components/modules/dashboard/sales-chart";
import { TopItems } from "@/components/modules/dashboard/top-items";

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 animate-in fade-in duration-500">
      <PageHeader 
        title="Business Reports" 
        subtitle="Analyze your sales, top products, and peak hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <TopItems />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-md">
          <h3 className="text-sm font-semibold text-white mb-4">Sales by Category</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1"><span className="text-white">Fast Food</span><span className="text-muted-foreground">65%</span></div>
              <div className="h-2 w-full rounded-full bg-white/5"><div className="h-full rounded-full bg-primary" style={{ width: '65%' }} /></div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1"><span className="text-white">Beverages</span><span className="text-muted-foreground">25%</span></div>
              <div className="h-2 w-full rounded-full bg-white/5"><div className="h-full rounded-full bg-blue-500" style={{ width: '25%' }} /></div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1"><span className="text-white">Desserts</span><span className="text-muted-foreground">10%</span></div>
              <div className="h-2 w-full rounded-full bg-white/5"><div className="h-full rounded-full bg-purple-500" style={{ width: '10%' }} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}