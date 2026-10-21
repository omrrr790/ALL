"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, Heart, Shield, Zap, Globe, Rocket, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white font-sans">
      
      {/* 1. FLOATING NAVBAR */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex h-16 w-full max-w-5xl items-center justify-between rounded-full border border-[#1A1A1A]/10 bg-white/70 px-6 shadow-lg shadow-black/5 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logooo.png" alt="Vendox" width={28} height={28} className="rounded-md" />
            <span className="font-serif text-xl font-bold tracking-tight">Vendox</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="rounded-full hover:bg-[#1A1A1A]/5 text-sm">
              <ArrowLeft className="mr-2 size-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* 2. CINEMATIC HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Vendox Team" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-transparent opacity-20" />
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-4xl space-y-8 text-white">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-semibold">
            <Rocket className="size-4 text-[#8A9A5B]" /> Our Story
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl lg:text-7xl font-medium leading-[1.1]">
            We are building the <br /> operating system for commerce.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Vendox started with a simple idea: why should a food stall owner, a gym manager, and a hospital admin use completely different, outdated software?
          </motion.p>
        </motion.div>
      </section>

      {/* 3. MISSION STATEMENT */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Quote className="size-12 text-[#8A9A5B] mx-auto mb-8 opacity-50" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-snug text-[#1A1A1A]">
            "We believe that every business, no matter how small or large, deserves enterprise-grade tools without the enterprise-grade complexity."
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="size-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-xs">SM</div>
            <div className="text-left">
              <p className="font-semibold text-sm">Syed Meer Ali</p>
              <p className="text-xs text-[#1A1A1A]/60">Founder & CEO, Vendox</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CORE VALUES (BENTO GRID) */}
      <section className="py-24 bg-white border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">What drives us</h2>
            <p className="text-[#1A1A1A]/60">The core principles behind every line of code we write.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-[#F9F8F6] rounded-3xl p-10 border border-[#1A1A1A]/10 flex flex-col justify-center">
              <Heart className="size-10 text-[#8A9A5B] mb-6" />
              <h3 className="text-3xl font-semibold mb-4">Built for Humans</h3>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed max-w-lg">
                No confusing dashboards. No 100-page manuals. Just clean, intuitive interfaces that your staff will actually enjoy using. We design for the busy restaurant owner, not the software engineer.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#1A1A1A] text-white rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <Shield className="size-10 text-[#8A9A5B] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Secure by Default</h3>
                <p className="text-white/60 leading-relaxed">
                  Bank-grade AES-256 encryption, strict role-based access, and seamless Raast payouts. Your data and money are safe.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#D4E0B7] rounded-3xl p-10 flex flex-col justify-between">
               <div>
                <Zap className="size-10 text-[#1A1A1A] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Blazing Fast</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  Built on Next.js and modern edge tech. Zero lag, even during peak dinner rush hours.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 bg-[#F9F8F6] rounded-3xl p-10 border border-[#1A1A1A]/10 flex flex-col justify-center">
              <Globe className="size-10 text-[#8A9A5B] mb-6" />
              <h3 className="text-3xl font-semibold mb-4">Global Vision, Local Roots</h3>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed max-w-lg">
                From the bustling streets of Islamabad to the high-rises of Dubai, we want to empower local operators to compete on a global scale. We build for the future of local commerce.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. THE TIMELINE */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">How we got here</h2>
            <p className="text-[#1A1A1A]/60">From a simple idea to powering thousands of businesses.</p>
          </div>

          <div className="relative border-l-2 border-[#1A1A1A]/10 ml-4 md:ml-0 md:pl-0 space-y-12">
            {[
              { year: "2023", title: "The Spark", desc: "Syed realized his bun kabab stall needed a better POS. Existing software was too complex and too expensive." },
              { year: "2024", title: "The Prototype", desc: "Built the first version of Vendox. Tested it across 5 local stalls in G-11 Markaz. The response was overwhelming." },
              { year: "2025", title: "Expansion", desc: "Vendox expanded beyond food stalls to include gyms, clinics, and retail showrooms. Launched the Rider OTP system." },
              { year: "2026", title: "The Future", desc: "Today, Vendox powers thousands of businesses. We are now integrating AI-driven analytics and predictive inventory." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-10">
                {/* Dot */}
                <div className="absolute left-[-9px] top-1.5 size-4 rounded-full bg-[#8A9A5B] ring-4 ring-[#F9F8F6]" />
                <span className="text-sm font-bold text-[#8A9A5B]">{item.year}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed max-w-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS IMPACT */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: "5,000+", label: "Active Vendors" },
            { value: "1.2M+", label: "Orders Processed" },
            { value: "15", label: "Industries Served" },
            { value: "99.9%", label: "Uptime SLA" }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-4xl md:text-5xl font-serif font-bold text-[#8A9A5B] mb-2">{stat.value}</p>
              <p className="text-sm font-medium text-white/60 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. LEADERSHIP TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium tracking-tight mb-4">Meet the team</h2>
            <p className="text-[#1A1A1A]/60">The operators, engineers, and designers behind Vendox.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Syed Meer Ali", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop" },
              { name: "Sarah Khan", role: "Head of Product", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop" },
              { name: "Usman Ghani", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop" }
            ].map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group text-center">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-[#8A9A5B] font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PERKS / CULTURE */}
      <section className="py-24 bg-[#F9F8F6] border-t border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-4xl font-medium tracking-tight mb-6">Why work with us?</h2>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-8">
                We are a remote-first team building the infrastructure for local commerce. We move fast, ship often, and obsess over the details.
              </p>
              <ul className="space-y-4">
                {[
                  "Remote-first culture",
                  "Competitive salary & equity",
                  "Health & wellness stipend",
                  "Unlimited paid time off"
                ].map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-[#1A1A1A]/80">
                    <CheckCircle2 className="size-5 text-[#8A9A5B]" /> {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop" alt="Team Culture" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-24 bg-[#D4E0B7] text-[#1A1A1A]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight">
            Ready to join the revolution?
          </h2>
          <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Whether you are a vendor looking to scale, or a developer looking to build, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button render={<Link href="/login" />} nativeButton={false} size="lg" className="h-12 rounded-full bg-[#1A1A1A] text-white hover:bg-[#333] px-8">
              Create your account
            </Button>
            <Button render={<Link href="/contact" />} nativeButton={false} size="lg" variant="outline" className="h-12 rounded-full border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 px-8">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-white border-t border-[#1A1A1A]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/logooo.png" alt="Vendox" width={24} height={24} className="rounded-sm grayscale" />
            <span className="font-serif text-xl font-bold">Vendox</span>
          </div>
          <div className="flex gap-6 text-sm text-[#1A1A1A]/60">
            <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
            <Link href="/contact" className="hover:text-[#1A1A1A]">Contact</Link>
            <Link href="#" className="hover:text-[#1A1A1A]">Privacy Policy</Link>
          </div>
          <p className="text-sm text-[#1A1A1A]/40">© 2026 Vendox Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}