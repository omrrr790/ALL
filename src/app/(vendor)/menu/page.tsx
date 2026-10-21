"use client";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialItems = [
  { id: 1, name: "Anda Shami Bun Kabab", price: 150, addons: "Extra Cheese (Rs. 50)", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&auto=format&fit=crop", inStock: true },
  { id: 2, name: "Loaded Mayo Fries Plate", price: 120, addons: "Garlic Dip (Rs. 30)", img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=120&auto=format&fit=crop", inStock: true },
];

export default function MenuPage() {
  const [items, setItems] = useState(initialItems);

  const toggleStock = (id: number, currentStatus: boolean) => {
    setItems(items.map(item => item.id === id ? { ...item, inStock: !currentStatus } : item));
    toast.success(`Item marked as ${!currentStatus ? "In Stock" : "Out of Stock"}`);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">Menu Catalog & Stock</h1>
          <p className="text-sm text-muted-foreground mt-1">Toggle item availability live on the customer app.</p>
        </div>
        <Button className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold">
          <Plus className="mr-2 size-4" /> Add New Item
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <motion.div 
            key={item.id} 
            layout
            className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
          >
            <div className="flex items-center gap-4 min-w-0">
              <img src={item.img} className="size-16 rounded-lg object-cover border border-border shrink-0" />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground truncate">{item.name}</h3>
                <p className="text-sm font-bold text-emerald-500 mt-0.5">Rs. {item.price}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{item.addons}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <span className={`text-[11px] font-medium ${item.inStock ? 'text-emerald-500' : 'text-muted-foreground'}`}>
                {item.inStock ? "In Stock" : "Out of Stock"}
              </span>
              <label className="relative inline-flex cursor-pointer items-center">
                <input 
                  type="checkbox" 
                  checked={item.inStock} 
                  onChange={() => toggleStock(item.id, item.inStock)}
                  className="peer sr-only" 
                />
                <div className="h-6 w-11 rounded-full bg-secondary border border-border peer-checked:after:translate-x-full after:absolute after:left-0.5 after:top-0.5 after:h-4.5 after:w-4.5 after:rounded-full after:bg-muted-foreground after:transition-all after:content-[''] peer-checked:bg-emerald-500/20 peer-checked:border-emerald-500/50 peer-checked:after:bg-emerald-500" />
              </label>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}