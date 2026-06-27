# Changelog

## [0.7.0](https://github.com/noobzhax/9router/compare/v0.6.0...v0.7.0) (2026-06-27)


### Features

* add bulk delete for provider connections ([644bff4](https://github.com/noobzhax/9router/commit/644bff4cdd9eac04c2d8ca4af0aff4961bf8efab))
* Add Cloudflare Workers proxy deployer and pool integration ([#1360](https://github.com/noobzhax/9router/issues/1360)) ([c17d04c](https://github.com/noobzhax/9router/commit/c17d04c62442be5cd00d2e27bd561e332f7b9b2f))
* add DeepSeek V4 Pro effort aliases ([#950](https://github.com/noobzhax/9router/issues/950)) ([9ac8f33](https://github.com/noobzhax/9router/commit/9ac8f33e2ea9479a79692a88d65e55a642a80a4d))
* add drag-and-drop reordering for combo models ([#1056](https://github.com/noobzhax/9router/issues/1056)) ([#1108](https://github.com/noobzhax/9router/issues/1108)) ([cc6a3be](https://github.com/noobzhax/9router/commit/cc6a3be822676b9dc207aa0f346ae48cb93251de))
* add token-saver dashboard page ([cb65a45](https://github.com/noobzhax/9router/commit/cb65a45e1fdb599a56b5ac1f3c213210845c3d9f))
* **antigravity:** add gemini-3.5-flash-extra-low (Low) model ([e6c09aa](https://github.com/noobzhax/9router/commit/e6c09aad15b9a60ee9faabc302cde6335ff42e3e))
* **antigravity:** native image generation support ([5306bd9](https://github.com/noobzhax/9router/commit/5306bd904e34fedf0ead77dc337c75415b7d2d82))
* **blackbox:** overhaul provider catalog + WebUI test support ([940a35e](https://github.com/noobzhax/9router/commit/940a35e009353849d2b886287cbc4fe11afec6f2))
* **caveman:** add wenyan classical Chinese levels and sync upstream prompts ([0477922](https://github.com/noobzhax/9router/commit/047792205f6e4c55d89e6c72d0c874558a23d21a))
* Claude auto-ping to warm 5h window after reset ([740093d](https://github.com/noobzhax/9router/commit/740093d852a7acb8644bd09c1d853ecaf30fe23b))
* **codebuddy-cn:** add API key auth + credit quota tracker ([8321032](https://github.com/noobzhax/9router/commit/8321032e360156f72d7620c355ae2fb271c25f08))
* **codebuddy-cn:** add short model prefix alias "cbcn" ([791705a](https://github.com/noobzhax/9router/commit/791705ae7acf4294b193648468e94d0578f24670))
* **combo:** add Fusion strategy — parallel panel + judge synthesis ([87e5c1c](https://github.com/noobzhax/9router/commit/87e5c1c6dd68d223eb4d04c19c8a60017849ad2f))
* **cowork:** re-enable Claude Cowork with preset-only stdio MCP ([f8b73fa](https://github.com/noobzhax/9router/commit/f8b73faf5d4da7c0753800e66f34d8267f0f3b46))
* **endpoint:** implement locale-based visibility for wenyan caveman levels ([48c37e0](https://github.com/noobzhax/9router/commit/48c37e0ad236f2db486f563c74fb2bbdafa998df))
* **gemini-cli:** wrap CloudCode payload and surface 429 retryDelay ([78cadf3](https://github.com/noobzhax/9router/commit/78cadf3db8ebb1e28c5401a6696a66d0fc0bc323))
* **github:** resolve Copilot model catalog from upstream ([1980178](https://github.com/noobzhax/9router/commit/1980178d023f98cbcd31d8266a3e42159128a296))
* **headroom:** add proxy lifecycle management + dashboard UI ([b55cf36](https://github.com/noobzhax/9router/commit/b55cf36d2e79599eb8116adbe8f7e362493a7bb3))
* **i18n:** add endpoint exposure notice across multiple languages ([64f5842](https://github.com/noobzhax/9router/commit/64f58420db30b9027e554ae7dd513e0daa96d089))
* **kiro:** add external_idp CLIProxyAPI import for Microsoft SSO ([a4f44e3](https://github.com/noobzhax/9router/commit/a4f44e3e12b0fac2a2ed1c9ad46731b2229bb7bf))
* **kiro:** enable multi-endpoint failover for GenerateAssistantResponse ([c24efe8](https://github.com/noobzhax/9router/commit/c24efe80f019af71b878391373813f5ec8304947))
* **kiro:** headless API-key auth + direct Claude/Kiro route ([706e651](https://github.com/noobzhax/9router/commit/706e6513c94803ac46a8c1c21ca8ac6775912e3a))
* **open-sse:** add blackbox provider with bb alias ([#1143](https://github.com/noobzhax/9router/issues/1143)) ([a3eb814](https://github.com/noobzhax/9router/commit/a3eb8146cfd03e526d9fc5fd0e4e8c7f1ca48525))
* **opencode-go:** align Go models with official endpoints ([8efacc1](https://github.com/noobzhax/9router/commit/8efacc114775423b5c69f1088b6f61217eb1f414))
* **ponytail:** introduce "Ponytail" feature for minimalistic code generation ([637dd7a](https://github.com/noobzhax/9router/commit/637dd7ae6601ba1fdfb40794498ff22438e5917f))
* **provider:** add CodeBuddy CN provider (copilot.tencent.com) ([efd20be](https://github.com/noobzhax/9router/commit/efd20be8d81ef2e256a7037f3aa78e6b567b5fd3))
* **provider:** add MiMo Free no-auth provider ([b40e96d](https://github.com/noobzhax/9router/commit/b40e96d0ef91bef65123a8af0fddd32e90251218))
* **providers/codex:** bulk add accounts via JSON ([8962e46](https://github.com/noobzhax/9router/commit/8962e466d6a25ee546d54dc7a9a62faca46de177))
* **providers:** add Venice AI provider ([ab5ec52](https://github.com/noobzhax/9router/commit/ab5ec52f28dbce6e9a00c5369e3e012b74187d6f))
* **proxy-pools:** add support for deno deploy relays and fix layout overflow issues in proxy pools dashboard ([#1437](https://github.com/noobzhax/9router/issues/1437)) ([87edbf0](https://github.com/noobzhax/9router/commit/87edbf046448391ce9e4b6ceb7af62651210c1a4))
* **qoder:** fetch latest model + nút import model trên dashboard ([12c97ad](https://github.com/noobzhax/9router/commit/12c97ad46ff852b0afd648e07d16597d4c484b1c))
* **qoder:** port Kiro-style provider integration with COSY signing ([a6fd846](https://github.com/noobzhax/9router/commit/a6fd84691b0347d2fd208dda94da108ab17aa18b))
* **qoder:** show in Quota Tracker dashboard ([af7f6b1](https://github.com/noobzhax/9router/commit/af7f6b1de259bd61384c62108479436c9dc09d5b))
* **rtk:** add Kiro format support for tool result compression ([#1194](https://github.com/noobzhax/9router/issues/1194)) ([18545d7](https://github.com/noobzhax/9router/commit/18545d7c903ff173cb88526bd697062fcf097089))
* **ui:** enhance model select modal UX and modal traffic lights ([#1111](https://github.com/noobzhax/9router/issues/1111)) ([fd1be60](https://github.com/noobzhax/9router/commit/fd1be60df8730e3a16459a144d600b32eea35fc8))
* **upstream:** sync upstream/master v0.4.63 ([0af46f5](https://github.com/noobzhax/9router/commit/0af46f55d0d36cad4a43a9768f427f31b04eba72))
* **usage:** add Today period option to Usage & Analytics ([#1063](https://github.com/noobzhax/9router/issues/1063)) ([d98cf63](https://github.com/noobzhax/9router/commit/d98cf6396900e2f70f36d44590b255b5621bb28d))
* **usage:** đặt mặc định period là Today khi mở dashboard/usage ([#1141](https://github.com/noobzhax/9router/issues/1141)) ([518c238](https://github.com/noobzhax/9router/commit/518c238a812925d7d9b2eab7531a6709d338bece))
* **validate:** implement SSRF guard for remote requests and protect sensitive settings ([090886c](https://github.com/noobzhax/9router/commit/090886ced9a3481837f5687ec66da7d9f33eea08))
* **vercel-ai-gateway:** support embeddings, images and credit usage ([b33cbb0](https://github.com/noobzhax/9router/commit/b33cbb0280073a65db26697b682ee6174189528f))
* **vertex:** support ADC authorized_user credential ([9406bd1](https://github.com/noobzhax/9router/commit/9406bd18060635bd78cd1c725c3c1e3f3330206c))
* **xiaomi-tokenplan:** add Claude-native MiMo V2.5 Pro alias via dedicated executor ([40cfa63](https://github.com/noobzhax/9router/commit/40cfa63eb8e1806e8ce88fe04ea5f83dcb605d51))


### Bug Fixes

* add normalization for Claude passthrough bodies ([4443903](https://github.com/noobzhax/9router/commit/444390390001b9a3021c2a3be2339fa734394053))
* add opencode-go and xiaomi-tokenplan cases to connection test route ([#1576](https://github.com/noobzhax/9router/issues/1576)) ([cce8a50](https://github.com/noobzhax/9router/commit/cce8a50cac501d97c49e563d2a37c3d6ec4da991))
* **anthropic-compatible:** send Bearer auth for third-party gateways ([b977bf7](https://github.com/noobzhax/9router/commit/b977bf74149c704c91092f0e1db0372695f452bc))
* **antigravity:** add kind:image to image models so they show in media-providers UI ([d4ecad2](https://github.com/noobzhax/9router/commit/d4ecad24d3584500ea349a536828c657918e65ef))
* **antigravity:** passthrough tab-autocomplete + mark default agent slot mandatory ([38b73bf](https://github.com/noobzhax/9router/commit/38b73bfc6b71a94217d58694f85a415b5afcec64))
* **antigravity:** retry transient upstream failures ([639f120](https://github.com/noobzhax/9router/commit/639f1204d08c0112404097cfa3b870513872563f))
* **antigravity:** strip optional from tool schemas before Gemini ([db9ec3a](https://github.com/noobzhax/9router/commit/db9ec3af61cbac7a56251959c365443098590db0))
* **auth:** avoid stale redirects after auth changes ([6e9c7bf](https://github.com/noobzhax/9router/commit/6e9c7bf448b7df398a09694f3d32bb0ac7a8adb1)), closes [#2100](https://github.com/noobzhax/9router/issues/2100)
* **auth:** real client IP rate-limiting + remote default-password guard ([7648c34](https://github.com/noobzhax/9router/commit/7648c3412b403a29f04967c4b4e9725e228791d4))
* **autostart:** work on nvm + npm 9/10, actually register with launchctl (fixes [#1082](https://github.com/noobzhax/9router/issues/1082)) ([#1104](https://github.com/noobzhax/9router/issues/1104)) ([a6d8acf](https://github.com/noobzhax/9router/commit/a6d8acf768e50c5902c24074f4a5fbc33f4b5377))
* **capabilities:** mark Claude Opus 4.7 (dashed id) as 1M context ([49a3ec7](https://github.com/noobzhax/9router/commit/49a3ec7a722eaccfc511426a866f18c2ca7a34b8))
* **cerebras,mistral:** strip unsupported client_metadata from downstream requests ([d652300](https://github.com/noobzhax/9router/commit/d652300e9e0c91d466f6b290482430562313ef91))
* **claude haiku:** update handling of unsupported adaptive thinking and output_config.effort ([401d93b](https://github.com/noobzhax/9router/commit/401d93bd5cc7c53bb3b03ba79d3c2e5fbb4b2896))
* **claude-to-openai:** handle OpenAI-format responses in non-streaming path ([411a589](https://github.com/noobzhax/9router/commit/411a5897815353094e1965bf6145e7dfbd41e37d)), closes [#1836](https://github.com/noobzhax/9router/issues/1836)
* **claude-to-openai:** strip Anthropic billing header from system prompt ([0aaa5ab](https://github.com/noobzhax/9router/commit/0aaa5ab3c29fd13de95e8bc43c376a22e74a85be))
* **claude:** forced tool_choice 400 on cc/ OAuth route ([c785051](https://github.com/noobzhax/9router/commit/c78505136014c8f26fc28b6af78bd051fc3a0cde)), closes [#1592](https://github.com/noobzhax/9router/issues/1592)
* **cli-tools:** tolerate JSONC configs in CLI tool settings routes ([6c10edf](https://github.com/noobzhax/9router/commit/6c10edf8ba0553498649e4e646307578f900a0fc))
* **cli:** handle Next.js 16 nested standalone output path ([#1940](https://github.com/noobzhax/9router/issues/1940)) ([d1bb4dd](https://github.com/noobzhax/9router/commit/d1bb4ddbb798d1a6108194fe4f48a31b1fb46a4a))
* **cloudflare-ai:** flatten content-part arrays to string to avoid oneOf 400 ([#1926](https://github.com/noobzhax/9router/issues/1926)) ([7baf293](https://github.com/noobzhax/9router/commit/7baf293ccbcb76da0a1cbc981e083a3d34eda19f))
* **codebuddy:** only send reasoning params when client requests reasoning ([d1e98d9](https://github.com/noobzhax/9router/commit/d1e98d9a6076524f227a4de074d6a3cdf6dc276f)), closes [#2071](https://github.com/noobzhax/9router/issues/2071)
* **codex:** durable OAuth refresh lifecycle ([c233c7c](https://github.com/noobzhax/9router/commit/c233c7c8fc64d76dc8e171b91df3c986e10739dc))
* **codex:** harden streaming timeouts + Responses terminal events ([9caea88](https://github.com/noobzhax/9router/commit/9caea8852801dc0cdbb6f67aace3b4f95ca9fe13))
* **codex:** preserve custom tools during request normalization ([ed68bce](https://github.com/noobzhax/9router/commit/ed68bcedf8a522e3a43c64949075cfd32cde681d)), closes [#1907](https://github.com/noobzhax/9router/issues/1907)
* **codex:** preserve Responses text format ([e544bfc](https://github.com/noobzhax/9router/commit/e544bfceae2bff3288c07c191a35113331d65cfa))
* **combo/fusion:** flatten Anthropic-style tool messages in panel calls ([86162ee](https://github.com/noobzhax/9router/commit/86162eeb8fd91ac946fb8e270c797b3c70648777))
* **combo/fusion:** flatten tool history in panel calls to prevent 503 ([9ab14e7](https://github.com/noobzhax/9router/commit/9ab14e77145f703b84e6f4d08d1518115f9a833a))
* **commandcode:** force stream=true in transformRequest ([c5815ad](https://github.com/noobzhax/9router/commit/c5815ad3f0b4efdf307de26aab1c0dc577269a8b))
* **copilot:** add mappable gpt-5-mini/gpt-5.4-nano slots for Copilot MITM ([b2aa08a](https://github.com/noobzhax/9router/commit/b2aa08ad16f073236258298f643393452474c6fc))
* **dashboard:** show explicit kind="llm" combos on combos page ([51cbe65](https://github.com/noobzhax/9router/commit/51cbe65c157bf3d957ce02ed8f01e4802ce5011d)), closes [#1682](https://github.com/noobzhax/9router/issues/1682)
* decode Composer cursor thinking output ([#1310](https://github.com/noobzhax/9router/issues/1310)) ([38db9f6](https://github.com/noobzhax/9router/commit/38db9f61de91cb83bb2e5f352a991df0dc2168e3))
* **embeddings:** forward Gemini output dimensions ([#1366](https://github.com/noobzhax/9router/issues/1366)) ([7f8ba13](https://github.com/noobzhax/9router/commit/7f8ba13bdab2e965fe6caf4b89050e2d906e31ea))
* enable vision capability for MiniMax-M3 ([b4d2754](https://github.com/noobzhax/9router/commit/b4d2754d3233578b26a1fe9a10dfbbe6dd295bab))
* enableObservability2 field name in requestDetailsRepo ([fbf973f](https://github.com/noobzhax/9router/commit/fbf973f2e719ceef80197bbfc7e810191291b69a))
* enhance stall detection in stream handling for improved disconne… ([#1243](https://github.com/noobzhax/9router/issues/1243)) ([04cdcc6](https://github.com/noobzhax/9router/commit/04cdcc6017c928a1df0eb745e2e4d0e9c4c591a9))
* **eslint:** resolve setState-in-effect errors in dashboard components ([#1362](https://github.com/noobzhax/9router/issues/1362)) ([fec563b](https://github.com/noobzhax/9router/commit/fec563b7e08407f5bb96f715359020e8d660f6f3))
* **executors:** strip params unsupported by provider/model ([7ae9fff](https://github.com/noobzhax/9router/commit/7ae9fff663b5227fe214c5225a767ed4c4380a7b)), closes [#1748](https://github.com/noobzhax/9router/issues/1748)
* **gemini-to-openai:** route unsigned thought parts to reasoning_content ([d9b0300](https://github.com/noobzhax/9router/commit/d9b030011f42e12a0cbb8464b8b2eba36e58c31a))
* **gemini:** preserve 'pattern' in antigravity tool schema translation ([f6c2f7c](https://github.com/noobzhax/9router/commit/f6c2f7cae3b96995b2914c461ab21a254d3bae5b))
* **gemini:** support native TTS generateContent endpoint ([dae69a3](https://github.com/noobzhax/9router/commit/dae69a3916f096909c2118bfd14abd9f714688dc))
* **gemini:** validate native model id to block path traversal ([f46811c](https://github.com/noobzhax/9router/commit/f46811c75e00b9107cfd45b5a377a1f9393b9e58))
* giảm spam 429 từ Claude OAuth usage endpoint ([79df34c](https://github.com/noobzhax/9router/commit/79df34cad70b21b8562459ea991a50fe50e42624))
* **gitbook:** add missing useEffect import and mounted guard for SSR portal ([1736342](https://github.com/noobzhax/9router/commit/173634233d1eb768915b5b2fd6bff50845220ac0))
* **github:** proactively refresh missing/expired Copilot token on models discovery ([c572c68](https://github.com/noobzhax/9router/commit/c572c68717ad7dc7cc2aec286571abe2efa65617))
* **headroom:** clarify token diagnostics vs provider billing ([fb543a1](https://github.com/noobzhax/9router/commit/fb543a1f396f18794d0488617ab1aa3cbee33e70))
* **headroom:** support Docker sidecar proxy ([50ed79f](https://github.com/noobzhax/9router/commit/50ed79fe9ec2ef83df44c8d278bf190b4b21b27e)), closes [#1948](https://github.com/noobzhax/9router/issues/1948)
* **headroom:** translate openai-responses input through OpenAI for compression ([d4d1135](https://github.com/noobzhax/9router/commit/d4d11357abc4b70e98dc7fbf6c5d4215321d6c5a))
* **i18n:** add missing zh-CN endpoint key label ([77b3856](https://github.com/noobzhax/9router/commit/77b3856402f4756c28c37cc2ffce7b64a5e27244))
* **image:** pin DNS-resolved IP to prevent SSRF via DNS rebinding (GHSA-cmhj-wh2f-9cgx) ([c7d0744](https://github.com/noobzhax/9router/commit/c7d07448c58bec1200741de0b73305b860416b82))
* **image:** prevent compatible nodes from shadowing provider aliases ([047fdc8](https://github.com/noobzhax/9router/commit/047fdc8960e0558813b497332ad6284f29e15c47))
* implement json_schema fallback for OpenAI-compatible providers ([#1343](https://github.com/noobzhax/9router/issues/1343)) ([975fcdd](https://github.com/noobzhax/9router/commit/975fcddb0430321ea60571f4299619b48d46516c))
* include free OpenCode models without -free suffix in suggested models ([#1535](https://github.com/noobzhax/9router/issues/1535)) ([9ee8b32](https://github.com/noobzhax/9router/commit/9ee8b32887a85ff6667ec89a8554899fb181e615))
* keep usage details pagination inside mobile viewport ([#1218](https://github.com/noobzhax/9router/issues/1218)) ([314a515](https://github.com/noobzhax/9router/commit/314a515f8746fbe6c327bfdef2c26ea6a5999775))
* **kiro:** add mappable "auto" model slot for Kiro agent mode ([3dda651](https://github.com/noobzhax/9router/commit/3dda651bad934cc58ef03d662524e715c9d640e0))
* **kiro:** auto-resolve profileArn to prevent 403 on IDC login ([f8c5922](https://github.com/noobzhax/9router/commit/f8c59227f6056633d70c4f00996490e422702505))
* **kiro:** handle 400 on tool-bearing history without client tools ([8ad9554](https://github.com/noobzhax/9router/commit/8ad95542da0329c1f80a8d7f0e2d409a36153238))
* **kiro:** honor thinking effort budgets ([2ff1124](https://github.com/noobzhax/9router/commit/2ff11246ae54fc7c8160a3d723b94a432e0c6806))
* **kiro:** report 1M context window for claude-opus-4.8 ([eb9728d](https://github.com/noobzhax/9router/commit/eb9728d0846df9915f61a1dde54f14fbe1b332dc))
* **kiro:** validate region to prevent SSRF (GHSA-6mwv-4mrm-5p3m) ([126aa24](https://github.com/noobzhax/9router/commit/126aa244c5b51b74ab8c7594e3418fcf4437bf6f))
* **lang:** emit selected locale on close ([#1234](https://github.com/noobzhax/9router/issues/1234)) ([6c65dfc](https://github.com/noobzhax/9router/commit/6c65dfc8b7d15d0b877fb45ef6e1b7d6f8f717de))
* **lint:** escape quotes in JSX hint text for Cloudflare API token ([c668ea2](https://github.com/noobzhax/9router/commit/c668ea2d95c2d5e41d25dfc744528f40b7493f05))
* m.type → m.kind||m.type in remaining consumers (ModelSelectModal, providers page, route) ([c5c9061](https://github.com/noobzhax/9router/commit/c5c9061eacde134b47431f0969ff27e7412f3b89))
* **mimo-free:** add Chrome User-Agent rotation to bypass anti-abuse gate ([36153fe](https://github.com/noobzhax/9router/commit/36153fedbdc0d51757215ab06ec8c24f23012443))
* **minimax:** Bổ sung MiniMax-M3 + cập nhật Quota Tracker coding/CN ([41f94ce](https://github.com/noobzhax/9router/commit/41f94ce8c87bf5561e049fb1cc5717a6eea70ed8))
* **minimax:** echo reasoning_content on follow-up turns to avoid 400 ([4fc02e6](https://github.com/noobzhax/9router/commit/4fc02e67e5e56203a7f5dd87f77890b0cb963478))
* **mitm:** Kiro binary EventStream crash + add models & TTS tool filtering ([0850f0a](https://github.com/noobzhax/9router/commit/0850f0a4705001b09b212c50d20ef4b6ae1f774e))
* **mitm:** update Kiro API endpoint to runtime.us-east-1.kiro.dev ([dd5c575](https://github.com/noobzhax/9router/commit/dd5c575c65a4f3a371f96944ccccd8500886502c))
* **models:** show custom provider models in combo picker ([520f504](https://github.com/noobzhax/9router/commit/520f5049bf9e82d73d7b5db2de67351eee934cba))
* **models:** store provider custom models by provider scope ([707a915](https://github.com/noobzhax/9router/commit/707a91555db8131bc916700025ee243d8fdf7783))
* never route GitHub Copilot Gemini/Claude models to /responses ([#1062](https://github.com/noobzhax/9router/issues/1062)) ([#1536](https://github.com/noobzhax/9router/issues/1536)) ([88224b8](https://github.com/noobzhax/9router/commit/88224b80ca0f8e797d3e7c0b33ec4bb7789813b2))
* **next.config:** add new route for responses endpoint to API ([3e12bc2](https://github.com/noobzhax/9router/commit/3e12bc27d210c17d807421d231b36a41fe181a74))
* normalize openclaw agent.model object form before .startsWith ([#1216](https://github.com/noobzhax/9router/issues/1216)) ([4889da0](https://github.com/noobzhax/9router/commit/4889da0a2b82e6a64fb43fc47649c2d89435ae33))
* **oauth:** align antigravity OAuth metadata with official client headers ([85703f2](https://github.com/noobzhax/9router/commit/85703f20f635dfc9bd915e8db394c69e817e89b6))
* **open-sse:** remove dead duplicate opencode provider entry ([1432ac6](https://github.com/noobzhax/9router/commit/1432ac61d713cf2c884bd8f2ce3d4a43b7632870))
* **param-support:** handle strip rules without match/drop ([4a54824](https://github.com/noobzhax/9router/commit/4a54824f7f5c61c25d2d623d48580274f9934a22))
* **perplexity:** use /v1/models endpoint for key validation ([db4499d](https://github.com/noobzhax/9router/commit/db4499d6dfa7046fd9b578c3bca814de40ac6bdf))
* preserve forced streaming for json clients ([c842dc8](https://github.com/noobzhax/9router/commit/c842dc8f076b95ead4456c2d40e83b2b727b85e7)), closes [#2031](https://github.com/noobzhax/9router/issues/2031)
* **provider-topology:** update label assignment to include nodeName ([05e483c](https://github.com/noobzhax/9router/commit/05e483c02eee226fd95dc980de24e38bb1e37b37))
* **providers:** restore one-connection guard for compatible/embedding nodes ([44d8de2](https://github.com/noobzhax/9router/commit/44d8de288dd02daa0f7fc3271840770469002192))
* **proxy:** raise Next client body limit to 128MB (configurable) ([2be00e2](https://github.com/noobzhax/9router/commit/2be00e2a7886bcfe12d25615faac57e311e4eccd))
* **qoder:** address review findings ([620b59c](https://github.com/noobzhax/9router/commit/620b59ca0b3b2966d8e7b0eb666a1d857bce44f8))
* **qoder:** allow qmodel_latest model key ([61d5466](https://github.com/noobzhax/9router/commit/61d546627efaf926f3e858e28ba3cfc06a9a7f13)), closes [#1638](https://github.com/noobzhax/9router/issues/1638)
* **qoder:** drop `remaining` from normalized quota — was rendering as % ([3d523b1](https://github.com/noobzhax/9router/commit/3d523b138756394bfc32866385b42704792e0d9e))
* **qoder:** increase timeouts for reasoning models and improve stream handling ([137a25e](https://github.com/noobzhax/9router/commit/137a25e9ac5a476cd85af4d2f9b54ab71e9bab2a))
* **reasoning:** preserve effort through Codex translations ([3a866fe](https://github.com/noobzhax/9router/commit/3a866fe18d535507f00cfd394b4f6d6e6fe2ef28))
* sanitize Read tool args to prevent retry loops from non-Anthropic models ([#1144](https://github.com/noobzhax/9router/issues/1144)) ([0736992](https://github.com/noobzhax/9router/commit/07369927c5884c7ca06315b7bddbf4ca4a251281))
* **security:** don't trust loopback socket as local when request arrives via reverse proxy ([da66783](https://github.com/noobzhax/9router/commit/da667836cc7584bea0edd893de1d590c9ea279dc))
* **security:** patch 5 vulnerabilities from security audit ([d8c2298](https://github.com/noobzhax/9router/commit/d8c2298d0738d4dc935f89f4b7a38b875d6b65bd))
* **security:** re-auth on DB export/import + SSRF guard on web fetch ([0c7c9de](https://github.com/noobzhax/9router/commit/0c7c9de00ae3ab81d6580e3cc368483c4c03f6fd))
* show custom vision models in LLM selector and model list ([5e5e78d](https://github.com/noobzhax/9router/commit/5e5e78d3e88a2bc16eae83441eee351079fed997))
* **siliconflow:** update baseUrl .cn -&gt; .com + curate verified model list ([e6bac77](https://github.com/noobzhax/9router/commit/e6bac77696fcddc8fc93c6ed1f026ac330402543))
* **ssrf:** block IPv6-mapped IPv4 addresses (GHSA-hj98-rc6w-m8cw) ([8ac631d](https://github.com/noobzhax/9router/commit/8ac631d6158c0f04976a0d0f7ca9ec2b981efeb5))
* **stream:** prevent non-JSON SSE lines and duplicate [DONE] from breaking clients ([c22f11d](https://github.com/noobzhax/9router/commit/c22f11de38b59906c8060290ee512ef0231ac301))
* strip empty Read pages argument in OpenAI-to-Claude translator ([#1354](https://github.com/noobzhax/9router/issues/1354)) ([9c754cf](https://github.com/noobzhax/9router/commit/9c754cf9c0dcd64befaf953d648819e999475315)), closes [#1278](https://github.com/noobzhax/9router/issues/1278)
* support Kiro IDC (organization) token import ([4d9da5d](https://github.com/noobzhax/9router/commit/4d9da5db26a0741009aa2954c1fc84df0b8bf80b))
* **tests:** resolve RTK Kiro and OpenAI-to-Claude test failures after upstream sync ([7b18473](https://github.com/noobzhax/9router/commit/7b184732444acac4fb2ff0a23463de80508adfa4))
* **test:** use POST /v1/messages to validate anthropic-compatible connections ([584cf66](https://github.com/noobzhax/9router/commit/584cf66a70a99dd9b400cbfaf72b98066c4e633d))
* **token-saver:** full width card layout ([2deacf6](https://github.com/noobzhax/9router/commit/2deacf69b14db680dbd6e11bf05f85a5271d9824))
* **translator:** ESM-safe registry + tool-id pairing + responses max_tokens; add real-creds tests ([aba4c45](https://github.com/noobzhax/9router/commit/aba4c45da607e887a0479539ca0f6dd7bc3b666d))
* **translator:** normalize tools to Anthropic-native shape for non-Anthropic providers ([45240c1](https://github.com/noobzhax/9router/commit/45240c19e577001e74365a2a48c00822d9849048)), closes [#1939](https://github.com/noobzhax/9router/issues/1939)
* **translator:** resolve custom provider prefix in debug endpoint ([90b336d](https://github.com/noobzhax/9router/commit/90b336d9dd805b44d5b58c01dd503a9306995e75)), closes [#1083](https://github.com/noobzhax/9router/issues/1083)
* **tts:** resolve Gemini TTS models from catalog ([ce84489](https://github.com/noobzhax/9router/commit/ce844899edc3570bd447bfe3d965b60fc36a66c4))
* **tunnel:** detect system-installed Tailscale via dual-socket probe ([24a4f08](https://github.com/noobzhax/9router/commit/24a4f0863f274e60eab6f81292329aebd19876fa))
* **tunnel:** make tailscale probes non-blocking to prevent UI freeze ([289214a](https://github.com/noobzhax/9router/commit/289214a2eaba740923a01fe0086b53a503ca300b))
* **tunnel:** skip virtual interfaces to prevent false netchange watchdog ([293cf40](https://github.com/noobzhax/9router/commit/293cf40455b6feea3c0dd3887b43726ffe8460a1))
* **ui:** resolve alias conflict for jina-reader in curl example ([#1241](https://github.com/noobzhax/9router/issues/1241)) ([dab87e3](https://github.com/noobzhax/9router/commit/dab87e342edbbbef045d2cc2ac0d549c9e019faa))
* **ui:** show API key row actions on mobile ([#1112](https://github.com/noobzhax/9router/issues/1112)) ([c376bf1](https://github.com/noobzhax/9router/commit/c376bf10132aa6b1d42fd5b67efa0c155bac09bb))
* update provider name retrieval for compatibility provider ([#1135](https://github.com/noobzhax/9router/issues/1135)) ([29c26fd](https://github.com/noobzhax/9router/commit/29c26fdc7da4be01fa283124f0b51e7cfbc18eef))
* **usage-stats:** avoid partial stats on initial SSE race ([564f2ec](https://github.com/noobzhax/9router/commit/564f2ece0d071808cd9b53eeb0459bfdaeb8fe50))
* **usage:** add missing await on getAdapter() in getRecentLogs ([4078f36](https://github.com/noobzhax/9router/commit/4078f36ced6d1fb9bb0658fcf3ee845c33c38570))
* **usage:** show edited connection names consistently across views ([df37bb3](https://github.com/noobzhax/9router/commit/df37bb3468452a1f0ddb57dde93638d50015a6c3)), closes [#1699](https://github.com/noobzhax/9router/issues/1699)
* **usage:** stop double-counting streaming usage at source ([ec096d2](https://github.com/noobzhax/9router/commit/ec096d2addeee9b0f61b1f62fa6f44970fb7e92c))
* use export default in proxy.js for Next.js 16 middleware detection ([bbc204b](https://github.com/noobzhax/9router/commit/bbc204b6019ddafcc9cc8a389e5511a4fdd1bbb4))


### Documentation

* add Indonesian video tutorial for Hugging Face deploy ([3de6ce1](https://github.com/noobzhax/9router/commit/3de6ce157c46930601f658416277cfe72d63eb50))
* add Russian README, remove unused testFromFile script ([4758a00](https://github.com/noobzhax/9router/commit/4758a00b44c00878810322e6aed32133d4701655))
* **readme:** add Indonesian 9Router tutorial video ([8e31b5f](https://github.com/noobzhax/9router/commit/8e31b5ff2f9d3ef9682a1f4c2cd1a38f04bc9618))
* update CHANGELOG for v0.5.7 ([f6f7b14](https://github.com/noobzhax/9router/commit/f6f7b14faad21e40114d9e9d03daec6b2a482b69))


### Code Refactoring

* **app:** DRY pass — split large files, extract shared utils ([fbf973f](https://github.com/noobzhax/9router/commit/fbf973f2e719ceef80197bbfc7e810191291b69a))
* **app:** RISKY pass R1-R3 — config-driven modal, cursor frame dedup, chunk helper ([24a2d19](https://github.com/noobzhax/9router/commit/24a2d19bd74b961ae0e0840877b1f141b2259a21))
* **dashboard:** reorganize menu actions across sidebar/header/profile ([f161b29](https://github.com/noobzhax/9router/commit/f161b295a5ad1bb97579caf7fd515d365d442279))
* **open-sse:** [#11](https://github.com/noobzhax/9router/issues/11) — dedupe client-facing SSE_HEADERS_CORS ([9105dd0](https://github.com/noobzhax/9router/commit/9105dd0e258ed4640c766513722d72f47a2fa4f5))
* **open-sse:** [#8](https://github.com/noobzhax/9router/issues/8) unify token refresh dispatch — 2 switch → 1 registry ([0a8d92a](https://github.com/noobzhax/9router/commit/0a8d92a6ba9b2f54f8e9bb6624d81fef9ca99108))
* **open-sse:** add provider/model schema skeleton (C-prep) ([34ea763](https://github.com/noobzhax/9router/commit/34ea763d806a1a284e93d3400be0626d30c78a2f))
* **open-sse:** add reasoningDelta helper, dedup thinking deltas (B4) ([6597b81](https://github.com/noobzhax/9router/commit/6597b81e5e1ef235caeba29b9e4812d2bdaed682))
* **open-sse:** B1 consolidate media endpoint URLs into registry ([e53ce79](https://github.com/noobzhax/9router/commit/e53ce79abb53eb56c6d4f2d737b440b98eac6f58))
* **open-sse:** D1a/D1b — URL quirks → schema urlSuffix + clean debug logs ([ad2a3e5](https://github.com/noobzhax/9router/commit/ad2a3e5de3edfb2e93b86708d4c8437c181175cf))
* **open-sse:** D1c — forceStream hardcode → PROVIDERS schema ([#5](https://github.com/noobzhax/9router/issues/5)) ([4da1d6d](https://github.com/noobzhax/9router/commit/4da1d6dad49c0f550036e67bb0395bf33ea66bb1))
* **open-sse:** dedup fallback tool_call id helper (B3) ([997860a](https://github.com/noobzhax/9router/commit/997860aa1f34ddd025bbb60a3ab9742b61d5bf50))
* **open-sse:** dedup format default in PROVIDERS via resolver (C1) ([f4c3904](https://github.com/noobzhax/9router/commit/f4c39042a0e3f60518da13bbea42b553904a7edd))
* **open-sse:** dedupe Google OAuth client credentials ([#4](https://github.com/noobzhax/9router/issues/4)) ([72ce515](https://github.com/noobzhax/9router/commit/72ce515709d6e03448752f873691a85214526c53))
* **open-sse:** DRY SSE primitives into utils/sseConstants.js ([6ee4555](https://github.com/noobzhax/9router/commit/6ee4555821de604450fd3ae25279f26c2d63f36a))
* **open-sse:** extract buildUsage helper, dedup token-details (B2) ([39278e9](https://github.com/noobzhax/9router/commit/39278e96132a1f830334a32761d22e8e6dbd7e95))
* **open-sse:** extract chunkBuilder, dedup chat.completion.chunk (B1) ([17202f7](https://github.com/noobzhax/9router/commit/17202f7111bd4719aa17d7dd12a0e0757f596cc4))
* **open-sse:** extract safeParseJSON util, dedup tryParseJSON (B5) ([b87cf0c](https://github.com/noobzhax/9router/commit/b87cf0c96aff49312d6a9e2fca4925929f8c53fc))
* **open-sse:** merge beta-url case + single-source refresh URLs (D) ([64182c0](https://github.com/noobzhax/9router/commit/64182c048438ea651bf7bff12a183e03f9f87445))
* **open-sse:** P2 alias single-source — derive OAuth alias→id from OAUTH_ALIASES ([7134dd7](https://github.com/noobzhax/9router/commit/7134dd71dbbb5b53c7447dacd63628939501f7cc))
* **open-sse:** P3 provider registry — split into providers/registry/{id}.js ([5a04284](https://github.com/noobzhax/9router/commit/5a042840fdb46e7116479dffa6a110a6a4b5b261))
* **open-sse:** P3§7 model defaults schema — centralize type/quotaFamily/strip/targetFormat ([d2b0960](https://github.com/noobzhax/9router/commit/d2b0960bf7f51cb4a1a34d84767701447e73896b))
* **open-sse:** registry consolidation + DRY media/oauth/adhoc cleanup ([bb9e9aa](https://github.com/noobzhax/9router/commit/bb9e9aa91f16ba13c1b9c4b47f82baadfe222b0c))
* **open-sse:** remove dead buildProviderUrl/Headers path (A1) ([3a26d5f](https://github.com/noobzhax/9router/commit/3a26d5fb406e7ef26fb63c7ad47187d9c2404d8a))
* **open-sse:** remove reverse coupling open-sse -&gt; src (E2) ([87fe069](https://github.com/noobzhax/9router/commit/87fe069e9ebc2bfe467e8c71901fc0c1291343f2))
* **open-sse:** single-source OAuth token URLs via PROVIDERS (C2) ([22f6c42](https://github.com/noobzhax/9router/commit/22f6c42738b0242e295ea8d80a68aee837209420))
* **open-sse:** source mimo-free/opencode base URL from PROVIDERS ([bb597cb](https://github.com/noobzhax/9router/commit/bb597cbcedb3522fb262de001e63a95991634663))
* **open-sse:** translator DRY + schema enums, bug fixes, dead code cleanup ([d3f61aa](https://github.com/noobzhax/9router/commit/d3f61aac2f9ee254735ec5b947343bc73f7c1daa))
* **open-sse:** usage.js dispatcher switch → USAGE_HANDLERS registry ([d4b9538](https://github.com/noobzhax/9router/commit/d4b95380b18b40de2bce706617b1cdc8dac20a3d))
* **qoder:** mirror Kiro's OAuth service layout ([69bc71c](https://github.com/noobzhax/9router/commit/69bc71cf11e9f208cffe1b77c572be04ac31732c))
* **registry:** B2 migrate to LiteLLM-style schema — unified models[] with kind field ([dd1e0f9](https://github.com/noobzhax/9router/commit/dd1e0f9bccc16b9be9f1ab9b9b946b4960b55249))
* **translator:** P4 concern [#2](https://github.com/noobzhax/9router/issues/2) encodeDataUri — dedupe base64 data-uri building ([252bf56](https://github.com/noobzhax/9router/commit/252bf56a9fc60b703d97267d5b8621e1be1466e8))
* **translator:** P4 concern [#5](https://github.com/noobzhax/9router/issues/5) buildUsage — apply to kiro/ollama/commandcode ([633b66d](https://github.com/noobzhax/9router/commit/633b66dcb63f25c9b50ffd27226eb92a00c5497f))
* **translator:** P4 concern [#6](https://github.com/noobzhax/9router/issues/6) finishReasonMap — switch-by-format, default common ([4cc6672](https://github.com/noobzhax/9router/commit/4cc667253af6f30908f475ecefa6cf0326f47dab))

## v0.5.12 (2026-06-26)

## Features
- Add token-saver dashboard page — decolua
- Add bulk delete for provider connections — teddytkz
- Resolve GitHub Copilot model catalog from upstream — caiqinzhou
- Add Venice AI provider — Brokenc0de
- Add Kiro external_idp import for Microsoft SSO (CLIProxyAPI) — Stevanus Pangau
- Overhaul Blackbox provider catalog + WebUI test support — suryacagur

## Fixes
- Provider thinking compatibility (DeepSeek/Gemini) — Mink Nguyen
- Stop double-counting streaming usage at source — decolua
- Usage logging dedupe to reduce stats churn — Mink Nguyen
- Prevent non-JSON SSE lines / duplicate [DONE] from breaking clients (PR #2046) — qianze
- Resolve Gemini TTS models from catalog — nguyenha935
- Support Kiro IDC (organization) token import — quanturbo
- Preserve forced streaming for JSON clients (#2031) — Joseph Yaksich
- Preserve Responses text format (Codex) — tenglong
- Support Gemini native TTS generateContent endpoint — nguyenha935
- Add missing zh-CN endpoint key label (i18n) — weimaozhen
- CodeBuddy: only send reasoning params when client requests reasoning (#2071) — Rex
- Show custom provider models in combo picker — Sapto
- Docker: add docker-compose.yml with headroom enabled by default — nitsuahlabs
- Clarify token diagnostics vs provider billing (headroom, #1998) — Sutarto Jordan Chrisfivo
- Translate openai-responses input through OpenAI for compression (#1998) — Ankit
- Kiro: report 1M context window for claude-opus-4.8 — EdisonPVE
- Avoid stale redirects after auth changes (#2100) — Emirhan
- Mark Claude Opus 4.7 (dashed id) as 1M context — Brokenc0de
- Preserve reasoning effort through Codex translations — ntdung6868
- Token-saver: full width card layout — decolua
- Antigravity: retry transient upstream failures — Sutarto Jordan Chrisfivo
- Param-support: handle strip rules without match/drop (#1960) — Joseph Yaksich
- Translator: resolve custom provider prefix in debug endpoint (#1083) — hamsa0x7

## v0.5.8 (2026-06-21)

## Features
- **Antigravity**: native image generation support (image models tagged kind:image, hiển thị trong media-providers UI)
- **CodeBuddy CN**: API key auth + credit quota tracker
- **CodeBuddy CN**: short model prefix alias "cbcn"

## Fixes
- **MiniMax-M3**: enable vision capability
- **Headroom**: support Docker sidecar proxy
- **Antigravity**: image executor fixes
- **mimo-free**: Chrome User-Agent rotation to bypass anti-abuse gate
- **cloudflare-ai**: flatten content-part arrays to string to avoid oneOf 400 (#1926)
- **Translator**: normalize tools to Anthropic-native shape for non-Anthropic providers
- **CLI**: handle Next.js 16 nested standalone output path (#1940)
- **Codex**: preserve custom tools during request normalization
- **next.config**: add new route for responses endpoint to API

## v0.5.6 (2026-06-20)

## Features
- **Ponytail**: minimalist code generation feature
- **Headroom**: proxy lifecycle management + dashboard UI (one-click start/stop, install detection, status probing, token saver, claude↔openai shape conversion)
- **CodeBuddy CN**: new OAuth provider (copilot.tencent.com) — 15-model catalog, /v2 inference, forced streaming, OpenAI-style reasoning
- **OpenCode-Go**: align models with official endpoints; route Qwen 3.7 MiniMax via /v1/messages, GLM/Kimi/DeepSeek/MiMo via /chat/completions

## Fixes
- **Anthropic-compatible validation**: use POST /v1/messages (GET /models not spec, false "invalid" for valid keys)
- **CLI tools**: tolerate JSONC configs in all 8 settings routes (opencode, openclaw, kilo, droid, cowork, copilot, claude, cline)
- **Gemini/Antigravity**: preserve 'pattern' in tool schema translation (glob/grep)
- **Combo/Fusion**: flatten Anthropic-style tool messages in panel calls (prevent 503)
- **Models**: store provider custom models by provider scope
- **Perplexity**: use /v1/models endpoint for key validation

## v0.5.4 (2026-06-18)

## Fixes
- **Kiro**: honor thinking effort budgets
- **AG/Kiro/Xiaomi**: provider fixes
- **Combo/Fusion**: flatten tool history in panel calls to prevent 503
- **LLM selector**: show custom vision models in selector and model list
- **Image**: prevent compatible nodes from shadowing provider aliases

## v0.5.2 (2026-06-17)

## Features
- **Combo Fusion strategy** — fans the prompt out to all member models in parallel, then a configurable judge model synthesizes one final answer (quorum-grace, anonymized sources, graceful degradation)
- **Per-combo strategy selector** — pick `fallback` / `round-robin` / `fusion` / `capacity` per combo (replaces the old round-robin toggle), with a judge picker for fusion
- **Capacity auto-switch** — reorders models per request so images/PDFs route to capable models first
- **Kiro headless API-key auth** (`ksk_`) + direct `claude↔kiro` route that avoids the lossy OpenAI two-hop pivot
- **Claude auto-ping** — warms the 5h quota window right after reset so a fresh window starts immediately (per-connection toggle)

## Fixes
- **Claude 429**: stop hammering the OAuth usage endpoint — cache resetAt, throttle quota refresh to 3 min, cool down after a 429 (chat unaffected)
- **Usage logs always empty**: missing `await` on `getAdapter()` in `getRecentLogs` made `/api/usage/logs` & `/api/usage/request-logs` return nothing
- **Executors**: strip params unsupported by the provider/model (drops deprecated `temperature` for claude-opus-4 → Anthropic 400)
- **Translator**: derive deterministic tool_call ids for gemini/antigravity → OpenAI so function call/response pair correctly (fixes tool-pairing 400s)
- **Antigravity**: strip `optional` from tool schemas before sending to Gemini
- **Claude-to-OpenAI**: handle OpenAI-format responses in the non-streaming path (e.g. xiaomi-tokenplan)
- **Usage views**: show edited connection names consistently across Providers & Quota Tracker
- **Security**: hardened reverse-proxy local-access trust
- **Security**: SSRF hardening on web fetch

## Internal
- Large **open-sse / translator refactor** (~40 commits): unified provider/model registry (LiteLLM-style `models[]` + `kind` field, 100 co-located registry files), single-sourced media/OAuth/refresh/token URLs, registry-based dispatch for usage & token-refresh, DRY translator concerns (buildUsage, encodeDataUri, finishReasonMap, chunkBuilder, reasoningDelta…), ESM-safe registry init, large-file splits, dead-code removal, and golden/no-regression test gates

## v0.4.80 (2026-06-13)

## Features
- Vercel AI Gateway: support embeddings, images and credit usage (#1183)
- Add MiMo Free no-auth provider (#1789)
- Vertex: support ADC `authorized_user` credential
- Cowork: re-enable Claude Cowork with preset-only stdio MCP
- Codex: bulk add accounts via JSON (#1719)
- Kiro: enable multi-endpoint failover for GenerateAssistantResponse (#1722)

## Fixes
- Security: re-auth on DB export/import + SSRF guard on web fetch
- Auth: real client IP rate-limiting + remote default-password guard
- Cerebras/Mistral: strip unsupported `client_metadata` from downstream requests (#1742)
- SiliconFlow: update baseUrl `.cn` -> `.com` + curate verified model list (#1760)
- Gemini-to-OpenAI: route unsigned thought parts to `reasoning_content` (#1752)
- Claude-to-OpenAI: strip Anthropic billing header from system prompt (#1765)
- Anthropic-compatible: send Bearer auth for third-party gateways (#1795)
- Usage-stats: avoid partial stats on initial SSE race (#1767)
- Proxy: use `export default` in proxy.js for Next.js 16 middleware detection
- Claude passthrough: add body normalization
- GitHub Copilot: refresh missing/expired token on models discovery (#1727) + add mappable gpt-5-mini/gpt-5.4-nano slots for Copilot MITM (#1653)
- Kiro: auto-resolve profileArn to prevent 403 on IDC login, enhance profile ARN resolution, update endpoint to `runtime.us-east-1.kiro.dev` (#1713)
- Tunnel: detect system-installed Tailscale via dual-socket probe (#1723) + non-blocking probes to prevent UI freeze
- CommandCode: force `stream=true` in transformRequest (#1706)
- Qoder: increase timeouts for reasoning models and improve stream handling
- Dashboard: show provider node name instead of connection name in topology (#1770) + show explicit `kind="llm"` combos on combos page (#1684)

## Docs
- README: add Indonesian 9Router tutorial video (#1709)

## v0.4.71 (2026-06-06)

## Features
- Caveman: add wenyan classical Chinese levels and sync upstream prompts; locale-based visibility on endpoint page
- i18n: endpoint exposure notice across multiple languages + Russian README
- Antigravity: add gemini-3.5-flash-extra-low (Low) model
- xiaomi-tokenplan: add Claude-native MiMo V2.5 Pro alias via dedicated executor
- Qoder: fetch latest model + dashboard import-model button (#1642)
- MiniMax: add MiniMax-M3 + update Quota Tracker coding/CN (#1631)

## Fixes
- Codex: harden streaming timeouts (stall/connect raised to 60s, configurable per-provider), accept `response.done` event, and always emit a terminal `response.failed` + `[DONE]` for Responses passthrough when a stream closes, stalls, or aborts before a terminal event — prevents codex clients from hanging (#1648, #1680, #1688, #1618)
- Codex: durable OAuth refresh lifecycle (#1664)
- Tunnel: skip virtual interfaces to prevent false netchange watchdog
- Claude: fix forced tool_choice 400 on cc/ OAuth route (#1592)
- Proxy: raise Next client body limit to 128MB via `NINEROUTER_PROXY_CLIENT_MAX_BODY_SIZE` (#1529, #1572)
- MiniMax: echo `reasoning_content` on follow-up turns to avoid 400 (#1543)
- Kiro: handle 400 on tool-bearing history without client tools; add mappable "auto" model slot; fix binary EventStream crash + add models & TTS tool filtering
- Antigravity: passthrough tab-autocomplete + mark default agent slot mandatory
- Qoder: allow `qmodel_latest` model key (#1638)
- Providers: restore one-connection guard for compatible/embedding nodes
- Model-test: route image/STT probes to their real endpoints, harden STT ping; add opencode-go + xiaomi-tokenplan to connection test (#1576, #1628)

## Improvements
- Dashboard: reorganize menu actions across sidebar/header/profile
- Translator: add data-driven coverage, bug-exposing cases, and real provider smoke tests

## v0.4.66 (2026-05-29)

## Features
- Add Qoder provider: device-flow OAuth, COSY signing, WAF-bypass body encoding, live model catalog, dashboard quota tracker, 11 models (#1372)
- Add new models: Claude Opus 4.8 (Claude Code), GPT 5.4 Mini (Codex)

## Fixes
- DeepSeek thinking mode: echo `reasoning_content` back on follow-up/tool-call turns so OpenCode-free and custom providers no longer 400 with "reasoning_content must be passed back" (#1543)
- Reasoning injector: match deepseek/kimi model ids case-insensitively (covers custom providers using capitalized model names)
- OpenCode suggested-models: include free models without the `-free` suffix, e.g. `big-pickle` (#1535)

## Improvements
- Codex: trim sunset models, keep gpt-5.5 / gpt-5.4 / gpt-5.3-codex family, add gpt-5.4-mini
- volcengine-ark: refresh model list (add DeepSeek-V4-Flash/Pro, drop EOL entries)
- Lower stream stall timeout 35s → 30s for faster hang detection

## v0.4.63 (2026-05-26)

## Fixes
- GitHub Copilot: never route Gemini/Claude models to the `/responses` endpoint; prevents misleading "does not support Responses API" 400s (#1062)
- proxyFetch: restore missing `Readable` import causing runtime `ReferenceError` in DNS-bypass fetch path

## Improvements
- Lower stream stall timeout from 60s → 35s for faster hang detection

## v0.4.62 (2026-05-26)

## Fixes
- Codex: auto-retry when upstream drops mid-stream (no more hangs)
- Codex: fix random 400/404 errors, tool-calling failures, and unstable prompt cache
- MITM: support Antigravity 2.x 
- Sanitize Read tool args to prevent retry loops from non-Anthropic models (#1144)
- Implement json_schema fallback for OpenAI-compatible providers without native Structured Output (#1343)
- Strip empty Read pages argument in OpenAI-to-Claude translator (#1354)
- Forward Gemini output dimensions for embeddings (#1366)
- Resolve setState-in-effect errors in dashboard components (#1362)
- Gemini CLI: reuse stored OAuth project IDs for quota checks and show clearer setup guidance when the project is missing (#1271, #1428)

## Features
- Add Cloudflare Workers proxy deployer and pool integration (#1360)
- Add Deno Deploy relays support and improved proxy pools dashboard layout (#1437)

## Improvements
- Refactor Tunnel into dedicated Cloudflare and Tailscale manager modules
- Refactor tokenRefresh service with in-flight dedup to prevent refresh_token_reused errors

## v0.4.59 (2026-05-21)

## Fixes
- OAuth: fix login flow on Windows

## v0.4.58 (2026-05-21)

## Features
- xAI Grok provider (OAuth, API key, image)
- Provider limits: paginated accounts with page size controls

## Fixes
- Tailscale: fix connection status on Windows (#1300)
- Tunnel: fix false "checking" when tunnel URL is reachable
- Stream: fix pipe errors on client disconnect/abort

## v0.4.55 (2026-05-18)

## Features
- Xiaomi MiMo Token Plan: region selector (Singapore / China / Europe) — keys are cluster-specific
- Antigravity: risk confirmation dialog before first connection
- Gemini CLI: surface upstream retry delay on 429 errors

## Fixes
- MITM: cannot kill process on macOS under sudo (lsof not found in PATH)
- Stream: false-positive stall timeout on Claude reasoning / Kiro responses
- Tunnel: cannot re-enable after disable (stuck state)
- Tunnel: cloudflared error messages now include log tail for easier debugging
- Language switcher: applies selected locale immediately on close (#1234)
- Antigravity OAuth: metadata now matches the official client

## Improvements
- Gemini CLI: bump engine to 0.34.0
- Re-hide `qwen` (OAuth EOL) and `iflow` (not ready) providers

## v0.4.52 (2026-05-17)

## Features
- Add Vercel AI Gateway provider support (#1183)
- rtk: Kiro format tool result compression — handle conversationState.history & currentMessage, preserve error results, ~13.6% savings (#1194)

## Fixes
- openclaw: normalize agent.model object form `{primary, fallbacks}` before .startsWith → fix TypeError & 'not configured' status (#1216)
- Usage Details pagination: stay inside mobile viewport <640px (#1218)
- Fix test model error
- Fix MIMO provider in Codex
- Disable log file creation when using MITM AG

## v0.4.50 (2026-05-16)

## Fixes
- Fix duplicate tray icon on macOS when hiding to tray
- Fix tray not showing in background mode on macOS
- Fix hide to tray broken on Windows/Linux
- Fix Shutdown button in web UI not working

## v0.4.49 (2026-05-16)

## Features
- Add Kiro provider support: full request/response translation, live model listing, reasoning content support
- Add `buildOutput` RTK filter with autodetect for npm/yarn/cargo build logs
- Add MITM warning notification in tray and dashboard

## Improvements
- Add modalities (input/output) to model configuration for OpenCode
- Fix tray hide-to-tray: keep current process alive instead of spawning detached child (fixes macOS NSStatusItem ghost icon)
- Fix tray kill: graceful shutdown with SIGTERM/SIGKILL escalation
- Fix SIGHUP handling so macOS terminal close doesn't kill tray process
- Hide deprecated providers (qwen, iflow, antigravity)
- Update i18n across 32 languages

## Fixes
- Fix model check (test-models) blocked by dashboardGuard: pass machineId-based CLI token in internal self-calls

## v0.4.46 (2026-05-15)

## Breaking Changes
- Tunnel public URL changed — old tunnel links no longer work, please reconnect to get the new URL

## v0.4.44 (2026-05-15)

## Features
- Add Blackbox provider with `bb` alias (#1143)
- Add Xiaomi token plan provider
- Enhance model select modal UX + modal traffic lights (#1111)
- Default Usage dashboard period to Today (#1141)

## Fixes
- Fix Cowork model selection and Windows CLI packaging (#1129)
- Update provider name retrieval for compatibility provider (#1135)
- Update JWT_SECRET handling

## v0.4.41 (2026-05-14)

## Features
- Add jcode CLI tool integration with auto-configuration (#1047)
- Redesign CLI Tools dashboard: grid layout (1/2/3 cols) + dedicated detail page per tool
- Add drag-and-drop reordering for combo models (#1108)
- Add Today period option to Usage & Analytics (#1063)
- Add DeepSeek V4 Pro effort aliases (#950)

## Fixes
- fix(autostart): work on nvm + npm 9/10, actually register with launchctl (#1104, fixes #1082)
- Fix Ollama usage not tracked/shown in UI (#1102)
- fix(opencode): preserve DeepSeek reasoning content (#1099, fixes #1093)
- Fix TUI input lag (replace enquirer with native readline, persistent raw mode)
- fix(ui): show API key row actions on mobile (#1112)

## Improvements
- Sync DeepSeek TUI card style with other CLI tools (badges, layout, manual config modal)
- Add official logos for Amp CLI, jcode, Qwen Code (replace generic icons)
- Resize deepseek-tui icon 1024→128 with padding for visual consistency

## v0.4.39 (2026-05-14)

## Fixes
- fix(docker): restore `/app/server.js` (v0.4.38 regression)
