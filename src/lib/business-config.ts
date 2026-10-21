// src/lib/business-config.ts
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard, Receipt, Bike, UtensilsCrossed, ChefHat, Users,
  Wallet, Star, BarChart3, Settings,
} from "lucide-react";

export type BusinessCategory = "food-stall" | "kiryana";

export interface NavModule {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  group: "main" | "operations" | "management";
  ownerOnly?: boolean;
}

export interface BusinessConfig {
  category: BusinessCategory;
  label: string;
  tagline: string;
  accent: "emerald" | "blue" | "amber" | "purple";
  modules: NavModule[];
}

const shared: NavModule[] = [
  { id: "customers", label: "Customers", href: "/customers", icon: Users, group: "management" },
  { id: "finance", label: "Finance", href: "/finance", icon: Wallet, group: "management", ownerOnly: true },
  { id: "reviews", label: "Reviews", href: "/reviews", icon: Star, group: "management" },
  { id: "reports", label: "Reports", href: "/reports", icon: BarChart3, group: "management", ownerOnly: true },
  { id: "settings", label: "Settings", href: "/settings", icon: Settings, group: "management" },
];

export const BUSINESS_CONFIGS: Record<BusinessCategory, BusinessConfig> = {
  "food-stall": {
    category: "food-stall",
    label: "Food Stalls & Hawkers",
    tagline: "Live orders, kitchen prep & rider dispatch",
    accent: "emerald",
    modules: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, group: "main" },
      { id: "orders", label: "Orders", href: "/orders", icon: Receipt, group: "main" },
      { id: "live", label: "Live Orders", href: "/orders/live", icon: Bike, badge: 1, group: "operations" },
      { id: "menu", label: "Menu & Stock", href: "/menu", icon: UtensilsCrossed, group: "operations" },
      { id: "kitchen", label: "Kitchen Prep", href: "/kitchen", icon: ChefHat, group: "operations" },
      { id: "delivery", label: "Delivery / OTP", href: "/delivery", icon: Bike, group: "operations" },
      ...shared,
    ],
  },
  "kiryana": {
    category: "kiryana",
    label: "Kiryana & Daily Essentials",
    tagline: "Grocery, inventory & delivery",
    accent: "blue",
    modules: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, group: "main" },
      { id: "orders", label: "Orders", href: "/orders", icon: Receipt, group: "main" },
      ...shared,
    ],
  },
};

export const ACTIVE_VENDOR = {
  businessId: "stall-g11-001",
  name: "G-11 Markaz Bun Kabab",
  category: "food-stall" as BusinessCategory,
  role: "owner" as "owner" | "manager" | "staff",
};