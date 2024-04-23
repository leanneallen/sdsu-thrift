import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // This contains Clerk-dependent components
import { ClerkProvider } from '@clerk/clerk-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
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
      <BrowserRouter>
        <ClerkProvider frontendApi={PUBLISHABLE_KEY}> 
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ClerkProvider>

import { ThemeProvider } from './components/ThemeContext.jsx';


function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>  // Use your custom ThemeProvider
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

// Create the root element and render the Main component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);