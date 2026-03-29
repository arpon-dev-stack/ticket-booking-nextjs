// navData.ts
export interface NavLink {
  name: string;
  path: string;
}

export const visitorLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
];

export const userLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'My Bookings', path: '/bookings' },
  { name: 'Settings', path: '/settings' },
];
