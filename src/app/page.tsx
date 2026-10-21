"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Truck, Package, Calendar, 
  Utensils, ChevronDown, Star, Globe, CreditCard, 
  Smartphone, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

// --- DATA ---
const categories = [
  { name: "Food Stalls & Hawkers", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop" },
  { name: "Kiryana & Daily Essentials", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop" },
  { name: "Home Chefs & Tiffin", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop" },
  { name: "Hostels & Living", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop" },
  { name: "Retail Shops & Showrooms", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop" },
  { name: "Shopping Malls & Plazas", img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop" },
  { name: "Hospitals & Medical Labs", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop" },
  { name: "Major Food Brands", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop" },
  { name: "Academies & Services", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop" },
  { name: "Bakeries & Sweets", img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&auto=format&fit=crop" },
  { name: "Water & Fuel Suppliers", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop" },
  { name: "Laundry & Dry Cleaners", img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&auto=format&fit=crop" },
  { name: "Fitness & Gyms", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop" },
  { name: "Catering & Events", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop" },
  { name: "Pet Shops & Veterinary", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop" },
];

const faqs = [
  { q: "Can I use Vendox for multiple businesses?", a: "Yes! Vendox is designed as a multi-vendor hub. If you own a gym, a food stall, and a retail store, you can manage all three from a single master account." },
  { q: "How does the Rider OTP system work?", a: "When a rider arrives to pick up an order, they must provide a 4-digit OTP generated on the customer's app. This prevents theft and ensures accountability." },
  { q: "Is there a setup fee?", a: "No. We offer a 14-day free trial with no credit card required. After that, it's a flat monthly fee based on your tier." },
  { q: "Do you support local payment methods?", a: "Absolutely. Vendox integrates directly with Raast, local bank transfers, and cash-on-delivery workflows." },
  { q: "Can my staff have restricted access?", a: "Yes, our RBAC (Role-Based Access Control) allows you to give specific permissions to cooks, managers, and delivery riders." },
  { q: "Is my data secure?", a: "We use bank-grade AES-256 encryption. Your customer data and financial ledgers are completely private." }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- COMPONENTS ---
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#1A1A1A]/10 py-6 cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium group-hover:text-[#8A9A5B] transition-colors">{q}</h3>
        <div className={`size-8 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center transition-all ${isOpen ? "bg-[#1A1A1A] text-white rotate-180" : "bg-transparent text-[#1A1A1A]"}`}>
          <ChevronDown className="size-4" />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="text-[#1A1A1A]/60 pt-4 leading-relaxed max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white font-sans overflow-hidden">
      
      {/* 1. UNIQUE FLOATING NAVBAR */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex h-16 w-full max-w-5xl items-center justify-between rounded-full border border-[#1A1A1A]/10 bg-white/70 px-6 shadow-lg shadow-black/5 backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logooo.png" alt="Vendox" width={28} height={28} className="rounded-md" />
              <span className="font-serif text-xl font-bold tracking-tight">Vendox</span>
            </Link>
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <Link href="#solutions" className="hover:text-[#8A9A5B] transition-colors">Solutions</Link>
              <Link href="#features" className="hover:text-[#8A9A5B] transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-[#8A9A5B] transition-colors">Pricing</Link>
              <Link href="/about" className="hover:text-[#8A9A5B] transition-colors">About</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden text-sm font-semibold hover:text-[#8A9A5B] md:block">Log in</Link>
            <Button render={<Link href="/login" />} nativeButton={false} className="bg-[#1A1A1A] text-white hover:bg-[#333] rounded-full px-5 h-9 text-sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative px-6 pt-40 pb-20 lg:pt-32 lg:pb-32 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
              The all-in-one <br />
              hub for <span className="italic text-[#8A9A5B]">every</span> business.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[#1A1A1A]/70 max-w-lg leading-relaxed">
              Purchase, book, sell, and manage. From food stalls and kiryana stores to gyms, hospitals, and retail showrooms. Run your entire empire from one beautifully designed platform.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button render={<Link href="/login" />} nativeButton={false} size="lg" className="h-12 w-full sm:w-auto rounded-full bg-[#1A1A1A] text-white hover:bg-[#333] px-8 text-base">
                Start Selling Today
              </Button>
              <Button render={<Link href="#features" />} nativeButton={false} size="lg" variant="outline" className="h-12 w-full sm:w-auto rounded-full border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 px-8 text-base">
                Explore Features
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-4 text-sm text-[#1A1A1A]/60">
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> No credit card</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> 14-day free trial</span>
            </motion.div>
          </div>
          
          <motion.div variants={fadeUp} className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop" alt="Vendor" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </motion.div>
      </section>

      {/* 3. SCROLLING MARQUEE */}
      <Marquee items={["Purchase Orders", "Bookings", "Inventory", "Point of Sale", "Delivery Tracking", "Analytics", "Staff Management", "Customer Loyalty"]} />

      {/* 4. LOGO CLOUD (Trusted By) */}
      <section className="py-16 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-[#1A1A1A]/40 uppercase tracking-widest mb-8">Trusted by modern operators</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <span className="font-serif text-2xl font-bold">Khaadi</span>
            <span className="font-sans text-xl font-black">BUN KABAB</span>
            <span className="font-serif text-2xl italic">J. (Junaid)</span>
            <span className="font-mono text-xl font-bold">SHIFA</span>
            <span className="font-sans text-2xl font-extrabold tracking-tighter">GYM X</span>
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section className="py-20 bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-4xl font-serif font-bold text-[#8A9A5B]"><Counter end={5000} suffix="+" /></p>
            <p className="text-sm font-medium text-[#1A1A1A]/60 mt-2">Active Vendors</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p className="text-4xl font-serif font-bold text-[#8A9A5B]"><Counter end={1200000} suffix="+" /></p>
            <p className="text-sm font-medium text-[#1A1A1A]/60 mt-2">Orders Processed</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="text-4xl font-serif font-bold text-[#8A9A5B]"><Counter end={15} /></p>
            <p className="text-sm font-medium text-[#1A1A1A]/60 mt-2">Industries Served</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <p className="text-4xl font-serif font-bold text-[#8A9A5B]"><Counter end={99} suffix="%" /></p>
            <p className="text-sm font-medium text-[#1A1A1A]/60 mt-2">Uptime SLA</p>
          </motion.div>
        </div>
      </section>

      {/* 6. CATEGORY GRID */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif text-4xl font-medium tracking-tight mb-3">One platform. 15 industries.</h2>
              <p className="text-[#1A1A1A]/60">Select your business type to see tailored features.</p>
            </div>
            <Link href="/login" className="text-sm font-semibold text-[#8A9A5B] flex items-center hover:underline">
              View all solutions <ArrowRight className="ml-1 size-4" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 5) * 0.1 }}>
                <Link href="/login" className="group relative block aspect-[4/5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <img src={cat.img} alt={cat.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm leading-tight drop-shadow-md">{cat.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURES (BENTO BOX) */}
      <section id="features" className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">Everything you need to scale</h2>
            <p className="text-[#1A1A1A]/60">Say goodbye to 5 different software tools. Vendox replaces them all with one unified hub.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-white rounded-3xl p-8 border border-[#1A1A1A]/10 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="size-12 rounded-xl bg-[#8A9A5B]/10 text-[#8A9A5B] flex items-center justify-center mb-6"><Package className="size-6" /></div>
                <h3 className="text-2xl font-semibold mb-3">All-in-One Inventory & Purchasing</h3>
                <p className="text-[#1A1A1A]/60 max-w-md">Manage raw materials, track stock levels, and generate purchase orders automatically. Never run out of a bestseller again.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop" className="absolute -right-10 -bottom-10 w-64 h-64 object-cover rounded-full opacity-20 md:opacity-100 md:w-80 md:h-80 md:rounded-tl-3xl md:rounded-br-none md:rounded-tr-none md:right-0 md:bottom-0" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#1A1A1A] text-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6"><Calendar className="size-6" /></div>
                <h3 className="text-2xl font-semibold mb-3">Smart Bookings</h3>
                <p className="text-white/60">Let customers book tables, doctors, or gym sessions instantly. Syncs with your calendar automatically.</p>
              </div>
              <Button render={<Link href="/login" />} nativeButton={false} className="mt-8 bg-white text-[#1A1A1A] hover:bg-white/90 rounded-full w-fit">Try it out</Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#D4E0B7] rounded-3xl p-8 flex flex-col justify-between">
               <div>
                <div className="size-12 rounded-xl bg-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center mb-6"><Utensils className="size-6" /></div>
                <h3 className="text-2xl font-semibold mb-3">POS & Kitchen Display</h3>
                <p className="text-[#1A1A1A]/70">A lightning-fast Point of Sale system that sends orders directly to the kitchen screen.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 bg-white rounded-3xl p-8 border border-[#1A1A1A]/10 shadow-sm flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                <div className="size-12 rounded-xl bg-[#8A9A5B]/10 text-[#8A9A5B] flex items-center justify-center mb-6"><Truck className="size-6" /></div>
                <h3 className="text-2xl font-semibold mb-3">Delivery & Rider OTP</h3>
                <p className="text-[#1A1A1A]/60">Track deliveries in real-time. Handover packages securely using a 4-digit OTP system to prevent theft.</p>
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
                <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=400&auto=format&fit=crop" className="object-cover h-full w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS (3 STEPS) */}
      <section className="py-24 bg-white border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">Up and running in minutes</h2>
            <p className="text-[#1A1A1A]/60">No complex setup. No coding. Just pure business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-[#1A1A1A]/10 z-0" />
            {[
              { step: "01", title: "Create Account", desc: "Sign up and select your business category." },
              { step: "02", title: "Get Approved", desc: "Our team verifies your details instantly." },
              { step: "03", title: "Start Scaling", desc: "Access your dashboard and take orders." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative z-10 flex flex-col items-center text-center">
                <div className="size-16 rounded-full bg-white border-2 border-[#8A9A5B] text-[#8A9A5B] font-serif text-xl font-bold flex items-center justify-center mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#1A1A1A]/60 text-sm max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">Loved by operators everywhere</h2>
            <p className="text-[#1A1A1A]/60">Don't just take our word for it.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Kamran Akmal", role: "Bun Kabab Stall, G-11", text: "Before Vendox, I was using a notebook for orders. Now I see exactly how much I make every hour and my riders can't steal orders anymore.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" },
              { name: "Dr. Ayesha", role: "Medicare Lab", text: "The booking system is flawless. Patients book their lab tests from home, and the dashboard syncs instantly with my lab technicians.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop" },
              { name: "Usman Shahid", role: "Owner, Kiryana Store", text: "I can literally see my inventory from my phone while I'm at home. The POS is faster than anything I've used before.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop" }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl border border-[#1A1A1A]/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="size-4 fill-[#8A9A5B] text-[#8A9A5B]" />)}
                  </div>
                  <p className="text-[#1A1A1A]/80 text-lg italic leading-relaxed">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <img src={t.img} className="size-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[#1A1A1A]/60">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INTEGRATIONS GRID */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
            <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight">
              Connects with your <br/> favorite tools.
            </h2>
            <p className="text-white/60 text-lg">Vendox doesn't live in a silo. We integrate with the tools you already use to run your business.</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: CreditCard, name: "Stripe & Raast" },
                { icon: MessageSquare, name: "WhatsApp API" },
                { icon: Smartphone, name: "SMS Gateway" },
                { icon: Globe, name: "Google Analytics" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <item.icon className="size-5 text-[#8A9A5B]" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-auto lg:h-[500px]">
             <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop" alt="Dashboard" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* 11. BLOG / RESOURCES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl font-medium tracking-tight mb-3">From the blog</h2>
              <p className="text-[#1A1A1A]/60">Tips, tricks, and industry insights for modern operators.</p>
            </div>
            <Link href="#" className="text-sm font-semibold text-[#8A9A5B] hover:underline hidden md:block">View all posts</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How to reduce food waste in your stall", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop", category: "Operations" },
              { title: "The ultimate guide to Kiryana inventory", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop", category: "Growth" },
              { title: "Why OTP delivery is preventing theft", img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&auto=format&fit=crop", category: "Tech" }
            ].map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-[#8A9A5B] uppercase tracking-wider">{post.category}</span>
                <h3 className="text-xl font-semibold mt-2 group-hover:text-[#8A9A5B] transition-colors">{post.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. PRICING */}
      <section id="pricing" className="py-24 bg-[#F9F8F6] border-t border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">Simple, transparent pricing</h2>
            <p className="text-[#1A1A1A]/60">No hidden fees. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-[#1A1A1A]/10 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-4xl font-serif font-bold mb-6">Rs. 2,500<span className="text-sm font-sans text-[#1A1A1A]/60 font-normal">/mo</span></p>
              <ul className="space-y-3 text-sm text-[#1A1A1A]/70 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> 1 Business Location</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Up to 50 Orders/day</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Basic POS</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Email Support</li>
              </ul>
              <Button render={<Link href="/login" />} nativeButton={false} variant="outline" className="w-full h-11 rounded-xl border-[#1A1A1A]/20">Start Free Trial</Button>
            </div>
            <div className="bg-[#1A1A1A] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#8A9A5B] text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-4xl font-serif font-bold mb-6">Rs. 5,000<span className="text-sm font-sans text-white/60 font-normal">/mo</span></p>
              <ul className="space-y-3 text-sm text-white/80 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Unlimited Locations</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Unlimited Orders</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Advanced Analytics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> Rider OTP System</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#8A9A5B]" /> 24/7 Priority Support</li>
              </ul>
              <Button render={<Link href="/login" />} nativeButton={false} className="w-full h-11 rounded-xl bg-[#8A9A5B] text-white hover:bg-[#7a8a4b]">Upgrade to Pro</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-24 bg-white border-t border-[#1A1A1A]/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-[#1A1A1A]/60">Everything you need to know about the platform.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* 14. CTA SECTION */}
      <section className="py-24 bg-[#D4E0B7] text-[#1A1A1A]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-serif text-4xl lg:text-6xl font-medium leading-tight">
            Ready to scale your <br /> business empire?
          </h2>
          <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Join thousands of vendors who have moved their offline operations to Vendox. No setup fees. Cancel anytime.
          </p>
          <div className="pt-4">
            <Button render={<Link href="/login" />} nativeButton={false} size="lg" className="h-14 rounded-full bg-[#1A1A1A] text-white hover:bg-[#333] px-10 text-lg shadow-xl">
              Get Started for Free <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 15. MASSIVE FOOTER */}
      <footer className="bg-white border-t border-[#1A1A1A]/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logooo.png" alt="Vendox" width={28} height={28} className="rounded-sm grayscale" />
              <span className="font-serif text-2xl font-bold">Vendox</span>
            </div>
            <p className="text-sm text-[#1A1A1A]/50 max-w-xs">The all-in-one hub to purchase, book, and manage every type of business.</p>
            <div className="flex gap-4 pt-4 text-sm font-semibold text-[#1A1A1A]/60">
              <Link href="#" className="hover:text-[#8A9A5B]">Twitter</Link>
              <Link href="#" className="hover:text-[#8A9A5B]">LinkedIn</Link>
              <Link href="#" className="hover:text-[#8A9A5B]">Instagram</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-[#1A1A1A]/60">
              <li><Link href="#features" className="hover:text-[#1A1A1A]">Features</Link></li>
              <li><Link href="#solutions" className="hover:text-[#1A1A1A]">Solutions</Link></li>
              <li><Link href="#pricing" className="hover:text-[#1A1A1A]">Pricing</Link></li>
              <li><Link href="#" className="hover:text-[#1A1A1A]">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#1A1A1A]/60">
              <li><Link href="/about" className="hover:text-[#1A1A1A]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#1A1A1A]">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[#1A1A1A]">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#1A1A1A]">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[#1A1A1A]/60">
              <li><Link href="#" className="hover:text-[#1A1A1A]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#1A1A1A]">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#1A1A1A]">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#1A1A1A]/40">© 2026 Vendox Inc. All rights reserved.</p>
          <div className="flex gap-4 text-[#1A1A1A]/40">
            <span className="text-sm">Made for modern operators.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}