"use client";
import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex overflow-x-hidden border-y border-[#1A1A1A]/10 bg-white py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex whitespace-nowrap gap-8 px-4"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-medium text-[#1A1A1A]/60 uppercase tracking-widest">
            {item}
            <span className="size-1.5 rounded-full bg-[#8A9A5B]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}