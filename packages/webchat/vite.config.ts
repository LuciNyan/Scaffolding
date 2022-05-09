import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import type { UserConfig, UserConfigFn } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import tsconfigPaths from 'vite-tsconfig-paths'

const defineConfig: UserConfigFn = () => {
  const config: UserConfig = {
    server: {
      https: true,
      port: 2671,
      host: '127.0.0.1'
    },
    plugins: [
      react(),
      tsconfigPaths(),
      legacy(),
      mkcert({
        source: 'coding'
      })
    ],
    build: {
      rollupOptions: {
        output: {
          format: 'umd',
          name: 'webchat'
        }
      }
    }
  }
  return config
}

export default defineConfig
