"use client";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bike, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function DeliveryPage() {
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const VALID_OTP = "4821";

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === VALID_OTP) {
      setIsVerified(true);
      toast.success("OTP Verified", { description: "Order handed over to rider successfully." });
    } else {
      toast.error("Invalid OTP", { description: "Please check the code sent to the rider." });
      setOtp("");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">Ready for Rider Verification</h1>
          <p className="text-sm text-muted-foreground mt-1">Verify the 4-digit OTP with the rider before handing over the package.</p>
        </div>
        <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary border border-primary/20">
          1 Rider Arriving
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col overflow-hidden rounded-xl border border-emerald-500/30 bg-card shadow-sm"
        >
          <div className="flex items-start justify-between border-b border-border p-5">
            <div>
              <span className="inline-flex rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500 border border-emerald-500/20">
                #VK-8015
              </span>
              <h3 className="mt-2 text-sm font-semibold text-foreground">Tariq Mahmood (Rider)</h3>
              <p className="mt-1 flex items-center text-xs text-muted-foreground">
                <Bike className="mr-1 size-3.5 text-emerald-500" /> Honda 125 (ICT-902)
              </p>
            </div>
            <div className="rounded-lg bg-amber-500/10 px-3 py-1.5 border border-amber-500/20 text-center">
              <p className="text-[10px] font-bold uppercase text-amber-500/70">OTP</p>
              <p className="text-lg font-black text-amber-500 tracking-widest">{VALID_OTP}</p>
            </div>
          </div>

          <div className="p-5 flex-1">
            <div className="rounded-lg border border-border bg-secondary/50 p-3">
              <p className="text-sm font-semibold text-foreground">1x Zinger Paratha Roll + Cold Drink</p>
              <p className="mt-1 text-xs text-muted-foreground">COD Amount: <span className="font-bold text-emerald-500">Rs. 280</span></p>
            </div>
          </div>

          <div className="border-t border-border bg-secondary/20 p-5">
            {isVerified ? (
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex flex-col items-center justify-center py-4 text-center">
                <CheckCircle2 className="mb-2 size-10 text-emerald-500" />
                <p className="text-sm font-bold text-foreground">Handover Complete</p>
                <p className="text-xs text-muted-foreground mt-1">Order has been dispatched.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleVerify} className="space-y-3">
                <label className="text-xs font-semibold text-muted-foreground">Enter Rider Handover OTP</label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Ex: 1234" 
                    value={otp} 
                    onChange={(e) => setOtp(e.target.value)} 
                    maxLength={4}
                    className="font-mono text-center text-lg tracking-[0.5em] h-11"
                  />
                  <Button type="submit" className="h-11 shrink-0 bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold px-6">
                    Verify
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}