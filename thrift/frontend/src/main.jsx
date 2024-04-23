import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);