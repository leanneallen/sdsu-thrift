// main.jsx
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from './components/ThemeContext.jsx';
const PUBLISHABLE_KEY = "pk_test_ZXhwZXJ0LWdvb3NlLTI4LmNsZXJrLmFjY291bnRzLmRldiQ"; // Use your actual publishable key here

console.log("Publishable Key: ", PUBLISHABLE_KEY);
if(!PUBLISHABLE_KEY){
  throw new Error("Missing publishable keys")
}
function Main() {

  return (
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </ClerkProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
