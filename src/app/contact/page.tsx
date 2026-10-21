"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white">
      
      {/* NAVBAR */}
      <nav className="border-b border-[#1A1A1A]/10 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logooo.png" alt="Vendox" width={32} height={32} className="rounded-md" />
            <span className="font-serif text-2xl font-bold tracking-tight">Vendox</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A]">
              <ArrowLeft className="mr-2 size-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT - INFO */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div>
            <h1 className="font-serif text-5xl font-medium leading-tight mb-4">Let's talk.</h1>
            <p className="text-lg text-[#1A1A1A]/60">Whether you're a single stall owner or managing a multi-million dollar enterprise, our team is here to help you get started.</p>
          </div>
          
          <div className="space-y-6 pt-8">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-[#8A9A5B]/10 text-[#8A9A5B] flex items-center justify-center shrink-0">
                <Mail className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-[#1A1A1A]/60 text-sm mt-1">support@vendox.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-[#8A9A5B]/10 text-[#8A9A5B] flex items-center justify-center shrink-0">
                <Phone className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-[#1A1A1A]/60 text-sm mt-1">+92 51 111 222 333</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-[#8A9A5B]/10 text-[#8A9A5B] flex items-center justify-center shrink-0">
                <MapPin className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-[#1A1A1A]/60 text-sm mt-1">Plot 12, Jinnah Avenue, Blue Area,<br /> Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-3xl border border-[#1A1A1A]/10 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input placeholder="Syed" className="h-11 rounded-xl bg-[#F9F8F6] border-transparent focus-visible:ring-[#8A9A5B]" />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input placeholder="Ali" className="h-11 rounded-xl bg-[#F9F8F6] border-transparent focus-visible:ring-[#8A9A5B]" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input type="email" placeholder="name@business.com" className="h-11 rounded-xl bg-[#F9F8F6] border-transparent focus-visible:ring-[#8A9A5B]" />
            </div>
            <div className="space-y-2">
              <Label>Business Type</Label>
              <Input placeholder="Food Stall, Gym, Hospital..." className="h-11 rounded-xl bg-[#F9F8F6] border-transparent focus-visible:ring-[#8A9A5B]" />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <textarea className="w-full rounded-xl bg-[#F9F8F6] border-transparent p-3 text-sm outline-none focus:ring-2 focus:ring-[#8A9A5B]" rows={4} placeholder="How can we help you?" />
            </div>
            <Button type="submit" className="w-full h-12 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333] font-semibold mt-4">
              Send Message
            </Button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}