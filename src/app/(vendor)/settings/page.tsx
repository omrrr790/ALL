"use client";
import { PageHeader } from "@/components/shared/page-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in duration-500">
      <PageHeader 
        title="Store Settings" 
        subtitle="Manage your public stall profile and account details."
      />

      <div className="space-y-6">
        {/* Profile Card */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-md">
          <h3 className="text-base font-semibold text-white mb-4">Stall Profile</h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-2">
              <Label className="text-muted-foreground">Stall Name</Label>
              <Input defaultValue="G-11 Markaz Bun Kabab & Fries" className="border-white/10 bg-black/20 focus-visible:ring-primary" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-muted-foreground">Contact Phone</Label>
                <Input defaultValue="0300-1234567" className="border-white/10 bg-black/20" />
              </div>
              <div className="grid gap-2">
                <Label className="text-muted-foreground">CNIC Number</Label>
                <Input defaultValue="61101-1234567-1" disabled className="border-white/10 bg-white/5 text-muted-foreground" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-muted-foreground">Stall Address</Label>
              <Input defaultValue="Stall #12, Food Street near Bank Road, G-11 Markaz, Islamabad" className="border-white/10 bg-black/20" />
            </div>

            <div className="pt-4 flex justify-end">
              <Button className="bg-primary text-primary-foreground font-semibold">Save Changes</Button>
            </div>
          </form>
        </div>

        {/* Danger Zone */}
        <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.02] p-6 shadow-xl backdrop-blur-md">
          <h3 className="text-base font-semibold text-rose-500 mb-2">Danger Zone</h3>
          <p className="text-sm text-muted-foreground mb-4">Once you delete your stall, there is no going back. Please be certain.</p>
          <Button variant="destructive" className="bg-rose-500 hover:bg-rose-600 text-white">Delete Stall Account</Button>
        </div>
      </div>
    </div>
  );
}