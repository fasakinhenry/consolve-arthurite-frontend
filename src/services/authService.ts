export type Role = 'rider' | 'driver' | 'investor' | 'government';

export interface User {
  name: string;
  email: string;
  role: Role;
  organisation?: string;
}

const TOKEN_KEY = 'urbanpulse_auth_token';
const USER_KEY = 'urbanpulse_auth_user';

export const authService = {
  /**
   * Simulated email/password login
   */
  async login(email: string, role: Role): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const user: User = {
      name: email.split('@')[0],
      email,
      role
    };

    localStorage.setItem(TOKEN_KEY, 'simulated-jwt-token-xyz');
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  },

  /**
   * Simulated registration
   */
  async register(name: string, email: string, role: Role, organisation?: string): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const user: User = {
      name,
      email,
      role,
      organisation
    };

    localStorage.setItem(TOKEN_KEY, 'simulated-jwt-token-xyz');
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  },

  /**
   * Simulated Google OAuth integration
   */
  async loginWithGoogle(role: Role): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const user: User = {
      name: 'Google User',
      email: 'google.user@urbanpulse.ai',
      role
    };

    localStorage.setItem(TOKEN_KEY, 'simulated-google-token-xyz');
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  },

  /**
   * Logout user and clear session caches
   */
  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  /**
   * Get currently logged-in user profile
   */
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }
};
