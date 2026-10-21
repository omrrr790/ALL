"use client";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
  trend?: { value: string; positive: boolean };
  icon: LucideIcon;
}

export function StatCard({ label, value, hint, trend, icon: Icon }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-muted-foreground">{label}</span>
        <div className="flex size-8 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
          <Icon className="size-4" />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
        <div className="mt-1 flex items-center gap-2">
          {trend && (
            <span className={cn(
              "inline-flex items-center rounded-sm px-1.5 py-0.5 text-[11px] font-semibold",
              trend.positive ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
            )}>
              {trend.positive ? "+" : "-"}{trend.value}
            </span>
          )}
          {hint && <span className="text-[12px] text-muted-foreground">{hint}</span>}
        </div>
      </div>
    </motion.div>
  );
}