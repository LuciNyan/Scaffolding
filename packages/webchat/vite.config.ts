
import type { UserConfigFn, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    server: {
      https: true,
      port: 2671
    },
    plugins: [
      react(),
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
          name: "webchat",
        },
      },
    },
  };
  return config;
};

export default defineConfig;
