import type { UserConfigFn, UserConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    server: {
      https: true,
      port: 7000
    },
    plugins: [
      tsconfigPaths(),
      legacy(),
      mkcert({
        source: "coding",
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          format: "umd",
          name: "webchat-sdk",
        },
      },
    },
  };
  return config;
};

export default defineConfig;
