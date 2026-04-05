// navData.ts
export interface NavLink {
  name: string;
  path: string;
}

export const visitorLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Sign In', path: '/signin' },
  { name: 'Sign Up', path: '/signup' },
];

export const userLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'My Bookings', path: '/bookings' },
  { name: 'profile', path: '/profile' },
];

export const adminLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
];
