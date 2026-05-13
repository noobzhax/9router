# Docker

## Table of Contents

- [Runtimes](#runtimes)
- [Build & Run — Bun Variant](#build-run-bun-variant)
  - [Build image](#build-image)
  - [Start container](#start-container)
  - [Run in background](#run-in-background)
  - [View logs](#view-logs)
  - [Stop container](#stop-container)
  - [Rebuild after code changes](#rebuild-after-code-changes)
- [Docker Compose — Bun Variant](#docker-compose-bun-variant)
- [Build & Run — Node.js Variant](#build-run-nodejs-variant)
- [What the volume does](#what-the-volume-does)
- [Optional environment variables](#optional-environment-variables)
- [Healthcheck](#healthcheck)

This project ships with Docker support for building and running 9Router in a container.

## Runtimes

Two `Dockerfile` variants are available:

| Variant | File | Base | Builder | Runtime | Use case |
|---|---|---|---|---|---|
| **Node.js** | `Dockerfile` | `node:22-alpine` | Node | Node | Stable, well-tested |
| **Bun** | `Dockerfile.bun` | `node:22-alpine` + `oven/bun:1.3-alpine` | Node | Bun | Faster startup, lower memory |

The **Bun variant** uses a hybrid approach: native deps (better-sqlite3, node-forge, node-machine-id) are compiled with the Node toolchain, then the final image runs on Bun using its built-in `bun:sqlite` driver for improved performance. Next.js serves via `bun --bun server.js`.

---

## Build & Run — Bun Variant

### Build image

```bash
docker build -f Dockerfile.bun -t 9router:bun .
```

### Start container

```bash
docker run --rm \
  -p 20128:20128 \
  -v "$HOME/.9router:/app/data" \
  -e DATA_DIR=/app/data \
  --name 9router-bun \
  9router:bun
```

### Run in background

```bash
docker run -d \
  -p 20128:20128 \
  -v "$HOME/.9router:/app/data" \
  -e DATA_DIR=/app/data \
  --name 9router-bun \
  9router:bun
```

### View logs

```bash
docker logs -f 9router-bun
```

### Stop container

```bash
docker stop 9router-bun
```

### Rebuild after code changes

```bash
docker build -f Dockerfile.bun -t 9router:bun .
docker stop 9router-bun && docker rm 9router-bun
docker run -d -p 20128:20128 -v "$HOME/.9router:/app/data" -e DATA_DIR=/app/data --name 9router-bun 9router:bun
```

---

## Docker Compose — Bun Variant

```bash
docker compose -f docker-compose.bun.yml up -d
docker compose -f docker-compose.bun.yml logs -f
docker compose -f docker-compose.bun.yml down
```

Named volumes (`9router_data`, `9router_home`) persist data automatically.

---

## Build & Run — Node.js Variant

The Node.js variant uses the default `Dockerfile`:

```bash
# Build
docker build -t 9router .

# Run
docker run --rm \
  -p 20128:20128 \
  -v "$HOME/.9router:/app/data" \
  -e DATA_DIR=/app/data \
  --name 9router \
  9router

# Run in background
docker run -d \
  -p 20128:20128 \
  -v "$HOME/.9router:/app/data" \
  -e DATA_DIR=/app/data \
  --name 9router \
  9router
```

---

## What the volume does

```bash
-v "$HOME/.9router:/app/data" \
-e DATA_DIR=/app/data
```

`9router` stores its database at `path.join(DATA_DIR, "db.json")`.
Without `DATA_DIR`, the app falls back to the current user's home directory (for example `~/.9router/db.json` on macOS/Linux). In the container, set `DATA_DIR=/app/data` so the bind mount is actually used.

With the example above, the database file is:

```text
/app/data/db.json
```

and it is persisted on the host at:

```text
$HOME/.9router/db.json
```

---

## Optional environment variables

You can override runtime env vars with `-e`.

Example (Bun):

```bash
docker run --rm \
  -p 20128:20128 \
  -v "$HOME/.9router:/app/data" \
  -e DATA_DIR=/app/data \
  -e PORT=20128 \
  -e HOSTNAME=0.0.0.0 \
  -e DEBUG=true \
  --name 9router-bun \
  9router:bun
```

---

## Healthcheck

The Bun Dockerfile and `docker-compose.bun.yml` include a healthcheck:

- **Bun variant** — `wget` to `http://127.0.0.1:${PORT}/api/health`
- **Node variant** — no built-in healthcheck (add via compose if needed)

The health endpoint returns `{ "ok": true }`, and the Bun healthcheck verifies that shape.
