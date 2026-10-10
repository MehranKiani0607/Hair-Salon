# AGENTS.md

## Running the app (Base44 sandbox)

```bash
docker compose -f docker-compose.base44.yml up -d
```

- Serves on host port **3000** (the preview entry point).
- Single `web` service: plain `node:22` image running **Vite's dev server** from the bind-mounted
  source, so edits hot-reload. No prebuilt/production image is used.
- `npm install` runs on container start; dependencies live in the named volume
  `web_node_modules` (deliberately **not** the repo, so the bind mount can't shadow them).
- There is **no backend, database, migrations or external service** — this is a static
  front-end site, so the `secrets` list in `.base44/environment.json` is empty.

Health check:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/   # -> 200
```

## Non-obvious details

- **File watching uses polling.** `vite.config.js` sets `server.watch.usePolling` because inotify
  events are unreliable across the sandbox bind mount.
- **Preview host allowlist.** The preview proxy forwards `Host: <port>-<sandbox id>.<domain>` and the
  sandbox id rotates, so `vite.config.js` appends the wildcard `.<BASE44_SANDBOX_HOST_DOMAIN>` to
  `server.allowedHosts` **only when `BASE44_PREVIEW_MODE === "1"`**. The platform's
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is also passed through compose (Vite ≥ 6.1 reads it).
  With the flag unset, Vite's defaults are untouched.
- **Photography.** `public/images/` holds `hero.jpg`, `salon.jpg`, `gallery-1..4.jpg`, sourced from
  CC0/CC-licensed stock and resized to web sizes. Every photo is unified into the black-and-white /
  warm-sepia look by the `.editorial-img` utility (grayscale + sepia) defined in `src/index.css`.
- **Content is French.** Nav anchors map to `#accueil`, `#apropos`, `#collection`, `#lookbook`
  (an anchor inside the gallery) and `#contact`.

## Verifying changes

- Front-end edits hot-reload through Vite; no restart needed.
- After changing compose, env vars or dependencies:
  `docker compose -f docker-compose.base44.yml up -d --build`.
