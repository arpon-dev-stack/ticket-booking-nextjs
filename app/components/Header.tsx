'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { visitorLinks, userLinks, NavLink } from '../lib/navData';
import { useAuthStore } from '@/store/useAuth';

const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const currentLinks: NavLink[] = isAuthenticated ? userLinks : visitorLinks;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className='bg-blue-600 text-white relative'>
      <div className='max-w-7xl mx-auto px-4 h-16 flex justify-between items-center'>
        <div className='font-bold text-xl'>Book Ticket </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-6'>
          {currentLinks.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.path}
              className={`hover:text-blue-400 h-10 px-2 hover:outline hover:outline-white flex items-center justify-center transition-colors ${link.name === 'Sign In' && 'border bg-gray-600 border-white'} ${link.name === 'Sign Up' && 'border-white border'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle Menu'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay to dim the background */}
      <div
        className={`fixed bg-black/50 z-40 md:hidden transition-all duration-1000`}
      />

      <div
        ref={menuRef}
        className={`md:hidden absolute ${isMobileMenuOpen ? 'top-16' : 'bottom-full'} w-full bg-gray-800 z-50 shadow-2xl`}
      >
        <div className='px-4 py-6 space-y-4'>
          {currentLinks.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.path}
              className='block text-lg border-b border-gray-700 pb-2 hover:text-blue-400'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className='pt-4 flex flex-col gap-3'>
            {isAuthenticated ? (
              <button
                className='bg-red-600 hover:bg-red-700 p-3 rounded font-medium transition'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Out
              </button>
            ) : (
              <>
                <a
                  href='/login'
                  className='text-center p-3 bg-gray-700 hover:bg-gray-600 rounded font-medium transition'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                <a
                  href='/register'
                  className='text-center p-3 bg-blue-600 hover:bg-blue-700 rounded font-medium transition'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
