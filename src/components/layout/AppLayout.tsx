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

  // This prevents a hydration mismatch by ensuring that the server and client render the same initial layout.
  // The client will then re-render with the correct layout after mounting.
  if (!mounted) {
    return (
        <div className="flex min-h-screen w-full bg-background">
            <DesktopNav />
             <main className="flex-1 md:pl-64">
                <div className="h-full pb-20 md:pb-0">
                {children}
                </div>
            </main>
        </div>
    );
  }

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
