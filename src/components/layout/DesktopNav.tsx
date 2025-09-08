'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clapperboard, Home, Search, User, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/discover', icon: Compass, label: 'Discover' },
  { href: '/reels', icon: Clapperboard, label: 'Reels' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-10 hidden h-screen w-64 flex-col border-r bg-card md:flex">
      <div className="flex h-20 items-center justify-center border-b px-6">
        <Link href="/" className="flex items-center gap-2">
          <Clapperboard className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">StudioVerse</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground transition-all hover:text-primary hover:bg-secondary',
                isActive && 'bg-secondary font-semibold text-primary'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto p-4">
        {/* Potentially user profile quick view or settings */}
      </div>
    </aside>
  );
}
