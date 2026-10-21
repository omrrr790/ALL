"use client";
import Link from "next/link";
import { Clock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function PendingPage() {
  const router = useRouter();

  const handleLogout = () => {
    auth.logout();
    document.cookie = "vendox_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center px-6 text-center">
      <div className="size-20 bg-[#8A9A5B]/10 text-[#8A9A5B] rounded-full flex items-center justify-center mb-6 animate-pulse">
        <Clock className="size-10" />
      </div>
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4">Account Pending Approval</h1>
      <p className="text-[#1A1A1A]/60 max-w-md mb-8">
        Thank you for signing up! Your account is currently under review by our team. You will be able to access your dashboard once approved.
      </p>
      <Button onClick={handleLogout} variant="outline" className="rounded-full border-[#1A1A1A]/20 text-[#1A1A1A]">
        <LogOut className="mr-2 size-4" /> Log out
      </Button>
    </div>
  );
}