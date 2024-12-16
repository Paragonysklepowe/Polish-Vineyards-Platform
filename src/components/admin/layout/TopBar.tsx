import React from 'react';
import { LogOut, User } from 'lucide-react';
import type { User as UserType } from '../../../types/auth';

interface TopBarProps {
  user: UserType | null;
  onLogout: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ user, onLogout }) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1"></div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm font-medium text-gray-900">{user?.username}</p>
              <p className="text-xs text-gray-500">{user?.role}</p>
            </div>
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-x-2 rounded-md bg-[#722F37] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8B4513] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#722F37]"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};