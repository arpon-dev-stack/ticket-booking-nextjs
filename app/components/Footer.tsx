'use client';

import { useAuthStore } from '@/store/useAuth';
import { visitorLinks, userLinks, NavLink } from '../lib/navData';
import Link from 'next/link';

const Footer = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const currentLinks: NavLink[] = isAuthenticated ? userLinks : visitorLinks;

  return (
    <footer className='flex flex-col  py-10 px-3 sm:px-10 sm:py-20 bg-gray-600 gap-5'>
      <span className='text-3xl font-semibold text-white'>Book Ticket</span>
      <hr className='text-white' />
      <div className='flex w-full justify-evenly'>
        <div className='flex flex-col items-center'>
          <span>Useful Links</span>
          {currentLinks.map((link: NavLink) => (
            <Link
              key={link.name}
              href={link.path}
              className='hover:text-blue-400 transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className='flex flex-col items-center'>
          <span>Contacts</span>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='stroke-white'
          >
            <path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' />
            <rect x='2' y='4' width='20' height='16' rx='2' />
          </svg>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='stroke-white'
          >
            <path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='stroke-white'
          >
            <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
            <circle cx='12' cy='10' r='3' />
          </svg>
        </div>
        <div className='flex flex-col items-center'>
          <span>Follow Us</span>
        </div>
      </div>
      <span className='self-center'>All Right Reserved</span>
    </footer>
  );
};

export default Footer;
