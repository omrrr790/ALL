"use client";
import { PageHeader } from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { UserPlus, MoreHorizontal } from "lucide-react";

const customers = [
  ["Kamran Akmal", "0301-8822112", "G-11/2, Street 14", "12", "Rs. 4,200"],
  ["Usman Ghani", "0333-5123990", "F-11 Markaz Plaza", "8", "Rs. 2,800"],
  ["Zainab Bibi", "0312-9988771", "G-11/3, Street 45", "5", "Rs. 1,150"],
  ["Bilal Ahmed", "0300-1234567", "G-11/3, House 12", "3", "Rs. 950"],
];

export default function CustomersPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 animate-in fade-in duration-500">
      <PageHeader 
        title="Customers" 
        subtitle="Manage your repeat buyers and view their lifetime value."
        action={
          <Button className="bg-primary text-primary-foreground font-semibold">
            <UserPlus className="mr-2 size-4" /> Add Customer
          </Button>
        }
      />

      <div className="rounded-xl border border-white/5 bg-white/[0.02] shadow-2xl backdrop-blur-md overflow-hidden">
        <DataTable
          columns={["Name", "Phone", "Address", "Total Orders", "Lifetime Value", ""]}
          rows={customers.map(c => [
            <span key="name" className="font-semibold text-foreground">{c[0]}</span>,
            <span key="phone" className="text-muted-foreground">{c[1]}</span>,
            c[2],
            <span key="orders" className="inline-flex items-center rounded-sm bg-white/10 px-2 py-0.5 text-[11px] font-medium">{c[3]}</span>,
            <span key="ltv" className="font-semibold text-emerald-400">{c[4]}</span>,
            <Button key="action" variant="ghost" size="icon" className="size-8 text-muted-foreground hover:bg-white/10 hover:text-white">
              <MoreHorizontal className="size-4" />
            </Button>
          ])}
        />
      </div>
    </div>
  );
}