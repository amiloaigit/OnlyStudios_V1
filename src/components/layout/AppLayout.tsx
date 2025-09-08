"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen w-full bg-background">
      {isMobile ? <MobileNav /> : <DesktopNav />}
      <main className="flex-1 md:pl-64">
        <div className="h-full pb-20 md:pb-0">
          {children}
        </div>
      </main>
    </div>
  );
}
