'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { TeamUser } from '@/lib/db/types';
import { logoutAction } from '@/lib/team/actions';
import { team } from '@/i18n/team';

export function TeamHeader({ user }: { user: TeamUser }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    await logoutAction();
    router.push('/team');
  }

  return (
    <header className="bg-card border-b border-border sticky top-0 z-10">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/team/dashboard" className="font-heading font-bold text-lg text-foreground">
          Foris Team
        </Link>
        
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span>{user.name}</span>
            <svg
              className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          
          {menuOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setMenuOpen(false)}
              />
              
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-20">
                <Link
                  href="/team/dashboard"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                
                <Link
                  href="/team/hours"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
                  onClick={() => setMenuOpen(false)}
                >
                  {team.dashboard.myHours}
                </Link>
                
                {user.role === 'admin' && (
                  <>
                    <div className="border-t border-border my-1" />
                    
                    <Link
                      href="/team/admin"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {team.dashboard.manageTeam}
                    </Link>
                  </>
                )}
                
                <div className="border-t border-border my-1" />
                
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-secondary"
                >
                  {team.dashboard.logout}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
