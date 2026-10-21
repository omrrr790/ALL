"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/auth";
import { toast } from "sonner";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

   const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const businessName = formData.get("businessName") as string;
    const category = formData.get("category") as string;

    setTimeout(() => {
      try {
        auth.register({
          name: "New Vendor",
          email,
          password,
          businessName,
          category,
          role: "pending",
        });
        
        toast.success("Account created!", { description: "Your account is pending admin approval." });
        router.push("/pending");
      } catch (error: any) {
        toast.error("Signup Failed", { description: error.message });
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="flex min-h-screen bg-[#F9F8F6] text-[#1A1A1A]">
      <div className="hidden lg:flex w-1/2 relative bg-[#1A1A1A] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop" alt="Vendox" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full text-white">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image src="/logooo.png" alt="Vendox" width={32} height={32} className="rounded-md bg-white p-0.5" />
            <span className="font-serif text-2xl font-bold tracking-tight">Vendox</span>
          </Link>
          <div className="max-w-md space-y-6">
            <h2 className="font-serif text-4xl font-medium leading-tight">Join thousands of vendors scaling their business.</h2>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> 14-day free trial. Cancel anytime.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> No credit card required.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Setup takes less than 2 minutes.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-24">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="mx-auto w-full max-w-sm space-y-8">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <Image src="/logooo.png" alt="Vendox" width={32} height={32} className="rounded-md" />
            <span className="font-serif text-2xl font-bold">Vendox</span>
          </div>
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
            <p className="text-[#1A1A1A]/60 text-sm">Start managing your business today.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Syed" required className="h-11 rounded-xl bg-white border-[#1A1A1A]/10 focus-visible:ring-[#8A9A5B]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Ali" required className="h-11 rounded-xl bg-white border-[#1A1A1A]/10 focus-visible:ring-[#8A9A5B]" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" name="businessName" placeholder="G-11 Markaz Bun Kabab" required className="h-11 rounded-xl bg-white border-[#1A1A1A]/10 focus-visible:ring-[#8A9A5B]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Business Category</Label>
              <select id="category" name="category" className="flex h-11 w-full rounded-xl border border-[#1A1A1A]/10 bg-white px-3 py-2 text-sm focus-visible:ring-[#8A9A5B]">
                <option value="food-stall">Food Stall & Hawker</option>
                <option value="kiryana">Kiryana & Daily Essentials</option>
                <option value="home-chef">Home Chef & Tiffin</option>
                <option value="hostel">Student & Professional Hostel</option>
                <option value="retail">Local Retail Shop & Showroom</option>
                <option value="mall">Shopping Mall & Commercial Plaza</option>
                <option value="hospital">Hospital & Medical Lab</option>
                <option value="restaurant">Major Food Brand & Restaurant</option>
                <option value="academy">Academy & Service</option>
                <option value="bakery">Bakery & Sweet Shop</option>
                <option value="water">Water Supplier & Fuel/Gas</option>
                <option value="laundry">Laundry & Dry Cleaner</option>
                <option value="gym">Fitness & Gym</option>
                <option value="catering">Catering & Event Service</option>
                <option value="pet">Pet Shop & Veterinary</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="name@business.com" required className="h-11 rounded-xl bg-white border-[#1A1A1A]/10 focus-visible:ring-[#8A9A5B]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Create a strong password" required className="h-11 rounded-xl bg-white border-[#1A1A1A]/10 focus-visible:ring-[#8A9A5B]" />
            </div>
            <Button type="submit" disabled={loading} className="w-full h-11 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333] font-semibold mt-4">
              {loading ? "Creating account..." : "Create account"} <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>
          <p className="text-center text-sm text-[#1A1A1A]/60">
            Already have an account? <Link href="/login" className="font-semibold text-[#8A9A5B] hover:underline">Log in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}