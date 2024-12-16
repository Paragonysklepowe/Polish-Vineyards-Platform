export type Role = 'admin' | 'moderator' | 'user';

export interface User {
  id: string;
  email: string;
  username: string;
  role: Role;
  createdAt: string;
  lastLogin: string;
  isActive: boolean;
}

export interface Admin extends User {
  role: 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordReset {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: string;
}