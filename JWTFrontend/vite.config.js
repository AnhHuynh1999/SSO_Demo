import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    server: {
      // port: 3000,
      allowedHosts: [".localhost"],
      host: true,
    },
  });
};
