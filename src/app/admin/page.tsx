"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, User } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Check, ShieldAlert, LogOut } from "lucide-react";
import { toast } from "sonner";

export default function AdminPage() {
  const router = useRouter();
  const [pendingUsers, setPendingUsers] = useState<User[]>([]);

  useEffect(() => {
    const user = auth.getUser();
    if (!user || user.role !== "admin") {
      router.push("/login");
      return;
    }
    setPendingUsers(auth.getPendingUsers());
  }, [router]);

  const handleApprove = (email: string) => {
    auth.approveUser(email);
    setPendingUsers(auth.getPendingUsers());
    toast.success("Vendor Approved", { description: "They can now log in." });
  };

  const handleLogout = () => {
    auth.logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <ShieldAlert className="text-[#8A9A5B]" /> Super Admin Panel
            </h1>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
            <LogOut className="mr-2 size-4" /> Log out
          </Button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Pending Approvals ({pendingUsers.length})</h2>
          
          {pendingUsers.length === 0 ? (
            <p className="text-white/40 text-sm py-8 text-center">No pending vendors.</p>
          ) : (
            <div className="space-y-4">
              {pendingUsers.map((user) => (
                <div key={user.email} className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#1A1A1A] border border-white/10 p-4 rounded-xl">
                  <div>
                    <p className="font-semibold text-lg">{user.businessName}</p>
                    <p className="text-sm text-white/50">{user.email}</p>
                  </div>
                  <Button onClick={() => handleApprove(user.email)} className="bg-[#8A9A5B] text-white hover:bg-[#7a8a4b] rounded-lg">
                    <Check className="mr-2 size-4" /> Approve Vendor
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}