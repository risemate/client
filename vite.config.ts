import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true,
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req, _res) => {
            //   console.log('Sending Request to the Target:', req.method, req.url);
            });
            proxy.on('proxyRes', (proxyRes, req, _res) => {
            //   console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            });
          }
        }
      }
    },
    resolve: {
      alias: {
        '@page': path.resolve(__dirname, './src/pages'),
        '@common': path.resolve(__dirname, './src/components/common'),
        '@components': path.resolve(__dirname, './src/components'),
        '@icons': path.resolve(__dirname, './src/assets/icons'),
        '@styles': path.resolve(__dirname, './src/assets/styles'),
        '@images': path.resolve(__dirname, './src/assets/images'),
        '@data': path.resolve(__dirname, './src/assets/data'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@queries': path.resolve(__dirname, './src/services/queries'),
        '@api': path.resolve(__dirname, './src/services/api'),
        '#services': path.resolve(__dirname, './src/services')
      }
    },
    define: {
      global: {},
      'process.env': process.env
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'
        }
      }
    },
    build: {
      outDir: 'build',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['aws-sdk']
          }
        }
      }
    }
  };
});