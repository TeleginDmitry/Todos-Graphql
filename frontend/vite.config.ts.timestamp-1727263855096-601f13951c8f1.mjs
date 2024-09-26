// vite.config.ts
import { defineConfig } from "file:///D:/Web/Graphql/todos/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Web/Graphql/todos/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///D:/Web/Graphql/todos/frontend/node_modules/tailwindcss/lib/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXZWJcXFxcR3JhcGhxbFxcXFx0b2Rvc1xcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcV2ViXFxcXEdyYXBocWxcXFxcdG9kb3NcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1dlYi9HcmFwaHFsL3RvZG9zL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtyZWFjdCgpXSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6ICcvc3JjJyxcblx0XHR9LFxuXHR9LFxuXHRjc3M6IHtcblx0XHRwb3N0Y3NzOiB7XG5cdFx0XHRwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKV0sXG5cdFx0fSxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1SLFNBQVMsb0JBQW9CO0FBQ2hULE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSztBQUFBLElBQ047QUFBQSxFQUNEO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDUixTQUFTLENBQUMsWUFBWSxDQUFDO0FBQUEsSUFDeEI7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
