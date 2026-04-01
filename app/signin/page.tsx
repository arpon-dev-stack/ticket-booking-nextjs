// app/register/page.tsx
'use client';

import { useActionState } from 'react';
import { handleForm } from '../lib/actions';
import Link from 'next/link';
import Password from './components/Password';

export default function RegisterForm() {
  // initialState is the second argument (null)
  const [state, formAction, isPending] = useActionState(handleForm, null);
  console.log(state);

  return (
    <section className='flex h-screen w-full justify-center items-center'>
      <div className='shadow-md text-gray-800 min-w-[320px] p-3'>
        <h2 className='text-2xl font-bold mb-6'>Create Account</h2>

        <form action={formAction} className='flex flex-col gap-4'>
          {/* Username Field */}
          <div>
            <label className='block text-sm font-medium'>Email</label>
            <input
              name='email'
              className='w-full p-2 border rounded mt-1 outline-blue-500'
              placeholder='John Doe'
            />
            {state?.errors?.email && (
              <p className='text-red-500 text-xs mt-1'>{state.errors.email}</p>
            )}
          </div>

          {/* Email Field */}

          {/* Status Messages */}
          {state?.success && (
            <p className='p-2 bg-green-100 text-green-700 rounded text-sm'>
              {state.message}
            </p>
          )}
          <Password state={state} />

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isPending}
            className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors'
          >
            {isPending ? 'Processing...' : 'Register'}
          </button>
        </form>
        <div className='mt-5 flex flex-col gap-3'>
          <h2 className='font-medium'>Or Register Account</h2>
          <Link
            href='/signup'
            className='bg-white text-black p-2 rounded hover:text-blue-600 disabled:bg-gray-400 transition-colors border text-center'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
