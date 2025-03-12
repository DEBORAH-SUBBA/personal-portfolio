import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/personal-portfolio",
  css: {
    modules: {
      localsConvention: "camelCase"
    },
  },
  server: {
    fs: {
      allow: [path.resolve('./')] // Allow access to root folder
    }
  }
})
