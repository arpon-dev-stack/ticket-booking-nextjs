'use client';

import { useAuthStore } from '@/store/useAuth';
import { visitorLinks, userLinks, NavLink } from '../lib/navData';
import Link from 'next/link';
import { followUs } from '../lib/imageDir';
import Image from 'next/image';

const Footer = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const currentLinks: NavLink[] = isAuthenticated ? userLinks : visitorLinks;

  return (
    <footer className='flex flex-col py-10 px-3 sm:px-10 sm:py-20 bg-gray-600 gap-5 text-white'>
      <span className='text-3xl font-semibold'>Book Ticket</span>
      <hr className='border-white/30' />

      <div className='grid w-full grid-cols-1 sm:grid-cols-3 gap-10 grid-flow-row'>
        {/* Column 1: Links */}
        <div className='flex flex-col items-center'>
          <span className='font-bold mb-2'>Useful Links</span>
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

        {/* Column 2: Contacts */}
        <div className='flex flex-col items-center'>
          <span className='font-bold mb-2'>Contacts</span>
          <div className='space-y-3'>
            <span className='flex gap-3 items-center'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='stroke-white'
              >
                <path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' />
                <rect x='2' y='4' width='20' height='16' rx='2' />
              </svg>
              arpon.front@gmail.com
            </span>

            <span className='flex gap-3 items-center'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='stroke-white'
              >
                <path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' />
              </svg>
              +880-17016-34403
            </span>

            <span className='flex gap-3 items-center'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='stroke-white'
              >
                <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
                <circle cx='12' cy='10' r='3' />
              </svg>
              Kushtia, Mirpur
            </span>
          </div>
        </div>

        {/* Column 3: Follow Us (Responsive Centering) */}
        <div className='flex flex-col items-center'>
          <span className='font-bold mb-2'>Follow Us</span>
          <div className='grid grid-cols-4'>
            {followUs.map((follow) => (
              <Link
                key={follow.name}
                href={follow.path}
                className='hover:opacity-80 transition-opacity'
              >
                <Image
                  src={follow.src}
                  alt={follow.alt}
                  width={52}
                  height={52}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <span className='self-center mt-10 text-sm text-gray-300'>
        © {new Date().getFullYear()} All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
