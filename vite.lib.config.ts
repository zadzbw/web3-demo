import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const isDev = env.mode === 'dev'

  return {
    build: {
      ...(isDev ? { minify: false, watch: { buildDelay: 0 } } : {}),
      lib: {
        entry: path.resolve(__dirname, 'src/eth/EthereumProvider.ts'),
        name: 'EthereumProvider',
        // the proper extensions will be added
        fileName: 'eth-provider',
        formats: ['iife'],
      },
    },
    define: {
      __DEV__: isDev,
      __TEST__: false,
      'process.env.NODE_ENV': '"production"',
    },
  }
})
