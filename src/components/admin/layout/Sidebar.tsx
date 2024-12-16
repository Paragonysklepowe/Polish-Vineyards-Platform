import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface MenuItem {
  label: string;
  icon: LucideIcon;
  href: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#722F37] px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <Wine className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">Admin Panel</span>
          </Link>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className={cn(
                          location.pathname === item.href
                            ? 'bg-[#8B4513] text-white'
                            : 'text-white hover:bg-[#8B4513]/50',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}
                      >
                        <Icon className="h-6 w-6 shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};