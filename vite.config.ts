import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Asset base path for production builds:
 * - Cloudflare Pages sets CF_PAGES=1 → root `/`
 * - GitHub Pages (project site) → `/pide-salon/`
 * - Override any host: `SITE_BASE=/custom/` npm run build
 */
function productionBase(): string {
  if (process.env.SITE_BASE) {
    const b = process.env.SITE_BASE.trim()
    if (b) return b.endsWith('/') ? b : `${b}/`
  }
  if (process.env.CF_PAGES === '1') return '/'
  return '/pide-salon/'
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? productionBase() : '/',
  plugins: [react()],
}))
