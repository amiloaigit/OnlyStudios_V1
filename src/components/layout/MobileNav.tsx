'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clapperboard, Home, User, Compass, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/discover', icon: Compass, label: 'Discover' },
  { href: '/reels', icon: Clapperboard, label: 'Reels' },
  { href: '/profile', icon: User, label: 'Profile' },
  { href: '/signup', icon: UserPlus, label: 'Sign Up' },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 z-10 w-full border-t bg-card/95 backdrop-blur-sm md:hidden">
      <div className="grid h-16 grid-cols-5 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 text-muted-foreground',
                isActive && 'text-primary'
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
