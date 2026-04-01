// app/actions.ts
'use server';

import { z } from 'zod';

// 1. Define validation schema
const schema = z.object({
  username: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.email('Invalid email address'),
});

export async function handleForm(prevState: unknown, formData: FormData) {
  // Simulate a database delay
  await new Promise((res) => setTimeout(res, 1000));

  // 2. Extract and Validate
  const validatedFields = schema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
  });

  // 3. Return errors if validation fails
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 4. Logic (Database insert, etc.)
  console.log('Saving to DB:', validatedFields.data);

  return {
    ...validatedFields,
    message: 'User registered successful',
  };
}
