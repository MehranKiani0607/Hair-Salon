import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When running inside the Base44 sandbox the dev server is reached through a
// proxy whose Host header is `<port>-<sandbox id>.<BASE44_SANDBOX_HOST_DOMAIN>`.
// The sandbox id rotates, so we only extend the allowlist with the wildcard for
// the sandbox domain, and only while preview mode is active. Vite >= 6.1 also
// appends `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` provided by the platform.
const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    // Bind mounts on the sandbox often miss inotify events; polling keeps HMR working.
    watch: { usePolling: true, interval: 300 },
    ...(previewMode && sandboxHostDomain
      ? { allowedHosts: ['.' + sandboxHostDomain, 'localhost', '127.0.0.1'] }
      : {}),
  },
})
