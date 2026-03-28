import { create } from 'zustand';

interface UserState {
  name: string | null;
  id: string | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (name: string, id: string, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<UserState>((set) => ({
  name: null,
  id: null,
  token: null,
  isAuthenticated: false,
  setAuth: (name, id, token) => set({ name, id, token, isAuthenticated: true }),
  logout: () =>
    set({ name: null, id: null, token: null, isAuthenticated: false }),
}));
