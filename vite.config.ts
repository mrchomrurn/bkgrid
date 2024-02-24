import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  },
  plugins: [vue(), dts(), libCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "BKGrid",
      fileName: "vue3-bk-grid",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    cssMinify: true,
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
