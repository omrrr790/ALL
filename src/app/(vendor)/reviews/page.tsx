"use client";
import { PageHeader } from "@/components/shared/page-header";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, name: "Kamran Akmal", rating: 5, date: "2 hours ago", text: "Bhai ka bun kabab is the best in G-11. The cheese adds the perfect touch. Highly recommended!" },
  { id: 2, name: "Sara Khan", rating: 4, date: "Yesterday", text: "Fries were good, but the mayo garlic sauce portion was a bit small. Delivery was fast though." },
  { id: 3, name: "Bilal Ahmed", rating: 5, date: "3 days ago", text: "Always fresh and hot. Been ordering from here for months." },
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 animate-in fade-in duration-500">
      <PageHeader 
        title="Customer Reviews" 
        subtitle="See what your customers are saying and manage your reputation."
      />

      <div className="grid gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-[11px] text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "fill-white/10 text-white/10"}`} />
                ))}
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}