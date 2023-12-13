import { defineConfig } from "vite"

// export default defineConfig({
//   root: "src",
//   plugins: [],
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
//   server: {
//     port: 3000,
//   },
//   build: {
//     outDir: "dist",
//   },
// })

export default defineConfig({
  root: "src",
  server: {
    host: "127.0.0.2",
  },
  build: {
    outDir: "dist",
  },
})
