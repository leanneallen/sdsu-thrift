import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export default function RootLayout() {
    // Ensure the environment variable is loaded correctly.
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
    
    // Error handling for missing publishable key
    if (!PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key");
    }

    const navigate = useNavigate();

    const handleNavigation = (to: string) => {
        navigate(to);
    };

    // Return a single JSX structure.
    return (
        <ClerkProvider navigate={handleNavigation} publishableKey={PUBLISHABLE_KEY}>
            <header className="header">
                <div>
                    <div>
                        <p>Clerk + React + React Router App</p>
                    </div>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/sign-in' />
                    </SignedIn>
                    <SignedOut>
                        <Link to="/sign-in">Sign In</Link>
                    </SignedOut>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </ClerkProvider>
    );
}
