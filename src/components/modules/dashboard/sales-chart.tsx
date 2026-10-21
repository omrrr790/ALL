"use client";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { time: "12 PM", sales: 450 }, { time: "2 PM", sales: 1200 },
  { time: "4 PM", sales: 950 },  { time: "6 PM", sales: 1800 },
  { time: "8 PM", sales: 2800 }, { time: "10 PM", sales: 1250 },
];

export function SalesChart() {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card shadow-sm">
      <div className="flex flex-col gap-1 border-b border-border px-6 py-5">
        <h3 className="text-[15px] font-semibold text-foreground">Revenue Overview</h3>
        <p className="text-[13px] text-muted-foreground">Hourly sales performance for today.</p>
      </div>
      <div className="p-6 pt-4 h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                {/* Softer gradient */}
                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.15} />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="var(--border)" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              tickFormatter={(value) => `Rs ${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "var(--card)", 
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "13px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
              itemStyle={{ color: "var(--foreground)", fontWeight: "600" }}
            />
            <Area 
              type="monotone" 
              dataKey="sales" 
              stroke="var(--primary)" 
              strokeWidth={2} 
              fill="url(#sales)" 
              activeDot={{ r: 4, fill: "var(--primary)", stroke: "var(--background)", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}