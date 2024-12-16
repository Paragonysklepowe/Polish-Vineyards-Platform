import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
  LogOut,
  Wine,
  Activity,
} from 'lucide-react';
import { useAuthStore } from '../../../store/authStore';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/admin/dashboard',
    },
    {
      label: 'Users',
      icon: Users,
      href: '/admin/users',
    },
    {
      label: 'Events',
      icon: Calendar,
      href: '/admin/events',
    },
    {
      label: 'Vineyards',
      icon: Wine,
      href: '/admin/vineyards',
    },
    {
      label: 'Analytics',
      icon: Activity,
      href: '/admin/analytics',
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/admin/settings',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar menuItems={menuItems} />
      <div className="lg:pl-72">
        <TopBar
          user={user}
          onLogout={handleLogout}
        />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};