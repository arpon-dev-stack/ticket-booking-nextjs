'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/useAuth';
import { useState } from 'react';

const Header = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <header className='flex justify-between px-5 h-16.25 items-center bg-primary relative'>
      <Link href='/' className='text-secondary font-bold text-xl'>
        <svg fill='#000000' width='32px' height='32px' viewBox='0 0 50 50'>
          <path d='M12 0C5.4375 0 3 2.167969 3 8L3 41C3 42.359375 3.398438 43.339844 4 44.0625L4 47C4 48.652344 5.347656 50 7 50L11 50C12.652344 50 14 48.652344 14 47L14 46L36 46L36 47C36 48.652344 37.347656 50 39 50L43 50C44.652344 50 46 48.652344 46 47L46 44.0625C46.601563 43.339844 47 42.359375 47 41L47 9C47 4.644531 46.460938 0 40 0 Z M 15 4L36 4C36.554688 4 37 4.449219 37 5L37 7C37 7.550781 36.554688 8 36 8L15 8C14.449219 8 14 7.550781 14 7L14 5C14 4.449219 14.449219 4 15 4 Z M 11 11L39 11C41 11 42 12 42 14L42 26C42 28 40.046875 28.9375 39 28.9375L11 29C9 29 8 28 8 26L8 14C8 12 9 11 11 11 Z M 2 12C0.898438 12 0 12.898438 0 14L0 22C0 23.101563 0.898438 24 2 24 Z M 48 12L48 24C49.105469 24 50 23.101563 50 22L50 14C50 12.898438 49.105469 12 48 12 Z M 11.5 34C13.433594 34 15 35.566406 15 37.5C15 39.433594 13.433594 41 11.5 41C9.566406 41 8 39.433594 8 37.5C8 35.566406 9.566406 34 11.5 34 Z M 38.5 34C40.433594 34 42 35.566406 42 37.5C42 39.433594 40.433594 41 38.5 41C36.566406 41 35 39.433594 35 37.5C35 35.566406 36.566406 34 38.5 34Z' />
        </svg>
      </Link>
      {isAuthenticated ? (
        <>
          {mobMenuOpen ? (
            <svg
              width='35'
              height='35'
              viewBox='0 0 512 512'
              version='1.1'
              className='block sm:hidden'
              onClick={() => setMobMenuOpen(false)}
            >
              <g
                id='Page-1'
                stroke='none'
                stroke-width='1'
                fill='none'
                fill-rule='evenodd'
              >
                <g
                  id='work-case'
                  fill='#000000'
                  transform='translate(91.520000, 91.520000)'
                >
                  <polygon
                    id='Close'
                    points='328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48'
                  ></polygon>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              x='0px'
              y='0px'
              width='35'
              height='35'
              viewBox='0 0 50 50'
              className='block sm:hidden'
              onClick={() => setMobMenuOpen(true)}
            >
              <path d='M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z'></path>
            </svg>
          )}
          <nav className='sm:flex hidden gap-10 items-center'>
            <Link
              href='/findbus'
              className='h-10 border border-secondary bg-secondary text-primary px-3 flex justify-center items-center rounded-full'
            >
              Find Bus
            </Link>
            <Link href='/profile'>
              <svg width='40px' height='40px' viewBox='0 0 24 24' fill='none'>
                <path
                  opacity='0.4'
                  d='M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z'
                  fill='#292D32'
                />
                <path
                  d='M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z'
                  fill='#292D32'
                />
                <path
                  d='M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z'
                  fill='#292D32'
                />
              </svg>
            </Link>
          </nav>
        </>
      ) : (
        <>
          {mobMenuOpen ? (
            <svg
              width='35'
              height='35'
              viewBox='0 0 512 512'
              version='1.1'
              className='block sm:hidden'
              onClick={() => setMobMenuOpen(false)}
            >
              <g
                id='Page-1'
                stroke='none'
                stroke-width='1'
                fill='none'
                fill-rule='evenodd'
              >
                <g
                  id='work-case'
                  fill='#000000'
                  transform='translate(91.520000, 91.520000)'
                >
                  <polygon
                    id='Close'
                    points='328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48'
                  ></polygon>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              x='0px'
              y='0px'
              width='35'
              height='35'
              viewBox='0 0 50 50'
              className='block sm:hidden'
              onClick={() => setMobMenuOpen(true)}
            >
              <path d='M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z'></path>
            </svg>
          )}

          <div className='hidden sm:flex gap-3'>
            <Link
              href='./signin'
              className='h-10 border border-secondary bg-secondary text-primary px-3 flex justify-center items-center rounded-full'
            >
              Sign In
            </Link>
            <Link
              href='./signup'
              className='h-10 border text-secondary px-3 flex justify-center items-center rounded-full'
            >
              Sign Up
            </Link>
          </div>
        </>
      )}
      {mobMenuOpen && (
        <div className='absolute top-full left-0 sm:hidden flex flex-col w-full bg-amber-400'>
          {/* {isAuthenticated ? null : ( */}
          <div className='hidden sm:flex gap-3 bg-amber-400'>
            <Link
              href='./signin'
              className='h-10 border border-secondary bg-secondary text-primary px-3 flex justify-center items-center rounded-full'
            >
              Sign In
            </Link>
            <Link
              href='./signup'
              className='h-10 border text-secondary px-3 flex justify-center items-center rounded-full'
            >
              Sign Up
            </Link>
          </div>
          {/* )} */}
        </div>
      )}
    </header>
  );
};

export default Header;
