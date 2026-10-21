"use client";
import { PageHeader } from "@/components/shared/page-header";
import { Download, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  { id: "TXN-901", date: "Today, 2:30 PM", type: "Order Payout", amount: "Rs. 8,450", status: "Completed", positive: true },
  { id: "TXN-892", date: "Yesterday", type: "Platform Fee (5%)", amount: "Rs. 422", status: "Deducted", positive: false },
  { id: "TXN-888", date: "15 Oct 2026", type: "Order Payout", amount: "Rs. 12,100", status: "Completed", positive: true },
];

export default function FinancePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 animate-in fade-in duration-500">
      <PageHeader 
        title="Finance & Payouts" 
        subtitle="Track your earnings, platform fees, and pending settlements."
        action={
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
            <Download className="mr-2 size-4" /> Export Ledger
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 shadow-lg backdrop-blur-md">
          <p className="text-sm font-medium text-muted-foreground">Available Balance</p>
          <p className="mt-2 text-3xl font-bold text-white">Rs. 48,250</p>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 shadow-lg backdrop-blur-md">
          <p className="text-sm font-medium text-muted-foreground">Pending Clearance</p>
          <p className="mt-2 text-3xl font-bold text-amber-400">Rs. 4,200</p>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 shadow-lg backdrop-blur-md">
          <p className="text-sm font-medium text-muted-foreground">Total Withdrawn</p>
          <p className="mt-2 text-3xl font-bold text-white">Rs. 124,500</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/5 bg-white/[0.02] shadow-xl backdrop-blur-md">
        <div className="border-b border-white/5 px-6 py-4">
          <h3 className="text-sm font-semibold text-white">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-white/5">
          {transactions.map((txn) => (
            <div key={txn.id} className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-4">
                <div className={`flex size-10 items-center justify-center rounded-full ${txn.positive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                  {txn.positive ? <ArrowUpRight className="size-5" /> : <ArrowDownRight className="size-5" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{txn.type}</p>
                  <p className="text-xs text-muted-foreground">{txn.date} • {txn.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${txn.positive ? 'text-white' : 'text-muted-foreground line-through'}`}>{txn.amount}</p>
                <p className="text-xs text-muted-foreground">{txn.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}