"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Check, X } from "lucide-react";

export default function LiveOrdersPage() {
  const router = useRouter();

  const handleAccept = () => {
    toast.success("Order Accepted", { description: "Moved to Kitchen Preparation Desk." });
    router.push("/kitchen");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            New Incoming Orders
            <span className="flex h-5 items-center rounded-full bg-amber-500/20 px-2 text-[10px] font-bold text-amber-500">1</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Orders requiring immediate acceptance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col overflow-hidden rounded-xl border border-amber-500/30 bg-card shadow-sm ring-1 ring-amber-500/10"
        >
          <div className="flex items-start justify-between border-b border-border bg-amber-500/5 p-4">
            <div>
              <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-500 border border-amber-500/20">
                #VK-8021
              </span>
              <h3 className="mt-2 text-sm font-semibold text-foreground">Bilal Ahmed</h3>
              <p className="mt-1 flex items-center text-xs text-muted-foreground">
                <MapPin className="mr-1 size-3 text-rose-500" /> G-11/3, Street 45, House 12
              </p>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">2 min ago</span>
          </div>

          <div className="p-4 flex-1">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-3">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&auto=format&fit=crop" className="size-12 rounded-md object-cover border border-border" />
              <div>
                <p className="text-sm font-semibold text-foreground">2x Special Anda Shami Bun Kabab</p>
                <p className="text-xs font-medium text-primary">+ Extra Cheddar Cheese (Rs. 50)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border bg-secondary/20 px-4 py-3">
            <div>
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Total (COD)</p>
              <p className="text-lg font-bold text-foreground">Rs. 350</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-9 border-border hover:bg-rose-500/10 hover:text-rose-500 hover:border-rose-500/20" onClick={() => toast.error("Order Rejected")}>
                <X className="mr-2 size-4" /> Reject
              </Button>
              <Button size="sm" className="h-9 bg-emerald-500 text-slate-950 hover:bg-emerald-400" onClick={handleAccept}>
                <Check className="mr-2 size-4" /> Accept
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}