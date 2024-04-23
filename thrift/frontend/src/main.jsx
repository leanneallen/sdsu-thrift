import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // This contains Clerk-dependent components
import { ClerkProvider, useClerk } from '@clerk/clerk-react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

// Assuming you have this environment variable set correctly
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

console.log("Publishable Key: ", PUBLISHABLE_KEY);

function Main() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  }), [prefersDarkMode]);

  return (
    <React.StrictMode>
      <ClerkProvider frontendApi={PUBLISHABLE_KEY}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MUIThemeProvider>
      </ClerkProvider>
    </React.StrictMode>
  );
}

// Create the root element and render the Main component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
