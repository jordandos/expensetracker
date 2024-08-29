import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure react is imported

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '/Users/jordan/expensetracker',
        '/Users/jordan/expensetracker/node_modules'
      ]
    }
  }
});


