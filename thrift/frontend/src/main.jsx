// main.jsx
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

const PUBLISHABLE_KEY = "pk_test_ZXhwZXJ0LWdvb3NlLTI4LmNsZXJrLmFjY291bnRzLmRldiQ"; // Use your actual publishable key here

console.log("Publishable Key: ", PUBLISHABLE_KEY);
if(!PUBLISHABLE_KEY){
  throw new Error("Missing publishable keys")
}
function Main() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  }), [prefersDarkMode]);

  return (
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>s
            <App />
          </BrowserRouter>
        </MUIThemeProvider>
      </ClerkProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
