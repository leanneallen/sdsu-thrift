import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load environment variables based on the current mode
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  
  return defineConfig({
    plugins: [
      react({
        jsxRuntime: 'classic'
      }),
    ],
    define: {
      'import.meta.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(process.env.VITE_CLERK_PUBLISHABLE_KEY),
    }
  });
};
