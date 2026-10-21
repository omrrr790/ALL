"use client";
import { Search, Bell, Moon, Sun, Menu, LogOut, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleLogout } from "@/lib/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup, // <-- Import this
} from "@/components/ui/dropdown-menu";

export function Navbar({ onOpenMobile }: { onOpenMobile: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden -ml-2" onClick={onOpenMobile}>
          <Menu className="size-4" />
        </Button>
        
        <div className="hidden items-center gap-2 text-sm font-medium text-muted-foreground md:flex">
          <span>Dashboard</span>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground">Overview</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden w-64 md:block">
          <Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="h-8 border-border bg-muted/50 pl-9 text-[13px] focus-visible:bg-white"
          />
        </div>

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>

        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background" />
        </Button>

        {/* Profile Dropdown with Logout */}
        <DropdownMenu>
          <DropdownMenuTrigger render={
            <Button variant="ghost" className="relative size-9 rounded-full p-0 bg-muted border border-border">
              <User className="size-4 text-muted-foreground" />
            </Button>
          }>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {/* MUST wrap Label in Group */}
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem 
              onClick={handleLogout} 
              className="text-rose-500 cursor-pointer focus:text-rose-600 focus:bg-rose-50"
            >
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}