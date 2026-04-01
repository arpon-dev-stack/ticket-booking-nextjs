// app/register/page.tsx
'use client';

import { useActionState } from 'react';
import { handleForm } from '../lib/actions';

export default function RegisterForm() {
  // initialState is the second argument (null)
  const [state, formAction, isPending] = useActionState(handleForm, null);
  console.log(state);

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-gray-800'>
      <h2 className='text-2xl font-bold mb-6'>Create Account</h2>

      <form action={formAction} className='flex flex-col gap-4'>
        {/* Username Field */}
        <div>
          <label className='block text-sm font-medium'>Username</label>
          <input
            name='username'
            className='w-full p-2 border rounded mt-1 outline-blue-500'
            placeholder='John Doe'
          />
          {state?.errors?.username && (
            <p className='text-red-500 text-xs mt-1'>{state.errors.username}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className='block text-sm font-medium'>Email</label>
          <input
            name='email'
            type='email'
            className='w-full p-2 border rounded mt-1 outline-blue-500'
            placeholder='john@example.com'
          />
          {state?.errors?.email && (
            <p className='text-red-500 text-xs mt-1'>{state.errors.email}</p>
          )}
        </div>

        {/* Status Messages */}
        {state?.success && (
          <p className='p-2 bg-green-100 text-green-700 rounded text-sm'>
            {state.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isPending}
          className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors'
        >
          {isPending ? 'Processing...' : 'Register'}
        </button>
      </form>
    </div>
  );
}
