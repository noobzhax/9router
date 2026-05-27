# Changelog

## [0.7.0](https://github.com/noobzhax/9router/compare/v0.6.0...v0.7.0) (2026-05-27)


### Features

* Add Cloudflare Workers proxy deployer and pool integration ([#1360](https://github.com/noobzhax/9router/issues/1360)) ([c17d04c](https://github.com/noobzhax/9router/commit/c17d04c62442be5cd00d2e27bd561e332f7b9b2f))
* add DeepSeek V4 Pro effort aliases ([#950](https://github.com/noobzhax/9router/issues/950)) ([9ac8f33](https://github.com/noobzhax/9router/commit/9ac8f33e2ea9479a79692a88d65e55a642a80a4d))
* add drag-and-drop reordering for combo models ([#1056](https://github.com/noobzhax/9router/issues/1056)) ([#1108](https://github.com/noobzhax/9router/issues/1108)) ([cc6a3be](https://github.com/noobzhax/9router/commit/cc6a3be822676b9dc207aa0f346ae48cb93251de))
* **gemini-cli:** wrap CloudCode payload and surface 429 retryDelay ([78cadf3](https://github.com/noobzhax/9router/commit/78cadf3db8ebb1e28c5401a6696a66d0fc0bc323))
* **open-sse:** add blackbox provider with bb alias ([#1143](https://github.com/noobzhax/9router/issues/1143)) ([a3eb814](https://github.com/noobzhax/9router/commit/a3eb8146cfd03e526d9fc5fd0e4e8c7f1ca48525))
* **proxy-pools:** add support for deno deploy relays and fix layout overflow issues in proxy pools dashboard ([#1437](https://github.com/noobzhax/9router/issues/1437)) ([87edbf0](https://github.com/noobzhax/9router/commit/87edbf046448391ce9e4b6ceb7af62651210c1a4))
* **rtk:** add Kiro format support for tool result compression ([#1194](https://github.com/noobzhax/9router/issues/1194)) ([18545d7](https://github.com/noobzhax/9router/commit/18545d7c903ff173cb88526bd697062fcf097089))
* **ui:** enhance model select modal UX and modal traffic lights ([#1111](https://github.com/noobzhax/9router/issues/1111)) ([fd1be60](https://github.com/noobzhax/9router/commit/fd1be60df8730e3a16459a144d600b32eea35fc8))
* **upstream:** sync upstream/master v0.4.63 ([0af46f5](https://github.com/noobzhax/9router/commit/0af46f55d0d36cad4a43a9768f427f31b04eba72))
* **usage:** add Today period option to Usage & Analytics ([#1063](https://github.com/noobzhax/9router/issues/1063)) ([d98cf63](https://github.com/noobzhax/9router/commit/d98cf6396900e2f70f36d44590b255b5621bb28d))
* **usage:** đặt mặc định period là Today khi mở dashboard/usage ([#1141](https://github.com/noobzhax/9router/issues/1141)) ([518c238](https://github.com/noobzhax/9router/commit/518c238a812925d7d9b2eab7531a6709d338bece))


### Bug Fixes

* **autostart:** work on nvm + npm 9/10, actually register with launchctl (fixes [#1082](https://github.com/noobzhax/9router/issues/1082)) ([#1104](https://github.com/noobzhax/9router/issues/1104)) ([a6d8acf](https://github.com/noobzhax/9router/commit/a6d8acf768e50c5902c24074f4a5fbc33f4b5377))
* decode Composer cursor thinking output ([#1310](https://github.com/noobzhax/9router/issues/1310)) ([38db9f6](https://github.com/noobzhax/9router/commit/38db9f61de91cb83bb2e5f352a991df0dc2168e3))
* **embeddings:** forward Gemini output dimensions ([#1366](https://github.com/noobzhax/9router/issues/1366)) ([7f8ba13](https://github.com/noobzhax/9router/commit/7f8ba13bdab2e965fe6caf4b89050e2d906e31ea))
* enhance stall detection in stream handling for improved disconne… ([#1243](https://github.com/noobzhax/9router/issues/1243)) ([04cdcc6](https://github.com/noobzhax/9router/commit/04cdcc6017c928a1df0eb745e2e4d0e9c4c591a9))
* **eslint:** resolve setState-in-effect errors in dashboard components ([#1362](https://github.com/noobzhax/9router/issues/1362)) ([fec563b](https://github.com/noobzhax/9router/commit/fec563b7e08407f5bb96f715359020e8d660f6f3))
* **gitbook:** add missing useEffect import and mounted guard for SSR portal ([1736342](https://github.com/noobzhax/9router/commit/173634233d1eb768915b5b2fd6bff50845220ac0))
* implement json_schema fallback for OpenAI-compatible providers ([#1343](https://github.com/noobzhax/9router/issues/1343)) ([975fcdd](https://github.com/noobzhax/9router/commit/975fcddb0430321ea60571f4299619b48d46516c))
* keep usage details pagination inside mobile viewport ([#1218](https://github.com/noobzhax/9router/issues/1218)) ([314a515](https://github.com/noobzhax/9router/commit/314a515f8746fbe6c327bfdef2c26ea6a5999775))
* **lang:** emit selected locale on close ([#1234](https://github.com/noobzhax/9router/issues/1234)) ([6c65dfc](https://github.com/noobzhax/9router/commit/6c65dfc8b7d15d0b877fb45ef6e1b7d6f8f717de))
* **lint:** escape quotes in JSX hint text for Cloudflare API token ([c668ea2](https://github.com/noobzhax/9router/commit/c668ea2d95c2d5e41d25dfc744528f40b7493f05))
* normalize openclaw agent.model object form before .startsWith ([#1216](https://github.com/noobzhax/9router/issues/1216)) ([4889da0](https://github.com/noobzhax/9router/commit/4889da0a2b82e6a64fb43fc47649c2d89435ae33))
* **oauth:** align antigravity OAuth metadata with official client headers ([85703f2](https://github.com/noobzhax/9router/commit/85703f20f635dfc9bd915e8db394c69e817e89b6))
* sanitize Read tool args to prevent retry loops from non-Anthropic models ([#1144](https://github.com/noobzhax/9router/issues/1144)) ([0736992](https://github.com/noobzhax/9router/commit/07369927c5884c7ca06315b7bddbf4ca4a251281))
* strip empty Read pages argument in OpenAI-to-Claude translator ([#1354](https://github.com/noobzhax/9router/issues/1354)) ([9c754cf](https://github.com/noobzhax/9router/commit/9c754cf9c0dcd64befaf953d648819e999475315)), closes [#1278](https://github.com/noobzhax/9router/issues/1278)
* **tests:** resolve RTK Kiro and OpenAI-to-Claude test failures after upstream sync ([7b18473](https://github.com/noobzhax/9router/commit/7b184732444acac4fb2ff0a23463de80508adfa4))
* **ui:** resolve alias conflict for jina-reader in curl example ([#1241](https://github.com/noobzhax/9router/issues/1241)) ([dab87e3](https://github.com/noobzhax/9router/commit/dab87e342edbbbef045d2cc2ac0d549c9e019faa))
* **ui:** show API key row actions on mobile ([#1112](https://github.com/noobzhax/9router/issues/1112)) ([c376bf1](https://github.com/noobzhax/9router/commit/c376bf10132aa6b1d42fd5b67efa0c155bac09bb))
* update provider name retrieval for compatibility provider ([#1135](https://github.com/noobzhax/9router/issues/1135)) ([29c26fd](https://github.com/noobzhax/9router/commit/29c26fdc7da4be01fa283124f0b51e7cfbc18eef))

## [0.6.0](https://github.com/noobzhax/9router/compare/v0.5.0...v0.6.0) (2026-05-13)


### Features

* **sync:** sync upstream v0.4.38 additions ([7ff166d](https://github.com/noobzhax/9router/commit/7ff166d6262feac95ee1a86b46e0e8e2b4c99b5a))

## [0.5.0](https://github.com/noobzhax/9router/compare/v0.4.33...v0.5.0) (2026-05-13)


### Features

* **docker:** add Bun-optimized container setup ([ec14a9e](https://github.com/noobzhax/9router/commit/ec14a9e49df4f48dc365df6644cacbfb496fee05))
* **release:** add automated release workflow with Docker publish ([#5](https://github.com/noobzhax/9router/issues/5)) ([4f57d54](https://github.com/noobzhax/9router/commit/4f57d54e7dbaa384e51d779e5a646fd34099fb4e))


### Bug Fixes

* **build:** Fix standalone asset tracing ([d1d5094](https://github.com/noobzhax/9router/commit/d1d5094d7665d83909110631af46b4b84fb8159b))
* **open-sse:** extract JSON.stringify to variable to fix CodeQL parse error ([#6](https://github.com/noobzhax/9router/issues/6)) ([ea59d37](https://github.com/noobzhax/9router/commit/ea59d3751222896f3101a619c04b82b09833010e))
* **security:** bump next@16.2.6 + override postcss in gitbook ([#7](https://github.com/noobzhax/9router/issues/7)) ([1ad5726](https://github.com/noobzhax/9router/commit/1ad57262029bc490beae669a6769c7444dd75898))


### Performance Improvements

* **bun:** optimize cursor-auto-import, fix SQL injection, and enhance bun:sqlite adapter ([507609b](https://github.com/noobzhax/9router/commit/507609badb09a69ce2484c0f15a9c642ac3b3ab6))
* **bun:** reduce memory, surface silent errors, harden SQL safety ([8de3690](https://github.com/noobzhax/9router/commit/8de3690835e7a4c000258e43fbc0d05b907a52ed))
* **layout:** scope material-symbols CSS to dashboard routes only ([41445ac](https://github.com/noobzhax/9router/commit/41445acc7a1d272b2927de97668ad9f632866708))
* **usage:** lazy-load UsageChart and ProviderTopology ([d44d196](https://github.com/noobzhax/9router/commit/d44d196bcf127be49e753f0b6fd14b511600d07e))


### Documentation

* add table of contents to all markdown docs ([9f9fece](https://github.com/noobzhax/9router/commit/9f9fece6293b66f9c1699a8bb158d059e58178ea))
* **docker:** update DOCKER.md with Bun variant and compose instructions ([479e210](https://github.com/noobzhax/9router/commit/479e2102b59558627a44808a1602a7722b32e936))
* remove generated TOC blocks from docs ([0d1cc00](https://github.com/noobzhax/9router/commit/0d1cc00b99eee224beb166c7b19fd9092f8b5a58))
* remove TOC from README files ([80c60fc](https://github.com/noobzhax/9router/commit/80c60fc0f194ffaf038d7a1328458c880e89ba7e))


### Code Refactoring

* **providers:** direct-import shared components in detail pages ([ac13dc8](https://github.com/noobzhax/9router/commit/ac13dc8927fafbe8737b5451906cd275c1a88c00))
* **providers:** direct-import shared components in providers list page ([8e743c7](https://github.com/noobzhax/9router/commit/8e743c78e01bd1983d9d45a6a612d05d92885250))

## v0.4.33 (2026-05-12)
## Improvements
- Windows: replace systray (Go binary, AV flagged) with native PowerShell NotifyIcon
- Auto-cleanup legacy `tray_windows.exe` on install/startup

## v0.4.31 (2026-05-12)

## Features
- OIDC dashboard login: Authentik/Keycloak/Google/Okta SSO with password-only, OIDC-only, or both modes (#1020)
- Linux/arm64 Docker image support (#979)
- Codex GPT 5.5 image support (#991)
- Done button in ModelSelectModal during combo creation (#1031)
- CLI: reset auth mode to password (emergency OIDC lockout recovery)

## Fixes
- DATA_DIR: graceful fallback to ~/.9router on EACCES/EPERM (#1005)
- React hooks: variable declaration order & lazy initialization (#1017)

## Improvements
- Profile page: OIDC settings card collapsed by default to reduce clutter
- Header: user pill only shown when logged in via OIDC

## v0.4.30 (2026-05-11)

## Features
- MCP stdio→SSE bridge: expose local stdio MCP plugins over SSE (api/mcp/[plugin]/sse, /message)
- Dynamic Linux cert resolution + NSS DB injection (Debian/Arch/Fedora/openSUSE, Chrome/Chromium/Firefox incl. snap) (#1010)
- Cowork tool: expanded settings UI & API
- GitBook docs (DocsContent, DocsLayout)

## Fixes
- OAuth callback postMessage scoped to expected origins (CWE-1385) (#998)
- Re-enable TLS verification on DNS-bypass fetch (CWE-295) (#998)
- Normalize `developer` role → `system` for OpenAI-format providers (Deepseek, Groq, …) (#1011, closes #773)
- Respect `PORT` env in internal model-test fetch (#1014)
- Dropdown text readability in dark theme on usage page (#997)

## Improvements
- Refactor Claude CLI spoof headers into shared constant
- Tool deduper utility in open-sse handlers

## v0.4.29 (2026-05-10)

## Features
- Add Cline & Kilo Code tool cards
- Tailscale TUN mode for stable Funnel TLS
- Sort APIKEY providers by usage, collapse to top 20

## Improvements
- Local Material Symbols font (no Google Fonts)
- Docker base: Bun → Node 22-alpine
- MITM reads aliases from JSON cache (no native sqlite)
- Stream stall timeout (3 min) in open-sse

## Fixes
- Fal.ai key test: use stable models endpoint

## v0.4.28 (2026-05-10)

## Features
- Add bun:sqlite adapter with automatic runtime detection (Bun/Node)
- Add bulk API key import (format: `name|sk-key`, one per line)

## Fixes
- Fix add API key for custom providers

## v0.4.27 (2026-05-09)

## Features
- Add 3-tier DB driver fallback: better-sqlite3 → node:sqlite (Node ≥22.5) → sql.js

## Fixes
- Fix authentication logic for several providers

## v0.4.25 (2026-05-09)

## Features
- Add MCP Marketplace Modal to Cowork Tool Card for easier plugin management
- Migrate DB layer from lowdb to SQLite with modular repos pattern (better-sqlite3 / sql.js adapters, migrations, helpers)
- Add Tailscale tunnel integration with status check API
- Add `/api/cli-tools/all-statuses` aggregated endpoint
- Add Cloudflare Workers AI image generation support (#973)
- Add DeepSeek V4 Pro model and update V4 pricing (#938)
- Add captain-definition for Caprover deployment (#954)

## Improvements
- Optimize slow page load performance
- Refactor connection proxy configuration logic (#970)

## Fixes
- Prevent cached settings responses (#951)
- Normalize Ollama Local provider input (#955)

## Docs
- Add Chinese translation of README (#957)
- Fix localized README links (#956)

## v0.4.20 (2026-05-07)

## Features
- Add CommandCode provider support

## v0.4.19 (2026-05-07)

## Features
- Add OllamaLocalExecutor cho local Ollama provider
- Add audio input support cho Gemini translation
- Add configurable tunnel transport protocols
- Add model deselection trong ComboFormModal & ComboDetailPage
- ComboFormModal/BaseUrlSelect: cloud endpoint option, custom URL local state, default first option
- New API: `/v1/audio/voices`, `/v1/models/info`; `/v1/models` filter disabled models
- CLI tool cards refactor dùng BaseUrlSelect

## Fixes
- Fix compatible provider API key setup
- Fix usage: filter `totalRequests` theo time period đã chọn
- Fix Kiro IDE MITM handler bugs (AWS CodeWhisperer translation)
- geminiHelper: `ensureObjectType` cho schemas có properties nhưng thiếu type
- initializeApp: guard tunnel/tailscale auto-resume once-per-process

## v0.4.18 (2026-05-05)

## Features
- Speech-to-Text: full pipeline with sttCore + /v1/audio/transcriptions; configs for OpenAI, Gemini, Groq, Deepgram, AssemblyAI, HuggingFace, NVIDIA Parakeet; new 9router-stt skill
- Gemini TTS: dedicated provider with 30 prebuilt voices
- Usage quotas: GLM (intl/cn) and MiniMax (intl/cn) fetchers; Gemini CLI usage via retrieveUserQuota per-model buckets
- Disabled models: lowdb-backed disabledModelsDb + /api/models/disabled route
- Header search: reusable Zustand store wired into Header
- CLI tools: Claude Cowork tool card + cowork-settings API
- Providers: mediaPriority sorting in getProvidersByKind, add Kimi K2.6

## Improvements
- Expand media-providers/[kind]/[id] page; enhance OAuthModal, ModelSelectModal, ProviderTopology, ProxyPools, ProviderLimits
- Refresh provider icons (alicode, byteplus, cloudflare-ai, nvidia, ollama, vertex, volcengine-ark); add aws-polly, fal-ai, jina-ai, recraft, runwayml, stability-ai, topaz, black-forest-labs
- Reorder hermes provider, drop qwen STT kind

## Fixes
- Fix skills metadata/text in 9router, chat, embeddings, image, tts, web-fetch, web-search SKILL.md and skills page

## v0.4.16 (2026-05-04)

## Features
- Skills system: manage and execute custom AI skills

## Fixes
- Fix input fields in tool cards

## v0.4.14 (2026-05-03)

## Improvements
- Token refresh: in-flight request caching to prevent race conditions & reduce duplicate API calls
- Token refresh: handle unrecoverable errors with token reuse/invalidation
- MITM server: handle port 443 conflicts (kill occupying process before start)
- Better UX feedback in MitmServerCard for port conflicts & admin privileges
- Refactor ComboList for streamlined media provider combos display

## v0.4.13 (2026-05-03)

## Features
- Add Azure OpenAI as dedicated provider (endpoint/deployment/API version/organization config)
- Add browser-local endpoint presets for CLI tools (Claude, Codex, OpenCode, Droid, OpenClaw, Hermes, Copilot)
- Add Codex review model quota support
- Add DNS tool state persistence in MITM manager

## Improvements
- New brand color palette with better light/dark theme consistency
- Improve mobile layouts and restore Cloudflare provider
- Improve zh-CN translations
- Better admin privilege feedback in MitmServerCard
- Refined APIPageClient layout
- Filter LLM combos to show only relevant data

## Fixes
- Include alias-backed models in /v1/models listing
- Improve cloudflared exit code error messages
- Redirect ~/.9router to DATA_DIR in Docker (persist usage across updates)
- Prevent SSE listener leak in console-logs stream
- Gate MITM sudo prompts on server platform
- Fix Azure validation and persistence (providerSpecificData, Organization required)

## v0.4.12 (2026-05-01)

## Features
- Add Xiaomi MiMo provider support
- Add sticky round-robin strategy for combos

## Improvements
- Refactor proxyFetch and enhance MediaProviderDetailPage layout
- Improve dashboard responsive layouts
- Update provider models list

## Fixes
- Fix custom provider prefix conflicts with built-in alias
- Strip output_config for MiniMax requests

## v0.4.11 (2026-04-30)

## Features
- Add Caveman feature: terse-style system prompts to reduce output token usage with configurable compression levels
- Add Caveman settings UI in Endpoint dashboard (enable/disable, compression level)

## Improvements
- Consolidate AntigravityExecutor function declarations for Gemini compatibility
- Clean up translator initialization logs across API routes

## v0.4.10 (2026-04-29)

## Features
- Add new embedding models and Voyage AI provider support
- Add Coqui, Inworld, Tortoise TTS providers
- Add Deepgram and Inworld TTS voices API endpoints

## Improvements
- Enhance MITM Antigravity handler with improved cert install and DNS config
- Refactor TTS handling to support additional providers
- Improve API key validation for media providers
- Enhance MITM logger with better diagnostics
- Add Windows elevated permissions support for MITM

## Fixes
- Fix Antigravity MITM connection and handler issues
- Fix cloudflared tunnel integration with MITM

## v0.4.8 (2026-04-28)

## Features
- Add Web Search & Web Fetch providers with Combo support — chain multiple search/fetch providers as a single virtual provider
- Add Cloudflare AI provider support
- Add provider filter and expiry sorting to quota dashboard (#769)

## Improvements
- Proxy-aware token refresh across executors (Antigravity, Base, Default, Github, Kiro)

## Fixes
- Fix granular `reasoning_effort` handling for Claude models on Copilot & Anthropic backend (#791)
- Fix Antigravity INVALID_ARGUMENT errors and Copilot agent mode parity
- Fix quota reset timestamp parsing (#768)

## v0.4.6 (2026-04-25)

## Features
- Add BytePlus Provider
- Add Codex support to image providers
- Enhance image and embedding provider support

## Improvements
- Cap maximum cooldown for rate limit handling in account unavailability and single-model chat flows
- Dynamic custom model fetching for model selection

## v0.4.5 (2026-04-24)

## Improvements
- Cap maximum cooldown for rate limit handling in account unavailability and single-model chat flows
- Dynamic custom model fetching for model selection

## v0.4.3 (2026-04-24)

## Improvements
- Improve in-app download/update UX on dashboard
- Improve Codex provider rate limit handling with precise cooldown (`resetsAtMs`) and email backfill for OAuth accounts

## v0.4.2 (2026-04-24)

## Features
- Add Azure OpenAI provider support
- Add built-in Volcengine Ark provider support (#741)
- Add GPT 5.5 model

## Fixes
- Enhance retry logic and configuration for HTTP status codes

## v0.4.1 (2026-04-23)

## Features
- Add Hermes CLI tool with settings management and integration
- Add in-app version update mechanism (appUpdater + /api/version/update)

## Improvements
- Strengthen CLI token validation for enhanced security
- Enhance Sidebar layout for CLI tools
- Update executors and runtime config

## v0.3.98 (2026-04-22)

## Features
- Add RTK — filter context (ls/grep/find/.....) before sending to LLM to save tokens

## v0.3.97 (2026-04-22)

## Features
- Add OpenCode Go provider and support for custom models
- Add Text To Image provider
- Support custom host URL for remote Ollama servers

## Fixes
- Fix copy to clipboard issue

## v0.3.96 (2026-04-17)

## Features
- Add marked package for Markdown rendering
- Enhance changelog styles

## Improvements
- Refactor error handling to config-driven approach with centralized error rules
- Refactor localDb structure
- Update Qwen executor for OAuth handling
- Enhance error formatting to include low-level cause details
- Refactor HeaderMenu to use MenuItem component
- Improve LanguageSwitcher to support controlled open state
- Update backoff configuration and improve CLI detection messages
- Add installation guides for manual configuration in tool cards (Droid, Claude, OpenClaw)

## Fixes
- Fix Codex image URL fetches to await before sending upstream (#575)
- Strip thinking/reasoning_effort for GitHub Copilot chat completions (#623)
- Enable Codex Apply/Reset buttons when CLI is installed (#591)
- Show manual config option when Claude CLI detection fails (#589)
- Show manual config option when OpenClaw detection fails (#579)
- Ensure LocalMutex acquire returns release callback correctly (#569)
- Strip enumDescriptions from tool schema in antigravity-to-openai (#566)
- Strip temperature parameter for gpt-5.4 model (#536)
- Add Blackbox AI as a supported provider (#599)
- Add multi-model support for Factory Droid CLI tool (#521)
- Add GLM-5 and MiniMax-M2.5 models to Kiro provider (#580)
- Fix usage tracking bug

## v0.3.91 (2026-04-15)

## Features
- Add Kiro AWS Identity Center device flow for provider OAuth
- Add TTS (Text-to-Speech) core handler and TTS models config
- Add media providers dashboard page
- Add suggested models API endpoint

## Improvements
- Refactor error handling to config-driven approach with centralized error rules
- Refactor localDb and usageDb for cleaner structure

## Fixes
- Fix usage tracking bug

## v0.3.90 (2026-04-14)

## Features
- Add proactive token refresh lead times for providers and Codex proxy management
- Enhance CodexExecutor with compact URL support

## Improvements
- Enhance Windows Tailscale installation with curl support and fallback to well-known Windows path
- Refactor execSync and spawn calls with windowsHide option for better Windows compatibility

## Fixes
- Fix noAuth support for providers and adjusted MITM restart settings
- Bug fixes

## v0.3.89 (2026-04-13)

## Improvements
- Improved dashboard access control by blocking tunnel/Tailscale access when disabled
