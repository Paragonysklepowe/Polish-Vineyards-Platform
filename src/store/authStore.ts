import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, LoginCredentials, Role } from '../types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  role: Role | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      role: null,
      login: async (credentials) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
          const user: User = {
            id: '1',
            email: credentials.email,
            username: 'Admin User',
            role: 'admin',
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            isActive: true,
          };
          set({
            user,
            token: 'fake-jwt-token',
            isAuthenticated: true,
            role: user.role,
          });
        } else {
          throw new Error('Invalid email or password');
        }
      },
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          role: null,
        });
      },
      updateUser: (user) => {
        set({ user });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);