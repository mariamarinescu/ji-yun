import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    define: {
      'process.env': env,
    },
    server: {
      port: 3000,
    },
    plugins: [react(), EnvironmentPlugin('all', { prefix: 'VITE_' })],
    resolve: {
      alias: {
        components: path.resolve(__dirname, './src/components'),
        modules: path.resolve(__dirname, './src/modules'),
        src: path.resolve(__dirname, './src'),
      },
    },
  };
});
