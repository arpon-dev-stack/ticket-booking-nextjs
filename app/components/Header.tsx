'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { visitorLinks, userLinks } from '../lib/navData';
import { useAuthStore } from '@/store/useAuth';

const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Create a reference for the mobile menu container
  const menuRef = useRef(null);

  const currentLinks = isAuthenticated ? userLinks : visitorLinks;

  // 2. The logic to detect outside clicks
  useEffect(() => {
    const handleClickOutside = (event: React.PointerEvent) => {
      // If the menu is open AND the clicked element is NOT inside the menuRef
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Attach the event listener to the entire document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup: Remove the listener when the component unmounts or menu closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Only re-run if the menu state changes

  return (
    <header className='bg-gray-900 text-white relative'>
      <div className='max-w-7xl mx-auto px-4 h-16 flex justify-between items-center'>
        <div className='font-bold text-xl'>NexusApp</div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-6'>
          {currentLinks.map((link) => (
            <a key={link.name} href={link.path} className='hover:text-blue-400'>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU with Ref */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef} // 3. Attach the Ref here
          className='md:hidden absolute top-16 left-0 w-full bg-gray-800 z-50 shadow-2xl transition-all'
        >
          <div className='px-4 py-6 space-y-4'>
            {currentLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className='block text-lg border-b border-gray-700 pb-2'
              >
                {link.name}
              </a>
            ))}

            <div className='pt-4 flex flex-col gap-3'>
              {isAuthenticated ? (
                <button className='bg-red-600 p-3 rounded'>Sign Out</button>
              ) : (
                <>
                  <a
                    href='/login'
                    className='text-center p-3 bg-gray-700 rounded'
                  >
                    Sign In
                  </a>
                  <a
                    href='/register'
                    className='text-center p-3 bg-blue-600 rounded'
                  >
                    Register
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
