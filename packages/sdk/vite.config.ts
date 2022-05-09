import legacy from '@vitejs/plugin-legacy'
import type { UserConfig, UserConfigFn } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import tsconfigPaths from 'vite-tsconfig-paths'

const defineConfig: UserConfigFn = () => {
  const config: UserConfig = {
    server: {
      https: true,
      port: 7000,
      host: '0.0.0.0'
    },
    plugins: [
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
          name: 'webchat-sdk'
        }
      }
    }
  }
  return config
}

export default defineConfig
