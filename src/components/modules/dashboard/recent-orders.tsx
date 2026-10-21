"use client";
import { DataTable } from "@/components/shared/data-table";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const rows = [
  ["#VK-8012", "Kamran Akmal", "1x Double Egg Shami + Cold Drink", "Tariq Mahmood", "Rs. 320", "DELIVERED"],
  ["#VK-8008", "Usman Ghani", "3x Cheese Bun Kabab", "Hamza Aslam", "Rs. 600", "DELIVERED"],
];

export function RecentOrders() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Recent Dispatched Activity</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Completed orders handed over to riders</p>
        </div>
        <Link href="/orders" className="flex items-center text-xs font-semibold text-primary hover:underline">
          View All <ArrowRight className="ml-1 size-3.5" />
        </Link>
      </div>
      <DataTable
        columns={["Order ID", "Customer & Location", "Items Summary", "Rider Name", "Amount", "Status"]}
        rows={rows.map(row => [
          <span key="id" className="font-mono font-semibold text-primary">{row[0]}</span>,
          <div key="cust" className="flex flex-col">
            <span className="font-medium text-foreground">{row[1]}</span>
            <span className="text-[11px] text-muted-foreground">G-11/2, Street 14</span>
          </div>,
          row[2],
          row[3],
          <span key="amt" className="font-semibold text-foreground">{row[4]}</span>,
          <span key="status" className="inline-flex items-center rounded-sm bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500">{row[5]}</span>
        ])}
      />
    </div>
  );
}