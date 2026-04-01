'use client';

import React from 'react';
import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

const Password = ({ state }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=''>
      <label className='block text-sm font-medium'>Passwword</label>
      <div className='relative mt-1'>
        <input
          name='password'
          type={`${showPassword ? 'text' : 'password'}`}
          className='w-full p-2 border rounded outline-blue-500'
          placeholder='john@example.com'
        />
        <button
          className='absolute top-1/2 -translate-y-1/2 right-2'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Eye className='h-5' />
          ) : (
            <EyeClosed className='h-5' />
          )}
        </button>
      </div>
      {state?.errors?.email && (
        <p className='text-red-500 text-xs mt-1'>{state.errors.email}</p>
      )}
    </div>
  );
};

export default Password;
