
"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const noNavRoutes = ["/login", "/admin/login"];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (noNavRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  const renderNav = () => {
    // On the server or during initial client render, we don't render the mobile nav
    // to prevent a hydration mismatch.
    if (!mounted) {
      return <DesktopNav />;
    }
    return isMobile ? <MobileNav /> : <DesktopNav />;
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      {renderNav()}
      <main className="flex-1 md:pl-64">
        <div className="h-full pb-20 md:pb-0">
          {children}
        </div>
      </main>
    </div>
  );
}
