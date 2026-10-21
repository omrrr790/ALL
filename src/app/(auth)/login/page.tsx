"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/auth";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    setTimeout(() => {
      try {
        const user = auth.authenticate(email, password);
        auth.login(user);
        
        toast.success("Welcome back!");
        if (user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      } catch (error: any) {
        toast.error("Login Failed", { description: error.message });
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="flex min-h-screen bg-[#F9F8F6] text-[#1A1A1A]">
      <div className="hidden lg:flex w-1/2 relative bg-[#1A1A1A] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2000&auto=format&fit=crop" alt="Vendox" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full text-white">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image src="/logooo.png" alt="Vendox" width={32} height={32} className="rounded-md bg-white p-0.5" />
            <span className="font-serif text-2xl font-bold tracking-tight">Vendox</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-24">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="mx-auto w-full max-w-sm space-y-8">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <Image src="/logooo.png" alt="Vendox" width={32} height={32} className="rounded-md" />
            <span className="font-serif text-2xl font-bold">Vendox</span>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-[#1A1A1A]/60 text-sm">Enter your credentials to access your dashboard.</p>
            <div className="mt-2 text-xs bg-[#8A9A5B]/10 text-[#8A9A5B] p-2 rounded-md">
              <b>Admin Demo:</b> admin@vendox.com / admin123
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="name@business.com" required className="h-11 rounded-xl bg-white border-[#1A1A1A]/10 focus-visible:ring-[#8A9A5B]" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required className="h-11 rounded-xl bg-white border-[#1A1A1A]/10 focus-visible:ring-[#8A9A5B] pr-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-[#1A1A1A]/40">
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full h-11 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333] font-semibold">
              {loading ? "Signing in..." : "Sign in"} <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-[#1A1A1A]/60">
            Don't have an account? <Link href="/signup" className="font-semibold text-[#8A9A5B] hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}