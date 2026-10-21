// src/app/(vendor)/kitchen/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";

export default function KitchenPage() {
  const router = useRouter();
  return (
    <div className="space-y-6">
      <PageHeader title="Kitchen Preparation Desk" subtitle="Active orders currently being cooked" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4 rounded-2xl border bg-card p-5">
          <div className="flex justify-between">
            <div>
              <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs font-black text-blue-500">#VK-8019</span>
              <h4 className="mt-2 text-sm font-bold">Sara Khan</h4>
              <p className="text-xs text-muted-foreground">F-11 Markaz, Executive Heights</p>
            </div>
            <span className="h-fit rounded bg-amber-500/10 px-2 py-1 text-xs font-bold text-amber-500">⏱ 8 min</span>
          </div>
          <div className="rounded-xl border bg-muted/60 p-3">
            <p className="text-xs font-bold">1× Large Loaded Fries Plate</p>
            <p className="text-[11px] text-muted-foreground">Extra Mayo Garlic Sauce</p>
          </div>
          <Button className="w-full bg-blue-500 font-black text-white hover:bg-blue-400"
            onClick={() => { toast.success("Ready → Rider verification"); router.push("/delivery"); }}>
            Mark Ready for Pickup
          </Button>
        </div>
      </div>
    </div>
  );
}