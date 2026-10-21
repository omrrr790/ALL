"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // <-- Import Next Image
import { cn } from "@/lib/utils";
import { BUSINESS_CONFIGS, ACTIVE_VENDOR } from "@/lib/business-config";
import { ChevronDown } from "lucide-react";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const config = BUSINESS_CONFIGS[ACTIVE_VENDOR.category];
  const groups = ["main", "operations", "management"] as const;

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="flex h-full w-[260px] shrink-0 flex-col border-r border-border bg-sidebar">
      {/* Brand Header */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-4">
        
        {/* LOGO IMAGE */}
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg overflow-hidden bg-white p-0.5 shadow-sm">
          <Image 
            src="/logooo.png" 
            alt="Vendox Logo" 
            width={36} 
            height={36} 
            className="object-contain"
          />
        </div>
        
        <div className="flex flex-col">
          <h1 className="text-[14px] font-bold leading-tight tracking-tight text-foreground">
            Vendox
          </h1>
          <p className="text-[11px] font-medium text-muted-foreground truncate max-w-[150px]">
            {config.label}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
        {groups.map((g) => {
          const items = config.modules.filter(
            (m) => m.group === g && (!m.ownerOnly || ACTIVE_VENDOR.role === "owner")
          );
          if (!items.length) return null;
          
          return (
            <div key={g}>
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                {g}
              </p>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const active = isActive(item.href);
                  const Icon = item.icon;
                  
                  return (
                    <Link key={item.id} href={item.href} onClick={onNavigate}>
                      <div
                        className={cn(
                          "group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium transition-colors",
                          active
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                        )}
                      >
                        <Icon className={cn("size-4", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.badge ? (
                          <span className="flex h-5 min-w-5 items-center justify-center rounded-md bg-primary/10 px-1.5 text-[10px] font-bold text-primary">
                            {item.badge}
                          </span>
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Bottom Profile / Store Selector */}
      <div className="border-t border-border p-3">
        <button className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-secondary/50">
          <div className="flex size-8 items-center justify-center rounded-full bg-secondary text-xs font-bold">
            SM
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <p className="truncate text-[13px] font-semibold">{ACTIVE_VENDOR.name}</p>
            <p className="truncate text-[11px] text-muted-foreground">Owner Account</p>
          </div>
          <ChevronDown className="size-4 text-muted-foreground" />
        </button>
      </div>
    </aside>
  );
}