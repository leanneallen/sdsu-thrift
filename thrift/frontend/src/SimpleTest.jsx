import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

const SimpleTest = () => {
  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  console.log('Publishable Key:', publishableKey);

  return (
    <ClerkProvider frontendApi={publishableKey}>
      <div>The ClerkProvider is now initialized.</div>
    </ClerkProvider>
  );
};

export default SimpleTest;
