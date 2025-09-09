
"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { useEffect, useState } from "react";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-background">
      {mounted ? (isMobile ? <MobileNav /> : <DesktopNav />) : <DesktopNav />}
      <main className="flex-1 md:pl-64">
        <div className="h-full pb-20 md:pb-0">
          {children}
        </div>
      </main>
    </div>
  );
}
