"use client";
import { motion } from "framer-motion";

const items = [
  { id: 1, name: "Anda Shami Bun Kabab", orders: 18, price: "Rs. 2,700", rank: "#1", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&auto=format&fit=crop" },
  { id: 2, name: "Loaded Mayo Fries", orders: 12, price: "Rs. 1,440", rank: "#2", img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=100&auto=format&fit=crop" },
  { id: 3, name: "Zinger Paratha Roll", orders: 8, price: "Rs. 2,240", rank: "#3", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=100&auto=format&fit=crop" },
];

export function TopItems() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-5 py-4">
        <h3 className="text-sm font-semibold text-foreground">Top Selling Items</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Most ordered food today</p>
      </div>
      <div className="flex-1 space-y-3 p-4">
        {items.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.01 }}
            className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-3"
          >
            <div className="flex items-center gap-3">
              <img src={item.img} alt={item.name} className="size-12 rounded-md object-cover border border-border" />
              <div>
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.orders} orders ({item.price})</p>
              </div>
            </div>
            <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
              {item.rank}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}