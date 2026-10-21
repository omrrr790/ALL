"use client";
import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const allOrders = [
  { id: "#VK-8021", customer: "Bilal Ahmed", phone: "0300-1234567", items: "2x Anda Shami", total: "Rs. 350", status: "Pending", time: "2 min ago" },
  { id: "#VK-8019", customer: "Sara Khan", phone: "0333-9876543", items: "1x Large Fries", total: "Rs. 120", status: "In Kitchen", time: "8 min ago" },
  { id: "#VK-8015", customer: "Tariq Mehmood", phone: "0345-1122334", items: "1x Zinger Roll", total: "Rs. 280", status: "Ready", time: "15 min ago" },
  { id: "#VK-8012", customer: "Kamran Akmal", phone: "0301-8822112", items: "1x Double Egg Shami", total: "Rs. 320", status: "Delivered", time: "Today, 1:45 PM" },
  { id: "#VK-8008", customer: "Usman Ghani", phone: "0333-5123990", items: "3x Cheese Bun Kabab", total: "Rs. 600", status: "Delivered", time: "Today, 12:30 PM" },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const filteredOrders = allOrders.filter(o => 
    o.customer.toLowerCase().includes(search.toLowerCase()) || 
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "Pending": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "In Kitchen": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Ready": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Delivered": return "bg-slate-500/10 text-slate-400 border-slate-500/20";
      default: return "bg-slate-500/10 text-slate-400";
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <PageHeader 
        title="Order History" 
        subtitle="View and manage all past and active orders."
        action={
          <Button variant="outline" className="border-border">
            <Filter className="mr-2 size-4" /> Filter
          </Button>
        }
      />

      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
        <Input 
          placeholder="Search by order ID or customer..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-card"
        />
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <DataTable
          columns={["Order ID", "Customer", "Items", "Amount", "Status", "Time"]}
          rows={filteredOrders.map(o => [
            <span key="id" className="font-mono font-semibold text-primary">{o.id}</span>,
            <div key="cust" className="flex flex-col">
              <span className="font-medium text-foreground">{o.customer}</span>
              <span className="text-[11px] text-muted-foreground">{o.phone}</span>
            </div>,
            o.items,
            <span key="amt" className="font-semibold text-foreground">{o.total}</span>,
            <span key="status" className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-bold ${getStatusStyle(o.status)}`}>
              {o.status.toUpperCase()}
            </span>,
            <span key="time" className="text-muted-foreground">{o.time}</span>
          ])}
        />
      </div>
    </div>
  );
}